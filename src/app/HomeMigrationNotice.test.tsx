import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

vi.mock("../lib/migrationNotice", async () => {
  const actual = await vi.importActual<typeof import("../lib/migrationNotice")>(
    "../lib/migrationNotice"
  );

  return {
    ...actual,
    getRuntimeHostname: () => "c4lab.bime.ntu.edu.tw"
  };
});

import { App } from "./App";

const renderApp = (initialEntries: string[]) =>
  render(
    <MemoryRouter initialEntries={initialEntries}>
      <App />
    </MemoryRouter>
  );

describe("Home migration notice routing", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  test("shows migration notice on the home route for non-primary hosts", async () => {
    renderApp(["/"]);
    expect(await screen.findByRole("region", { name: /site migration notice/i })).toBeVisible();
  });

  test("does not show migration notice on non-home routes", async () => {
    renderApp(["/research"]);
    await screen.findByRole("heading", { name: /deep learning for immunogenomics/i });
    expect(screen.queryByRole("region", { name: /site migration notice/i })).not.toBeInTheDocument();
  });
});
