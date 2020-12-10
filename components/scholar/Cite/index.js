import React from "react";
import PropTypes from "prop-types";

import locale from "../../../public/locales-fr-CA.xml";
import style from "../../../public/apa-fr-provost.csl";
import Processor from "simple-cite";
import items from "../../../public/references";

import {
  chakra,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Tooltip,
} from "@chakra-ui/react";
import theme from "../../../theme";

export const Citation = (props) => {
  //Cite will read and parse the bibtex file... somehow idk
  //const all = new Cite(references);

  //Just grab the array. actually CSL JSON at this point
  //const items = all.get({ type: "json" });

  //console.log(items);

  //Instantiate immediate reference processor
  const processor = new Processor({ items, style, locale });

  //Allow for group citation by manipulating props.id as an array
  //Default value will have to be merged
  //Locator can also be an array

  let citationItems = [
    {
      id: props.id,
      label: props.label || null,
      prefix: props.prefix || null,
      suffix: props.suffix || null,
      locator: props.locator || null,
      "suppress-author": props.suppressAuthor || false,
      "author-only": props.authorOnly || false,
    },
  ];

  Array.isArray(props.id) &&
    props.id.map((id, index) => {
      citationItems[index] = {
        id: props.id[index],
        label: props.label ? props.label[index] : null,
        prefix: props.prefix ? props.prefix[index] : null,
        suffix: props.suffix ? props.suffix[index] : null,
        locator: props.locator ? props.locator[index] : null,
        "suppress-author": props.suppressAuthor
          ? props.suppressAuthor[index]
          : false,
        "author-only": props.authorOnly ? props.authorOnly[index] : false,
      };
    });

  //Process the citation
  const cite = processor.cite({
    citationItems: citationItems,
  });

  const bibliography = processor.bibliography();

  //console.log(cite, bibliography);

  return (
    <Tooltip
      label={bibliography.value}
      placement="bottom-start"
      p={8}
      borderRadius={0}
      border="1px"
      bg="white"
      color="black"
      transition="none"
      boxShadow="none"
      offset={[0, 16]}
    >
      <chakra.a whiteSpace={{ sm: "nowrap" }} href={`/nav/ref#${props.id}`}>
        {cite.value}
      </chakra.a>
    </Tooltip>
  );
};

Citation.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  prefix: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  suffix: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  locator: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
  suppressAuthor: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
  authorOnly: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
};
