import{r as i,k as t}from"./react-BZa0HTj3.js";import{M as a}from"./lucide-ELt3VstL.js";const l=({onClick:r})=>{const[e,o]=i.useState(null),n=()=>{try{r()}catch(s){o("Error al intentar abrir el modal de contacto."),console.error("Error en FloatingContactButton:",s)}};return e?t.jsx("div",{className:"fixed inset-0 flex justify-center items-center bg-red-500 text-white z-[1100]",children:t.jsx("p",{children:e})}):t.jsx("div",{className:`fixed z-[1000] flex items-center justify-center bottom-[75px] right-[10px] sm:bottom-[90px] md:bottom-[100px] md:right-[20px]
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
        `,children:t.jsx(a,{className:`text-white w-[20px] h-[20px] md:w-[30px] md:h-[30px]
          `})})})};export{l as default};
