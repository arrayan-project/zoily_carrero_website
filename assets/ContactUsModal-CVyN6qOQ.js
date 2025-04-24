import{r,b as v,j as e}from"./index-CS0pCcsX.js";import{C as x}from"./ContactUsForm-BRJrflIn.js";import{g as p}from"./utils-DQPssQXU.js";import{X as h}from"./x-Ymije308.js";import"./RevealWrapper-CC1o2wYz.js";import"./createLucideIcon-jm0_sNms.js";const k=({isOpen:t,onClose:d})=>{const a=r.useRef(null),m=r.useRef(null),{theme:n}=v(),[s,f]=r.useState(!1),[i,l]=r.useState(!1);r.useEffect(()=>{t&&(f(!0),l(!1))},[t]);const c=()=>{i||!t||(l(!0),setTimeout(()=>{d(),l(!1)},300))};if(r.useEffect(()=>{const u=g=>{a.current&&!a.current.contains(g.target)&&c()};return t&&s&&document.addEventListener("mousedown",u),()=>{document.removeEventListener("mousedown",u)}},[t,s,c]),!t&&!i)return null;const o=t&&s&&!i;return e.jsx("div",{ref:m,className:`
                fixed inset-0 w-full h-full flex justify-center items-center z-50
                transition-opacity duration-300 ease-out
                ${n==="dark"?"bg-black bg-opacity-70 backdrop-blur-sm":"bg-gray-400 bg-opacity-50 backdrop-blur-sm"} /* Ajustado bg-opacity */
                ${o?"opacity-100":"opacity-0"} /* Control de opacidad */
                ${o?"pointer-events-auto":"pointer-events-none"} /* Control de interacción */
            `,role:"dialog","aria-modal":"true",children:e.jsxs("div",{ref:a,className:`
                    relative rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto mx-4 mb-4
                    transition-transform duration-300 ease-out
                    ${n==="dark"?"bg-gray-900/80 text-white":"bg-white/90 text-gray-800"} /* Fondo translúcido */
                    ${o?"scale-100":"scale-95"} /* Control de escala */
                    ${o?"pointer-events-auto":"pointer-events-none"} /* Asegura que el contenido tampoco sea interactivo si el overlay no lo es */
                `,children:[e.jsx("button",{className:`
                        absolute top-3 right-3 p-1 rounded-full
                        transition-colors duration-200
                        ${n==="dark"?"text-gray-400 hover:text-white hover:bg-gray-700":"text-gray-500 hover:text-gray-800 hover:bg-gray-200"}
                        ${o?"pointer-events-auto":"pointer-events-none"} /* Control de interacción */
                    `,onClick:c,"aria-label":"Cerrar modal",children:e.jsx(h,{className:"h-6 w-6"})}),e.jsx("div",{className:`mb-8 ${o?"pointer-events-auto":"pointer-events-none"}`,children:e.jsx("h2",{className:`text-2xl font-cinzel tracking-wide ${p(n)} mb-6`,children:"Contáctame"})}),e.jsx("div",{className:`${o?"pointer-events-auto":"pointer-events-none"}`,children:e.jsx(x,{})})]})})};export{k as default};
