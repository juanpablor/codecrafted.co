import * as React from "react"
import { graphql, type HeadFC, type PageProps } from "gatsby"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { Company } from "../interfaces";
import data from "../data/data.json";
import Layout from "./layout";

const info: Company = data;

const IndexPage: React.FC<PageProps> = () => {
  const { t } = useTranslation();
  return (
    <Layout data={info}>
      <h1>{t("welcome")}</h1>
      <p>{info.homePage.title}</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto libero nam, culpa enim ipsa assumenda dolorem fuga provident suscipit optio fugiat aut nobis perspiciatis minus, velit aliquid debitis sunt pariatur?</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque quae itaque, delectus blanditiis voluptates minima asperiores, assumenda quis vel quos et quia! Unde quas ullam aut veritatis, totam sequi fugit.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dolorum qui hic consequuntur, labore dignissimos aliquid! Nesciunt eum explicabo perspiciatis, necessitatibus cum in doloribus nobis corporis, repellendus praesentium sit consectetur!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut necessitatibus aperiam porro corrupti eligendi exercitationem, aliquid et perferendis vel dolores ullam impedit, sapiente ratione rerum! Quam quod possimus expedita ad?</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, officia porro! Dolores aliquam in, accusamus beatae maxime, laudantium, temporibus ea magnam minus excepturi obcaecati corporis quam repudiandae dolorem impedit labore!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa recusandae blanditiis iste est sint maxime inventore, dolorem totam et asperiores ducimus minima. Perspiciatis doloribus sequi amet perferendis itaque, voluptas facilis.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto incidunt unde nisi tenetur facere laudantium aliquid nam quisquam, similique labore consequuntur voluptates facilis quidem velit non? Maiores aliquid soluta explicabo.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nesciunt, nam delectus dolore harum doloremque possimus consequatur libero necessitatibus minima facilis repellendus quia quo illum quam voluptatibus quae tenetur assumenda.</p>
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