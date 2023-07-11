import React, { FC } from 'react';
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from 'gatsby';

interface Props {
    title: string;
    description?: string;
    lang?: string;
    keywords?: string[];
    meta?: any[];
}

const PageHead: FC<Props> = ({
                            title,
                            description = ``,
                            lang = `en`,
                            meta = [],
                            keywords = []
                        }) => {
    const {site} = useStaticQuery(
        graphql`
          query {
            site {
              siteMetadata {
                title
                description
                author
                siteUrl
              }
            }
          }
    `
    );

    const location = useLocation();
    const canonical = site.siteMetadata.siteUrl + location.pathname;
    const siteTitle = title || site.siteMetadata.title;
    const metaDescription = description || site.siteMetadata.description;

    return (
      <>
        <html lang={lang} />
        <title>{siteTitle}</title>
        <link rel="canonical" href={canonical}/>
        <link rel="icon" href=""/>

        <meta name="description" content={metaDescription} />

        <meta property="og:url" content={canonical} />
        <meta property="og:site_name" content={siteTitle} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={metaDescription} />

        <meta property="twitter:card" content="summary" />
        <meta property="twitter:creator" content={site.siteMetadata.author} />
        <meta property="twitter:title" content={siteTitle} />
        <meta property="twitter:description" content={metaDescription} />

        <script dangerouslySetInnerHTML={{ __html: analytics }}></script>
        <script type="text/javascript" src="https://cdne-uho-cdn-eastus-prod.azureedge.net/scripts/analytics-configuration.min.js"></script>
      </>
    );
}

export default PageHead;
