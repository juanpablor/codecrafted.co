import * as React from "react"
import { HeadFC, PageProps, graphql } from "gatsby"
import Layout from "./layout"
import data from "../data/data.json";
import { Company } from "../interfaces";

const info:Company = data[0];

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout >
      <h1>404 error page</h1>
    </Layout>
  )
}

export default NotFoundPage

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