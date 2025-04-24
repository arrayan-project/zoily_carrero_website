import{r as i,j as a}from"./index-CS0pCcsX.js";function l(o,r){let n,e,t;return function(...s){n?(clearTimeout(e),e=setTimeout(()=>{Date.now()-t>=r&&(o.apply(this,s),t=Date.now())},r-(Date.now()-t))):(o.apply(this,s),t=Date.now(),n=!0)}}const c=()=>{const[o,r]=i.useState(!1);i.useEffect(()=>{const e=l(()=>{const t=window.pageYOffset;r(t>300)},250);return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[]);const n=()=>{window.scrollTo({top:0,behavior:"smooth"})};return o?a.jsx("button",{type:"button",onClick:n,className:`
        fixed bottom-[10px] right-[10px] w-[40px] h-[40px] rounded-[6px]
        sm:bottom-[15px] sm:right-[15px] sm:w-[50px] sm:h-[50px] sm:rounded-[8px]
        md:bottom-[20px] md:right-[20px] md:w-[60px] md:h-[60px] md:rounded-[10px]
        bg-[#b2443a] text-white border-none
        flex justify-center items-center
        cursor-pointer
        opacity-80 hover:opacity-100
        hover:bg-[#6d0006]
        hover:scale-110
        transition-opacity transition-transform duration-300 ease-linear
        z-[1000]
        shadow-[2px_2px_5px_rgba(0,0,0,0.2)]
      `,"aria-label":"Volver arriba",children:"▲"}):null};export{c as default};
