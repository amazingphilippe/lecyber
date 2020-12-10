import theme from "../theme";

export default {
  boxShadow: "none",
  d: "flex",
  color: "accent.dark",
  _hover: {
    color: "accent.light",
    bg: "black",
    boxShadow: `inset 0 -2ex 0 ${theme.colors.black}`,
    _after: {
      backgroundImage: `repeating-radial-gradient(${theme.colors.white}, ${theme.colors.white} 2px, ${theme.colors.black} 2px, ${theme.colors.black} 3px)`,
    },
  },
  _focus: {
    color: "accent.light",
    bg: "black",
    boxShadow: `inset 0 -2ex 0 ${theme.colors.black}`,
    _after: {
      backgroundImage: `repeating-radial-gradient(${theme.colors.white}, ${theme.colors.white} 2px, ${theme.colors.black} 2px, ${theme.colors.black} 3px)`,
    },
  },
  _after: {
    content: '""',
    flexGrow: 1,
    ml: 2,
    backgroundAttachment: "fixed",
  },
};
