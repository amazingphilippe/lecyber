import React from "react";
import parse from "remark-parse";
import remark2react from "remark-react";
import unified from "unified";

export const Markdown = (props) => {
  return unified()
    .use(parse)
    .use(remark2react, {
      remarkReactComponents: {
        p: React.Fragment,
      },
    })
    .processSync(props.children).result;
};
