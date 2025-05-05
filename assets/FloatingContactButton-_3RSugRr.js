import{r as o,k as t}from"./react-DxwSq1SJ.js";import{a as i}from"./lucide-CmUpX8ct.js";const p=({onClick:e})=>{const[r,s]=o.useState(null),n=o.useCallback(()=>{try{e()}catch(a){console.error("FloatingContactButton error:",a),s("No se pudo abrir el contacto.")}},[e]);return r?t.jsx("div",{role:"alert",className:"fixed inset-0 flex items-center justify-center bg-red-600 text-white z-[1100] p-4",children:t.jsx("p",{children:r})}):t.jsx("div",{className:`fixed z-[1000] flex items-center justify-center bottom-[75px] right-[10px] sm:bottom-[90px] md:bottom-[100px] md:right-[20px]
      `,children:t.jsx("button",{type:"button",onClick:n,"aria-label":"Abrir modal de contacto",className:`
          flex justify-center items-center
          bg-[pink] text-white
          border-none cursor-pointer
          shadow-[0px_4px_10px_rgba(0,0,0,0.2)]
          transition duration-300 ease-in-out
          hover:bg-[#ff4081]
          animate-pulse
          w-[40px] h-[40px] rounded-[6px]
          sm:w-[50px] sm:h-[50px] sm:rounded-full
          md:w-[60px] md:h-[60px]
        `,children:t.jsx(i,{className:`text-white w-[20px] h-[20px] md:w-[30px] md:h-[30px]
          `})})})};export{p as default};
