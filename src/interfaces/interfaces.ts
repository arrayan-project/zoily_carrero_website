/**
 * Interfaces compartidas para props de componentes y manejo de errores.
 * Define las props para servicios, ítems incluidos, fallback de errores y componentes de error.
 *
 * @module interfaces
 */
export interface ServicesProps {}

export interface ServiceIncludeItemProps {
  title: string;
  description: string;
}

export interface FallbackProps {
  error: Error;
  resetErrorBoundary: (...args: unknown[]) => void;
}

export interface ErrorComponentProps extends FallbackProps {
  message?: string;
}
