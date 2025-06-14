import { useTheme } from "../context/themeContext";
import logowhite from "/img/logo/logowhite2.png"; // Asegúrate de ponerlo en public/img
import logoblack from "/img/logo/logoblack2.png"; // Asegúrate de ponerlo en public/img

const AppLoader = () => {
  const { theme, colors } = useTheme(); // Obtenemos el tema actual

  return (
    <div
      className="flex items-center justify-center w-screen h-screen bg-white dark:bg-black"
      style={{ backgroundColor: colors.background }}
    >
      <div className="relative w-32 h-32">
        {/* Círculo giratorio */}
        <div className="absolute inset-0 rounded-full border-[6px] border-gray-300 border-t-pink-500 animate-spin" />
        
        {/* Logo en el centro */}
        <img
          src={theme === 'dark' ? logowhite : logoblack}
          alt="Logo Zoily Carrero"
          className="w-24 h-24 object-contain absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    </div>
  );
};

export default AppLoader;
