import React from "react";
import Layout from "./layout";
import data from "../data/data.json";
import { Company } from "../interfaces";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { graphql, HeadFC, PageProps } from "gatsby";
import Collapsible from "../components/collapsible"; // Importa el componente
import images from "../images";

const info: Company = data[0];

const ServicesPage: React.FC<PageProps> = () => {
  const { t } = useTranslation();

  return (
    <Layout data={info} bgImage={images.bg_2}>
      <div className="flex flex-col sm:flex-row mx-auto gap-4 w-full sm:w-3/4">

        <div className={styles.wrapper}>
          <h2 className="text-xl text-center">{t("servicesPage.subtitle_1")}</h2>
          <Collapsible development={info.servicesPage.web} />
        </div>

        <div className={styles.wrapper}>
          <h2 className="text-xl text-center">{t("servicesPage.subtitle_2")}</h2>
          <Collapsible development={info.servicesPage.design} />
        </div>

      </div>
    </Layout>
  );
};

export default ServicesPage;

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

const styles = {
  wrapper: "w-full sm:w-1/2 border-2 border-purplesemilight rounded-2xl gradient p-2 sm:p-6 grow"
}