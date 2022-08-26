// Library
import * as React from 'react';
import { Global } from '@emotion/react';

// Styles
import {
  PageStyles,
  HeroHeading,
  HeroSubheading
} from '../../components/pages/styles/HowWeHelpStyles';

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
import Footer from '../../components/Footer';

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
        heading={hwh.howWeHelpCustomFields.hwhSection1.heading}
        color={hwh.howWeHelpCustomFields.hwhSection1.color}>
        <List>
          <ListItem heading={hwh.howWeHelpCustomFields.hwhSection1.hwhListItems.hwhListItem1.heading}>
              <p>{hwh.howWeHelpCustomFields.hwhSection1.hwhListItems.hwhListItem1.content}</p>
          </ListItem>
          <ListItem heading={hwh.howWeHelpCustomFields.hwhSection1.hwhListItems.hwhListItem2.heading}>
              <p>{hwh.howWeHelpCustomFields.hwhSection1.hwhListItems.hwhListItem2.content}</p>
          </ListItem>
          <ListItem heading={hwh.howWeHelpCustomFields.hwhSection1.hwhListItems.hwhListItem3.heading}>
              <p>{hwh.howWeHelpCustomFields.hwhSection1.hwhListItems.hwhListItem3.content}</p>
          </ListItem>
        </List>
        <a href={hwh.howWeHelpCustomFields.hwhSection1.cta.link}>
          <Button background="accent" border="accent" color="light">
            {hwh.howWeHelpCustomFields.hwhSection1.cta.text}
          </Button>
        </a>
      </FlexedSection>
      <SplitSection color={hwh.howWeHelpCustomFields.hwhSection2.color}>
        <div className="left image">
          <img src={hwh.howWeHelpCustomFields.hwhSection2.hwhBlocks.hwhBlock1.image.sourceUrl} alt="woman on computer" />
        </div>
        <div className="right content">
          <h1>{hwh.howWeHelpCustomFields.hwhSection2.hwhBlocks.hwhBlock1.heading}</h1>
          <p>{hwh.howWeHelpCustomFields.hwhSection2.hwhBlocks.hwhBlock1.content}</p>
          <a href={hwh.howWeHelpCustomFields.hwhSection2.hwhBlocks.hwhBlock1.button.link}>
            <Button background="accent" border="accent" color="light">
              {hwh.howWeHelpCustomFields.hwhSection2.hwhBlocks.hwhBlock1.button.text}
            </Button>
          </a>
        </div>
      </SplitSection>
      <SplitSection color={hwh.howWeHelpCustomFields.hwhSection2.color}>
        <div className="left content hide-at-mobile">
          <h1>{hwh.howWeHelpCustomFields.hwhSection2.hwhBlocks.hwhBlock2.heading}</h1>
          <p>{hwh.howWeHelpCustomFields.hwhSection2.hwhBlocks.hwhBlock2.content}</p>
          <a href={hwh.howWeHelpCustomFields.hwhSection2.hwhBlocks.hwhBlock2.button.link}>
            <Button background="accent" border="accent" color="light">
              {hwh.howWeHelpCustomFields.hwhSection2.hwhBlocks.hwhBlock2.button.text}
            </Button>
          </a>
        </div>
        <div className="right image hide-at-mobile">
          <img src={hwh.howWeHelpCustomFields.hwhSection2.hwhBlocks.hwhBlock2.image.sourceUrl} alt="woman on computer" />
        </div>
        <div className="left image show-at-mobile">
          <img src={hwh.howWeHelpCustomFields.hwhSection2.hwhBlocks.hwhBlock2.image.sourceUrl} alt="woman on computer" />
        </div>
        <div className="right content show-at-mobile">
          <h1>{hwh.howWeHelpCustomFields.hwhSection2.hwhBlocks.hwhBlock2.heading}</h1>
          <p>{hwh.howWeHelpCustomFields.hwhSection2.hwhBlocks.hwhBlock2.content}</p>
          <a href={hwh.howWeHelpCustomFields.hwhSection2.hwhBlocks.hwhBlock2.button.link}>
            <Button background="accent" border="accent" color="light">
              {hwh.howWeHelpCustomFields.hwhSection2.hwhBlocks.hwhBlock2.button.text}
            </Button>
          </a>
        </div>
      </SplitSection>
      <SplitSection color={hwh.howWeHelpCustomFields.hwhSection2.color}>
        <div className="left image">
          <img src={hwh.howWeHelpCustomFields.hwhSection2.hwhBlocks.hwhBlock3.image.sourceUrl} alt="woman on computer" />
        </div>
        <div className="right content">
          <h1>{hwh.howWeHelpCustomFields.hwhSection2.hwhBlocks.hwhBlock3.heading}</h1>
          <p>{hwh.howWeHelpCustomFields.hwhSection2.hwhBlocks.hwhBlock3.content}</p>
          <a href="https://shop.healthmarkets.com/">
            <Button background="accent" border="accent" color="light">{hwh.howWeHelpCustomFields.hwhSection2.hwhBlocks.hwhBlock3.button.text}</Button>
          </a>
        </div>
      </SplitSection>
      <FlexedSection
        heading={hwh.howWeHelpCustomFields.hwhSection3.heading}
        color={hwh.howWeHelpCustomFields.hwhSection3.color}>
        <Accordion
            title={hwh.howWeHelpCustomFields.hwhSection3.hwhAccordions.hwhAccordion1.heading}
            content={hwh.howWeHelpCustomFields.hwhSection3.hwhAccordions.hwhAccordion1.content}
        />
        <Accordion
            title={hwh.howWeHelpCustomFields.hwhSection3.hwhAccordions.hwhAccordion2.heading}
            content={hwh.howWeHelpCustomFields.hwhSection3.hwhAccordions.hwhAccordion2.content}
        />
        <Accordion
            title={hwh.howWeHelpCustomFields.hwhSection3.hwhAccordions.hwhAccordion3.heading}
            content={hwh.howWeHelpCustomFields.hwhSection3.hwhAccordions.hwhAccordion3.content}
        />
        <Accordion
            title={hwh.howWeHelpCustomFields.hwhSection3.hwhAccordions.hwhAccordion4.heading}
            content={hwh.howWeHelpCustomFields.hwhSection3.hwhAccordions.hwhAccordion4.content}
        />
        <a href={hwh.howWeHelpCustomFields.hwhSection3.cta.link}>
          <Button background="accent" border="accent" color="light">
            {hwh.howWeHelpCustomFields.hwhSection3.cta.text}
          </Button>
        </a>
      </FlexedSection>
      <Section
        heading={hwh.howWeHelpCustomFields.hwhSection4.heading}
        subheading={hwh.howWeHelpCustomFields.hwhSection4.subheading}
        color={hwh.howWeHelpCustomFields.hwhSection4.color}>
        <Cards openAtMobile>
          <Card
            icon={hwh.howWeHelpCustomFields.hwhSection4.hwhCards.hwhCard1.icon.sourceUrl}
            title={hwh.howWeHelpCustomFields.hwhSection4.hwhCards.hwhCard1.heading}>
            <p>{hwh.howWeHelpCustomFields.hwhSection4.hwhCards.hwhCard1.content}</p>
          </Card>
          <Card
            icon={hwh.howWeHelpCustomFields.hwhSection4.hwhCards.hwhCard2.icon.sourceUrl}
            title={hwh.howWeHelpCustomFields.hwhSection4.hwhCards.hwhCard2.heading}>
            <p>{hwh.howWeHelpCustomFields.hwhSection4.hwhCards.hwhCard2.content}</p>
          </Card>
          <Card
            icon={hwh.howWeHelpCustomFields.hwhSection4.hwhCards.hwhCard3.icon.sourceUrl}
            title={hwh.howWeHelpCustomFields.hwhSection4.hwhCards.hwhCard3.heading}>
            <p>{hwh.howWeHelpCustomFields.hwhSection4.hwhCards.hwhCard3.content}</p>
          </Card>
        </Cards>
        <div className="hide-at-mobile" style={{ textAlign: "center", marginTop: "5.5rem" }}>
          <a href={hwh.howWeHelpCustomFields.hwhSection4.cta.link}>
            <Button background="accent" border="accent" color="light">
              {hwh.howWeHelpCustomFields.hwhSection4.cta.text}
            </Button>
          </a>
        </div>
      </Section>
      <Footer>
        <div dangerouslySetInnerHTML={{ __html: hwh.disclaimers.disclaimer }} />
      </Footer>
    </Layout>
  );
};

export default HowWeHelpPage;


