/**
 * Constantes de estilos y clases utilitarias para la aplicación.
 * Define fuentes, pesos, tamaños de texto, estilos semánticos y clases utilitarias para títulos, párrafos y secciones.
 *
 * @module styles
 */

// --- Base Font Properties ---
export const FONT_FAMILY_PRIMARY = "font-cinzel";
export const FONT_WEIGHT_LIGHT = "font-extralight"; // Common for titles
export const FONT_WEIGHT_NORMAL = "font-normal"; // Default weight for paragraphs if needed
export const TRACKING_WIDE = "tracking-wider"; // Common for titles
export const TRACKING_NORMAL = "tracking-normal"; // Default tracking for paragraphs

// --- Text Sizes (Responsive) ---
// Definiciones de tamaño de texto más granulares para diferentes breakpoints.
// Breakpoints (asegúrate que estén definidos en tailwind.config.js):
// default -> xs (375px) -> sm (640px) -> md (768px) -> lg (1024px) -> xl (1280px) -> 2xl (1536px) -> fhd (1920px) -> qhd (2560px) -> uhd (3840px)

export const TEXT_SIZE_XXL = "text-4xl xs:text-4xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-6xl 2xl:text-6xl fhd:text-6xl qhd:text-6xl uhd:text-6xl";

// Para H1 (Títulos Principales)
export const TEXT_SIZE_XL = "text-2xl xs:text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl fhd:text-4xl qhd:text-5xl uhd:text-5xl";

// Para H2 (Títulos de Sección)
export const TEXT_SIZE_LG = "text-xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl fhd:text-6xl qhd:text-7xl uhd:text-7xl";

// Para H3 (Subtítulos o Títulos de Ítem)
export const TEXT_SIZE_MD = "text-xl xs:text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl fhd:text-4xl qhd:text-5xl uhd:text-5xl";

// Para Párrafos Estándar
export const TEXT_SIZE_BASE = "text-sm xs:text-sm sm:text-base md:text-base lg:text-base xl:text-base 2xl:text-base fhd:text-base qhd:text-base uhd:text-xl";

// Para Párrafos Pequeños o Descripciones Específicas
export const TEXT_SIZE_SM = "text-xs xs:text-xs sm:text-xs md:text-xs lg:text-xs xl:text-sm 2xl:text-sm fhd:text-sm qhd:text-base uhd:text-base";


// --- Semantic Text Style Classes ---

// Base style for all titles (H1, H2, H3)
const BASE_TITLE_STYLE = `${FONT_FAMILY_PRIMARY} ${FONT_WEIGHT_LIGHT} ${TRACKING_WIDE}`;
export const HEADING_0_CLASS = `${BASE_TITLE_STYLE} ${TEXT_SIZE_XXL}`;
// Heading Level 1 (e.g., Main Page Titles)
export const HEADING_1_CLASS = `${BASE_TITLE_STYLE} ${TEXT_SIZE_XL}`;
// Heading Level 2 (e.g., Section Titles)
export const HEADING_2_CLASS = `${BASE_TITLE_STYLE} ${TEXT_SIZE_LG}`;
// Heading Level 3 (e.g., Sub-Section or Item Titles)
export const HEADING_3_CLASS = `${BASE_TITLE_STYLE} ${TEXT_SIZE_MD}`;
// Heading Level 4 (e.g., Sub-Section or Item Titles)
export const HEADING_4_CLASS = `${BASE_TITLE_STYLE} ${TEXT_SIZE_BASE}`;
// Heading Level 4 (e.g., Sub-Section or Item Titles)
export const HEADING_5_CLASS = `${BASE_TITLE_STYLE} ${TEXT_SIZE_SM}`;


// Paragraphs / Standard Text
const BASE_PARAGRAPH_STYLE = `${FONT_FAMILY_PRIMARY}`;
export const PARAGRAPH_CLASS = `${BASE_PARAGRAPH_STYLE} ${TEXT_SIZE_BASE}`;
export const PARAGRAPH_SMALL_CLASS = `${BASE_PARAGRAPH_STYLE} ${TEXT_SIZE_SM}`;

// --- Utility Text Classes (can be appended) ---
export const TEXT_CENTER = "text-center";

