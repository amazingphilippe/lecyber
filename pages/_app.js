import { ChakraProvider, VStack } from "@chakra-ui/react";
import "../styles/globals.css";
import theme from "../theme";
import { Layout } from "../components/Layout";

//fonts
import "../public/typical/Token/ical.css";
import "../public/typical/TokenMono/ical.css";
import "../public/typical/TokenSans/ical.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
