import React, { useState } from "react";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import { Link } from "gatsby"
import { RiInstagramLine } from "react-icons/ri";
import { BsFacebook } from "react-icons/bs";
import { FiMenu, FiX } from "react-icons/fi";
import { useLocation } from "@reach/router";

interface NavProps {
  data?: {
    menu: string[];
    // companyDetails: { instagram: string; facebook: string };
  };
}

const Navigation: React.FC<NavProps> = ({ data }) => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

//   if (!data || !data.menu || !data.companyDetails) {
  if (!data || !data.menu ) {
    return null;
  }

  const currentPath = pathname.replace(/^\/(es|en|fr)\//, "/").replace(/\/$/, "");

//   const { instagram, facebook } = data.companyDetails;

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
          const isActive = currentPath === linkTo;
          return (
            <li key={index}>
              <Link
                to={linkTo}
                className={`${styles.buttons} ${isActive ? "font-extrabold !text-light border-l-4 border-light" : ""}`}
                activeClassName="text-white">
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
  menuClosed: "hidden md:flex"
};

