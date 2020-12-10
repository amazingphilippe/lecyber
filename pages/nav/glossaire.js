import { chakra, Heading } from "@chakra-ui/react";
import React from "react";
import parse from "remark-parse";
import remark2react from "remark-react";
import unified from "unified";

import jargon from "../../public/jargon";

const Glossaire = (props) => {
  return (
    <div>
      <chakra.h1>Glossaire</chakra.h1>
      <chakra.dl maxW="60ch">
        {Object.keys(jargon).map((key, i) => (
          <React.Fragment key={i}>
            <chakra.dt
              fontFamily="Token"
              mr={4}
              mt={5}
              color="#4d5750"
              fontSize="3xl"
            >
              {key}
            </chakra.dt>
            <chakra.dd>
              {
                unified()
                  .use(parse)
                  .use(remark2react, {
                    remarkReactComponents: {
                      p: React.Fragment,
                    },
                  })
                  .processSync(jargon[key]).result
              }
            </chakra.dd>
          </React.Fragment>
        ))}
      </chakra.dl>
    </div>
  );
};

export default Glossaire;
