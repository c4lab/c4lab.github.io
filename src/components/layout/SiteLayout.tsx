import { Outlet } from "react-router-dom";
import { SiteStructuredData } from "../seo/SiteStructuredData";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function SiteLayout() {
  return (
    <div className="min-h-screen">
      <SiteStructuredData />
      <a href="#main-content" className="sr-only focus:not-sr-only">
        Skip to content
      </a>
      <Header />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
