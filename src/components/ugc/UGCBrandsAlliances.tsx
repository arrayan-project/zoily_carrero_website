/**
 * Sección de alianzas y colaboraciones de marcas UGC.
 * Muestra los logos de marcas colaboradoras con animaciones y fondo decorativo.
 *
 * @component
 * @returns {JSX.Element}
 */
import { getImageObject } from '../../utils/getImageObject';
import { useTheme } from "../../components/context/themeContext";
import "../../GlobalStyles.css"
import RevealWrapper from "../common/RevealWrapper"; 
import { HEADING_1_CLASS, TEXT_CENTER } from '../../constants/styles';

const UGCBrandsAlliances = () => {
  // Ahora solo guardas la key
  const brands = [
    { name: 'Cetaphil', logoKey: "ugcBrandLogo2" },
    { name: 'Beauty Plus', logoKey: "ugcBrandLogo1" },
    { name: 'Esika', logoKey: "ugcBrandLogo3" },
    { name: 'Neutrogena', logoKey: "ugcBrandLogo5" },
    { name: 'Venus', logoKey: "ugcBrandLogo4" },
    { name: 'Pantene', logoKey: "ugcBrandLogo6" },
  ];

  const { colors } = useTheme();

  return (
    <div className="py-16 px-4 relative overflow-hidden" >
      {/* Background UGC text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none ugc-background-text">
        <span className="font-bold opacity-25 flex flex-col md:flex-row" style={{ color: colors.text }} >
          <span className="text-[15rem] md:text-[20rem]">U</span>
          <span className="text-[15rem] md:text-[20rem]">G</span>
          <span className="text-[15rem] md:text-[20rem]">C</span>
        </span>
      </div>

      <div className="container mx-auto">
        <RevealWrapper animationClass="fade-in-text">
          <h2 className={`${HEADING_1_CLASS} ${TEXT_CENTER} mb-24 md:mb-48`} style={{ color: colors.accent }}>
            ALGUNAS COLABORACIONES
          </h2>
        </RevealWrapper>
        
        <RevealWrapper animationClass="slide-in-left">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-12 lg:gap-24 xl:gap-36 mx-auto">
            {brands.map((brand, index) => {
              const logoObj = getImageObject(brand.logoKey);
              return (
                <div key={index} className="flex items-center justify-center">
                  <div className="bg-white rounded-full flex items-center justify-center shadow-sm w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-52 xl:h-52">
                    <img
                      src={logoObj?.webp}
                      alt={brand.name}
                      loading="lazy"
                      className="max-h-full max-w-full rounded-full object-contain"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </RevealWrapper>
      </div>
    </div>
  );
};

export default UGCBrandsAlliances;