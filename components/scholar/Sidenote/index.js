import { chakra } from "@chakra-ui/react";
import styles from "./Sidenote.module.css";

export const Sidenote = (props) => {
  return (
    <>
      <chakra.input id={props.id} type="checkbox" className={styles.control} />
      <chakra.label
        htmlFor={props.id}
        className={styles.number}
        _after={{
          fontFamily: "mono",
          content: "counter(sidenote-counter)",
          ml: 1,
          top: -1,
          fontSize: "sm",
          fontWeight: "bold",
        }}
        aria-describedby={`sidenote-${props.id}`}
      >
        <chakra.span className={styles.label}>Note: </chakra.span>
      </chakra.label>
      <chakra.span
        id={`sidenote-${props.id}`}
        className={styles.sidenote}
        fontSize="sm"
        mb={4}
        mt="4px"
        top={-1}
        _before={{
          fontFamily: "mono",
          fontWeight: "bold",
          color: "accent.dark",
          content: 'counter(sidenote-counter) ". "',
        }}
      >
        {props.children}
      </chakra.span>
    </>
  );
};
