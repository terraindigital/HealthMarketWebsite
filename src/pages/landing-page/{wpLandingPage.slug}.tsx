// Library
import React from "react";
import { Global } from "@emotion/react";
import { graphql } from "gatsby";

// Styles

// Components

import Layout from "../../components/Layout";
import Seo from "../../components/SEO";

interface PageInfo {
  page: {
    id: string;
    title: string;
    slug: string
  }
}

const LPPage = ({data}: { data: PageInfo }) => {
  const { page } = data

  return (
    <Layout>
      <Seo title={page.title}/>
    </Layout>
  )
}

export default LPPage

export const pageQuery = graphql`
  query($slug: String!) {
    page: wpLandingPage(slug: {eq: $slug}) {
      id
      title
      slug
    }
  }
`