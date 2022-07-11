import type {GatsbyConfig} from 'gatsby';
import {config as envConfig} from "dotenv";

envConfig({
    path: `.env.${process.env.NODE_ENV}`,
})

const config: GatsbyConfig = {
    siteMetadata: {
        title: 'HealthMarkets',
        siteUrl: 'https://www.healthmarkets.com',
        description: 'Your Insurance Marketplace!',
        author: '@NightMarket',
    },
    // More easily incorporate content into your pages through automatic TypeScript type generation
    // and better GraphQL IntelliSense.
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    graphqlTypegen: true,
    plugins: [
        {
            resolve: 'gatsby-source-wordpress',
            options: {
                url: process.env.WPGRAPHQL_URL,
            },
        },
        'gatsby-plugin-emotion',
        {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
                trackingId: 'GA_TRACKING_ID',
            },
        },
        'gatsby-plugin-image',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sitemap',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: './src/images/',
            },
            __key: 'images',
        }
    ],
};

export default config;
