import{b as p,r as o,j as e}from"./index-CS0pCcsX.js";import{c as i}from"./createLucideIcon-jm0_sNms.js";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=i("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=i("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]),k=({className:c})=>{const{theme:t,toggleTheme:d}=p(),[l,h]=o.useState(window.innerWidth),[r]=o.useState(null);o.useEffect(()=>{const a=()=>h(window.innerWidth);return window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)},[]);const m="relative p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors duration-300 z-[9999] hover:bg-rose-200",u=t==="light"?"bg-amber-200":"bg-gray-600",n=t==="light"?"text-amber-700":"text-rose-400",s=l<768?24:32;return r?(console.error("Error en ThemeToggleButton:",r),e.jsx("div",{className:"error-container",children:e.jsx("p",{className:"error-message",children:"Ha ocurrido un error inesperado en el botón de cambio de tema."})})):e.jsx("button",{type:"button",onClick:d,className:`${c} ${m} ${u}`,"aria-label":t==="light"?"Activar modo oscuro":"Activar modo claro",children:t==="light"?e.jsx(b,{size:s,className:n}):e.jsx(g,{size:s,className:n})})};export{k as default};
