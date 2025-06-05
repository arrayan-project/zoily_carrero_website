/**
 * Contexto y provider para manejar la apertura y cierre de modales en la aplicación.
 * Permite abrir cualquier modal con contenido dinámico y acceder a su estado desde cualquier componente.
 *
 * @module ModalContext
 * @context
 * @returns {ModalContextProps} Provee estado y funciones para controlar el modal.
 */
import React, {
    useState,
    useCallback,
    createContext,
    useContext,
  } from "react";
  import { ModalContent } from "./ModalInterfacesServices";
  
  // Creamos el contexto para el modal
  interface ModalContextProps {
    isModalOpen: boolean;
    modalContent: ModalContent | null;
    openModal: (content: ModalContent) => void;
    closeModal: () => void;
    clearModalContent: () => void;
  }
  const ModalContext = createContext<ModalContextProps | undefined>(undefined);
  
  // Hook personalizado para usar el contexto del modal
  export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) {
      throw new Error("useModal debe ser usado dentro de un ModalProvider");
    }
    return context;
  };
  
  // Componente proveedor del contexto del modal
  export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
  }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState<ModalContent | null>(null);
  
    //Funcion para abrir el modal
    const openModal = useCallback(
      (content: ModalContent) => {
        try {
          setModalContent(content);
          setIsModalOpen(true);
        } catch (error) {
          console.error("Error al abrir el modal:", error);
        }
      },
      []
    );
  
    //Funcion para cerrar el modal
    const closeModal = useCallback(() => {
      try {
        setIsModalOpen(false);
      } catch (error) {
        console.error("Error al cerrar el modal:", error);
      }
    }, []);

        // Nueva función para limpiar el contenido del modal, usualmente llamada después de la animación de cierre
    const clearModalContent = useCallback(() => {
      setModalContent(null);
    }, []);

    const value = {
      isModalOpen,
      modalContent,
      openModal,
      closeModal,
       clearModalContent,
    };
    return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
  };
  