/**
 * Página de la Tienda.
 * Muestra una cuadrícula de productos disponibles para la venta.
 *
 * @returns {JSX.Element} La página de la tienda renderizada.
 */
import React, { useState, useMemo, useEffect } from "react";
import { useTheme } from "../components/context/themeContext";
import { products } from "../data/shopData"; // Datos de los productos
import ShopHeader from "../components/shop/ShopHeader";
import ProductGrid from "../components/shop/ProductGrid";
import CategorySidebar from "../components/shop/CategorySidebar";
import ShopLayout from "../components/shop/ShopLayout";
import ShopToolbar from "../components/shop/ShopToolbar";
import { SortOrder } from "../components/shop/SortDropdown";
import Pagination from "../components/shop/Pagination";
import {
  ModalProvider,
  useModal,
} from "../components/modals/modalServ-Cour/ModalContextServices";
import ModalContainer from "../components/modals/modalServ-Cour/ModalRootServices";

const ITEMS_PER_PAGE = 6;

const Shop: React.FC = () => {
  const { colors } = useTheme();
  const [selectedFilter, setSelectedFilter] = useState<{ type: string; name: string }>({ type: "all", name: "Todas" });
  const [sortOrder, setSortOrder] = useState<SortOrder>("recommended");
  const [currentPage, setCurrentPage] = useState(1);

  // Construir un árbol de categorías con sus subcategorías
  const categoryTree = useMemo(() => {
    const tree: { name: string; subcategories: string[] }[] = [];
    const categoryMap = new Map<string, Set<string>>();

    products.forEach((product) => {
      if (!categoryMap.has(product.category)) {
        categoryMap.set(product.category, new Set());
      }
      if (product.subcategory) {
        categoryMap.get(product.category)!.add(product.subcategory);
      }
    });

    categoryMap.forEach((subcategories, category) => {
      tree.push({
        name: category,
        subcategories: Array.from(subcategories).sort(),
      });
    });

    return tree.sort((a, b) => a.name.localeCompare(b.name));
  }, []);

  // Filtrar y ordenar productos.
  // useMemo optimiza el rendimiento, recalculando solo si cambia la selección o el orden.
  const sortedAndFilteredProducts = useMemo(() => {
    let filtered = products;
    if (selectedFilter.type === "category") {
      filtered = products.filter((p) => p.category === selectedFilter.name);
    } else if (selectedFilter.type === "subcategory") {
      filtered = products.filter((p) => p.subcategory === selectedFilter.name);
    }

    const sorted = [...filtered]; // Crear una copia para no mutar el array original
    switch (sortOrder) {
      case "price-asc":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        sorted.sort((a, b) => b.name.localeCompare(a.name));
        break;
    }

    return sorted;
  }, [selectedFilter, sortOrder]);

  // Resetear a la página 1 cuando los filtros o el orden cambian
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedFilter, sortOrder]);

  // Calcular el total de páginas y los productos para la página actual
  const totalPages = Math.ceil(
    sortedAndFilteredProducts.length / ITEMS_PER_PAGE
  );
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return sortedAndFilteredProducts.slice(startIndex, endIndex);
  }, [currentPage, sortedAndFilteredProducts]);

    // Componente para renderizar el contenido del modal
  const ModalContentRender = () => {
    const { isModalOpen, closeModal, modalContent, clearModalContent } = useModal();
    return (
      <ModalContainer
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        modalContent={modalContent}
        clearModalContent={clearModalContent}
      />
    );
  };

  return (
    <ModalProvider>
      <div
        style={{ backgroundColor: colors.background }}
        className="min-h-screen"
      >
        {/* Ajustamos el padding vertical para que sea más pequeño en móviles */}
        <main className="max-w-7xl mx-auto py-24 md:py-40 px-4 sm:px-6 lg:px-8">
          <ShopHeader title="Tienda" />
          <ShopLayout
            sidebar={
              <CategorySidebar
                categoryTree={categoryTree}
                selectedFilter={selectedFilter}
                onSelectFilter={setSelectedFilter}
              />
            }
          >
            <ShopToolbar
              sortOrder={sortOrder}
              onSortOrderChange={setSortOrder}
              productCount={sortedAndFilteredProducts.length}
            />
            <ProductGrid products={paginatedProducts} />
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </ShopLayout>
        </main>

        <ModalContentRender />
      </div>
    </ModalProvider>
  );
};

export default Shop;
