import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MigrationNotice } from "./MigrationNotice";
import {
  MIGRATION_NOTICE_DISMISSED_KEY,
  MIGRATION_NOTICE_TTL_MS,
  MIGRATION_TARGET_URL
} from "../../lib/migrationNotice";

function createMockStorage(seed: Record<string, string> = {}) {
  const values = new Map<string, string>(Object.entries(seed));

  return {
    getItem: vi.fn((key: string) => values.get(key) ?? null),
    setItem: vi.fn((key: string, value: string) => {
      values.set(key, value);
    })
  };
}

describe("MigrationNotice", () => {
  const fixedNow = 1_750_000_000_000;
  const nowProvider = () => fixedNow;

  test("renders for non-primary hosts and points to the new site", () => {
    const storage = createMockStorage();
    render(
      <MigrationNotice hostname="c4lab.bime.ntu.edu.tw" storage={storage} nowProvider={nowProvider} />
    );

    expect(screen.getByRole("region", { name: /site migration notice/i })).toBeVisible();
    expect(screen.getByRole("link", { name: /c4lab.github.io/i })).toHaveAttribute(
      "href",
      MIGRATION_TARGET_URL
    );
  });

  test("does not render for the primary host", () => {
    const storage = createMockStorage();
    render(<MigrationNotice hostname="c4lab.github.io" storage={storage} nowProvider={nowProvider} />);

    expect(screen.queryByRole("region", { name: /site migration notice/i })).not.toBeInTheDocument();
  });

  test("renders for localhost", () => {
    const storage = createMockStorage();
    render(<MigrationNotice hostname="localhost" storage={storage} nowProvider={nowProvider} />);

    expect(screen.getByRole("region", { name: /site migration notice/i })).toBeVisible();
  });

  test("dismisses and persists to storage", async () => {
    const user = userEvent.setup();
    const storage = createMockStorage();
    render(
      <MigrationNotice hostname="c4lab.bime.ntu.edu.tw" storage={storage} nowProvider={nowProvider} />
    );

    await user.click(screen.getByRole("button", { name: /dismiss migration notice/i }));

    expect(screen.queryByRole("region", { name: /site migration notice/i })).not.toBeInTheDocument();
    expect(storage.setItem).toHaveBeenCalledWith(MIGRATION_NOTICE_DISMISSED_KEY, String(fixedNow));
  });

  test("stays hidden when dismissed within 24 hours", () => {
    const storage = createMockStorage({
      [MIGRATION_NOTICE_DISMISSED_KEY]: String(fixedNow - MIGRATION_NOTICE_TTL_MS + 1)
    });
    render(
      <MigrationNotice hostname="c4lab.bime.ntu.edu.tw" storage={storage} nowProvider={nowProvider} />
    );

    expect(screen.queryByRole("region", { name: /site migration notice/i })).not.toBeInTheDocument();
  });

  test("shows again when dismissed more than 24 hours ago", () => {
    const storage = createMockStorage({
      [MIGRATION_NOTICE_DISMISSED_KEY]: String(fixedNow - MIGRATION_NOTICE_TTL_MS - 1)
    });
    render(
      <MigrationNotice hostname="c4lab.bime.ntu.edu.tw" storage={storage} nowProvider={nowProvider} />
    );

    expect(screen.getByRole("region", { name: /site migration notice/i })).toBeVisible();
  });
});
