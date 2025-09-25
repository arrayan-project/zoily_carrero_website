/**
 * Componente de paginación para navegar entre páginas de resultados.
 *
 * @param {object} props - Propiedades del componente.
 * @param {number} props.currentPage - La página actual.
 * @param {number} props.totalPages - El número total de páginas.
 * @param {(page: number) => void} props.onPageChange - Función para manejar el cambio de página.
 * @returns {JSX.Element | null} El componente de paginación renderizado o null si no hay páginas.
 */
import React from 'react';
import { useTheme } from '../context/themeContext';
import { FONT_FAMILY_PRIMARY } from '../../constants/styles';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const { colors } = useTheme();

  if (totalPages <= 1) {
    return null; // No mostrar paginación si solo hay una página o menos
  }

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="flex justify-center items-center mt-12" aria-label="Paginación">
      <ul className="flex items-center -space-x-px h-10 text-base">
        <li>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`${FONT_FAMILY_PRIMARY} flex items-center justify-center px-4 h-10 ms-0 leading-tight rounded-s-lg border transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed`}
            style={{
              color: colors.text,
              backgroundColor: colors.background,
              borderColor: colors.accent,
            }}
          >
            <span className="sr-only">Anterior</span>
            <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
            </svg>
          </button>
        </li>
        {pageNumbers.map((page) => (
          <li key={page}>
            <button
              onClick={() => handlePageChange(page)}
              aria-current={currentPage === page ? 'page' : undefined}
              className={`${FONT_FAMILY_PRIMARY} flex items-center justify-center px-4 h-10 leading-tight border transition-colors duration-200`}
              style={{
                color: currentPage === page ? colors.background : colors.text,
                backgroundColor: currentPage === page ? colors.accent : colors.background,
                borderColor: colors.accent,
                fontWeight: currentPage === page ? 'bold' : 'normal',
              }}
            >
              {page}
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`${FONT_FAMILY_PRIMARY} flex items-center justify-center px-4 h-10 leading-tight rounded-e-lg border transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed`}
            style={{
              color: colors.text,
              backgroundColor: colors.background,
              borderColor: colors.accent,
            }}
          >
            <span className="sr-only">Siguiente</span>
            <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;