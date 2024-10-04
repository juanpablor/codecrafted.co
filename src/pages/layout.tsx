import React from "react";
import { LayoutProps } from "../interfaces";
import Navigation from "../components/nav";
import LanguageSelector from "../components/languageSelector";
import MainLogo from "../components/mainLogo";

const Layout: React.FC<LayoutProps> = ({ children, data, bgImage }) => {
  return (
    <>
      <div
        className="flex flex-col m-2 sm:m-8 gradient rounded-3xl"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
        }}
      >
        <div className="grid grid-flow-col justify-stretch items-center">
          <div className="flex h-48 sm:h-60 mx-auto pt-8">
            <MainLogo fillColour="#FCFCFC" />
          </div>
          <div className="flex bg-semilight mx-auto">
            <Navigation data={data} />
          </div>
          <div>
            <LanguageSelector />
          </div>
        </div>
        <div className="text-light p-2 sm:p-8 !pt-0">
          <main>{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;
