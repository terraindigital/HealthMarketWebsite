// Library
import React from "react";
import { Global } from "@emotion/react";
import { graphql } from "gatsby";

// Styles
import { PageStyles } from "../../components/Pages/MedicareEligibility/styles"
import { RightContent } from "./styles"
import Button from '../../components/Buttons/Button';
import Input from "../../components/Inputs/Input"

// Components
import Layout from "../../components/Layout";
import Dropdown from "../../components/Inputs/Dropdown";
import DropdownOption from "../../components/Inputs/Dropdown/DropdownOption";
import SplitSection from '../../components/Sections/SplitSection';

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
        <SplitSection color="primary">
          <div className="left_content">
            <h1 style={{ marginTop: "3.4rem" }}>{data.page.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: data.page.content }} />
          </div>
          <RightContent>
            <h3>Find the Coverage that Fits You.</h3>
            <p>Your search for affordable Health, Medicare and Life insurance starts here.</p>
            <Dropdown>
              <DropdownOption text="Test" value="test" />
            </Dropdown>
            <Input hero centered type="text" name="heroLocationInput" placeholder="Enter zip code/City" />
            <Button style={{ borderRadius: "4px" }} background="accent" border="light" color="light">Get a free quote</Button>
            <p>Call us 24/7 at 
              <a href="tel:(800) 439-6916">(800) 439-6916</a> 
              or 
              <a href="http://agents.healthmarkets.com/" rel="noopener" target="_blank">
                Find an Agent
              </a> 
              near you.
            </p>
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