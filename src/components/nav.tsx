import React, { useState } from "react";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import { Link } from "gatsby";
import { FiMenu, FiX } from "react-icons/fi";
import { useLocation } from "@reach/router";

interface NavProps {
  data?: {
    menu: string[];
  };
}

const Navigation: React.FC<NavProps> = ({ data }) => {
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (!data || !data.menu) {
    return null;
  }

  // Elimina el idioma del pathname y la barra final
  const currentPath = pathname.replace(/^\/(es|en|fr)\//, "/").replace(/\/$/, "");

  // Detecta el idioma actual
  const currentLanguagePrefix = `/${i18n.language}`;
  const normalizedPath = pathname.replace(/\/$/, "");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.container}>
      <button onClick={toggleMenu} className={styles.burgerButton}>
        {isMenuOpen ? <FiX className="text-white" size={24} /> : <FiMenu className="text-white" size={24} />}
      </button>

      <ul className={`${styles.buttonsWrapper} ${isMenuOpen ? styles.menuOpen : styles.menuClosed}`}>
        {data.menu.map((item: string, index: number) => {
          const linkTo = item === "home" ? "/" : `/${item}/`;

          const isActive = currentPath === linkTo || (pathname.startsWith(`${currentLanguagePrefix}${linkTo}`) && pathname.length > 4);

          // // Para la ruta "Inicio", usamos la raíz con el prefijo de idioma
          // const linkTo = item === "home" ? `${currentLanguagePrefix}/` : `${currentLanguagePrefix}/${item}/`;

          // // Condición para "Inicio" (home) - activo si pathname es raíz con idioma o sin idioma
          // const isHome = item === "home" && (normalizedPath === "/" || normalizedPath === currentLanguagePrefix);

          // // Condición para las demás rutas
          // const isActive = isHome || normalizedPath === linkTo.replace(/\/$/, "");


          return (
            <li key={index}>
              <Link
                to={linkTo}
                className={`${styles.buttons} ${isActive ? "font-extrabold !text-light" : ""}`}
                activeClassName="font-extrabold !text-light"
              >
                <Trans i18nKey={`menu.${item}`}>
                  {t(`menu.${item}`)}
                </Trans>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;

const styles = {
  container: "inline-block justify-between items-center px-4 py-2 rounded-full relative",
  burgerButton: "md:hidden block text-white focus:outline-none",
  buttonsWrapper: "flex flex-col md:flex-row justify-evenly items-center w-full md:w-auto",
  buttons: "text-purplesemilight px-8 py-2 hover:underline hover:text-purplelight",
  menuOpen: "block md:flex",
  menuClosed: "hidden md:flex",
};
