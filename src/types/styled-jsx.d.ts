/**
 * Declaración de tipos para styled-jsx en React.
 * Extiende las props de estilo para soportar los atributos jsx y global.
 *
 * @module styled-jsx
 */
import React from 'react';

declare module 'react' {
  interface StyleHTMLAttributes<T> extends React.HTMLAttributes<T> {
    jsx: boolean;
    global: boolean;
  }
}