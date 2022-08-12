// Library
import * as React from 'react';
import { Global } from '@emotion/react';

// Styles
import {
  PageStyles,
  HeroHeading,
  HeroSubheading
} from './styles';

// Components
import Layout from "../../components/Layout";
import Seo from "../../components/SEO";
import Hero from '../../components/Hero';
import FlexedSection from '../../components/Sections/FlexedSection';
import List from '../../components/Lists';
import ListItem from '../../components/Lists/ListItem';
import Button from '../../components/Buttons/Button';
import SplitSection from '../../components/Sections/SplitSection';

// Images

// Queries
import { useHowWeHelpPageQuery } from '../../hooks/useHowWeHelpPageQuery';
import Accordion from '../../components/Accordions';
import Section from '../../components/Sections';
import Cards from '../../components/Cards';
import Card from '../../components/Cards/Card';

const HowWeHelpPage = () => {
  const { hwh } = useHowWeHelpPageQuery();

  return (
    <Layout pageClass="how-we-help">
      <Global styles={PageStyles}/>
      <Seo title="How We Help"/>
      <Hero
        image={hwh.pageHeroFields.heroImage.sourceUrl}
        mobileImage={hwh.pageHeroFields.mobileHeroImage.sourceUrl}
        centered>
        <HeroHeading>{hwh.pageHeroFields.headline}</HeroHeading>
        <HeroSubheading>{hwh.pageHeroFields.subheadline}</HeroSubheading>
      </Hero>
      <FlexedSection
        heading="What you get with HealthMarkets"
        color="light">
        <List>
          <ListItem heading={hwh.howWeHelpCustomFields.hwhListItem1.heading}>
              <p>{hwh.howWeHelpCustomFields.hwhListItem1.content}</p>
          </ListItem>
          <ListItem heading={hwh.howWeHelpCustomFields.hwhListItem2.heading}>
              <p>{hwh.howWeHelpCustomFields.hwhListItem2.content}</p>
          </ListItem>
          <ListItem heading={hwh.howWeHelpCustomFields.hwhListItem3.heading}>
              <p>{hwh.howWeHelpCustomFields.hwhListItem3.content}</p>
          </ListItem>
        </List>
        <a href="https://shop.healthmarkets.com/">
          <Button background="accent" border="accent" color="light">Shop now</Button>
        </a>
      </FlexedSection>
      <SplitSection color="primary">
        <div className="left image">
          <img src={hwh.howWeHelpCustomFields.block1.image.sourceUrl} alt="woman on computer" />
        </div>
        <div className="right content">
          <h1>{hwh.howWeHelpCustomFields.block1.heading}</h1>
          <p>{hwh.howWeHelpCustomFields.block1.content}</p>
          <a href="https://shop.healthmarkets.com/">
            <Button background="accent" border="accent" color="light">{hwh.howWeHelpCustomFields.block1.button.text}</Button>
          </a>
        </div>
      </SplitSection>
      <SplitSection color="primary">
        <div className="left content hide-at-mobile">
          <h1>{hwh.howWeHelpCustomFields.block2.heading}</h1>
          <p>{hwh.howWeHelpCustomFields.block2.content}</p>
          <a href="https://shop.healthmarkets.com/">
            <Button background="accent" border="accent" color="light">{hwh.howWeHelpCustomFields.block2.button.text}</Button>
          </a>
        </div>
        <div className="right image hide-at-mobile">
          <img src={hwh.howWeHelpCustomFields.block2.image.sourceUrl} alt="woman on computer" />
        </div>
        <div className="left image show-at-mobile">
          <img src={hwh.howWeHelpCustomFields.block2.image.sourceUrl} alt="woman on computer" />
        </div>
        <div className="right content show-at-mobile">
          <h1>{hwh.howWeHelpCustomFields.block2.heading}</h1>
          <p>{hwh.howWeHelpCustomFields.block2.content}</p>
          <a href="https://shop.healthmarkets.com/">
            <Button background="accent" border="accent" color="light">{hwh.howWeHelpCustomFields.block2.button.text}</Button>
          </a>
        </div>
      </SplitSection>
      <SplitSection color="primary">
        <div className="left image">
          <img src={hwh.howWeHelpCustomFields.block3.image.sourceUrl} alt="woman on computer" />
        </div>
        <div className="right content">
          <h1>{hwh.howWeHelpCustomFields.block3.heading}</h1>
          <p>{hwh.howWeHelpCustomFields.block3.content}</p>
          <a href="https://shop.healthmarkets.com/">
            <Button background="accent" border="accent" color="light">{hwh.howWeHelpCustomFields.block3.button.text}</Button>
          </a>
        </div>
      </SplitSection>
      <FlexedSection
        heading="How we work"
        color="light">
        <Accordion
            title={hwh.howWeHelpCustomFields.accordionField1.heading}
            content={hwh.howWeHelpCustomFields.accordionField1.content}
        />
        <Accordion
            title={hwh.howWeHelpCustomFields.accordionField2.heading}
            content={hwh.howWeHelpCustomFields.accordionField2.content}
        />
        <Accordion
            title={hwh.howWeHelpCustomFields.accordionField3.heading}
            content={hwh.howWeHelpCustomFields.accordionField3.content}
        />
        <Accordion
            title={hwh.howWeHelpCustomFields.accordionField4.heading}
            content={hwh.howWeHelpCustomFields.accordionField4.content}
        />
        <a href="https://shop.healthmarkets.com/">
          <Button background="accent" border="accent" color="light">Get your FitScore<sup>&reg;</sup></Button>
        </a>
      </FlexedSection>
      <Section
        heading="We’re committed to your privacy"
        subheading="We understand the importance of keeping your personally identifiable information safe. We protect it, as required by federal law."
        color="primary">
        <Cards openAtMobile>
          <Card
            icon={hwh.howWeHelpCustomFields.iconCard1.icon.sourceUrl}
            title={hwh.howWeHelpCustomFields.iconCard1.heading}>
            <p>{hwh.howWeHelpCustomFields.iconCard1.content}</p>
          </Card>
          <Card
            icon={hwh.howWeHelpCustomFields.iconCard2.icon.sourceUrl}
            title={hwh.howWeHelpCustomFields.iconCard2.heading}>
            <p>{hwh.howWeHelpCustomFields.iconCard2.content}</p>
          </Card>
          <Card
            icon={hwh.howWeHelpCustomFields.iconCard3.icon.sourceUrl}
            title={hwh.howWeHelpCustomFields.iconCard3.heading}>
            <p>{hwh.howWeHelpCustomFields.iconCard3.content}</p>
          </Card>
        </Cards>
        <div className="hide-at-mobile" style={{ textAlign: "center", marginTop: "5.5rem" }}>
          <a href="https://shop.healthmarkets.com/">
            <Button background="accent" border="accent" color="light">Find my plan</Button>
          </a>
        </div>
      </Section>
    </Layout>
  );
};

export default HowWeHelpPage;


