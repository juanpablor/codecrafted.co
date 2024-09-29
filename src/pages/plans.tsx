import React from "react";
import Layout from "./layout";
import data from "../data/data.json";
import { Company } from "../interfaces";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { graphql, HeadFC, PageProps } from "gatsby";

const info:Company = data;

const PlansPage:React.FC<PageProps> = () => {
    const { t } = useTranslation();
    return (
        <Layout data={info}>
            <h1>{t("plansPage.title")}</h1>
            <p>{info.plansPage.title}</p>
        </Layout>
        )
}

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