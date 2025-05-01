import { lazy, Suspense } from "react";
import { useTheme } from "../context/useThemeHook";
import { Link } from "react-router-dom";
import { Github, Instagram, Linkedin, Twitter } from "../../assets/icons";


const Footer = () => {
  const { colors } = useTheme();
  const Year = new Date().getFullYear();

  return (
    <footer
      className="relative bg-black text-white z-10"
      style={{ color: colors.bannerTitle }}
    >
      <div
        className="top-0 left-0 w-[100%]"
        style={{ backgroundColor: colors.section }}
      >
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,
                        250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,
                        3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="relative block h-[120px]"
            style={{ fill: colors.background }}
          ></path>
        </svg>
        <div className="grid lg:grid-cols-4 gap-20 sm:grid-cols-1 px-10 py-10 md:px-20 md:py-20">
          <div className="flex flex-col gap-5">
            <h2
              className="text-xl text-pink-500 font-cinzel"
              style={{ color: colors.bannerTitle }}
            >
              SoyZoilyCarrero
            </h2>
            <p
              className="font-cinzel text-sm"
              style={{ color: colors.bannerTitle }}
            >
              Maquillaje profesional que se adapta a ti. Porque cada rostro
              tiene su historia, y yo estoy aquí para contarla con brochas y
              color. ¡Reserva tu sesión hoy!
            </p>
          </div>

          <div>
            <h3
              className="text-xl font-cinzel text-pink-500 py-2 uppercase"
              style={{ color: colors.bannerTitle }}
            >
              Creatividad
            </h3>
            <ul className="list-none p-0 m-0">
              <li className="my-4 font-cinzel text-sm">Guías & Ideas</li>
              <li className="my-4 font-cinzel text-sm">Tips & Trucos</li>
              <li className="my-4 font-cinzel text-sm">
                <Link to="/gallery" className="hover:text-pink-300">
                  Galería
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3
              className="text-xl font-cinzel text-pink-500 py-2 uppercase"
              style={{ color: colors.bannerTitle }}
            >
              Link Útiles
            </h3>
            <ul className="list-none p-0 m-0">
              <li className="my-4 font-cinzel text-sm">
                <Link to="/policy" className="hover:text-pink-300">
                  Políticas de Privacidad
                </Link>
              </li>
              <li className="my-4 font-cinzel text-sm">
                <Link to="/terms" className="hover:text-pink-300">
                  Terminos & Condiciones
                </Link>
              </li>
              <li className="my-4 font-cinzel text-sm">
                <Link to="/faq" className="hover:text-pink-300">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div className="mb-4 md:mb-0">
            <h2
              className="text-xl font-cinzel text-pink-500 py-2 uppercase"
              style={{ color: colors.bannerTitle }}
            >
              Contacto
            </h2>
            <p className="text-sm my-4 font-cinzel">
              Email: youremail@gmail.com
            </p>
            <p className="text-sm my-4 font-cinzel">
              Teléfono: +1 113-456-7890{" "}
            </p>
            <div className="flex space-x-4 font-cinzel">
              <a
                href="URL_DE_TU_GITHUB"
                aria-label="Github"
                target="_blank"
                rel="noopener noreferrer"
              >
              <Suspense fallback={null}>
                <Github
                  size={24}
                  strokeWidth={1.5}
                  className="text-white hover:text-pink-500 transform hover:scale-150 transition-all duration-150 ease-in-out"
                />
              </Suspense>
              </a>
              <a
                href="URL_DE_TU_LINKEDIN"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Suspense fallback={null}>
                <Linkedin
                  size={24}
                  strokeWidth={1.5}
                  className="text-white hover:text-pink-500 transform hover:scale-150 transition-all duration-150 ease-in-out"
                />
                </Suspense>
              </a>
              <a
                href="URL_DE_TU_TWITTER"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Suspense fallback={null}>
                <Twitter
                  size={24}
                  strokeWidth={1.5}
                  className="text-white hover:text-pink-500 transform hover:scale-150 transition-all duration-150 ease-in-out"
                />
                </Suspense>
              </a>
              <a
                href="URL_DE_TU_INSTAGRAM"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Suspense fallback={null}>
                <Instagram
                  size={24}
                  strokeWidth={1.5}
                  className="text-white hover:text-pink-500 transform hover:scale-150 transition-all duration-150 ease-in-out"
                />
                </Suspense>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-15 mb-10">
          <div className="h-full flex items-center justify-center mb-5">
            <form className="w-96 relative">
              <label htmlFor="footer-newsletter-email" className="sr-only">
                Suscríbete a nuestro boletín
              </label>
              <input
                type="email"
                id="footer-newsletter-email"
                placeholder=""
                className="w-full text-gray-800 p-4 h-10 rounded-full focus:outline-none 
                            focus:border border-pink-800"
                aria-label="Correo electrónico para suscripción al boletín"
              />
              <button
                type="submit"
                style={{
                  backgroundColor: colors.accent,
                  color: colors.background,
                }}
                className="px-8 py-2 rounded-full absolute top-0 right-0 font-cinzel transition-opacity duration-150 ease-in-out hover:opacity-80" // Mantenemos clases de layout/fuente/posición. Añadimos transición y un hover simple con opacidad.
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
        <p className="text-center p-6">
          &copy; Desarrollado con ♥ por ZoilyCarrero {Year}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
