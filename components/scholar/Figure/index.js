import { Box, chakra, Text } from "@chakra-ui/react";
import React from "react";
import parse from "remark-parse";
import remark2react from "remark-react";
import unified from "unified";

export const Figure = (props) => {
  return (
    <>
      <chakra.img
        src={props.src}
        alt={props.alt}
        maxHeight={80}
        my={10}
        mx="auto"
      />
      <Box w="100%" d="flex">
        <Text
          align="center"
          fontSize="sm"
          fontWeight="medium"
          pos="relative"
          border="1px"
          d="inline-block"
          px={5}
          py={3}
          mx="auto"
          mt="-1px"
          _before={{
            content: '""',
            pos: "absolute",
            d: "block",
            w: "50%",
            top: -10,
            left: 0,
            height: 10,
            boxShadow: "1px 0 0 currentColor",
            color: "black",
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
        </Text>
      </Box>
    </>
  );
};
