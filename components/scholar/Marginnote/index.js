import { chakra } from "@chakra-ui/react";
import React from "react";
import parse from "remark-parse";
import remark2react from "remark-react";
import unified from "unified";
import styles from "./Marginnote.module.css";

export const Marginnote = (props) => {
  return (
    <p>
      <chakra.label htmlFor={`${props.id}-toggle`} d="none" />
      <chakra.input id={`${props.id}-toggle`} type="checkbox" d="none" />
      <chakra.span
        id={props.id}
        className={styles.marginnote}
        fontSize="sm"
        top="0.7ex"
        _before={{
          pos: "absolute",
          width: 2,
          height: "calc(100% - 1rem + 0.7ex)",
          left: -3,
          bottom: 0,
          color: "black",
          boxShadow: "inset 0 1px 0 currentColor",
          content: '""',
        }}
      >
        {
          unified()
            .use(parse)
            .use(remark2react, {
              remarkReactComponents: {
                p: React.Fragment,
              },
            })
            .processSync(props.children).result
        }
      </chakra.span>
    </p>
  );
};
/**
 * 
 * content: "";
    position: absolute;
    width: 15%;
    height: calc(100% - 2ex);
    left: -20%;
    bottom: 0;
    box-shadow: 0 -1px 0 $text-color;
 */
