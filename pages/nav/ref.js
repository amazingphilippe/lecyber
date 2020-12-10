import { chakra, Heading } from "@chakra-ui/react";

import locale from "../../public/locales-fr-CA.xml";
import style from "../../public/apa-fr-provost.csl";
import Processor from "simple-cite";
import items from "../../public/references";

import styles from "../../styles/Bib.module.css";

const References = (props) => {
  const bibliography = [];
  items.map((item) => {
    const processor = new Processor({ items, style, locale });
    const cite = processor.cite({ citationItems: [{ id: item.id }] });
    bibliography.push({ bib: processor.bibliography().value, id: item.id });
  });

  bibliography.sort((a, b) => {
    return a.bib.localeCompare(b.bib);
  });

  return (
    <div className={styles.bib}>
      <chakra.h1>Références</chakra.h1>
      {bibliography.map((item, key) => (
        <chakra.p key={key} mt={5} id={item.id} className={styles.bibItem}>
          {item.bib}
        </chakra.p>
      ))}
    </div>
  );
};

export default References;
