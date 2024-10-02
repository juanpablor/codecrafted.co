import * as React from "react";
import { graphql, type HeadFC, type PageProps } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { Company } from "../interfaces";
import data from "../data/data.json";
import Layout from "./layout";
import images from "../images";

const info: Company = data[0];

const IndexPage: React.FC<PageProps> = () => {
  const { t } = useTranslation();
  const items = info.homePage.items;
  return (
    <Layout data={info} bgImage={images.bg_1}>
      <div className="flex w-full sm:w-[48rem] mx-auto relative">
        <img
          src={images.ring}
          className="absolute w-24 sm:w-48 z-0 opacity-85 left-44 -top-8"
          alt=""
        />
        <h1 className="text-sm sm:text-4xl bungee-regular relative z-10">
          {t("homePage.slogan")}
        </h1>
      </div>

      <div className="flex flex-col w-3/5 mx-auto">
        <h2 className="text-4xl">{t("homePage.workflow_title")}</h2>
        <div className=" mx-auto">
          {items.map((item, index) => {
            const isLastTwoRows = index >= items.length - 2;
            return (
              <div key={index} className={`flex flex-row ${isLastTwoRows ? 'reverse' : ''}`}>
                <div className="text-3xl self-center w-1/2 mx-8">{t(`homePage.${item.title}`)}</div>
                <div className="text-sm w-1/2 mx-8 text-purplesemilight">{item.copy ? t(`homePage.${item.copy}`) : ""}</div>
              </div>

            )
          })}
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>{info.companyName}</title>;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
