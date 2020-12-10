import { VStack, Grid, GridItem, chakra } from "@chakra-ui/react";
import Head from "next/head";
import TDM, { miniTDM } from "../../pages/nav/tdm";
import { Header } from "../Header";
import site from "../../site.config";

import React from "react";
import parse from "remark-parse";
import remark2react from "remark-react";
import unified from "unified";
import { Markdown } from "../Markdown";
import styles from "./Layout.module.css";

export const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content={site.description || ""}></meta>
        <title>{site.title || ""}</title>
      </Head>
      <VStack direction="column" align="start" px={3} minH="100vh" spacing={40}>
        <Header site={site} nav={site.nav} />
        {children}
        <chakra.footer
          p={8}
          border="1px"
          borderColor="accent.dark"
          borderBottom="none"
          mt="auto"
          w="100%"
          className={styles.footer}
        >
          {Object.keys(site.colophon).map((key, i) => (
            <Grid
              key={i}
              as="dl"
              templateColumns="repeat(7, 1fr)"
              gap={0}
              w="100%"
            >
              <GridItem colSpan={{ base: 3, md: 1 }} as="dt" borderBottom="1px">
                {key}
              </GridItem>
              <GridItem as="dd" colSpan={4} borderBottom="1px">
                <Markdown>{site.colophon[key]}</Markdown>
              </GridItem>
            </Grid>
          ))}
        </chakra.footer>
      </VStack>
    </>
  );
};
