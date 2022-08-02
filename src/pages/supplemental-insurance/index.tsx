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
  PageHeroForm,
  PageHeroInput,
  PageHeroInputGroup,
  PageHeroCTA
} from "./styles";

// Images
import MapPin from "../../images/location.png";
import PhoneIcon from "../../images/phone-icon.png"

// Components
import Layout from "../../components/Layout";
import Seo from "../../components/SEO";
import Hero from "../../components/Hero";
import Button from "../../components/Buttons/Button";
import Section from "../../components/Sections";
import Cards from "../../components/Cards";
import Card from "../../components/Cards/Card";
import Carousel from "../../components/Carousel";
import Review from "../../components/Reviews/Review";

const HealthInsurancePage = () => {
  const { page } = useSupplementalPageQuery();
  console.log(page)

  return (
    <Layout>
      <Global styles={PageStyles} />
      <Seo title="Supplemental Insurance"/>
      <Hero
        image={page.featuredImage.node.sourceUrl}
        centered>
        <HeroHeading>{page.pageHeroHeadlines.headline}</HeroHeading>
        <HeroSubheading>{page.pageHeroHeadlines.subheadline}</HeroSubheading>
        <div style={{ textAlign: "center" }}>
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
          <PageHeroCTA>
            <img src={PhoneIcon} />
            <span>
              Call us 24/7 at <a href="tel:+18555652552">(855) 565-2552</a>
            </span>
          </PageHeroCTA>
        </div>
      </Hero>
      <Section
        color="primary"
        heading="Our Plans">
        <Cards>
          <Card
            icon={page.suppPageCustomFields.suppPlans.suppPlan1.icon.sourceUrl}
            title={page.suppPageCustomFields.suppPlans.suppPlan1.title}>
            <div dangerouslySetInnerHTML={{ __html: page.suppPageCustomFields.suppPlans.suppPlan1.content }} />
          </Card>
          <Card
            icon={page.suppPageCustomFields.suppPlans.suppPlan2.icon.sourceUrl}
            title={page.suppPageCustomFields.suppPlans.suppPlan2.title}>
            <div dangerouslySetInnerHTML={{ __html: page.suppPageCustomFields.suppPlans.suppPlan2.content }} />
          </Card>
          <Card
            icon={page.suppPageCustomFields.suppPlans.suppPlan3.icon.sourceUrl}
            title={page.suppPageCustomFields.suppPlans.suppPlan3.title}>
            <div dangerouslySetInnerHTML={{ __html: page.suppPageCustomFields.suppPlans.suppPlan3.content }} />
          </Card>
          <Card
            icon={page.suppPageCustomFields.suppPlans.suppPlan4.icon.sourceUrl}
            title={page.suppPageCustomFields.suppPlans.suppPlan4.title}>
            <div dangerouslySetInnerHTML={{ __html: page.suppPageCustomFields.suppPlans.suppPlan4.content }} />
          </Card>
          <Card
            icon={page.suppPageCustomFields.suppPlans.suppPlan5.icon.sourceUrl}
            title={page.suppPageCustomFields.suppPlans.suppPlan5.title}>
            <div dangerouslySetInnerHTML={{ __html: page.suppPageCustomFields.suppPlans.suppPlan5.content }} />
          </Card>
          <Card
            icon={page.suppPageCustomFields.suppPlans.suppPlan6.icon.sourceUrl}
            title={page.suppPageCustomFields.suppPlans.suppPlan6.title}>
            <div dangerouslySetInnerHTML={{ __html: page.suppPageCustomFields.suppPlans.suppPlan6.content }} />
          </Card>
          <Card
            icon={page.suppPageCustomFields.suppPlans.suppPlan7.icon.sourceUrl}
            title={page.suppPageCustomFields.suppPlans.suppPlan7.title}>
            <div dangerouslySetInnerHTML={{ __html: page.suppPageCustomFields.suppPlans.suppPlan7.content }} />
          </Card>
          <Card
            icon={page.suppPageCustomFields.suppPlans.suppPlan8.icon.sourceUrl}
            title={page.suppPageCustomFields.suppPlans.suppPlan8.title}>
            <div dangerouslySetInnerHTML={{ __html: page.suppPageCustomFields.suppPlans.suppPlan8.content }} />
          </Card>
          <Card
            icon={page.suppPageCustomFields.suppPlans.suppPlan9.icon.sourceUrl}
            title={page.suppPageCustomFields.suppPlans.suppPlan9.title}>
            <div dangerouslySetInnerHTML={{ __html: page.suppPageCustomFields.suppPlans.suppPlan9.content }} />
          </Card>
          <Card
            icon={page.suppPageCustomFields.suppPlans.suppPlan10.icon.sourceUrl}
            title={page.suppPageCustomFields.suppPlans.suppPlan10.title}>
            <div dangerouslySetInnerHTML={{ __html: page.suppPageCustomFields.suppPlans.suppPlan10.content }} />
          </Card>
        </Cards>
      </Section>
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
      </Section>
    </Layout>
  )
}

export default HealthInsurancePage