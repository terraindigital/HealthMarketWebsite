// Library
import * as React from 'react';
import {PageProps} from 'gatsby';
// Component
import Layout from '../components/Layout';
import Seo from '../components/SEO'
import Hero from '../components/home/Hero';
import CtaArea from '../components/home/CTAArea'

const IndexPage = ({path}: PageProps) => {
    return (
        <Layout>
            <Seo title="Home"/>
            <Hero/>
            <CtaArea/>
            <p>Start Here!</p>
        </Layout>
    );
};

export default IndexPage;


