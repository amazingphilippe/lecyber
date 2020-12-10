const remarkHeadingID = require("remark-heading-id");
const remarkSlug = require("remark-slug");
const remarkJargon = require("./lib/remark-jargon");
const jargon = require("./public/jargon.js");

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      remarkHeadingID,
      remarkSlug,
      [remarkJargon, { jargon: jargon }],
    ],
  },
});

module.exports = withMDX({
  //Next
  pageExtensions: ["js", "jsx", "mdx"],

  //Webpack
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    config.module.rules.push({
      test: /\.bib$|\.csl|\.xml$/,
      use: "raw-loader",
    });

    config.module.rules.push({
      test: /\.(csljson)$/,
      use: [
        {
          loader: "file-loader",
        },
      ],
    });

    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: "empty",
      };
    }

    // Important: return the modified config
    return config;
  },
});
