// Library
import React from "react";
import { Global } from "@emotion/react";
import { graphql } from "gatsby";

// Styles
import { RightContent } from "./styles"
import { PageStyles } from "./styles"

// Components
import Section from '../../components/Sections';
import Layout from "../../components/Layout";
import Dropdown from "../../components/Inputs/Dropdown";
import DropdownOption from "../../components/Inputs/Dropdown/DropdownOption";
import SplitSection from '../../components/Sections/SplitSection';
import Button from '../../components/Buttons/Button';
import Input from "../../components/Inputs/Input"
import Seo from "../../components/SEO";

interface PageInfo {
  page: {
    id: string;
    title: string;
    slug: string;
    content: string;
  }
}

const MedicareEligibilityPage = ({data}: { data: PageInfo }) => {
  const { page } = data

  return (
    <Layout staticHeader>
      <Global styles={PageStyles}/>
      <Seo title={page.title}/>
      <SplitSection align="top" color="muted">
        <Section page={`medicare-eligibility ` + page.slug} color="light">
          <h1>{page.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: page.content }} />
        </Section>
        <RightContent className="right-content">
          <h3>Find the Coverage that Fits You.</h3>
          <p>Your search for affordable Health, Medicare and Life insurance starts here.</p>
          <Dropdown>
            <DropdownOption text="Please Select" value="" />
            <DropdownOption text="Medicare" value="Medicare" selected />
            <DropdownOption text="Medicare Supplement" value="MedSupp" />
            <DropdownOption text="Small Business" value="SmallBiz" />
            <DropdownOption text="Individual Health Insurance" value="IndividualHealth" />
            <DropdownOption text="Family Health Insurance" value="FamilyHealth" />
            <DropdownOption text="Dental" value="Dental" />
            <DropdownOption text="Vision" value="Vision" />
            <DropdownOption text="Supplemental" value="Supplemental" />
            <DropdownOption text="Life" value="Life" />
          </Dropdown>
          <Input hero centered type="text" name="heroLocationInput" placeholder="Enter zip code/City" />
          <Button style={{ borderRadius: "4px" }} background="accent" border="light" color="light">Get a free quote</Button>
          <p>Call us 24/7 at <a href="tel:(800) 439-6916">(800) 439-6916</a> or <a href="http://agents.healthmarkets.com/" rel="noopener" target="_blank">Find an Agent</a> near you.</p>
        </RightContent>
      </SplitSection>
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