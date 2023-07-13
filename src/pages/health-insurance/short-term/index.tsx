// Library
import React, { useEffect, useState } from "react";
import { Global } from "@emotion/react";

// Query
import { useShortTermPageQuery } from "../../../hooks/insurance/useShortTermPageQuery"

// Styles
import {
  PageStyles,
  HeroHeading,
  HeroSubheading,
  ButtonWrapper
} from "../../../components/pages/styles/ShortTermStyles";

// Scripts
import { routeLink } from "../../../static/scripts/global";

// Components
import Layout from "../../../components/Layout";
import PageHead from "../../../components/PageHead";
import Hero from "../../../components/Hero";
import PageHeroForm from "../../../components/Hero/PageHeroForm";
import Button from "../../../components/Buttons/Button";
import Section from "../../../components/Sections";
import Cards from "../../../components/Cards";
import Card from "../../../components/Cards/Card";
import RelatedContent from "../../../components/RelatedContent";
import FlexedSection from "../../../components/Sections/FlexedSection";
import Accordion from "../../../components/Accordions";
import Footer from "../../../components/Footer";
import List from "../../../components/Lists";
import ListItem from "../../../components/Lists/ListItem";
import Medial from "../../../components/Medials";

const ShortTermInsurancePage = () => {
  const [hasChildren, setHasChildren] = useState(false);
  const { page } = useShortTermPageQuery();

  useEffect(() => {
    let n = 0;
    let delay = setInterval(() => {
      const beContainer = document.getElementById('relatedContent');
      if (n > 0 && beContainer?.childElementCount > 0) {
        setHasChildren(true);
      } else {
        setHasChildren(false);
      }
      if (n >= 5) clearInterval(delay);
      n++;
    }, 50);
  }, []);

  return (
    <Layout pageClass="short-term-insurance">
      <Global styles={PageStyles} />
      <Hero
        image={page?.pageHeroFields?.heroImage?.sourceUrl}
        mobileImage={page?.pageHeroFields?.mobileHeroImage?.sourceUrl}
        classes="short-term-insurance"
        bgColor="#E2F1F2">
        <HeroHeading>{page?.pageHeroFields?.headline}</HeroHeading>
        <HeroSubheading>{page?.pageHeroFields?.subheadline}</HeroSubheading>
        <PageHeroForm
            dark
            btnLeftText={page?.pageHeroFields?.heroButtons?.heroButton1?.text}
            btnRightText={page?.pageHeroFields?.heroButtons?.heroButton2?.text}
            inputId="medicarePageHeroLocation"
            footerContent={page?.pageHeroFields?.callUs} />
        <div className="hero-disclaimer" dangerouslySetInnerHTML={{ __html: page?.shortTermPageCustomFields?.medicareAdvPostHeroDisclaimer }} />
      </Hero>
      <Section
        page="short-term-insurance list"
        color={page.shortTermPageCustomFields.shorttermSection1.color}
        heading={page.shortTermPageCustomFields.shorttermSection1.heading}
        subheading={page.shortTermPageCustomFields.shorttermSection1.subheading}
        html>
          <div>
            <h4>{page.shortTermPageCustomFields.shorttermSection1.list.listHeading}</h4>
            <List>
                <ListItem heading={page.shortTermPageCustomFields.shorttermSection1.list.listItem1.text} />
                <ListItem heading={page.shortTermPageCustomFields.shorttermSection1.list.listItem2.text} />
                <ListItem heading={page.shortTermPageCustomFields.shorttermSection1.list.listItem3.text} />
                <ListItem heading={page.shortTermPageCustomFields.shorttermSection1.list.listItem4.text} />
            </List>
          </div>
      </Section>
      <Section
        page="short-term-insurance accordion"
        color={page.shortTermPageCustomFields.shorttermSection2.color}
        heading={page.shortTermPageCustomFields.shorttermSection2.heading}
        subheading={page.shortTermPageCustomFields.shorttermSection2.subheading}
        html>
        <div>
          <Accordion
            title={page.shortTermPageCustomFields.shorttermSection2.shorttermAccordions.shorttermAccordion1.title}
            content={page.shortTermPageCustomFields.shorttermSection2.shorttermAccordions.shorttermAccordion1.content}
            html />
          <Accordion
            title={page.shortTermPageCustomFields.shorttermSection2.shorttermAccordions.shorttermAccordion2.title}
            content={page.shortTermPageCustomFields.shorttermSection2.shorttermAccordions.shorttermAccordion2.content}
            html />
          <Accordion
            title={page.shortTermPageCustomFields.shorttermSection2.shorttermAccordions.shorttermAccordion3.title}
            content={page.shortTermPageCustomFields.shorttermSection2.shorttermAccordions.shorttermAccordion3.content}
            html />
        </div>
      </Section>
      <FlexedSection
        color={page.shortTermPageCustomFields.shorttermSection3.color}
        heading={page.shortTermPageCustomFields.shorttermSection3.heading}>
        <Accordion
          title={page.shortTermPageCustomFields.shorttermSection3.shorttermAccordions.shorttermAccordion1.title}
          content={page.shortTermPageCustomFields.shorttermSection3.shorttermAccordions.shorttermAccordion1.content}
          html />
        <Accordion
          title={page.shortTermPageCustomFields.shorttermSection3.shorttermAccordions.shorttermAccordion2.title}
          content={page.shortTermPageCustomFields.shorttermSection3.shorttermAccordions.shorttermAccordion2.content}
          html />
        <Accordion
          title={page.shortTermPageCustomFields.shorttermSection3.shorttermAccordions.shorttermAccordion3.title}
          content={page.shortTermPageCustomFields.shorttermSection3.shorttermAccordions.shorttermAccordion3.content}
          html />
        <Accordion
          title={page.shortTermPageCustomFields.shorttermSection3.shorttermAccordions.shorttermAccordion4.title}
          content={page.shortTermPageCustomFields.shorttermSection3.shorttermAccordions.shorttermAccordion4.content}
          html />
        <Accordion
          title={page.shortTermPageCustomFields.shorttermSection3.shorttermAccordions.shorttermAccordion5.title}
          content={page.shortTermPageCustomFields.shorttermSection3.shorttermAccordions.shorttermAccordion5.content}
          html />
      </FlexedSection>
      <Medial
        color={page.shortTermPageCustomFields.shorttermSection4.cta.ctaBgColor}>
          <div dangerouslySetInnerHTML={{ __html: page.shortTermPageCustomFields.shorttermSection4.cta.ctaColumns.column1.heading }} style={{ color: '#009FDA' }} />
          <ButtonWrapper>
            <a href={page.shortTermPageCustomFields.shorttermSection4.cta.ctaColumns.column2?.button?.button1.link} onClick={routeLink}>
                <Button
                  background={(page.shortTermPageCustomFields.shorttermSection4.cta.ctaBgColor === "accent") ? "primary" : "accent-alt"}
                  border={(page.shortTermPageCustomFields.shorttermSection4.cta.ctaBgColor === "accent") ? "primary" : "light"}
                  color="light">
                    {page.shortTermPageCustomFields.shorttermSection4.cta.ctaColumns.column2?.button?.button1.text}
                </Button>
            </a>
            <a href={page.shortTermPageCustomFields.shorttermSection4.cta.ctaColumns.column2?.button?.button2.link} onClick={routeLink}>
                <Button
                  background={(page.shortTermPageCustomFields.shorttermSection4.cta.ctaBgColor === "accent") ? "primary" : "accent-alt"}
                  border={(page.shortTermPageCustomFields.shorttermSection4.cta.ctaBgColor === "accent") ? "primary" : "light"}
                  color="light">
                    {page.shortTermPageCustomFields.shorttermSection4.cta.ctaColumns.column2?.button?.button2.text}
                </Button>
            </a>
          </ButtonWrapper>
      </Medial>
      <Section
        color={page.shortTermPageCustomFields.shorttermSection5.color}
        heading={page.shortTermPageCustomFields.shorttermSection5.heading}>
        <RelatedContent />
        {(!hasChildren) ? (
          <Cards relatedContent={true}>
            <Card
              image={page?.shortTermPageCustomFields?.shorttermSection5?.relatedContent?.relatedContent1?.image?.sourceUrl}
              title={page?.shortTermPageCustomFields?.shorttermSection5?.relatedContent?.relatedContent1?.title}
              link={page?.shortTermPageCustomFields?.shorttermSection5?.relatedContent?.relatedContent1?.link}>
              <p dangerouslySetInnerHTML={{ __html: page?.shortTermPageCustomFields?.shorttermSection5?.relatedContent?.relatedContent1?.content}} />
            </Card>
            <Card
              image={page?.shortTermPageCustomFields?.shorttermSection5?.relatedContent?.relatedContent2?.image?.sourceUrl}
              title={page?.shortTermPageCustomFields?.shorttermSection5?.relatedContent?.relatedContent2?.title}
              link={page?.shortTermPageCustomFields?.shorttermSection5?.relatedContent?.relatedContent2?.link}>
              <p dangerouslySetInnerHTML={{ __html: page?.shortTermPageCustomFields?.shorttermSection5?.relatedContent?.relatedContent2?.content}} />
            </Card>
            <Card
              image={page?.shortTermPageCustomFields?.shorttermSection5?.relatedContent?.relatedContent3?.image?.sourceUrl}
              title={page?.shortTermPageCustomFields?.shorttermSection5?.relatedContent?.relatedContent3?.title}
              link={page?.shortTermPageCustomFields?.shorttermSection5?.relatedContent?.relatedContent3?.link}>
              <p dangerouslySetInnerHTML={{ __html: page?.shortTermPageCustomFields?.shorttermSection5?.relatedContent?.relatedContent3?.content}} />

            </Card>
          </Cards>
        ) : null }
        <div className="full-rounded" style={{ textAlign: "center" }}>
          <a href={page.shortTermPageCustomFields.shorttermSection5.cta.link} onClick={routeLink}>
            <Button background="accent-alt" border="light" color="light">
              {page.shortTermPageCustomFields.shorttermSection5.cta.text}
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

export default ShortTermInsurancePage

export const Head = () => {
  const { page } = useShortTermPageQuery();
  return (
    <>
      <PageHead
        title={page.seo.title}
        description={page.seo.metaDesc}/>
    </>
  )
}
