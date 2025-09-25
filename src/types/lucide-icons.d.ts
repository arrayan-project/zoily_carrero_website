/**
 * Esto le dice a TypeScript que cualquier import desde
 * "lucide-react/dist/esm/icons/XYZ.js" exporta un LucideIcon.
 */
declare module "lucide-react/dist/esm/icons/*.js" {
  import { LucideIcon } from "lucide-react";
  const icon: LucideIcon;
  export default icon;
}
