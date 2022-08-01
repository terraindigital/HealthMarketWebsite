// Library
import * as React from "react"
import { Global } from "@emotion/react";

// Query
import { useDentalPageQuery } from "../../hooks/insurance/useDentalPageQuery"

// Styles
import {
  PageStyles,
  HeroHeading,
  HeroSubheading,
  PageHeroForm,
  PageHeroInput,
  PageHeroInputGroup
} from "./styles";

// Images
import MapPin from "../../images/location.png";

// Components
import Layout from "../../components/Layout";
import Seo from "../../components/SEO";
import Hero from "../../components/Hero";
import Button from "../../components/Buttons/Button";
import Section from "../../components/Sections";
import Cards from "../../components/Cards";
import Card from "../../components/Cards/Card";
import FlexedSection from "../../components/Sections/FlexedSection";
import Accordion from "../../components/Accordions";
import Carousel from "../../components/Carousel";
import Review from "../../components/Reviews/Review";

const HealthInsurancePage = () => {
  const { page } = useDentalPageQuery();
  
  return (
    <Layout>
      <Global styles={PageStyles} />
      <Seo title="Dental Insurance"/>
      <Hero
        image={page.featuredImage.node.sourceUrl} >
        <HeroHeading>{page.pageHeroHeadlines.headline}</HeroHeading>
        <HeroSubheading>{page.pageHeroHeadlines.subheadline}</HeroSubheading>
        <div>
          <Button background="accent" border="accent" color="light">Get a FREE quote</Button>
          <Button background="light" border="accent" color="accent">Find an agent</Button>
          <PageHeroForm>
            <div>
              <PageHeroInputGroup>
                <img src={MapPin} alt="map location pin image" />
                <PageHeroInput id="homepageHeroLocation" type="text" name="homepageHeroLocation" placeholder="Enter Zip Code/City" />
              </PageHeroInputGroup>
            </div>
          </PageHeroForm>
        </div>
      </Hero>
      <FlexedSection
        color="light"
        heading="Dental insurance">
        <Accordion
          title={page.dentalPageCustomFields.dentalAccordions.dentalAccordion1.heading}
          content={page.dentalPageCustomFields.dentalAccordions.dentalAccordion1.content} />
        <Accordion
          title={page.dentalPageCustomFields.dentalAccordions.dentalAccordion2.heading}
          content={page.dentalPageCustomFields.dentalAccordions.dentalAccordion2.content} />
        <Accordion
          title={page.dentalPageCustomFields.dentalAccordions.dentalAccordion3.heading}
          content={page.dentalPageCustomFields.dentalAccordions.dentalAccordion3.content} />
        <Button background="accent" border="accent" color="light">Show me options</Button>
      </FlexedSection>
      <Section color="light">
        <Carousel type="reviews" background="half">
          <Review
            stars="5"
            quote='"Laura Roush is an excellent resource for personalized coverage tailored to your needs!"'
            author="Stephen Friedrichs"
          />
          <Review
            stars="5"
            quote='"Laura Roush is an excellent resource for personalized coverage tailored to your needs!"'
            author="Stephen Friedrichs"
          />
          <Review
            stars="5"
            quote='"Laura Roush is an excellent resource for personalized coverage tailored to your needs!"'
            author="Stephen Friedrichs"
          />
          <Review
            stars="5"
            quote='"Laura Roush is an excellent resource for personalized coverage tailored to your needs!"'
            author="Stephen Friedrichs"
          />
          <Review
            stars="5"
            quote='"Laura Roush is an excellent resource for personalized coverage tailored to your needs!"'
            author="Stephen Friedrichs"
          />
        </Carousel>
      </Section>
      <Section
        color="primary"
        heading="Learn more about dental insurance">
        <Cards>
          <Card
            image={page.dentalPageCustomFields.dentalRelatedContent.dentalRelatedContent1.image.sourceUrl}
            title={page.dentalPageCustomFields.dentalRelatedContent.dentalRelatedContent1.heading}>
            <div dangerouslySetInnerHTML={{ __html: page.dentalPageCustomFields.dentalRelatedContent.dentalRelatedContent1.content}} />
          </Card>
          <Card
            image={page.dentalPageCustomFields.dentalRelatedContent.dentalRelatedContent2.image.sourceUrl}
            title={page.dentalPageCustomFields.dentalRelatedContent.dentalRelatedContent2.heading}>
            <div dangerouslySetInnerHTML={{ __html: page.dentalPageCustomFields.dentalRelatedContent.dentalRelatedContent2.content}} />
          </Card>
          <Card
            image={page.dentalPageCustomFields.dentalRelatedContent.dentalRelatedContent3.image.sourceUrl}
            title={page.dentalPageCustomFields.dentalRelatedContent.dentalRelatedContent3.heading}>
            <div dangerouslySetInnerHTML={{ __html: page.dentalPageCustomFields.dentalRelatedContent.dentalRelatedContent3.content}} />
          </Card>
        </Cards>
      </Section>
    </Layout>
  )
}

export default HealthInsurancePage