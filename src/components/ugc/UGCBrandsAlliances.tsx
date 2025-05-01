import images from '../../assets/images';
import { useTheme } from "../../components/context/useThemeHook";
import "../../GlobalStyles.css"
import RevealWrapper from "../common/RevealWrapper";


const UGCBrandsAlliances = () => {
  // Datos de las marcas colaboradoras
  const brands = [
    { name: 'Cetaphil', logo: images.ugcBrandLogo2 },
    { name: 'Beauty Plus', logo: images.ugcBrandLogo1 },
    { name: 'Esika', logo: images.ugcBrandLogo3 },
    { name: 'Neutrogena', logo: images.ugcBrandLogo5 },
    { name: 'Venus', logo: images.ugcBrandLogo4 },
    { name: 'Pantene', logo: images.ugcBrandLogo6 },
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
        <h2 className="text-4xl md:text-5xl font-cinzel text-center mb-24 md:mb-48" style={{ color: colors.accent }}>
          ALGUNAS COLABORACIONES
        </h2>
        </RevealWrapper>
        
        <RevealWrapper animationClass="slide-in-left">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-12 lg:gap-24 xl:gap-36 mx-auto">
          {brands.map((brand, index) => (
            <div key={index} className="flex items-center justify-center">
              <div className="bg-white rounded-full flex items-center justify-center shadow-sm w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-52 xl:h-52">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  loading="lazy"
                  className="max-h-full max-w-full rounded-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
        </RevealWrapper>
      </div>
    </div>
  );
};

export default UGCBrandsAlliances;
