import React, { useState } from "react";
import { WebDevelopment } from "../interfaces";
import { useTranslation } from "gatsby-plugin-react-i18next";

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
    <div className="flex justify-center">
      <ul className="flex flex-col gap-4 mt-6">
        {development.items.map((item, idx) => (
          <li key={idx} className="w-full sm:w-[430px] text-center">
            {item.title && (
              <h3 onClick={() => toggleItem(idx)} className={styles.trigger}>
                {t(`servicesPage.${item.title}`)}{" "}
                {openItems.includes(idx) ? "-" : "+"}
              </h3>
            )}
            {openItems.includes(idx) && item.copy && (
              <p>{t(`servicesPage.${item.copy}`)}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Collapsible;

const styles = {
  trigger: "p-2 rounded-lg cursor-pointer gradient",
};
