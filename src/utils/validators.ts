/**
 * Utilidades de validación para formularios.
 * Incluye funciones para validar emails y otros campos.
 *
 * @module validators
 */
export const isValidEmail = (email: string): boolean => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };
  