// Library
import React from "react";
import { Global } from "@emotion/react";
import { graphql } from "gatsby";

// Styles
import { PageStyles } from "../../components/Pages/MedicareEligibility/styles"

// Components
import Layout from "../../components/Layout";
import Section from "../../components/Sections";

interface PageInfo {
  page: {
    id: string;
    title: string;
    slug: string;
    content: string;
  }
}

const MedicareEligibilityPage = ({data}: { data: PageInfo }) => {
  console.log(data)

  return (
    <Layout staticHeader>
      <Global styles={PageStyles}/>
      <Section color="light">
        <h1 style={{ marginTop: "3.4rem" }}>{data.page.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.page.content }} />
      </Section>
    </Layout>
  )
}

export default MedicareEligibilityPage

export const pageQuery = graphql`
  query($slug: String!) {
    page: wpMedicareEligibility(slug: {eq: $slug}) {
      id
      title
      slug
      content
    }
  }
`