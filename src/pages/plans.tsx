import React from "react";
import Layout from "./layout";
import data from "../data/data.json";
import { Company, itemPlan } from "../interfaces";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { graphql, HeadFC, PageProps } from "gatsby";
import images from "../images";
import { RxThickArrowRight } from "react-icons/rx";

const info: Company = data[0];

const PlansPage: React.FC<PageProps> = () => {
  const { t } = useTranslation();

  const renderPlanItems = (plan: itemPlan) => (
    <div className="border-2 border-purplesemilight rounded-2xl gradient p-2 sm:p-6 grow">
      <h2 className="text-2xl text-center mt-10 bungee-regular">{t(`plansPage.${plan.title}`)}</h2>
      <div className="text-xs text-purplesemilight leading-0 px-12 text-center">
        {t(`plansPage.${plan.subtitle}`)}
      </div>
      <ul className="px-4 mt-6">
        {plan.items.map((item, index) => (
          <li key={index} className="flex flex-row my-1">
            <div className="self-center text-sm text-purplesemilight mr-1">
              <RxThickArrowRight />
            </div>
            <div className="text-sm">{t(`plansPage.${item.title}`)}</div>
          </li>
        ))}
      </ul>
      <div className="text-center mt-6">
        <div className="text-xs text-purplesemilight ">{t("general.starts_from")}</div>
        <div className="text-4xl font-bolder bungee-regular">{plan.price}</div>
      </div>
      <div className="flex justify-center mt-4">
        <a className="border px-6 py-2 rounded-full gradient" target="_blank" href={info.whatsapp}>{t("general.get_started")}</a>
      </div>
    </div>
  );

  return (
    <Layout data={info} bgImage={images.bg_2}>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <div className="flex flex-col w-full sm:w-1/4">
          <div className="bg-purplelight p-2 flex mx-auto -mb-12 relative z-20 aspect-square rounded-full">
            <img className="w-24" src={images.icon_basic} alt="" />
          </div>
          {renderPlanItems(info.plansPage.short)}
        </div>
        <div className="flex flex-col w-full sm:w-1/4">
        <div className="bg-purplelight p-2 flex mx-auto -mb-12 relative z-20 aspect-square rounded-full">
            <img className="w-24" src={images.icon_pro} alt="" />
          </div>
          {renderPlanItems(info.plansPage.medium)}
        </div>
        <div className="flex flex-col w-full sm:w-1/4">
        <div className="bg-purplelight p-2 flex mx-auto -mb-12 relative z-20 aspect-square rounded-full">
            <img className="w-24" src={images.icon_advanced} alt="" />
          </div>
          {renderPlanItems(info.plansPage.large)}
        </div>
      </div>
    </Layout>
  );
};

export default PlansPage;

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
