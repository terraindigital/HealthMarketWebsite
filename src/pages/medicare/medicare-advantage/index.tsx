// Library
import * as React from "react"
import { Global } from "@emotion/react";

// Query
import { useMedicareAdvantagePageQuery } from "../../../hooks/insurance/useMedicareAdvantagePageQuery"

// Styles
import {
    PageStyles,
    HeroHeading,
    HeroSubheading,
    GuideCTA,
    PostAccordionText,
    MedicareAccordion,
    MedicareCardText,
    MedicareCtaTitle,
    MedicareMedial,
} from "../../../components/pages/styles/MedicareAdvantageStyles";

// Scripts
import { routeLink } from '../../../static/scripts/global';

// Components
import Layout from "../../../components/Layout";
import PageHead from "../../../components/PageHead";
import Hero from "../../../components/Hero";
import PageHeroForm from "../../../components/Hero/PageHeroForm";
import Button from "../../../components/Buttons/Button";
import Section from "../../../components/Sections";
import Cards from "../../../components/Cards";
import Card from "../../../components/Cards/Card";
import FlexedSection from "../../../components/Sections/FlexedSection";
import Footer from "../../../components/Footer";
import RelatedContent from "../../../components/RelatedContent";

const MedicareAdvantagePage = () => {
  const { page } = useMedicareAdvantagePageQuery();

  return (
    <Layout pageClass="medicare-advantage">
      <Global styles={PageStyles} />
      <Hero
        image={page.pageHeroFields.heroImage.sourceUrl}
        mobileImage={page.pageHeroFields.mobileHeroImage.sourceUrl}
        bgColor="#F2F2F2">
        <HeroHeading>{page.pageHeroFields.headline}</HeroHeading>
        <HeroSubheading>{page.pageHeroFields.subheadline}</HeroSubheading>
        <PageHeroForm
            light
            btnLeftText={page.pageHeroFields.heroButtons.heroButton1.text}
            btnRightText={page.pageHeroFields.heroButtons.heroButton2.text}
            inputId="medicarePageHeroLocation"
            footerContent={page.pageHeroFields.callUs} />
        <div className="hero-disclaimer" dangerouslySetInnerHTML={{ __html: page.medicareAdvantagePageCustomFields.medicareAdvPostHeroDisclaimer }} />
      </Hero>
      <FlexedSection
        color={page.medicareAdvantagePageCustomFields.medicareAdvSection1.color}
        heading={page.medicareAdvantagePageCustomFields.medicareAdvSection1.heading}>
        <MedicareAccordion
          title={page.medicareAdvantagePageCustomFields.medicareAdvSection1.medicareAdvAccordions.medicareAdvAccordion1.heading}
          content={page.medicareAdvantagePageCustomFields.medicareAdvSection1.medicareAdvAccordions.medicareAdvAccordion1.content}
          html />
        <MedicareAccordion
          title={page.medicareAdvantagePageCustomFields.medicareAdvSection1.medicareAdvAccordions.medicareAdvAccordion2.heading}
          content={page.medicareAdvantagePageCustomFields.medicareAdvSection1.medicareAdvAccordions.medicareAdvAccordion2.content}
          html />
        <MedicareAccordion
          title={page.medicareAdvantagePageCustomFields.medicareAdvSection1.medicareAdvAccordions.medicareAdvAccordion3.heading}
          content={page.medicareAdvantagePageCustomFields.medicareAdvSection1.medicareAdvAccordions.medicareAdvAccordion3.content}
          html />
        <PostAccordionText dangerouslySetInnerHTML={{ __html: page.medicareAdvantagePageCustomFields.medicareAdvSection1.medicareAdvPostAccordionText }} />
      </FlexedSection>
      <Section
        page="medicare-advantage"
        color={page.medicareAdvantagePageCustomFields.medicareAdvSection2.color}>
        <Cards openAtMobile>
          <Card
            icon={page.medicareAdvantagePageCustomFields.medicareAdvSection2.medicareAdvCards.medicareAdvCard1.icon.sourceUrl}
            mobile={page.medicareAdvantagePageCustomFields.medicareAdvSection2.medicareAdvCards.medicareAdvCard1.mobile.sourceUrl}
            title={page.medicareAdvantagePageCustomFields.medicareAdvSection2.medicareAdvCards.medicareAdvCard1.title}
            link={page.medicareAdvantagePageCustomFields.medicareAdvSection2.medicareAdvCards.medicareAdvCard1.link}>
              <MedicareCardText className="card-link" dangerouslySetInnerHTML={{ __html: page.medicareAdvantagePageCustomFields.medicareAdvSection2.medicareAdvCards.medicareAdvCard1.content }}/>
          </Card>
          <Card
            icon={page.medicareAdvantagePageCustomFields.medicareAdvSection2.medicareAdvCards.medicareAdvCard2.icon.sourceUrl}
            mobile={page.medicareAdvantagePageCustomFields.medicareAdvSection2.medicareAdvCards.medicareAdvCard2.mobile.sourceUrl}
            title={page.medicareAdvantagePageCustomFields.medicareAdvSection2.medicareAdvCards.medicareAdvCard2.title}
            link={page.medicareAdvantagePageCustomFields.medicareAdvSection2.medicareAdvCards.medicareAdvCard2.link}>
            <MedicareCardText className="card-link" dangerouslySetInnerHTML={{ __html: page.medicareAdvantagePageCustomFields.medicareAdvSection2.medicareAdvCards.medicareAdvCard2.content }}/>
          </Card>
          <Card
            icon={page.medicareAdvantagePageCustomFields.medicareAdvSection2.medicareAdvCards.medicareAdvCard3.icon.sourceUrl}
            mobile={page.medicareAdvantagePageCustomFields.medicareAdvSection2.medicareAdvCards.medicareAdvCard3.mobile.sourceUrl}
            title={page.medicareAdvantagePageCustomFields.medicareAdvSection2.medicareAdvCards.medicareAdvCard3.title}
            link={page.medicareAdvantagePageCustomFields.medicareAdvSection2.medicareAdvCards.medicareAdvCard3.link}>
            <MedicareCardText className="card-link" dangerouslySetInnerHTML={{ __html: page.medicareAdvantagePageCustomFields.medicareAdvSection2.medicareAdvCards.medicareAdvCard3.content }}/>
          </Card>
        </Cards>
      </Section>

      <GuideCTA>
        <MedicareCtaTitle>{page.guideCTA.title}</MedicareCtaTitle>
        <a href={page.guideCTA.link} onClick={routeLink}>
          <Button background="accent-alt" border="light" color="light">
            {page.guideCTA.linkText}
          </Button>
        </a>
      </GuideCTA>

      <MedicareMedial color={page.medicareAdvantagePageCustomFields.medicareAdvSection3.color}>
        <div dangerouslySetInnerHTML={{ __html: page.medicareAdvantagePageCustomFields.medicareAdvSection3.medicareAdvColumns.medicareAdvColumn1.heading }} />
        <div className="button-container">
          <a href={page.medicareAdvantagePageCustomFields.medicareAdvSection3.medicareAdvColumns.medicareAdvColumn2.button.button1.link} onClick={routeLink}>
            <Button background="accent-alt" border="light" color="light">
              {page.medicareAdvantagePageCustomFields.medicareAdvSection3.medicareAdvColumns.medicareAdvColumn2.button.button1.text}, TTY 771
            </Button>
          </a>
          <a href={page.medicareAdvantagePageCustomFields.medicareAdvSection3.medicareAdvColumns.medicareAdvColumn2.button.button2.link} onClick={routeLink}>
            <Button background="accent-alt" border="light" color="light">
              {page.medicareAdvantagePageCustomFields.medicareAdvSection3.medicareAdvColumns.medicareAdvColumn2.button.button2.text}
            </Button>
          </a>
        </div>
      </MedicareMedial>
      <Section
        color={page.medicareAdvantagePageCustomFields.medicareAdvSection4.color}
        heading={page.medicareAdvantagePageCustomFields.medicareAdvSection4.heading}>
        <RelatedContent />
        <Cards>
          <Card
            image={page.medicareAdvantagePageCustomFields.medicareAdvSection4.relatedContent.relatedContent1.image.sourceUrl}
            title={page.medicareAdvantagePageCustomFields.medicareAdvSection4.relatedContent.relatedContent1.title}
            link={page.medicareAdvantagePageCustomFields.medicareAdvSection4.relatedContent.relatedContent1.link}>
            <p dangerouslySetInnerHTML={{ __html: page.medicareAdvantagePageCustomFields.medicareAdvSection4.relatedContent.relatedContent1.content}} />
          </Card>
          <Card
            image={page.medicareAdvantagePageCustomFields.medicareAdvSection4.relatedContent.relatedContent2.image.sourceUrl}
            title={page.medicareAdvantagePageCustomFields.medicareAdvSection4.relatedContent.relatedContent2.title}
            link={page.medicareAdvantagePageCustomFields.medicareAdvSection4.relatedContent.relatedContent2.link}>
            <p dangerouslySetInnerHTML={{ __html: page.medicareAdvantagePageCustomFields.medicareAdvSection4.relatedContent.relatedContent2.content}} />
          </Card>
          <Card
            image={page.medicareAdvantagePageCustomFields.medicareAdvSection4.relatedContent.relatedContent3.image.sourceUrl}
            title={page.medicareAdvantagePageCustomFields.medicareAdvSection4.relatedContent.relatedContent3.title}
            link={page.medicareAdvantagePageCustomFields.medicareAdvSection4.relatedContent.relatedContent3.link}>
            <p dangerouslySetInnerHTML={{ __html: page.medicareAdvantagePageCustomFields.medicareAdvSection4.relatedContent.relatedContent3.content}} />
          </Card>
        </Cards>

        <div className="full-rounded" style={{ textAlign: "center" }}>
          <a href={page.medicareAdvantagePageCustomFields.medicareAdvSection4.cta.link} onClick={routeLink}>
            <Button background="accent-alt" border="light" color="light">
              {page.medicareAdvantagePageCustomFields.medicareAdvSection4.cta.text}
            </Button>
          </a>
        </div>
      </Section>
      <Footer>
          {page.disclaimers.disclaimer}
      </Footer>
    </Layout>
  )
}

export default MedicareAdvantagePage

export const Head = () => {
  const { page } = useMedicareAdvantagePageQuery();
  return (
    <>
      <PageHead
        title={page.seo.title}
        description={page.seo.metaDesc}/>
    </>
  )
}
