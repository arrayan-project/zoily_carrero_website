import{r as l,k as i}from"./react-BZa0HTj3.js";function a(o,r){let s,e,t;return function(...n){s?(clearTimeout(e),e=setTimeout(()=>{Date.now()-t>=r&&(o.apply(this,n),t=Date.now())},r-(Date.now()-t))):(o.apply(this,n),t=Date.now(),s=!0)}}const c=()=>{const[o,r]=l.useState(!1);l.useEffect(()=>{const e=a(()=>{const n=window.pageYOffset;r(n>300)},250),t=()=>{window.addEventListener("scroll",e)};return"requestIdleCallback"in window?requestIdleCallback(t):setTimeout(t,1),()=>{window.removeEventListener("scroll",e)}},[]);const s=()=>{window.scrollTo({top:0,behavior:"smooth"})};return o?i.jsx("button",{type:"button",onClick:s,className:`
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
