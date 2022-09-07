// Library
import * as React from "react"
import { Global } from "@emotion/react";

// Query
import { useSupplementalPageQuery } from "../../hooks/insurance/useSupplementalPageQuery"

// Styles
import {
  PageStyles,
  HeroHeading,
  HeroSubheading,
  BestPriceImage,
  BestPriceImageMobile
} from "../../components/pages/styles/SupplementalInsStyles";

// Components
import Layout from "../../components/Layout";
import Seo from "../../components/SEO";
import Hero from "../../components/Hero";
import PageHeroForm from "../../components/Hero/PageHeroForm";
import Button from "../../components/Buttons/Button";
import Section from "../../components/Sections";
import Cards from "../../components/Cards";
import Card from "../../components/Cards/Card";
import Callouts from "../../components/Callouts";
import Callout from "../../components/Callouts/Callout";
import Footer from "../../components/Footer";

const HealthInsurancePage = () => {
  const { page } = useSupplementalPageQuery();
  const plans = page.suppPageCustomFields.suppSection1.suppPlans;
  const callouts = page.calloutsCustomField.callouts;

  return (
    <Layout pageClass="supplemental-insurance">
      <Global styles={PageStyles} />
      <Seo
          title={page.metadataCustomFields.metaTitle}
          description={page.metadataCustomFields.metaDescription}/>
      <Hero
        image={page.pageHeroFields.heroImage.sourceUrl}
        mobileImage={page.pageHeroFields.mobileHeroImage.sourceUrl}
        centered>
        <HeroHeading>{page.pageHeroFields.headline}</HeroHeading>
        <HeroSubheading>{page.pageHeroFields.subheadline}</HeroSubheading>
        <PageHeroForm
            centered
            btnLeftText={page.pageHeroFields.heroButtons.heroButton1.text}
            btnRightText={page.pageHeroFields.heroButtons.heroButton2.text}
            inputId="supplementalPageHeroLocation" />
      </Hero>
      <Section
        color={page.suppPageCustomFields.suppSection1.color}
        heading={page.suppPageCustomFields.suppSection1.heading}
        guarantee={page.suppPageCustomFields.suppSection1.bestPrice.active ? (
          <>
            <BestPriceImage src={page.suppPageCustomFields.suppSection1.bestPrice.image.sourceUrl} />
            <BestPriceImageMobile src={page.suppPageCustomFields.suppSection1.bestPrice.mobileImage.sourceUrl} />
          </>
        ) : null}>
        <Cards>
          {(plans) ? (
            Object.keys(plans).map((plan) => {
              return (
                <Card
                  icon={plans[plan].icon.sourceUrl}
                  title={plans[plan].title}
                  link={plans[plan].link}>
                  <p dangerouslySetInnerHTML={{ __html: plans[plan].content }} />
                </Card>
              )
            })
          ) : null}
        </Cards>
      </Section>
      <Section color="light">
        <Callouts>
            {(callouts) ? (
                Object.keys(callouts).map((index) => {
                    const callout = callouts[index];
                    return (
                        <Callout
                            number={callout.number}
                            tagline={callout.tagline}
                            title={callout.title}
                            description={callout.description}
                            disclaimer={callout.disclaimer}
                        />
                    )
                })
            ) : null}
        </Callouts>
      </Section>
      <Section
        color={page.suppPageCustomFields.suppSection2.color}
        heading={page.suppPageCustomFields.suppSection2.heading}>
        <Cards>
          <Card
            image={page.suppPageCustomFields.suppSection2.suppRelatedContent.relatedContent1.image.sourceUrl}
            title={page.suppPageCustomFields.suppSection2.suppRelatedContent.relatedContent1.title}
            link={page.suppPageCustomFields.suppSection2.suppRelatedContent.relatedContent1.link}>
            <div dangerouslySetInnerHTML={{ __html: page.suppPageCustomFields.suppSection2.suppRelatedContent.relatedContent1.content}} />
          </Card>
          <Card
            image={page.suppPageCustomFields.suppSection2.suppRelatedContent.relatedContent2.image.sourceUrl}
            title={page.suppPageCustomFields.suppSection2.suppRelatedContent.relatedContent2.title}
            link={page.suppPageCustomFields.suppSection2.suppRelatedContent.relatedContent2.link}>
            <div dangerouslySetInnerHTML={{ __html: page.suppPageCustomFields.suppSection2.suppRelatedContent.relatedContent2.content}} />
          </Card>
          <Card
            image={page.suppPageCustomFields.suppSection2.suppRelatedContent.relatedContent3.image.sourceUrl}
            title={page.suppPageCustomFields.suppSection2.suppRelatedContent.relatedContent3.title}
            link={page.suppPageCustomFields.suppSection2.suppRelatedContent.relatedContent3.link}>
            <div dangerouslySetInnerHTML={{ __html: page.suppPageCustomFields.suppSection2.suppRelatedContent.relatedContent3.content}} />
          </Card>
        </Cards>
        <div className="full-rounded" style={{ textAlign: "center" }}>
          <Button background="accent" border="accent" color="light">View more articles</Button>
        </div>
      </Section>
      <Footer>
        <div dangerouslySetInnerHTML={{ __html: page.disclaimers.disclaimer }} />
      </Footer>
    </Layout>
  )
}

export default HealthInsurancePage