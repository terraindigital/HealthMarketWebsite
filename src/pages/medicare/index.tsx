// Library
import * as React from "react"
import { Global } from "@emotion/react";

// Query
import { useMedicarePageQuery } from "../../hooks/insurance/useMedicarePageQuery"

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
import Medial from "../../components/Example/Medials";
import Reviews from "../../components/Reviews";

const MedicarePage = () => {
  const { page } = useMedicarePageQuery();

  return (
    <Layout pageClass="medicare">
      <Global styles={PageStyles} />
      <Seo title="Medicare"/>
      <Hero
        image={page.pageHeroFields.heroImage.sourceUrl}
        mobileImage={page.pageHeroFields.mobileHeroImage.sourceUrl}>
        <HeroHeading>{page.pageHeroFields.headline}</HeroHeading>
        <HeroSubheading>{page.pageHeroFields.subheadline}</HeroSubheading>
        <PageHeroForm light btnLeftText="Get a FREE quote" btnRightText="Find a licensed insurance agent" inputId="medicarePageHeroLocation" />
      </Hero>
      <Section
        page="medicare"
        color="light"
        heading="Medicare Insurance">
        <Cards openAtMobile>
          <Card
            icon={page.medicarePageCustomFields.medicareCards.medicareCard1.icon.sourceUrl}
            title={page.medicarePageCustomFields.medicareCards.medicareCard1.title}>
            <div dangerouslySetInnerHTML={{ __html: page.medicarePageCustomFields.medicareCards.medicareCard1.content }} />
          </Card>
          <Card
            icon={page.medicarePageCustomFields.medicareCards.medicareCard2.icon.sourceUrl}
            title={page.medicarePageCustomFields.medicareCards.medicareCard2.title}>
            <div dangerouslySetInnerHTML={{ __html: page.medicarePageCustomFields.medicareCards.medicareCard2.content }} />
          </Card>
          <Card
            icon={page.medicarePageCustomFields.medicareCards.medicareCard3.icon.sourceUrl}
            title={page.medicarePageCustomFields.medicareCards.medicareCard3.title}>
            <div dangerouslySetInnerHTML={{ __html: page.medicarePageCustomFields.medicareCards.medicareCard3.content }} />
          </Card>
        </Cards>
      </Section>
      <FlexedSection
        color="primary"
        heading="Which Medicare plan is right for me?">
        <Accordion
          title={page.medicarePageCustomFields.medicareAccordions.medicareAccordion1.heading}
          content={page.medicarePageCustomFields.medicareAccordions.medicareAccordion1.content}
          html />
        <Accordion
          title={page.medicarePageCustomFields.medicareAccordions.medicareAccordion2.heading}
          content={page.medicarePageCustomFields.medicareAccordions.medicareAccordion2.content}
          html />
        <Accordion
          title={page.medicarePageCustomFields.medicareAccordions.medicareAccordion3.heading}
          content={page.medicarePageCustomFields.medicareAccordions.medicareAccordion3.content}
          html />
        <Accordion
          title={page.medicarePageCustomFields.medicareAccordions.medicareAccordion4.heading}
          content={page.medicarePageCustomFields.medicareAccordions.medicareAccordion4.content}
          html />
      </FlexedSection>
      <Medial color="primary">
        <h1 className="color-primary">Still have questions? Contact us.</h1>
        <div className="button-container">
          <a href="tel:8008279990">
            <Button background="accent" border="accent" color="light">
              Call 800-827-9990
            </Button>
          </a>
          <a href="https://www.healthmarkets.com/local-health-insurance-agent">
            <Button background="accent" border="accent" color="light">
              Find a licensed insurance agent
            </Button>
          </a>
        </div>
      </Medial>
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
    </Layout>
  )
}

export default MedicarePage