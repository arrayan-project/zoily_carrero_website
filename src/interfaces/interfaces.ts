// src/interfaces/interfaces.ts

export interface ServicesProps {}

export interface ServiceIncludeItemProps {
  title: string;
  description: string;
}

export interface FallbackProps {
  error: Error;
  resetErrorBoundary: (...args: any[]) => void;
}

export interface ErrorComponentProps extends FallbackProps {
  message?: string;
}
