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

  const currentPath = pathname.replace(/^\/(es|en|fr)\//, "/").replace(/\/$/, "");

  const currentLanguagePrefix = `/${i18n.language}`;
  const normalizedPath = pathname.replace(/\/$/, "");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.container}>
      <button onClick={toggleMenu} className={styles.burgerButton}>
        {isMenuOpen ? <FiX className="text-white" size={48} /> : <FiMenu className="text-white" size={48} />}
      </button>
      <ul className={`${styles.buttonsWrapper} ${isMenuOpen ? styles.menuOpen : styles.menuClosed}`}>
        {data.menu.map((item: string, index: number) => {
          const linkTo = item === "home" ? "/" : `/${item}`;
          const isActive = currentPath === linkTo || (pathname.startsWith(`${currentLanguagePrefix}${linkTo}`));
          return (
            <li key={index} className={styles.item}>
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
  burgerButton: "md:hidden block text-white focus:outline-none relative z-[60]",
  item: "my-4 sm:my-0",
  buttonsWrapper: "flex flex-col md:flex-row justify-center sm:justify-evenly items-center w-full md:w-auto",
  buttons: "text-purplesemilight px-8 py-2 my-12 sm:my-0 text-xl sm:text-md hover:underline hover:text-purplelight",
  menuOpen: "fixed inset-0 bg-primary text-white z-50 flex flex-col justify-center items-center transition-transform duration-300 ease-in-out transform",
  menuClosed: "hidden md:flex",
};