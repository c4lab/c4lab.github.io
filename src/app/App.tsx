import { Suspense, lazy, type ReactNode } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AppErrorBoundary } from "../components/layout/AppErrorBoundary";
import { SiteLayout } from "../components/layout/SiteLayout";

const HomePage = lazy(() => import("../pages/HomePage").then((module) => ({ default: module.HomePage })));
const ResearchPage = lazy(() => import("../pages/ResearchPage").then((module) => ({ default: module.ResearchPage })));
const PublicationPage = lazy(() =>
  import("../pages/PublicationPage").then((module) => ({ default: module.PublicationPage }))
);
const MemberPage = lazy(() => import("../pages/MemberPage").then((module) => ({ default: module.MemberPage })));
const BlogPage = lazy(() => import("../pages/BlogPage").then((module) => ({ default: module.BlogPage })));
const GalaxyPage = lazy(() => import("../pages/GalaxyPage").then((module) => ({ default: module.GalaxyPage })));

function RouteFallback() {
  return (
    <div className="page-grid py-10" role="status" aria-live="polite">
      Loading...
    </div>
  );
}

function withSuspense(element: ReactNode) {
  return <Suspense fallback={<RouteFallback />}>{element}</Suspense>;
}

export function App() {
  return (
    <AppErrorBoundary>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={withSuspense(<HomePage />)} />
          <Route path="/research" element={withSuspense(<ResearchPage />)} />
          <Route path="/publication" element={withSuspense(<PublicationPage />)} />
          <Route path="/member" element={withSuspense(<MemberPage />)} />
          <Route path="/blog" element={withSuspense(<BlogPage />)} />
          <Route path="/galaxy" element={withSuspense(<GalaxyPage />)} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </AppErrorBoundary>
  );
}
