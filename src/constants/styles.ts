// src/constants/styles.ts

// --- Base Font Properties ---
export const FONT_FAMILY_PRIMARY = "font-cinzel";
export const FONT_WEIGHT_LIGHT = "font-extralight"; // Common for titles
export const FONT_WEIGHT_NORMAL = "font-normal"; // Default weight for paragraphs if needed
export const TRACKING_WIDE = "tracking-wider"; // Common for titles
export const TRACKING_NORMAL = "tracking-normal"; // Default tracking for paragraphs

// --- Text Sizes (Responsive) ---
export const TEXT_SIZE_XL = "text-4xl md:text-5xl";    // For H1
export const TEXT_SIZE_LG = "text-2xl md:text-3xl";    // For H2
export const TEXT_SIZE_MD = "text-lg md:text-xl";      // For H3
export const TEXT_SIZE_BASE = "text-sm md:text-base";  // For standard Paragraphs
export const TEXT_SIZE_SM = "text-xs sm:text-sm md:text-base"; // For smaller Paragraphs or specific descriptions

// --- Semantic Text Style Classes ---

// Base style for all titles (H1, H2, H3)
const BASE_TITLE_STYLE = `${FONT_FAMILY_PRIMARY} ${FONT_WEIGHT_LIGHT} ${TRACKING_WIDE}`;

// Heading Level 1 (e.g., Main Page Titles)
export const HEADING_1_CLASS = `${BASE_TITLE_STYLE} ${TEXT_SIZE_XL}`;

// Heading Level 2 (e.g., Section Titles)
export const HEADING_2_CLASS = `${BASE_TITLE_STYLE} ${TEXT_SIZE_LG}`;

// Heading Level 3 (e.g., Sub-Section or Item Titles)
export const HEADING_3_CLASS = `${BASE_TITLE_STYLE} ${TEXT_SIZE_MD}`;

// Paragraphs / Standard Text
const BASE_PARAGRAPH_STYLE = `${FONT_FAMILY_PRIMARY}`; // Add ${FONT_WEIGHT_NORMAL} ${TRACKING_NORMAL} if Cinzel defaults are not desired
export const PARAGRAPH_CLASS = `${BASE_PARAGRAPH_STYLE} ${TEXT_SIZE_BASE}`;
export const PARAGRAPH_SMALL_CLASS = `${BASE_PARAGRAPH_STYLE} ${TEXT_SIZE_SM}`;

// --- Utility Text Classes (can be appended) ---
export const TEXT_CENTER = "text-center";

// --- Text Color Classes (for use with theme logic or directly) ---
export const COLOR_TEXT_WHITE = "text-white";
export const COLOR_TEXT_GRAY_800 = "text-gray-800"; // For general text in light mode
export const COLOR_TEXT_GRAY_400 = "text-gray-400"; // For paragraphs in dark mode
export const COLOR_TEXT_GRAY_600 = "text-gray-600"; // For paragraphs in light mode

// --- Existing Component-Specific Styles (Refactored using new semantic classes) ---

// SERVICES
export const SERVICES_TITLE_CLASS = `${HEADING_1_CLASS} ${TEXT_CENTER} mb-24 md:py-10`;
export const SERVICES_INCLUDE_TITLE_CLASS = `${HEADING_2_CLASS} ${TEXT_CENTER}`;
export const SERVICES_INCLUDE_ITEM_CLASS = `p-6 shadow-sm p-2 md:p-8`;
export const SERVICES_INCLUDE_ITEM_TITLE_CLASS = `${HEADING_3_CLASS} ${TEXT_CENTER} mb-3`;
export const SERVICES_INCLUDE_ITEM_DESCRIPTION_CLASS = `${PARAGRAPH_SMALL_CLASS}`; // Matches original: text-xs sm:text-sm md:text-base font-cinzel

// COURSES
// Original: text-4xl md:text-5xl font-cinzel font-extralight text-center md:mb-24 md-18 tracking-wider
// Corrected typo "md-18" and assuming mobile-first margins: mb-18 md:mb-24
export const COURSES_TITLE_CLASS = `${HEADING_1_CLASS} ${TEXT_CENTER} mb-18 md:mb-24`;

// HOME
export const HOME_LINKS_TITLE_CLASS = `${HEADING_1_CLASS} ${TEXT_CENTER} mb-12`;