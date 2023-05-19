// Library
import React, { useEffect, useState } from "react";
import { Global } from "@emotion/react";

// Query
import { useHealthPageQuery } from "../../hooks/insurance/useHealthPageQuery"

// Styles
import {
  PageStyles,
  HeroHeading,
  HeroSubheading
} from "../../components/pages/styles/HealthInsStyles";

// Scripts
import { routeLink } from "../../static/scripts/global";

// Components
import Layout from "../../components/Layout";
import PageHead from "../../components/PageHead";
import Hero from "../../components/Hero";
import PageHeroForm from "../../components/Hero/PageHeroForm";
import Button from "../../components/Buttons/Button";
import Section from "../../components/Sections";
import Cards from "../../components/Cards";
import Card from "../../components/Cards/Card";
import RelatedContent from "../../components/RelatedContent";
import Icons from "../../components/Icons";
import Icon from "../../components/Icons/Icon";
import FlexedSection from "../../components/Sections/FlexedSection";
import Accordion from "../../components/Accordions";
import Callouts from "../../components/Callouts";
import Callout from "../../components/Callouts/Callout";
import Footer from "../../components/Footer";

const HealthInsurancePage = () => {
  const { page } = useHealthPageQuery();
  const plans = page.healthPageCustomFields.healthSection3.healthPlans;
  const callouts = page.calloutsCustomField.callouts;

  const [hasChildren, setHasChildren] = useState(false);

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
    <Layout pageClass="health-insurance">
      <Global styles={PageStyles} />
      <Hero
        image={page.pageHeroFields.heroImage.sourceUrl}
        mobileImage={page.pageHeroFields.mobileHeroImage.sourceUrl}
        bgColor="#C8E3E0">
        <HeroHeading>{page.pageHeroFields.headline}</HeroHeading>
        <HeroSubheading>{page.pageHeroFields.subheadline}</HeroSubheading>
        <PageHeroForm
            light
            btnLeftText={page.pageHeroFields.heroButtons.heroButton1.text}
            btnRightText={page.pageHeroFields.heroButtons.heroButton2.text}
            inputId="healthPageHeroLocation"
            footerContent={page.pageHeroFields.callUs} />
      </Hero>
      <Section
        page="health-insurance"
        color={page.healthPageCustomFields.healthSection1.color}
        heading={page.healthPageCustomFields.healthSection1.heading}>
        <Cards openAtMobile>
          <Card
            icon={page.healthPageCustomFields.healthSection1.healthCards.healthCard1.icon.sourceUrl}
            mobile={page.healthPageCustomFields.healthSection1.healthCards.healthCard1.mobile.sourceUrl}
            title={page.healthPageCustomFields.healthSection1.healthCards.healthCard1.title}
            link={page.healthPageCustomFields.healthSection1.healthCards.healthCard1.link}>
            <p dangerouslySetInnerHTML={{ __html: page.healthPageCustomFields.healthSection1.healthCards.healthCard1.content }} />
          </Card>
          <Card
            icon={page.healthPageCustomFields.healthSection1.healthCards.healthCard2.icon.sourceUrl}
            mobile={page.healthPageCustomFields.healthSection1.healthCards.healthCard2.mobile.sourceUrl}
            title={page.healthPageCustomFields.healthSection1.healthCards.healthCard2.title}
            link={page.healthPageCustomFields.healthSection1.healthCards.healthCard2.link}>
            <p dangerouslySetInnerHTML={{ __html: page.healthPageCustomFields.healthSection1.healthCards.healthCard2.content }} />
          </Card>
          <Card
            icon={page.healthPageCustomFields.healthSection1.healthCards.healthCard3.icon.sourceUrl}
            mobile={page.healthPageCustomFields.healthSection1.healthCards.healthCard3.mobile.sourceUrl}
            title={page.healthPageCustomFields.healthSection1.healthCards.healthCard3.title}
            link={page.healthPageCustomFields.healthSection1.healthCards.healthCard3.link}>
            <p dangerouslySetInnerHTML={{ __html: page.healthPageCustomFields.healthSection1.healthCards.healthCard3.content }} />
          </Card>
        </Cards>
      </Section>
      <Section
        classes="show-at-mobile"
        color="primary"
        heading={page.healthPageCustomFields.healthSection3.heading}>
        <Icons>
          {(plans) ? (
            Object.keys(plans).map((plan) => {
              return (
                <Icon
                  icon={plans[plan].icon.sourceUrl}
                  mobile={plans[plan].mobileIcon?.sourceUrl}
                  title={plans[plan].title}
                  link={plans[plan].link} />
              )
            })
          ) : null}
        </Icons>
      </Section>
      <FlexedSection
        color={page.healthPageCustomFields.healthSection2.color}
        heading={page.healthPageCustomFields.healthSection2.heading}>
        <Accordion
          title={page.healthPageCustomFields.healthSection2.healthAccordions.healthAccordion1.title}
          content={page.healthPageCustomFields.healthSection2.healthAccordions.healthAccordion1.content} />
        <Accordion
          title={page.healthPageCustomFields.healthSection2.healthAccordions.healthAccordion2.title}
          content={page.healthPageCustomFields.healthSection2.healthAccordions.healthAccordion2.content} />
        <Accordion
          title={page.healthPageCustomFields.healthSection2.healthAccordions.healthAccordion3.title}
          content={page.healthPageCustomFields.healthSection2.healthAccordions.healthAccordion3.content} />
        <a className="hide-at-mobile" href={page.healthPageCustomFields.healthSection2.cta.link} onClick={routeLink}>
          <Button background="accent-alt" border="light" color="light">{page.healthPageCustomFields.healthSection2.cta.text}</Button>
        </a>
      </FlexedSection>
      <Section
        classes="hide-at-mobile"
        color={page.healthPageCustomFields.healthSection3.color}
        heading={page.healthPageCustomFields.healthSection3.heading}>
        <Icons>
          {(plans) ? (
            Object.keys(plans).map((plan) => {
              return (
                <Icon
                  icon={plans[plan].icon.sourceUrl}
                  mobile={plans[plan].mobileIcon?.sourceUrl}
                  title={plans[plan].title}
                  link={plans[plan].link} />
              )
            })
          ) : null}
        </Icons>
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
        color={page.healthPageCustomFields.healthSection4.color}
        heading={page.healthPageCustomFields.healthSection4.heading}>
        <RelatedContent />
        {(!hasChildren) ? (
          <Cards relatedContent={true}>
            <Card
              image={page.healthPageCustomFields.healthSection4.healthRelatedContent.healthRelatedContent1.image.sourceUrl}
              title={page.healthPageCustomFields.healthSection4.healthRelatedContent.healthRelatedContent1.heading}
              link={page.healthPageCustomFields.healthSection4.healthRelatedContent.healthRelatedContent1.link}>
              <p dangerouslySetInnerHTML={{ __html: page.healthPageCustomFields.healthSection4.healthRelatedContent.healthRelatedContent1.content}} />
            </Card>
            <Card
              image={page.healthPageCustomFields.healthSection4.healthRelatedContent.healthRelatedContent2.image.sourceUrl}
              title={page.healthPageCustomFields.healthSection4.healthRelatedContent.healthRelatedContent2.heading}
              link={page.healthPageCustomFields.healthSection4.healthRelatedContent.healthRelatedContent2.link}>
              <p dangerouslySetInnerHTML={{ __html: page.healthPageCustomFields.healthSection4.healthRelatedContent.healthRelatedContent2.content}} />
            </Card>
            <Card
              image={page.healthPageCustomFields.healthSection4.healthRelatedContent.healthRelatedContent3.image.sourceUrl}
              title={page.healthPageCustomFields.healthSection4.healthRelatedContent.healthRelatedContent3.heading}
              link={page.healthPageCustomFields.healthSection4.healthRelatedContent.healthRelatedContent3.link}>
              <p dangerouslySetInnerHTML={{ __html: page.healthPageCustomFields.healthSection4.healthRelatedContent.healthRelatedContent3.content}} />
            </Card>
          </Cards>
        ) : null }
        <div className="full-rounded" style={{ textAlign: "center" }}>
          <a href={page.healthPageCustomFields.healthSection4.cta.link} onClick={routeLink}>
            <Button background="accent-alt" border="light" color="light">
              {page.healthPageCustomFields.healthSection4.cta.text}
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

export default HealthInsurancePage

export const Head = () => {
  const { page } = useHealthPageQuery();
  return (
    <>
      <PageHead
        title={page.seo.title}
        description={page.seo.metaDesc}/>
      <script src="//cdn.bc0a.com/autopilot/f00000000075672/autopilot_sdk.js"></script>
    </>
  )
}
