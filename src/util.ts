// utils.ts
export const getTextColorClass = (theme: string) => {
    return theme === "dark" ? "text-white" : "text-gray-800";
  };
  
  export const getTextColorClassParagraph = (theme: string) => {
    return theme === "dark" ? "text-gray-400" : "text-gray-600";
  };
  