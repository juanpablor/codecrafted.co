import React from "react";
import { useI18next } from "gatsby-plugin-react-i18next";

interface NavProps {
  clubLayout?: boolean;
}

const LanguageSelector: React.FC<NavProps> = ({ clubLayout }) => {
  const { languages, changeLanguage, language: currentLanguage } = useI18next();


  return (
    <div className={styles.container}>
      <ul className={styles.buttonsWrapper}>
        {languages.map((lng) => (
          <li
            key={lng}
            className={`${styles.buttons} ${styles.hover}
            ${lng === currentLanguage ? "bg-purplelight text-dark" :  ""}`}
            onClick={(e) => {
              e.preventDefault();
              changeLanguage(lng);
            }}
          >
            <div className={styles.text}>{lng}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageSelector;

const styles = {
  container: "flex flex-row justify-center self-center",
  buttonsWrapper: "flex justify-evenly flex-col",
  buttons: "flex my-1 py-1 px-2 shrink-0 grow-0 rounded justify-center text-white cursor-pointer mx-1 text-purplelight",
  text: "self-center capitalize",
  hover: "bg-primary hover:bg-secondary hover:text-white",
};
