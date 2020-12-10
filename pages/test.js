import React from "react";
import Cite from "citation-js";
import references from "../public/references.bib";
import locale from "../public/locales-fr-CA.xml";
import style from "../public/apa-fr-provost.csl";
import Processor from "simple-cite";

const Test = (props) => {
  //Cite will read and parse the bibtex file... somehow idk
  const all = new Cite(references);

  //Just grab the array. actually CSL JSON at this point
  const items = all.get({ type: "json" });

  console.log(items);

  //Instantiate immediate reference processor
  const processor = new Processor({ items, style, locale });

  //Process the citation
  const cite = processor.cite({
    citationItems: [
      {
        id: "vial_voir_2016",
      },
    ],
  });

  const bibliography = processor.bibliography();

  console.log(cite, bibliography);

  return <span>{cite.value}</span>;
};

export default Test;
