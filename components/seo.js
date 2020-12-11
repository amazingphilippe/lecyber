import Head from "next/head";
import config from "../site.config";

export default function SEO({ meta, description, title }) {
  const siteTitle = config.title;
  const pageTitle = meta?.title ? `${meta.title} dans ` : "";
  return (
    <Head>
      <title>{`${pageTitle}${siteTitle}`}</title>
      <meta name="description" content={meta?.description || description} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:url" content={config.url} />
      <meta property="og:image" content={`${config.url}${config.image}`} />
      <meta property="og:type" content={config.type} />
      <meta
        property="og:description"
        content={meta?.description || description}
      />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:creator" content={config.social.twitter} />
      <meta property="twitter:title" content={title} />
      <meta
        property="twitter:description"
        content={meta?.description || description}
      />
    </Head>
  );
}
