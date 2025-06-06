// src/utils/LazyReCAPTCHA.tsx
import React from "react";

// Carga dinámica de react-google-recaptcha
const LazyReCAPTCHA = React.lazy(async () => {
  // Si estabas usando react-async-script-loader, podemos hacer:
//   const { default: withAsyncScriptLoader } = await import("react-async-script-loader");
//   const { default: ReCAPTCHA } = await import("react-google-recaptcha");
//   return { default: withAsyncScriptLoader(ReCAPTCHA) };

  // Pero, si solamente usas <ReCAPTCHA sitekey="…" />, basta con:
  const mod = await import("react-google-recaptcha");
  return { default: mod.default };
});

export { LazyReCAPTCHA };
