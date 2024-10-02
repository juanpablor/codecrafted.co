import React from "react";
import { LayoutProps } from "../interfaces";
import Navigation from "../components/nav";
import LanguageSelector from "../components/languageSelector";
import MainLogo from "../components/mainLogo";

const Layout: React.FC<LayoutProps> = ({ children, data, bgImage }) => {
  return (
    <>
    <div className="flex flex-col m-2 sm:m-8 gradient rounded-3xl" style={{
      backgroundImage: `url(${bgImage})`,
      backgroundSize: "content"
    }}>
        <div className="grid grid-flow-col justify-stretch items-center p-2 sm:p-8">
            <div className="flex min-w-32 max-w-52 mx-auto">
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
