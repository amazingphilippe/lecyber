import { extendTheme, theme } from "@chakra-ui/react";

const colors = {
  gray: {
    50: "#fbfbfb",
    100: "#d8d8d8",
    200: "#b9b9b9",
    300: "#9d9d9d",
    400: "#848484",
    500: "#6d6d6d",
    600: "#585858",
    700: "#434343",
    800: "#2e2e2e",
    900: "#121212",
  },
  yellow: {
    50: "#FFF7DD",
    100: "#FFEBAF",
    200: "#FDDD83",
    300: "#F7CE5B", //my yellow
    400: "#DCAE47",
    500: "#B98E35",
    600: "#956F26",
    700: "#725019",
    800: "#4F340F",
    900: "#2B1B07",
  },
  blue: {
    50: "#d6dbfe",
    100: "#b2bbfe",
    200: "#909cfe",
    300: "#7080fe",
    500: "#5064fe",
    600: "#2c44fe",
    700: "#2539d3",
    800: "#1d2da8",
    900: "#121c69",
  },
  accent: {
    dark: "#754c03",
    light: "#e8c588",
  },
  white: "#FAF8F8",
  black: "#1A181B",
};

const HEADING = {
  maxW: "50ch",
  lineHeight: "none",
  mb: 2,
};

const overrides = {
  colors: colors,
  fonts: {
    body: "TokenSans",
    heading: "Token",
    mono: "TokenMono",
  },
  letterSpacings: {
    ridiculous: "0.15em",
  },
  styles: {
    global: {
      ":root": {
        "--accent-dark": colors.accent.dark,
        "--accent-light": colors.accent.light,
        "--black": colors.black,
        "--white": colors.white,
      },
      body: {
        color: "black",
        bg: "white",
        counterReset: "sidenote-counter",
      },
      a: {
        color: "accent.dark",
        fontWeight: "medium",
        boxShadow: `inset 0 -1px 0 ${colors.accent.dark}`,
        _hover: {
          boxShadow: `inset 0 -2ex 0 ${colors.black}`,
          color: "accent.light",
        },
        _focus: {
          boxShadow: `inset 0 -2ex 0 ${colors.black}`,
          color: "accent.light",
          outline: "none",
        },
      },
      h1: {
        ...HEADING,
        fontFamily: "TokenSans",
        fontWeight: "light",
        fontSize: "6xl",
        maxW: "20ch",
      },
      h2: {
        ...HEADING,
        fontFamily: "Token",
        fontStyle: "italic",
        mt: 12,
        fontSize: "4xl",
      },
      h3: {
        ...HEADING,
        fontFamily: "Token",
        fontStyle: "italic",
        mt: 12,
        fontSize: "2xl",
        lineHeight: "tight",
      },
      //Tufte: Don't dare put more than 3 levels
      "p, ol, ul, th, td": {
        maxW: "60ch",
        mb: 0,
        fontSize: "lg",
      },
      "p, li, th, td": {
        mt: 3,
      },
      //Tufte: lists need no bullets, no numbers. AWAY with it!
      "ul, ol": {
        mb: 12,
        mt: 6,
        listStyle: "none",
      },
      li: {
        lineHeight: "shorter",
      },
      "p + p": {
        mt: 0,
        textIndent: theme.sizes[8],
      },
      blockquote: {
        m: 8,
        lineHeight: "short",
        fontSize: "md",
        maxW: "45ch",
        letterSpacing: "tight",
      },
    },
  },
  components: {
    Link: {
      baseStyle: {
        transition: "none",
        m: 0,
      },
    },
  },
};

export default extendTheme(overrides);
