/**
 * Tipos globales y definiciones para el proyecto.
 * Define la interfaz Grecaptcha y su integración en el objeto Window global.
 *
 * @module global
 */
interface Grecaptcha {
  render: (...args: unknown[]) => unknown;
  reset: (...args: unknown[]) => void;
  execute: (...args: unknown[]) => Promise<string>;
  [key: string]: any; // Para métodos desconocidos
}

declare global {
  interface Window {
    grecaptcha: Grecaptcha;
  }
}
