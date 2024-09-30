import React from "react";
import Layout from "./layout";
import data from "../data/data.json";
import { Company, itemPlan } from "../interfaces";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { graphql, HeadFC, PageProps } from "gatsby";

const info: Company = data;

const PlansPage: React.FC<PageProps> = () => {
    const { t } = useTranslation();

    const renderPlanItems = (plan: itemPlan) => (
        <div className="border-2 border-purplesemilight rounded-2xl gradient">
            <h2>{t(`plansPage.${plan.title}`)}</h2>
            <h2>{t(`plansPage.${plan.subtitle}`)}</h2>
            <ul>
                {plan.items.map((item, index) => (
                    <li key={index}>{t(`plansPage.${item.title}`)}</li>
                ))}
            </ul>
            <p>{plan.price}</p>
        </div>
    );

    return (
        <Layout data={info}>
            <h1>{t("plansPage.title")}</h1>
            <div className="grid grid-flow-col justify-stretch gap-4">
                {renderPlanItems(info.plansPage.short)}
                {renderPlanItems(info.plansPage.medium)}
                {renderPlanItems(info.plansPage.large)}
            </div>
        </Layout>
    );
};

export default PlansPage;

export const Head: HeadFC = () => <title>{info.companyName}</title>;

export const query = graphql`
  query($language: String!) {
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
