import React from "react";
import Layout from "./layout";
import data from "../data/data.json";
import { Company } from "../interfaces";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { graphql, HeadFC, PageProps } from "gatsby";
import images from "../images";
import { BiLogoInstagramAlt } from "react-icons/bi";
import {
  FaSquareFacebook,
  FaSquareWhatsapp,
  FaSquarePhone,
  FaLinkedin
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";

const info: Company = data[0];

const ContactPage: React.FC<PageProps> = () => {
  const { t } = useTranslation();

  return (
    <Layout data={info} bgImage={images.bg_2}>
      <section className={styles.wrapper}>

        <div className={styles.intro}>{t(`contactPage.${info.contactPage.copy}`)}</div>

        <article className={styles.infoBlock}>

          <div className={`${styles.socialContainer} gradient-reverse`}>
            <h3 className={styles.subtitle}>{t("contactPage.lets_talk")}</h3>
            <section className={`${styles.links} flex-col`}>
              <a href={`tel:${info.phone}`} className={styles.inlineLinks}>
                <FaSquarePhone />
                <span>{info.phone}</span>
              </a>
              <a href={`mailto:${info.email}?subject=Contact from the website`} className={styles.inlineLinks}>
                <MdEmail />
                <span>{info.email}</span>
              </a>
              <div className={styles.inlineLinks}>
                <ImLocation2 />
                <span>{info.city}, {info.province}, {info.country}</span>
              </div>
            </section>             
          </div>

          <div className={`${styles.socialContainer} gradient`}>
            <h3 className={styles.subtitle}>{t("contactPage.follow_us")}</h3>
            <section className={styles.links}>
              <a href={info.instagram} target="_blank" className={styles.iconWrapper}>
                <BiLogoInstagramAlt className={styles.icon} />
              </a>
              <a href={info.facebook} target="_blank" className={styles.iconWrapper}>
                <FaSquareFacebook className={styles.icon} />
              </a>
              <a href={`https://wa.me/${info.whatsapp}`} target="_blank" className={styles.iconWrapper}>
                <FaSquareWhatsapp className={styles.icon} />
              </a>
              <a href={info.linkedin} target="_blank" className={styles.iconWrapper}>
                <FaLinkedin className={styles.icon} />
              </a>
            </section>
          </div>

        </article>

      </section>

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

const styles = {
  intro: "text-xl",
  links: "flex gap-4 text-purplesemilight justify-center mt-8 text-2xl",
  wrapper: "w-full sm:w-1/2 mx-auto text-center text-purplelight",
  iconWrapper: "block p-4 rounded-full bg-purplelight hover:bg-purplesemilight hover:text-purplelight transition duration-[600ms]",
  inlineLinks: "flex flex-row items-center gap-2",
  icon: "text-[3rem] sm:text-[5rem]",
  infoBlock: "flex flex-col sm:flex-row justify-center gap-4 mt-12",
  socialContainer: "rounded-3xl py-16 px-8",
  subtitle: "text-3xl bungee-regular"
};
