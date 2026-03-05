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
  test("renders the shared navigation and the home editorial hero", async () => {
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
    expect(await screen.findByRole("heading", { name: /biology.dna.future/i })).toBeVisible();
    expect(screen.getByText(/bringing machine intelligence to life/i)).toBeVisible();
    expect(screen.getByText(/we provide computational solutions for biological problems/i)).toBeVisible();
  });

  test("renders all route-level page heroes through the shared shell", async () => {
    const routes = [
      { path: "/galaxy", name: /NTU Galaxy 相關說明/ }
    ];

    for (const { path, name } of routes) {
      const { unmount } = renderApp([path]);
      expect(await screen.findByRole("heading", { name })).toBeVisible();
      expect(screen.getByRole("contentinfo")).toBeVisible();
      unmount();
    }
  });
});

describe("Interactive modules", () => {
  test("renders research track sections with detail panels", async () => {
    renderApp(["/research"]);

    expect(await screen.findByRole("heading", { name: /deep learning for immunogenomics/i })).toBeVisible();
    expect(screen.getByText(/HLA, AIRR, KIR in immunogenomics/i)).toBeVisible();
  });

  test("opens the mobile menu and exposes the galaxy utility route", async () => {
    const user = userEvent.setup();
    renderApp(["/"]);

    await screen.findByRole("heading", { name: /biology.dna.future/i });

    const menuButton = screen.getByRole("button", { name: /open menu/i });
    await user.click(menuButton);

    const dialog = screen.getByRole("dialog", { name: /site navigation/i });
    expect(within(dialog).getByRole("link", { name: /galaxy/i })).toHaveAttribute("href", "/galaxy");
  });

  test("marks off-site links with safe external-link attributes", async () => {
    renderApp(["/blog"]);

    const externalLink = (await screen.findAllByRole("link", {
      name: /read on medium/i
    }))[0];

    expect(externalLink).toHaveAttribute("target", "_blank");
    expect(externalLink).toHaveAttribute("rel", expect.stringContaining("noopener"));
    expect(externalLink).toHaveAttribute("rel", expect.stringContaining("noreferrer"));
  });
});

describe("Dense content pages", () => {
  test("applies canonical SEO metadata for a non-home route", async () => {
    renderApp(["/research"]);
    await screen.findByRole("heading", { name: /deep learning for immunogenomics/i });

    expect(document.title).toBe("Research | c4Lab");
    expect(document.head.querySelector('link[rel="canonical"]')?.getAttribute("href")).toBe(
      "https://c4lab.github.io/research"
    );
    expect(document.head.querySelector('meta[property="og:url"]')?.getAttribute("content")).toBe(
      "https://c4lab.github.io/research"
    );
  });

  test("groups publication records by year and preserves long-form citation content", async () => {
    renderApp(["/publication"]);

    expect(await screen.findByRole("heading", { name: "2024" })).toBeVisible();
    expect(screen.getByRole("heading", { name: "2023" })).toBeVisible();
    expect(
      screen.getByText(/Genetic complexity of killer-cell immunoglobulin-like receptor genes/i)
    ).toBeVisible();
    expect(screen.getAllByText(/Genome Research/i)[0]).toBeVisible();
  });

  test("renders the featured investigator and member directory sections", async () => {
    renderApp(["/member"]);

    expect(await screen.findByRole("heading", { name: /陳倩瑜 Chien-Yu Chen/ })).toBeVisible();
    expect(screen.getByRole("heading", { name: /current researchers/i })).toBeVisible();
    expect(screen.getByRole("heading", { name: /alumni/i })).toBeVisible();
    expect(screen.getAllByText(/生機所 碩士/)[0]).toBeVisible();
  });
});
