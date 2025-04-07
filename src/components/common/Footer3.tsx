import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { useTheme } from "../context/useThemeHook";
import { Link } from "react-router-dom";

const Footer = () => {
  const { colors } = useTheme();
  const Year = new Date().getFullYear();

  return (
    <footer
      className="relative bg-black text-white mt-100 z-10"
      style={{ color: colors.bannerTitle }}
    >
      {" "}
      {/* Add negative margin and z-index */}
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
            className="relative block h-[600px]"
            style={{ fill: colors.background }}
          ></path>
        </svg>
        <div className="grid lg:grid-cols-4 gap-20 sm:grid-cols-1 p-20">
          <div className="flex flex-col gap-5">
            <h2
              className="text-xl text-pink-500 font-cinzel"
              style={{ color: colors.bannerTitle }}
            >
              SoyZoilyCarrero
            </h2>
            <p className="font-cinzel text-sm" style={{ color: colors.bannerTitle }}>
              Maquillaje profesional que se adapta a ti. Porque cada rostro
              tiene su historia, y yo estoy aquí para contarla con brochas y
              color. ¡Reserva tu sesión hoy!
            </p>
          </div>

          <div>
            <li
              className="text-xl list-none font-cinzel text-pink-500 py-2 uppercase"
              style={{ color: colors.bannerTitle }}
            >
              Creatividad
            </li>
            <li className="my-4 list-none font-cinzel text-sm">Guías & Ideas</li>
            <li className="my-4 list-none font-cinzel text-sm">Tips & Trucos</li>
            <li className="my-4 list-none font-cinzel text-sm">
                <Link to="/gallery">Galería</Link>
            </li>
          </div>

          <div>
            <li
              className="text-xl list-none font-cinzel text-pink-500 py-2 uppercase"
              style={{ color: colors.bannerTitle }}
            >
              Link Útiles
            </li>
            <li className="my-4 list-none font-cinzel text-sm">
              <Link to="/policy">Políticas de Privacidad</Link>
            </li>
            <li className="my-4 list-none font-cinzel text-sm">
              <Link to="/terms">Terminos & Condiciones</Link>
            </li>
            <li className="my-4 list-none font-cinzel text-sm">Políticas</li>
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
                className="text-white hover:text-pink-500 transform hover:scale-150 
                            transition-all duration-150 ease-in-out"
                href=""
              >
                <FaGithub />
              </a>
              <a
                className="text-white hover:text-pink-500 transform hover:scale-150
                             transition-all duration-150 ease-in-out"
                href=""
              >
                <FaLinkedinIn />
              </a>
              <a
                className="text-white hover:text-pink-500 transform hover:scale-150
                             transition-all duration-150 ease-in-out"
                href=""
              >
                <FaTwitter />
              </a>
              <a
                className="text-white hover:text-pink-500 transform hover:scale-150
                             transition-all duration-150 ease-in-out"
                href=""
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-15 mb-10">
          <div className="h-full flex items-center justify-center mb-5">
            <form className="w-96 relative">
              <input
                type="email"
                placeholder=""
                className="w-full text-gray-800 p-4 h-10 rounded-full focus:outline-none 
                            focus:border border-pink-800"
              />
              <button
                type="submit"
                className="bg-pink-400 px-8 py-2 rounded-full text-white
                                 absolute top-0 right-0 font-cinzel"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <h6 className="text-center">
          &copy; Desarrollado con ♥ por ZoilyCarrero {Year}
        </h6>
      </div>
    </footer>
  );
};

export default Footer;
