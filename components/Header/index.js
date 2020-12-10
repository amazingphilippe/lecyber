import { chakra, Heading, Grid, GridItem } from "@chakra-ui/react";
import FunkyLink from "../../styles/FunkyLink.module.css";
import styles from "./Header.module.css";

export const Header = ({ site, nav }) => {
  return (
    <Grid
      templateColumns="repeat(7, 1fr)"
      gap={5}
      w="100%"
      className={styles.header}
    >
      <GridItem colSpan={8}>
        <Heading
          as="a"
          fontSize={{ base: "2xl", sm: "5xl" }}
          fontWeight="normal"
          textTransform="uppercase"
          letterSpacing="ridiculous"
          href="/"
        >
          {site.title}
        </Heading>
      </GridItem>
      <GridItem as="ul" colSpan={{ base: 3, md: 2, lg: 1 }} m={0}>
        <chakra.li color="accent.dark">
          <chakra.a href={site.author_url} className={FunkyLink.funkyLink}>
            {site.author}
          </chakra.a>
        </chakra.li>

        <chakra.li>{site.type}</chakra.li>
        <chakra.li>{site.publication}</chakra.li>
      </GridItem>

      <GridItem as="ul" colSpan={{ base: 4, lg: 2 }} m={0}>
        {nav.map((item, index) => (
          <chakra.li key={index} color="accent.dark">
            <chakra.a href={item.href} className={FunkyLink.funkyLink}>
              {item.name}
            </chakra.a>
          </chakra.li>
        ))}
      </GridItem>
    </Grid>
  );
};
