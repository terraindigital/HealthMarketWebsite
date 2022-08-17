// Library
import * as React from "react"
import { Global } from "@emotion/react";

// Query
import { useHealthPageQuery } from "../../hooks/insurance/useHealthPageQuery"

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
import Icons from "../../components/Icons";
import Icon from "../../components/Icons/Icon";
import FlexedSection from "../../components/Sections/FlexedSection";
import Accordion from "../../components/Accordions";
import Carousel from "../../components/Carousel";
import Review from "../../components/Reviews/Review";
import Reviews from "../../components/Reviews";

const HealthInsurancePage = () => {
  const { page } = useHealthPageQuery();
  const plans = page.healthPageCustomFields.healthPlans

  return (
    <Layout pageClass="health-insurance">
      <Global styles={PageStyles} />
      <Seo title="Health Insurance"/>
      <Hero
        image={page.pageHeroFields.heroImage.sourceUrl}
        mobileImage={page.pageHeroFields.mobileHeroImage.sourceUrl}>
        <HeroHeading>{page.pageHeroFields.headline}</HeroHeading>
        <HeroSubheading>{page.pageHeroFields.subheadline}</HeroSubheading>
        <PageHeroForm light btnLeftText="Get a FREE quote" btnRightText="Find a licensed insurance agent" inputId="healthPageHeroLocation" />
      </Hero>
      <Section
        page="health-insurance"
        color="primary"
        heading="Insurance to fit your life">
        <Cards openAtMobile>
          <Card
            icon={page.healthPageCustomFields.healthCards.healthCard1.icon.sourceUrl}
            title={page.healthPageCustomFields.healthCards.healthCard1.title}>
            <div dangerouslySetInnerHTML={{ __html: page.healthPageCustomFields.healthCards.healthCard1.content }} />
          </Card>
          <Card
            icon={page.healthPageCustomFields.healthCards.healthCard2.icon.sourceUrl}
            title={page.healthPageCustomFields.healthCards.healthCard2.title}>
            <div dangerouslySetInnerHTML={{ __html: page.healthPageCustomFields.healthCards.healthCard2.content }} />
          </Card>
          <Card
            icon={page.healthPageCustomFields.healthCards.healthCard3.icon.sourceUrl}
            title={page.healthPageCustomFields.healthCards.healthCard3.title}>
            <div dangerouslySetInnerHTML={{ __html: page.healthPageCustomFields.healthCards.healthCard3.content }} />
          </Card>
        </Cards>
      </Section>
      <Section
        color="primary"
        heading="Our Plans">
        <Icons>
          {(plans) ? (
            Object.keys(plans).map((plan) => {
              return (
                <Icon
                  icon={plans[plan].icon.sourceUrl}
                  title={plans[plan].title}
                  link={plans[plan].link} />
              )
            })
          ) : null}
        </Icons>
      </Section>
      <FlexedSection
        color="light"
        heading="Health insurance">
        <Accordion
          title={page.healthPageCustomFields.healthAccordions.healthAccordion1.title}
          content={page.healthPageCustomFields.healthAccordions.healthAccordion1.content} />
        <Accordion
          title={page.healthPageCustomFields.healthAccordions.healthAccordion2.title}
          content={page.healthPageCustomFields.healthAccordions.healthAccordion2.content} />
        <Accordion
          title={page.healthPageCustomFields.healthAccordions.healthAccordion3.title}
          content={page.healthPageCustomFields.healthAccordions.healthAccordion3.content} />
        <div className="hide-at-mobile">
          <a href="https://www.healthmarkets.com/plans/aca-health/">
            <Button background="accent" border="accent" color="light">Show me options</Button>
          </a>
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
      <Section color="primary" heading="Related content">
        <Cards>
          <Card
            image={page.healthPageCustomFields.healthRelatedContent.healthRelatedContent1.image.sourceUrl}
            title={page.healthPageCustomFields.healthRelatedContent.healthRelatedContent1.heading}>
            <div dangerouslySetInnerHTML={{ __html: page.healthPageCustomFields.healthRelatedContent.healthRelatedContent1.content}} />
          </Card>
          <Card
            image={page.healthPageCustomFields.healthRelatedContent.healthRelatedContent2.image.sourceUrl}
            title={page.healthPageCustomFields.healthRelatedContent.healthRelatedContent2.heading}>
            <div dangerouslySetInnerHTML={{ __html: page.healthPageCustomFields.healthRelatedContent.healthRelatedContent2.content}} />
          </Card>
          <Card
            image={page.healthPageCustomFields.healthRelatedContent.healthRelatedContent3.image.sourceUrl}
            title={page.healthPageCustomFields.healthRelatedContent.healthRelatedContent3.heading}>
            <div dangerouslySetInnerHTML={{ __html: page.healthPageCustomFields.healthRelatedContent.healthRelatedContent3.content}} />
          </Card>
        </Cards>
        <div className="full-rounded" style={{ textAlign: "center" }}>
          <Button background="accent" border="accent" color="light">View more articles</Button>
        </div>
      </Section>
    </Layout>
  )
}

export default HealthInsurancePage