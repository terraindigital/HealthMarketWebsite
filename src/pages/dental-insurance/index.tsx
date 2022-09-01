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
} from "../../components/pages/styles/DentalInsStyles";

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
import Footer from "../../components/Footer";

const DentalInsurancePage = () => {
  const { page } = useDentalPageQuery();
  
  return (
    <Layout pageClass="dental-insurance">
      <Global styles={PageStyles} />
      <Seo
          title={page.metadataCustomFields.metaTitle}
          description={page.metadataCustomFields.metaDescription}/>
      <Hero
        image={page.pageHeroFields.heroImage.sourceUrl}
        mobileImage={page.pageHeroFields.mobileHeroImage.sourceUrl}>
        <HeroHeading>{page.pageHeroFields.headline}</HeroHeading>
        <HeroSubheading>{page.pageHeroFields.subheadline}</HeroSubheading>
        <PageHeroForm
            btnLeftText={page.pageHeroFields.heroButtons.heroButton1.text}
            btnRightText={page.pageHeroFields.heroButtons.heroButton2.text}
            inputId="dentalPageHeroLocation" />
      </Hero>
      <FlexedSection
        color={page.dentalPageCustomFields.dentalSection1.color}
        heading={page.dentalPageCustomFields.dentalSection1.heading}>
        <Accordion
          title={page.dentalPageCustomFields.dentalSection1.dentalAccordions.dentalAccordion1.heading}
          content={page.dentalPageCustomFields.dentalSection1.dentalAccordions.dentalAccordion1.content} />
        <Accordion
          title={page.dentalPageCustomFields.dentalSection1.dentalAccordions.dentalAccordion2.heading}
          content={page.dentalPageCustomFields.dentalSection1.dentalAccordions.dentalAccordion2.content} />
        <Accordion
          title={page.dentalPageCustomFields.dentalSection1.dentalAccordions.dentalAccordion3.heading}
          content={page.dentalPageCustomFields.dentalSection1.dentalAccordions.dentalAccordion3.content} />
        <div className="hide-at-mobile">
          <a href="https://shop.healthmarkets.com/dental">
            <Button background="accent" border="accent" color="light">Show me options</Button>
          </a>
        </div>
      </FlexedSection>
      <Section color="light">
        <h1>Callouts</h1>
      </Section>
      <Section
        color={page.dentalPageCustomFields.dentalSection2.color}
        heading={page.dentalPageCustomFields.dentalSection2.heading}>
        <Cards>
          <Card
            image={page.dentalPageCustomFields.dentalSection2.dentalRelatedContent.dentalRelatedContent1.image.sourceUrl}
            title={page.dentalPageCustomFields.dentalSection2.dentalRelatedContent.dentalRelatedContent1.heading}
            link={page.dentalPageCustomFields.dentalSection2.dentalRelatedContent.dentalRelatedContent1.link}>
            <div dangerouslySetInnerHTML={{ __html: page.dentalPageCustomFields.dentalSection2.dentalRelatedContent.dentalRelatedContent1.content}} />
          </Card>
          <Card
            image={page.dentalPageCustomFields.dentalSection2.dentalRelatedContent.dentalRelatedContent2.image.sourceUrl}
            title={page.dentalPageCustomFields.dentalSection2.dentalRelatedContent.dentalRelatedContent2.heading}
            link={page.dentalPageCustomFields.dentalSection2.dentalRelatedContent.dentalRelatedContent2.link}>
            <div dangerouslySetInnerHTML={{ __html: page.dentalPageCustomFields.dentalSection2.dentalRelatedContent.dentalRelatedContent2.content}} />
          </Card>
          <Card
            image={page.dentalPageCustomFields.dentalSection2.dentalRelatedContent.dentalRelatedContent3.image.sourceUrl}
            title={page.dentalPageCustomFields.dentalSection2.dentalRelatedContent.dentalRelatedContent3.heading}
            link={page.dentalPageCustomFields.dentalSection2.dentalRelatedContent.dentalRelatedContent3.link}>
            <div dangerouslySetInnerHTML={{ __html: page.dentalPageCustomFields.dentalSection2.dentalRelatedContent.dentalRelatedContent3.content}} />
          </Card>
        </Cards>
        <div className="full-rounded" style={{ textAlign: "center" }}>
          <a href={page.dentalPageCustomFields.dentalSection2.cta.link}>
            <Button background="accent" border="accent" color="light">
              {page.dentalPageCustomFields.dentalSection2.cta.text}
            </Button>
          </a>
        </div>
      </Section>
      <Footer>
        <div dangerouslySetInnerHTML={{ __html: page.disclaimers.disclaimer }} />
      </Footer>
    </Layout>
  )
}

export default DentalInsurancePage