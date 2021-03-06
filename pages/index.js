import { Box } from "@chakra-ui/react";

import { TDM, miniTDM } from "./nav/tdm";
import Resume from "./resume.mdx";
import Dietz from "./epigraphes/dietz.mdx";
import Kalin from "./epigraphes/kalin.js";
import { Layout } from "../components/Layout";

export const meta = {};

const Index = () => {
  return (
    <Layout>
      <Box>
        <Resume />
      </Box>
      <Box w="100%">
        <TDM posts={miniTDM} />
      </Box>
      <Box px={8}>
        <Dietz />
      </Box>
      <Box maxW="60ch" fontSize="lg">
        <Kalin />
      </Box>
    </Layout>
  );
};

export default Index;
