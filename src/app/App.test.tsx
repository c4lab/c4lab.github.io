import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { App } from "./App";

const renderApp = (initialEntries: string[]) =>
  render(
    <MemoryRouter initialEntries={initialEntries}>
      <App />
    </MemoryRouter>
  );

describe("App routing and shared layout", () => {
  test("renders the shared navigation and the home editorial hero", () => {
    renderApp(["/"]);

    const navigation = screen.getByRole("navigation", { name: /primary/i });
    expect(within(navigation).getByRole("link", { name: /home/i })).toHaveAttribute("href", "/");
    expect(within(navigation).getByRole("link", { name: /research/i })).toHaveAttribute(
      "href",
      "/research"
    );
    expect(within(navigation).getByRole("link", { name: /publication/i })).toHaveAttribute(
      "href",
      "/publication"
    );
    expect(within(navigation).getByRole("link", { name: /member/i })).toHaveAttribute("href", "/member");
    expect(within(navigation).getByRole("link", { name: /blog/i })).toHaveAttribute("href", "/blog");
    expect(screen.getByRole("heading", { name: /bringing machine intelligence to life/i })).toBeVisible();
    expect(screen.getByText(/we provide computational solutions for biological problems/i)).toBeVisible();
  });

  test("renders all route-level page heroes through the shared shell", () => {
    const routes = [
      { path: "/galaxy", name: /NTU Galaxy 相關說明/ }
    ];

    routes.forEach(({ path, name }) => {
      const { unmount } = renderApp([path]);
      expect(screen.getByRole("heading", { name })).toBeVisible();
      expect(screen.getByRole("contentinfo")).toBeVisible();
      unmount();
    });
  });
});

describe("Interactive modules", () => {
  test("renders research track sections with detail panels", () => {
    renderApp(["/research"]);

    expect(screen.getByRole("heading", { name: /deep learning for immunogenomics/i })).toBeVisible();
    expect(screen.getByText(/HLA, AIRR, KIR in immunogenomics/i)).toBeVisible();
  });

  test("opens the mobile menu and exposes the galaxy utility route", async () => {
    const user = userEvent.setup();
    renderApp(["/"]);

    const menuButton = screen.getByRole("button", { name: /open menu/i });
    await user.click(menuButton);

    const dialog = screen.getByRole("dialog", { name: /site navigation/i });
    expect(within(dialog).getByRole("link", { name: /galaxy/i })).toHaveAttribute("href", "/galaxy");
  });

  test("marks off-site links with safe external-link attributes", () => {
    renderApp(["/blog"]);

    const externalLink = screen.getAllByRole("link", {
      name: /read on medium/i
    })[0];

    expect(externalLink).toHaveAttribute("target", "_blank");
    expect(externalLink).toHaveAttribute("rel", expect.stringContaining("noopener"));
    expect(externalLink).toHaveAttribute("rel", expect.stringContaining("noreferrer"));
  });
});

describe("Dense content pages", () => {
  test("groups publication records by year and preserves long-form citation content", () => {
    renderApp(["/publication"]);

    expect(screen.getByRole("heading", { name: "2024" })).toBeVisible();
    expect(screen.getByRole("heading", { name: "2023" })).toBeVisible();
    expect(
      screen.getByText(/Genetic complexity of killer-cell immunoglobulin-like receptor genes/i)
    ).toBeVisible();
    expect(screen.getAllByText(/Genome Research/i)[0]).toBeVisible();
  });

  test("renders the featured investigator and member directory sections", () => {
    renderApp(["/member"]);

    expect(screen.getByRole("heading", { name: /陳倩瑜 Chien-Yu Chen/ })).toBeVisible();
    expect(screen.getByRole("heading", { name: /current researchers/i })).toBeVisible();
    expect(screen.getByRole("heading", { name: /alumni network/i })).toBeVisible();
    expect(screen.getAllByText(/生機所 碩士/)[0]).toBeVisible();
  });
});
