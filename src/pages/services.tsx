import React from "react";
import Layout from "./layout";
import data from "../data/data.json";
import { Company } from "../interfaces";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { graphql, HeadFC, PageProps } from "gatsby";
import Collapsible from "../components/collapsible";
import images from "../images";

const info: Company = data[0];

const ServicesPage: React.FC<PageProps> = () => {
  const { t } = useTranslation();

  return (
    <Layout data={info} bgImage={images.bg_2}>
      <div className={styles.wrapper}>
        
        <div className={styles.columns}>
          <h2 className={styles.subtitles}>{t("servicesPage.subtitle_1")}</h2>
          <Collapsible development={info.servicesPage.web} alignText="right" />
        </div>

        <div className={styles.columns}>
          <h2 className={styles.subtitles}>{t("servicesPage.subtitle_2")}</h2>
          <Collapsible development={info.servicesPage.design} gradientReverse={true} />
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
  wrapper: "flex flex-col sm:flex-row gap-4 w-full justify-center",
  columns: "w-full sm:w-1/2 md:w-1/3",
  subtitles: "text-3xl text-center bungee-regular",
}