import React from "react";
import { LayoutProps } from "../interfaces";
import Navigation from "../components/nav";
import LanguageSelector from "../components/languageSelector";
import MainLogo from "../components/mainLogo";

const Layout: React.FC<LayoutProps> = ({ children, data, bgImage }) => {
  return (
    <>
      <div
        className={styles.wrapper}
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
        }}
      >
        <div className={styles.header}>
          <div className={styles.logoContainer}>
            <MainLogo fillColour="#FCFCFC" />
          </div>
          <div className={styles.navbar}>
            <Navigation data={data} />
          </div>
          <div>
            <LanguageSelector />
          </div>
        </div>
        <div className={styles.childrenContent}>
          <main>{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;

const styles = {
  wrapper: "flex flex-col m-2 sm:m-8 gradient rounded-3xl min-h-screen",
  header: "grid grid-flow-col justify-stretch items-center",
  logoContainer: "flex h-48 sm:h-60 mx-auto pt-8",
  navbar: "flex bg-semilight mx-auto",
  childrenContent: "text-light p-2 sm:p-8 mt-8"
}