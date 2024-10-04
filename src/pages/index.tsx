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
      <div className="flex w-full sm:w-[48rem] mx-auto relative h-60">
        <div className="flex">
          <img
            src={images.ring}
            className="absolute w-24 sm:w-48 z-0 opacity-85 left-44 -top-8"
            alt=""
          />
          <h1 className="text-2xl sm:text-4xl bungee-regular relative z-10">
            {t("homePage.slogan")}
          </h1>
        </div>

        <div className="absolute bottom-0 right-[10%] top-[20%]">
          <img src={images.bg_6} className="w-72 opacity-40" alt="" />
        </div>
      </div>

      <div className="flex flex-col w-full sm:w-[1024px] mx-auto mt-36">
        <h2 className="text-xl sm:text-4xl text-center bungee-regular">{t("homePage.workflow_title")}</h2>
        <div className=" mx-auto relative mt-4">
          {items.map((item, index) => {
            const isLastTwoRows = index >= items.length - 2;
            return (
              <div key={index} className={`flex flex-col sm:flex-row items-center my-8 sm:my-0 relative h-auto sm:h-[100px] pos_${index} no-slash sm:slash ${isLastTwoRows ? 'flex-row sm:flex-row-reverse' : ''}`}>
                <div className={`text-2xl self-center w-full sm:w-1/2 relative bungee-regular title`}>{t(`homePage.${item.title}`)} </div>
                <div className={`text-md w-full sm:w-1/2 mx-8 text-purplesemilight copy bg-purpledark py-2 px-4 rounded-2xl`}>{item.copy ? t(`homePage.${item.copy}`) : ""}</div>
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
