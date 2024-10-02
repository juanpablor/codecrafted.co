import React, { useState } from "react";
import { WebDevelopment } from "../interfaces";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";

interface CollapsibleProps {
  development: WebDevelopment;
}

const Collapsible: React.FC<CollapsibleProps> = ({ development }) => {
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
    <div className="flex relative z-20">
      <ul className="flex flex-col gap-4 mt-6 w-full">
        {development.items.map((item, idx) => (
          <li key={idx} className="w-full">
            {item.title && (
              <h3 onClick={() => toggleItem(idx)} className={styles.trigger}>
                {t(`servicesPage.${item.title}`)}{" "}
                {openItems.includes(idx) ? <BiUpArrow className="w-2 self-center ml-2" /> : <BiDownArrow className="w-2 self-center ml-2" />}
              </h3>
            )}
            {openItems.includes(idx) && item.copy && (
              <div className={styles.content}>{t(`servicesPage.${item.copy}`)}</div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Collapsible;

const styles = {
  trigger: "flex flex-row p-0 rounded-lg cursor-pointer text-md",
  content: "text-xs text-purplesemilight"
};