// --- ESTILOS GENERALES DE PÁGINA Y SECCIÓN (Plantillas para usar y adaptar) ---
export const GENERAL_PAGE_SUPERMAIN_TITLE_CLASS = `${HEADING_0_CLASS}`;
export const GENERAL_SECTION_SUPER_TITLE_CLASS = `${HEADING_4_CLASS}`;
export const GENERAL_PAGE_MAIN_TITLE_CLASS = `${HEADING_1_CLASS} ${TEXT_CENTER} pt-16 mb-12 md:pt-24 md:mb-16`;
export const GENERAL_SECTION_TITLE_CLASS = `${HEADING_2_CLASS} ${TEXT_CENTER} mb-8 md:mb-12`;
export const GENERAL_SUBSECTION_TITLE_CLASS = `${HEADING_3_CLASS} ${TEXT_CENTER} mb-6 md:mb-10`;
export const GENERAL_SECTION_SUBTITLE_CLASS = `${HEADING_4_CLASS} ${TEXT_CENTER} mb-8 md:mb-12`;
export const GENERAL_SECTION_PARAGRAPH_DESCRIPTION_CLASS = `${TEXT_SIZE_BASE} ${FONT_FAMILY_PRIMARY} ${TEXT_CENTER} ${FONT_WEIGHT_LIGHT} ${TRACKING_WIDE}`;



// --- ESTILOS ESPECÍFICOS POR SECCIÓN / PÁGINA ---

// --- HOME ---
// Para el título principal y subtítulo del Hero Banner en Home.tsx (usado por HomeTitle.tsx como default)
export const HOME_HERO_TITLE_CLASS = `${FONT_FAMILY_PRIMARY} text-white text-2xl md:text-4xl lg:text-4xl xl:text-5xl tracking-[0.4em] mb-12 md:mb-6`;
export const HOME_HERO_SUBTITLE_CLASS = `${FONT_FAMILY_PRIMARY} text-white text-sm md:text-sm tracking-[0.4em] mb-12`;

// Para botones principales en la página de Home
export const HOME_BUTTON_BASE_CLASS = `${FONT_WEIGHT_NORMAL} ${FONT_FAMILY_PRIMARY} px-2 py-3 shadow transition duration-200`;
export const HOME_BUTTON_PRIMARY_VARIANT_CLASS = `${HEADING_5_CLASS} bg-white/20 backdrop-blur-sm text-white hover:bg-gray-200/80 hover:backdrop-blur-sm hover:text-black`;
export const HOME_BUTTON_SECONDARY_VARIANT_CLASS = `${HEADING_5_CLASS} bg-transparent text-white border border-white hover:bg-white hover:text-black`;

// Para la sección de enlaces en el Home (HomeLinksSection.tsx)
export const HOME_LINKS_SECTION_TITLE_CLASS = `${HEADING_1_CLASS} ${TEXT_CENTER} mb-16`;
export const HOME_LINKS_SECTION_SUBTITLE_CLASS = `${HEADING_4_CLASS} ${TEXT_CENTER} mb-2 sm:mb-3 md:mb-4`;
export const HOME_LINKS_SECTION_SUBTITLE_DETAIL_CLASS = `${HEADING_4_CLASS} ${TEXT_CENTER} mb-36 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-28`;
export const HOME_LINKS_CARD_LABEL_CLASS = `${FONT_FAMILY_PRIMARY} text-white text-lg`;

// Para la sección de Marcas en Home (HomeBrandsSection.tsx)
export const HOME_BRANDS_SECTION_TITLE_CLASS = `${FONT_FAMILY_PRIMARY} ${FONT_WEIGHT_LIGHT} ${TEXT_CENTER} ${HEADING_1_CLASS} text-black mb-12`;

// Para la sección de Características en Home (HomeFeaturesSection.tsx)
export const HOME_FEATURES_ITEM_TITLE_CLASS = `${PARAGRAPH_CLASS} ${FONT_WEIGHT_LIGHT} mb-4`;
export const HOME_FEATURES_ITEM_DESCRIPTION_CLASS = `${FONT_FAMILY_PRIMARY} ${HEADING_5_CLASS} `;

// Para la sección de Galería en Home (HomeGallerySection.tsx)
export const HOME_GALLERY_SECTION_ITEM_TITLE_CLASS = `${HEADING_1_CLASS} ${FONT_FAMILY_PRIMARY} mb-12`;
export const HOME_GALLERY_SECTION_ITEM_DESCRIPTION_CLASS = `${HEADING_5_CLASS} ${PARAGRAPH_CLASS} px-4 mb-12 text-justify`;
export const HOME_GALLERY_SECTION_BUTTON_CLASS = `${HEADING_5_CLASS} ${FONT_FAMILY_PRIMARY} ${TEXT_SIZE_BASE} px-8 py-3 bg-white/20 backdrop-blur-sm text-white hover:bg-gray-200/80 hover:backdrop-blur-sm hover:text-black transition-colors duration-200`;



