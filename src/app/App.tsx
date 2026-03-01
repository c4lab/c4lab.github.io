import { Navigate, Route, Routes } from "react-router-dom";
import { AppErrorBoundary } from "../components/layout/AppErrorBoundary";
import { SiteLayout } from "../components/layout/SiteLayout";
import { BlogPage } from "../pages/BlogPage";
import { GalaxyPage } from "../pages/GalaxyPage";
import { HomePage } from "../pages/HomePage";
import { MemberPage } from "../pages/MemberPage";
import { PublicationPage } from "../pages/PublicationPage";
import { ResearchPage } from "../pages/ResearchPage";

export function App() {
  return (
    <AppErrorBoundary>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/publication" element={<PublicationPage />} />
          <Route path="/member" element={<MemberPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/galaxy" element={<GalaxyPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </AppErrorBoundary>
  );
}
