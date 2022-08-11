// Library
import * as React from 'react';

// Queries
import { usePlansPageQuery } from '../../hooks/usePlansPageQuery';

// Styles
import {
  HeroHeading,
  HeroSubheading,
  PlansPageHeroForm,
  PlansPageHeroInputGroup,
  PlansPageHeroInput
} from './styles';

// Images
import MapPin from "../../images/location.png";

// Components
import Layout from '../../components/Layout';
import Seo from '../../components/SEO';
import Hero from '../../components/Hero';
import Button from '../../components/Buttons/Button';
import Section from '../../components/Sections';
import Cards from '../../components/Cards';
import Card from '../../components/Cards/Card';
import Icons from '../../components/Icons';
import Icon from '../../components/Icons/Icon';
import Accordion from '../../components/Accordions';
import Carousel from '../../components/Carousel';
import Review from '../../components/Reviews/Review';

const PlansPage = () => {
  const { page } = usePlansPageQuery();

  return (
    <Layout>
      <Seo title="Home"/>
      <Hero
        image={page.featuredImage.node.sourceUrl}
        centered>
        <HeroHeading>{page.pageHeroFields.headline}</HeroHeading>
        <HeroSubheading>{page.pageHeroFields.subheadline}</HeroSubheading>
        <div style={{textAlign: "center"}}>
          <Button background="accent" border="accent" color="light">Find my plan</Button>
          <Button background="light" border="accent" color="accent">Talk to an agent</Button>
          <PlansPageHeroForm>
            <div>
              <PlansPageHeroInputGroup>
                <img src={MapPin} alt="map location pin image" />
                <PlansPageHeroInput id="homepageHeroLocation" type="text" name="homepageHeroLocation" placeholder="Enter Zip Code/City" />
              </PlansPageHeroInputGroup>
            </div>
          </PlansPageHeroForm>
        </div>
      </Hero>
      <Section color="primary">
        <h2 style={{ color: "#009FDA", fontSize: "6rem", marginBottom: "5.5rem", textAlign: "center" }}>Plans to fit your life</h2>
        <Cards>
          <Card
            icon={page.plansPageCustomFields.cards.card1.icon.sourceUrl}
            title={page.plansPageCustomFields.cards.card1.heading}>
            <p>{page.plansPageCustomFields.cards.card1.content}</p>
          </Card>
          <Card
            icon={page.plansPageCustomFields.cards.card2.icon.sourceUrl}
            title={page.plansPageCustomFields.cards.card2.heading}>
            <p>{page.plansPageCustomFields.cards.card2.content}</p>
          </Card>
          <Card
            icon={page.plansPageCustomFields.cards.card3.icon.sourceUrl}
            title={page.plansPageCustomFields.cards.card3.heading}>
            <p>{page.plansPageCustomFields.cards.card3.content}</p>
          </Card>
        </Cards>
      </Section>
      <Section color="primary">
        <h2 style={{ color: "#009FDA", fontSize: "6rem", marginBottom: "5.5rem", textAlign: "center" }}>Our Plans</h2>
        <Icons>
          <Icon
            icon={page.plansPageCustomFields.plans.plan1.icon.sourceUrl}
            title={page.plansPageCustomFields.plans.plan1.title} />
          <Icon
            icon={page.plansPageCustomFields.plans.plan2.icon.sourceUrl}
            title={page.plansPageCustomFields.plans.plan2.title} />
          <Icon
            icon={page.plansPageCustomFields.plans.plan3.icon.sourceUrl}
            title={page.plansPageCustomFields.plans.plan3.title} />
          <Icon
            icon={page.plansPageCustomFields.plans.plan4.icon.sourceUrl}
            title={page.plansPageCustomFields.plans.plan4.title} />
          <Icon
            icon={page.plansPageCustomFields.plans.plan5.icon.sourceUrl}
            title={page.plansPageCustomFields.plans.plan5.title} />
          <Icon
            icon={page.plansPageCustomFields.plans.plan6.icon.sourceUrl}
            title={page.plansPageCustomFields.plans.plan6.title} />
          <Icon
            icon={page.plansPageCustomFields.plans.plan7.icon.sourceUrl}
            title={page.plansPageCustomFields.plans.plan7.title} />
          <Icon
            icon={page.plansPageCustomFields.plans.plan8.icon.sourceUrl}
            title={page.plansPageCustomFields.plans.plan8.title} />
          <Icon
            icon={page.plansPageCustomFields.plans.plan9.icon.sourceUrl}
            title={page.plansPageCustomFields.plans.plan9.title} />
          <Icon
            icon={page.plansPageCustomFields.plans.plan10.icon.sourceUrl}
            title={page.plansPageCustomFields.plans.plan10.title} />
        </Icons>
      </Section>
      <Section color="light">
        <h2 style={{ color: "#009FDA", fontSize: "6rem", marginBottom: "5.5rem", textAlign: "center" }}>Health insurance</h2>
        <div style={{ margin: "0 auto", maxWidth: "800px" }}>
          <Accordion
            title={page.plansPageCustomFields.accordions.accordion1.heading}
            content={page.plansPageCustomFields.accordions.accordion1.content} />
          <Accordion
            title={page.plansPageCustomFields.accordions.accordion2.heading}
            content={page.plansPageCustomFields.accordions.accordion2.content} />
          <Accordion
            title={page.plansPageCustomFields.accordions.accordion3.heading}
            content={page.plansPageCustomFields.accordions.accordion3.content} />
        </div>
      </Section>
      <Section color="light">
        <Carousel type="reviews" background="full">
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
      <Section color="primary" heading="Related content">
        <Cards>
          <Card
            image={page.plansPageCustomFields.relatedContent.relatedContent1.image.sourceUrl}
            title={page.plansPageCustomFields.relatedContent.relatedContent1.heading}>
            <div dangerouslySetInnerHTML={{ __html: page.plansPageCustomFields.relatedContent.relatedContent1.content}} />
          </Card>
          <Card
            image={page.plansPageCustomFields.relatedContent.relatedContent2.image.sourceUrl}
            title={page.plansPageCustomFields.relatedContent.relatedContent2.heading}>
            <div dangerouslySetInnerHTML={{ __html: page.plansPageCustomFields.relatedContent.relatedContent2.content}} />
          </Card>
          <Card
            image={page.plansPageCustomFields.relatedContent.relatedContent3.image.sourceUrl}
            title={page.plansPageCustomFields.relatedContent.relatedContent3.heading}>
            <div dangerouslySetInnerHTML={{ __html: page.plansPageCustomFields.relatedContent.relatedContent3.content}} />
          </Card>
        </Cards>
      </Section>
    </Layout>
  );
};

export default PlansPage;