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
      { path: "/research", name: /research directions/i },
      { path: "/publication", name: /publication archive/i },
      { path: "/member", name: /lab members/i },
      { path: "/blog", name: /selected reading/i },
      { path: "/galaxy", name: /galaxy support/i }
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
  test("toggles research detail panels with accessible buttons", async () => {
    const user = userEvent.setup();
    renderApp(["/research"]);

    const button = screen.getByRole("button", {
      name: /open research content for deep learning for immunogenomics/i
    });

    expect(screen.queryByText(/foundation models for regulatory genomics/i)).not.toBeInTheDocument();
    await user.click(button);
    expect(screen.getByText(/foundation models for regulatory genomics/i)).toBeVisible();
    expect(button).toHaveAttribute("aria-expanded", "true");
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

    const externalLink = screen.getByRole("link", {
      name: /read on medium: ai-driven multi-omics notes/i
    });

    expect(externalLink).toHaveAttribute("target", "_blank");
    expect(externalLink).toHaveAttribute("rel", expect.stringContaining("noopener"));
    expect(externalLink).toHaveAttribute("rel", expect.stringContaining("noreferrer"));
  });
});

describe("Dense content pages", () => {
  test("groups publication records by year and preserves long-form citation content", () => {
    renderApp(["/publication"]);

    expect(screen.getByRole("heading", { name: "2025" })).toBeVisible();
    expect(screen.getByRole("heading", { name: "2024" })).toBeVisible();
    expect(
      screen.getByText(/a cross-scale atlas for taiwanese precision medicine and functional variant reasoning/i)
    ).toBeVisible();
    expect(screen.getByText(/Genome Medicine/i)).toBeVisible();
  });

  test("renders the featured investigator and member directory sections", () => {
    renderApp(["/member"]);

    expect(screen.getByRole("heading", { name: /prof\. chien-yu chen/i })).toBeVisible();
    expect(screen.getByRole("heading", { name: /current researchers/i })).toBeVisible();
    expect(screen.getByRole("heading", { name: /alumni network/i })).toBeVisible();
    expect(screen.getByText(/phd candidate/i)).toBeVisible();
  });
});
