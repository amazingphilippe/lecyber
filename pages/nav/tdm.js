//For Next to fetch mdx files
import fs from "fs";
import path, { relative } from "path";

//To generate TOC
import toc from "mdast-util-toc";
import remark from "remark";
import toHast from "mdast-util-to-hast";

//For the layout
import { Box, chakra, flexbox } from "@chakra-ui/react";
import FunkyLink from "../../styles/FunkyLink.module.css";

import { useRouter } from "next/router";
import { Layout } from "../../components/Layout";

//Settings. This is somewhat manual. Could be broken off of this file if made into a component
const options = [
  { filename: "introduction.mdx", counter: false },
  { filename: "metho.mdx" },
  { filename: "cadre-theorique.mdx" },
  { filename: "harmonisation.mdx" },
  { filename: "etudes-de-cas.mdx" },
  { filename: "resultats-de-la-recherche.mdx" },
  { filename: "conclusion.mdx", counter: false },
];

/**
 * Recursive react component that dives into a hast tree.
 * Technically safe in a way where a hast tree should end at a text node.
 */
const TDMItem = (props) => {
  const href =
    props.item.tagName === "a"
      ? `/essai/${props.part}${props.item.properties.href}`
      : false;
  const router = useRouter();
  return (
    <>
      {props.item.type === "element" ? (
        <Box
          as={props.item.tagName}
          my={0}
          {...(props.item.tagName === "ul" && {
            as: "ol", //override default unordered list
            ml: 16,
            d: "flex",
            flexDirection: "column",
          })}
          {...(props.item.tagName === "a" && {
            d: "flex",
            w: "100%",
            _before: {
              w: 16,
              flexShrink: 0,
              mr: 0,
              content: '""',
            },
            borderBottom: "1px",
            borderColor: "accent.dark",
            className: FunkyLink.funkyLink,
          })}
          {...(props.item.tagName === "a" &&
            router.pathname.includes(props.part) && {
              bg: "gray.100",
            })}
          //Counter stuff
          {...(props.counter &&
            props.item.tagName === "ul" && {
              style: { counterReset: "item" },
            })}
          {...(props.counter &&
            props.item.tagName === "li" && {
              style: { counterIncrement: "item" },
            })}
          {...(props.counter &&
            props.item.tagName === "a" && {
              _before: {
                w: 16,
                flexShrink: 0,
                mr: 0,
                content: 'counters(item, ". ")". "',
              },
            })}
          {...props.item.properties}
          {...(href && { href: href })}
        >
          {props.item.children &&
            props.item.children.map((item, index) => (
              <TDMItem
                key={index}
                item={item}
                part={props.part}
                counter={props.counter}
              />
            ))}
        </Box>
      ) : (
        props.item.value && props.item.value
      )}
    </>
  );
};

/**
 * The TDM component exports the entire Table of content. Table des matières en francais. Deal wiv it
 * parses content of files obtained from the getStaticProps function below
 * creates a hast by converting a md hast map obtained by the toc plugin
 */
export function TDM(props) {
  return (
    <chakra.ol my={0} listStyleType="none" w="100%">
      {props.posts.map((post) => {
        const part = post.filename.replace(/\.mdx$/, "");
        //console.log(toc(JSON.parse(post.nodes)));
        const tree = remark.parse(post.content);
        const huzzah = toHast(toc(tree, { maxDepth: props.maxDepth }).map)
          .children[1];
        //console.log(post.counter);
        return (
          <TDMItem
            key={part}
            item={huzzah}
            part={part}
            counter={post.counter}
          />
        );
      })}
    </chakra.ol>
  );
}

TDM.defaultProps = {
  maxDepth: 3,
};

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), "pages/essai");
  //const filenames = fs.readdirSync(postsDirectory);

  const posts = options.map((option) => {
    const filePath = path.join(postsDirectory, option.filename);
    const fileContents = fs.readFileSync(filePath, "utf8");

    // Generally you would parse/transform the contents
    // For example you can transform markdown to HTML here

    return {
      filename: option.filename,
      content: fileContents,
      counter: option.counter !== undefined ? option.counter : true,
    };
  });
  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}

export const miniTDM = [
  { filename: "introduction.mdx", content: "# Introduction", counter: false },
  { filename: "metho.mdx", content: "# Méthodologie", counter: true },
  {
    filename: "cadre-theorique.mdx",
    content: "# Cadre Théorique",
    counter: true,
  },
  {
    filename: "harmonisation.mdx",
    content: "# Harmonisation des processus de la muséalisation",
    counter: true,
  },
  { filename: "etudes-de-cas.mdx", content: "# Études de cas", counter: true },
  {
    filename: "resultats-de-la-recherche.mdx",
    content: "# Résultats de la recherche appliquée",
    counter: true,
  },
  { filename: "conclusion.mdx", content: "# Conclusion", counter: false },
];

export const meta = {
  title: "Table des matières",
};

function TDMPage(props) {
  return (
    <Layout meta={meta}>
      <TDM posts={props.posts} />
    </Layout>
  );
}

export default TDMPage;
