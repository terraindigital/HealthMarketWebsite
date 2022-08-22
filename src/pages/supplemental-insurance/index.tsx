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
} from "./styles";

// Images
import BestPriceImg from "../../images/best-price-image.png";
import BestPriceImgM from "../../images/best-price-image-mobile.png";

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
  const plans = page.suppPageCustomFields.suppPlans;

  return (
    <Layout pageClass="supplemental-insurance">
      <Global styles={PageStyles} />
      <Seo title="Supplemental Insurance"/>
      <Hero
        image={page.pageHeroFields.heroImage.sourceUrl}
        mobileImage={page.pageHeroFields.mobileHeroImage.sourceUrl}
        centered>
        <HeroHeading>{page.pageHeroFields.headline}</HeroHeading>
        <HeroSubheading>{page.pageHeroFields.subheadline}</HeroSubheading>
        <PageHeroForm centered btnLeftText="Get a FREE quote" btnRightText="Find a licensed insurance agent" inputId="supplementalPageHeroLocation" />
      </Hero>
      <Section
        color="primary"
        heading="Supplemental Plans">
        <BestPriceImage src={BestPriceImg} />
        <BestPriceImageMobile src={BestPriceImgM} />
        <Cards>
          {(plans) ? (
            Object.keys(plans).map((plan) => {
              return (
                <Card
                  icon={plans[plan].icon.sourceUrl}
                  title={plans[plan].title}>
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
        color="primary"
        heading="Related Content">
        <Cards>
          <Card
            image={page.suppPageCustomFields.suppRelatedContent.suppRelatedContent1.image.sourceUrl}
            title={page.suppPageCustomFields.suppRelatedContent.suppRelatedContent1.title}>
            <div dangerouslySetInnerHTML={{ __html: page.suppPageCustomFields.suppRelatedContent.suppRelatedContent1.content}} />
          </Card>
          <Card
            image={page.suppPageCustomFields.suppRelatedContent.suppRelatedContent2.image.sourceUrl}
            title={page.suppPageCustomFields.suppRelatedContent.suppRelatedContent2.title}>
            <div dangerouslySetInnerHTML={{ __html: page.suppPageCustomFields.suppRelatedContent.suppRelatedContent2.content}} />
          </Card>
          <Card
            image={page.suppPageCustomFields.suppRelatedContent.suppRelatedContent3.image.sourceUrl}
            title={page.suppPageCustomFields.suppRelatedContent.suppRelatedContent3.title}>
            <div dangerouslySetInnerHTML={{ __html: page.suppPageCustomFields.suppRelatedContent.suppRelatedContent3.content}} />
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