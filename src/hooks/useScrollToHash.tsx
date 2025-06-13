import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;

    const scrollToElement = () => {
      if (hash) {
        const element = document.querySelector(hash);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    const timeoutId = setTimeout(scrollToElement, 100);

    return () => clearTimeout(timeoutId);
  }, [location.hash]);
};

export default useScrollToHash;
