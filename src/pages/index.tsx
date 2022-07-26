// Library
import * as React from 'react';
import { PageProps } from 'gatsby';

// Styles

// Components
import Layout from "../components/Layout"
import Seo from "../components/SEO"

// Images

const IndexPage = ({path}: PageProps) => {
    return (
        <Layout>
            <Seo title="Home"/>
            <h1>Home Page</h1>
        </Layout>
    );
};

export default IndexPage;


