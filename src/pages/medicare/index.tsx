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
} from "../../components/pages/styles/MedicareStyles";

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
import Medial from "../../components/Medials";
import Reviews from "../../components/Reviews";
import Footer from "../../components/Footer";

const MedicarePage = () => {
  const { page } = useMedicarePageQuery();

  return (
    <Layout pageClass="medicare">
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
            light
            btnLeftText={page.pageHeroFields.heroButtons.heroButton1.text}
            btnRightText={page.pageHeroFields.heroButtons.heroButton2.text}
            inputId="medicarePageHeroLocation" />
      </Hero>
      <Section
        page="medicare"
        color={page.medicarePageCustomFields.medicareSection1.color}
        heading={page.medicarePageCustomFields.medicareSection1.heading}>
        <Cards openAtMobile>
          <Card
            icon={page.medicarePageCustomFields.medicareSection1.medicareCards.medicareCard1.icon.sourceUrl}
            title={page.medicarePageCustomFields.medicareSection1.medicareCards.medicareCard1.title}
            link={page.medicarePageCustomFields.medicareSection1.medicareCards.medicareCard1.link}>
            <div dangerouslySetInnerHTML={{ __html: page.medicarePageCustomFields.medicareSection1.medicareCards.medicareCard1.content }} />
          </Card>
          <Card
            icon={page.medicarePageCustomFields.medicareSection1.medicareCards.medicareCard2.icon.sourceUrl}
            title={page.medicarePageCustomFields.medicareSection1.medicareCards.medicareCard2.title}
            link={page.medicarePageCustomFields.medicareSection1.medicareCards.medicareCard2.link}>
            <div dangerouslySetInnerHTML={{ __html: page.medicarePageCustomFields.medicareSection1.medicareCards.medicareCard2.content }} />
          </Card>
          <Card
            icon={page.medicarePageCustomFields.medicareSection1.medicareCards.medicareCard3.icon.sourceUrl}
            title={page.medicarePageCustomFields.medicareSection1.medicareCards.medicareCard3.title}
            link={page.medicarePageCustomFields.medicareSection1.medicareCards.medicareCard3.link}>
            <div dangerouslySetInnerHTML={{ __html: page.medicarePageCustomFields.medicareSection1.medicareCards.medicareCard3.content }} />
          </Card>
        </Cards>
        <div dangerouslySetInnerHTML={{ __html: page.medicarePageCustomFields.medicareSection1.disclaimer }} />
      </Section>
      <FlexedSection
        color={page.medicarePageCustomFields.medicareSection2.color}
        heading={page.medicarePageCustomFields.medicareSection2.heading}>
        <Accordion
          title={page.medicarePageCustomFields.medicareSection2.medicareAccordions.medicareAccordion1.heading}
          content={page.medicarePageCustomFields.medicareSection2.medicareAccordions.medicareAccordion1.content}
          html />
        <Accordion
          title={page.medicarePageCustomFields.medicareSection2.medicareAccordions.medicareAccordion2.heading}
          content={page.medicarePageCustomFields.medicareSection2.medicareAccordions.medicareAccordion2.content}
          html />
        <Accordion
          title={page.medicarePageCustomFields.medicareSection2.medicareAccordions.medicareAccordion3.heading}
          content={page.medicarePageCustomFields.medicareSection2.medicareAccordions.medicareAccordion3.content}
          html />
        <Accordion
          title={page.medicarePageCustomFields.medicareSection2.medicareAccordions.medicareAccordion4.heading}
          content={page.medicarePageCustomFields.medicareSection2.medicareAccordions.medicareAccordion4.content}
          html />
        <Accordion
          title={page.medicarePageCustomFields.medicareSection2.medicareAccordions.medicareAccordion5.heading}
          content={page.medicarePageCustomFields.medicareSection2.medicareAccordions.medicareAccordion5.content}
          html />
        <Accordion
          title={page.medicarePageCustomFields.medicareSection2.medicareAccordions.medicareAccordion6.heading}
          content={page.medicarePageCustomFields.medicareSection2.medicareAccordions.medicareAccordion6.content}
          html />
      </FlexedSection>
      <Medial color={page.medicarePageCustomFields.medicareSection3.color}>
        <div dangerouslySetInnerHTML={{ __html: page.medicarePageCustomFields.medicareSection3.medicareColumns.medicareColumn1.heading }} />
        <div className="button-container">
          <a href={page.medicarePageCustomFields.medicareSection3.medicareColumns.medicareColumn2.button.button1.link}>
            <Button background="accent" border="accent" color="light">
              {page.medicarePageCustomFields.medicareSection3.medicareColumns.medicareColumn2.button.button1.text}
            </Button>
          </a>
          <a href={page.medicarePageCustomFields.medicareSection3.medicareColumns.medicareColumn2.button.button2.link}>
            <Button background="accent" border="accent" color="light">
              {page.medicarePageCustomFields.medicareSection3.medicareColumns.medicareColumn2.button.button2.text}
            </Button>
          </a>
        </div>
      </Medial>
      <Section color="light">
        <h1>Callouts</h1>
      </Section>
      <Footer>
        <div dangerouslySetInnerHTML={{ __html: page.disclaimers.disclaimer }} />
      </Footer>
    </Layout>
  )
}

export default MedicarePage