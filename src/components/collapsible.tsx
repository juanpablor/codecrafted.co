import React, { useState } from "react";
import { WebDevelopment } from "../interfaces";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";

interface CollapsibleProps {
  development: WebDevelopment;
  alignText? :string;
  gradientReverse?: boolean;
}

const Collapsible: React.FC<CollapsibleProps> = ({ development, alignText, gradientReverse }) => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const { t } = useTranslation();

  const toggleItem = (index: number) => {
    if (openItems.includes(index)) {
      setOpenItems(openItems.filter((item) => item !== index));
    } else {
      setOpenItems([...openItems, index]);
    }
  };

  return (
    <div className={styles.wrapper}>
      <ul className={styles.items}>
        {development.items.map((item, idx) => (
          <li key={idx} className={`p-8 ${gradientReverse ? "gradient" : "gradient-reverse"}`}>
            {item.title && (
              <h3 onClick={() => toggleItem(idx)} className={`${styles.trigger} ${alignText === 'right'? "justify-center sm:justify-end text-center sm:text-right": "justify-center sm:justify-start"}`}>
                {t(`servicesPage.${item.title}`)}{" "}
                {openItems.includes(idx) ? <BiUpArrow className="w-2 self-center ml-2" /> : <BiDownArrow className="w-2 self-center ml-2" />}
              </h3>
            )}
            {openItems.includes(idx) && item.copy && (
              <div className={`${styles.content} ${alignText === "right" ? "text-center sm:text-right":"text-center sm:text-left"}`}>{t(`servicesPage.${item.copy}`)}</div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Collapsible;

const styles = {
  wrapper: "flex relative z-20",
  items: "flex flex-col gap-4 mt-6 w-full",
  trigger: "flex flex-row p-0 rounded-lg cursor-pointer text-md bungee-regular",
  content: "text-sm text-purplesemilight"
};