// --- SERVICES ---
// Used by ServicePromoSection for its SectionTitle component (ServicePromoSection.tsx)
export const SERVICES_PROMO_SECTION_TITLE_CLASS = `${HEADING_1_CLASS}`; 
export const SERVICES_PROMO_SECTION_DESCRIPTION_CLASS = `${HEADING_5_CLASS} ${PARAGRAPH_CLASS} ${TEXT_CENTER} mt-4 mb-8 md:mb-12 max-w-md sm:max-w-lg md:max-w-xl`;

// Estilos para la sección "Qué incluye" (ServicesIncludeItem.tsx)
 export const SERVICES_INCLUDE_ITEM_CLASS = `${HEADING_1_CLASS} p-6 p-2 md:p-8`;
 export const SERVICES_INCLUDE_ITEM_TITLE_CLASS = `${HEADING_4_CLASS} ${TEXT_CENTER} mb-3`;
 export const SERVICES_INCLUDE_ITEM_DESCRIPTION_CLASS = `${PARAGRAPH_SMALL_CLASS}`;

// Estilos para seccion estadisticas (StatsSection.tsx) ---
export const STATS_SECTION_ICON_CLASS = `${FONT_FAMILY_PRIMARY} text-5xl`; // font-cinzel is FONT_FAMILY_PRIMARY
export const STATS_SECTION_COUNTER_VALUE_CLASS = `${FONT_FAMILY_PRIMARY} text-4xl`;
export const STATS_SECTION_LABEL_CLASS = `${FONT_FAMILY_PRIMARY} text-sm`;

// Estilos de fuentes para titulo y subtitulo o descripion de cursos
export const COURSES_PAGE_TITLE_CLASS = `${HEADING_1_CLASS} ${TEXT_CENTER} pt-16 mb-12 md:mb-16`;
export const COURSES_SUBTITLE_CLASS = `${GENERAL_SECTION_PARAGRAPH_DESCRIPTION_CLASS} mt-4 mb-16 md:mb-24`;



// --- GALLERY ---
//Estilos para titulo y texto dentro del menu de categorias
export const GALLERY_PAGE_TITLE_CLASS = `${HEADING_1_CLASS} ${TEXT_CENTER} pt-16 mb-12 md:pt-24 md:mb-20`;
export const GALLERY_CATEGORY_MENU_BUTTON_CLASS = `${HEADING_5_CLASS}`;


// --- UGC ---
//estilos para la seccion ugc (UGCContentTitleSection.tsx)
export const UGC_SECTION_TITLE_CLASS = `${HEADING_1_CLASS} ${TEXT_CENTER} mb-12`;
export const UGC_SECTION_DESCRIPTION_CLASS = `${GENERAL_SECTION_PARAGRAPH_DESCRIPTION_CLASS} mt-4`;

// --- CONTACT PAGE ---
export const CONTACT_PAGE_MAIN_TITLE_CLASS = `${HEADING_1_CLASS} ${TEXT_CENTER} mt-10 mb-24 md:py-10`;
export const CONTACT_INFO_SECTION_TITLE_CLASS = `${HEADING_1_CLASS} mb-6`; // Para el título "Información de Contacto" dentro de ContactInfoSection
export const CONTACT_INFO_ITEM_LABEL_CLASS = `${FONT_FAMILY_PRIMARY}`; // Para las etiquetas como "Teléfono", "Email"
export const CONTACT_FORM_SUBMIT_BUTTON_CLASS = `px-6 py-3 text-white rounded-lg hover:bg-pink-700 transition-colors font-cinzel tracking-wider`;


// --- ABOUT PAGE ---
export const ABOUT_HERO_TITLE_CLASS = `${FONT_FAMILY_PRIMARY} text-white font-light text-4xl md:text-7xl tracking-[0.2em] mb-12 md:mb-6`;
export const ABOUT_HERO_SUBTITLE_CLASS = `${FONT_FAMILY_PRIMARY} text-white font-light text-xl md:text-2xl tracking-[0.3em] mb-12`;


// --- COMPONENTES COMUNES (Ejemplos) ---
// Para tarjetas (Cards) genéricas
export const CARD_TITLE_CLASS = `${HEADING_3_CLASS} mb-4`; // O HEADING_4_CLASS si es más apropiado
export const CARD_SUBTITLE_CLASS = `${PARAGRAPH_CLASS} mb-4`;
export const CARD_DESCRIPTION_CLASS = `${PARAGRAPH_SMALL_CLASS}`;