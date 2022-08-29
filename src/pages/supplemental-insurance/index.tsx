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
import Carousel from "../../components/Carousel";
import Review from "../../components/Reviews/Review";
import Reviews from "../../components/Reviews";
import Footer from "../../components/Footer";

const HealthInsurancePage = () => {
  const { page } = useSupplementalPageQuery();
  const plans = page.suppPageCustomFields.suppSection1.suppPlans;

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
        heading={page.suppPageCustomFields.suppSection1.heading}>
        {page.suppPageCustomFields.suppSection1.bestPrice.active ? (
          <>
            <BestPriceImage src={page.suppPageCustomFields.suppSection1.bestPrice.image.sourceUrl} />
            <BestPriceImageMobile src={page.suppPageCustomFields.suppSection1.bestPrice.mobileImage.sourceUrl} />
          </>
        ) : null}
        <Cards>
          {(plans) ? (
            Object.keys(plans).map((plan) => {
              return (
                <Card
                  icon={plans[plan].icon.sourceUrl}
                  title={plans[plan].title}
                  link={plans[plan].link}>
                  <div dangerouslySetInnerHTML={{ __html: plans[plan].content }} />
                </Card>
              )
            })
          ) : null}
        </Cards>
      </Section>
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