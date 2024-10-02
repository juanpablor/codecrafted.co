import * as React from "react"
import { graphql, type HeadFC, type PageProps } from "gatsby"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { Company } from "../interfaces";
import data from "../data/data.json";
import Layout from "./layout";
import images from "../images";

const info: Company = data[0];

const IndexPage: React.FC<PageProps> = () => {
  const { t } = useTranslation();
  return (
    <Layout data={info} bgImage={images.bg_1}>
      <div className="h-screen">


      </div>
      <h1>{t("welcome")}</h1>
      <p>{info.homePage.title}</p>
    </Layout>
  )
}

export default IndexPage;

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