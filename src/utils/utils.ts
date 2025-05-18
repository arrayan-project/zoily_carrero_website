// utils.ts
import {
  COLOR_TEXT_WHITE,
  COLOR_TEXT_GRAY_800,
  COLOR_TEXT_GRAY_400,
  COLOR_TEXT_GRAY_600,
} from "../constants/styles";

export const getTextColorClass = (theme: string) => {
    return theme === "dark" ? COLOR_TEXT_WHITE : COLOR_TEXT_GRAY_800;
  };
  
  export const getTextColorClassParagraph = (theme: string) => {
    return theme === "dark" ? COLOR_TEXT_GRAY_400 : COLOR_TEXT_GRAY_600;
  };