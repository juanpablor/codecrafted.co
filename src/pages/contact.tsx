import React from "react";
import Layout from "./layout";
import data from "../data/data.json";
import { Company } from "../interfaces";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { graphql, HeadFC, PageProps } from "gatsby";
import images from "../images";

const info: Company = data[0];

const ContactPage: React.FC<PageProps> = () => {
  const { t } = useTranslation();

  return (
    <Layout data={info} bgImage={images.bg_2}>
      <h1>{t("plansPage.title")}</h1>

    </Layout>
  );
};

export default ContactPage;

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
