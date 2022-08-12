// Library
import * as React from "react"
import { Global } from "@emotion/react";

// Query
import { useDentalPageQuery } from "../../hooks/insurance/useDentalPageQuery"

// Styles
import {
  PageStyles,
  HeroHeading,
  HeroSubheading
} from "./styles";

// Images
import MapPin from "../../images/location.png";
import PhoneIcon from "../../images/phone-icon.png"

// Components
import Layout from "../../components/Layout";
import Seo from "../../components/SEO";
import Hero from "../../components/Hero";
import PageHeroForm from "../../components/Hero/PageHeroForm";
import Button from "../../components/Buttons/Button";
import Section from "../../components/Sections";
import Cards from "../../components/Cards";
import Card from "../../components/Cards/Card";
import FlexedSection from "../../components/Sections/FlexedSection";
import Accordion from "../../components/Accordions";
import Carousel from "../../components/Carousel";
import Review from "../../components/Reviews/Review";
import Reviews from "../../components/Reviews";

const HealthInsurancePage = () => {
  const { page } = useDentalPageQuery();
  
  return (
    <Layout pageClass="dental-insurance">
      <Global styles={PageStyles} />
      <Seo title="Dental Insurance"/>
      <Hero
        image={page.pageHeroFields.heroImage.sourceUrl}
        mobileImage={page.pageHeroFields.mobileHeroImage.sourceUrl}>
        <HeroHeading>{page.pageHeroFields.headline}</HeroHeading>
        <HeroSubheading>{page.pageHeroFields.subheadline}</HeroSubheading>
        <PageHeroForm btnLeftText="Get a FREE quote" btnRightText="Find a licensed insurance agent" inputId="supplementalPageHeroLocation" />
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
        <div className="hide-at-mobile">
          <Button background="accent" border="accent" color="light">Show me options</Button>
        </div>
      </FlexedSection>
      <Section color="light">
        <div className="hide-at-mobile">
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
        </div>
        <div className="show-at-mobile">
            <Reviews>
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
            </Reviews>
            <div style={{ textAlign: "center" }}>
                <a href="#">See all reviews</a>
            </div>
        </div>
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
        <div className="full-rounded" style={{ textAlign: "center" }}>
          <Button background="accent" border="accent" color="light">Get a free quote</Button>
        </div>
      </Section>
    </Layout>
  )
}

export default HealthInsurancePage