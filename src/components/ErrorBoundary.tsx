"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error?: Error; resetError: () => void }>;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  resetError = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        const FallbackComponent = this.props.fallback;
        return <FallbackComponent error={this.state.error} resetError={this.resetError} />;
      }

      return <DefaultErrorFallback error={this.state.error} resetError={this.resetError} />;
    }

    return this.props.children;
  }
}

interface ErrorFallbackProps {
  error?: Error;
  resetError: () => void;
}

const DefaultErrorFallback: React.FC<ErrorFallbackProps> = ({ error, resetError }) => {
  return (
    <Card className="border-red-200 bg-red-50">
      <CardContent className="p-8 text-center">
        <AlertTriangle className="h-12 w-12 text-red-500 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-red-800 mb-2">Something went wrong</h3>
        <p className="text-red-700 mb-6">
          {error?.message || 'An unexpected error occurred. Please try again.'}
        </p>
        <div className="flex gap-3 justify-center">
          <Button
            onClick={resetError}
            className="bg-red-600 hover:bg-red-700 text-white"
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            Try Again
          </Button>
          <Button
            variant="outline"
            onClick={() => window.location.reload()}
            className="border-red-300 text-red-700 hover:bg-red-50"
          >
            Refresh Page
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

// Specific error boundary for dashboard
export const DashboardErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children }) => {
  const DashboardErrorFallback: React.FC<ErrorFallbackProps> = ({ error, resetError }) => (
    <div className="space-y-6">
      <Card className="border-red-200 bg-red-50">
        <CardContent className="p-8 text-center">
          <AlertTriangle className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-red-800 mb-2">Dashboard Error</h3>
          <p className="text-red-700 mb-6">
            We couldn't load your speeches. This might be a temporary issue.
          </p>
          <div className="flex gap-3 justify-center">
            <Button
              onClick={resetError}
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Try Again
            </Button>
            <Button
              variant="outline"
              onClick={() => window.location.href = '/generator'}
              className="border-red-300 text-red-700 hover:bg-red-50"
            >
              Create New Speech
            </Button>
          </div>
          {error && (
            <details className="mt-4 text-left">
              <summary className="text-sm text-red-600 cursor-pointer">Technical Details</summary>
              <pre className="text-xs bg-red-100 p-2 rounded mt-2 overflow-auto">
                {error.message}
              </pre>
            </details>
          )}
        </CardContent>
      </Card>
    </div>
  );

  return <ErrorBoundary fallback={DashboardErrorFallback}>{children}</ErrorBoundary>;
};

export default ErrorBoundary;
