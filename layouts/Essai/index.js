import { Box } from "@chakra-ui/react";
import { TDM, miniTDM } from "../../pages/nav/tdm";

export const Essai = ({ children }) => {
  return (
    <Box as="article" maxW={{ base: "100%", md: "calc(66.66% - 0.75rem)" }}>
      {children}
      <Box mt={40} w="100%">
        <TDM posts={miniTDM} />
      </Box>
    </Box>
  );
};
