import { Component, type ErrorInfo, type ReactNode } from "react";

type AppErrorBoundaryProps = {
  children: ReactNode;
};

type AppErrorBoundaryState = {
  hasError: boolean;
};

export class AppErrorBoundary extends Component<AppErrorBoundaryProps, AppErrorBoundaryState> {
  state: AppErrorBoundaryState = {
    hasError: false
  };

  static getDerivedStateFromError(): AppErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Application rendering error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="page-grid py-24">
          <div className="rounded-[2rem] border border-red-200 bg-red-50 p-8">
            <h1 className="text-3xl">Something went wrong</h1>
            <p className="mt-3 text-slate-700">Please refresh the page or return to the homepage.</p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
