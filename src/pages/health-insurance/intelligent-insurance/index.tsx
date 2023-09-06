import React, { useEffect, useState } from "react";
import PageHead from "../../../components/PageHead";
import { useIntelligentPageQuery } from "../../../hooks/insurance/useIntelligentPageQuery";
import Layout from "../../../components/Layout";
import { Global } from "@emotion/react";
import { IntelligentStyles } from "../../../components/pages/styles/IntelligentPageStyles";
import Hero from "../../../components/Hero";
import Footer from "../../../components/Footer";

// Scripts
import { routeLink } from "../../../static/scripts/global";
import Section from "../../../components/Sections";
import Button from "../../../components/Buttons/Button";
import Card from "../../../components/Cards/Card";
import RelatedContent from "../../../components/RelatedContent";
import Cards from "../../../components/Cards";
import FlexedSection from "../../../components/Sections/FlexedSection";
import List from "../../../components/Lists";
import ListItem from "../../../components/Lists/ListItem";
import Medial from "../../../components/Medials";
import { HeroHeading, HeroSubheading } from "../../../components/pages/styles/IntelligentPageStyles";
import PageHeroForm from "../../../components/Hero/PageHeroForm";


const IntelligentPage = () => {
    const { page } = useIntelligentPageQuery();
    const plans = page.intelligentInsurancePageCustomField.intelligentSection3.intelligentCards;
    const options = page.intelligentInsurancePageCustomField.intelligentSection1.options;
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
        <Layout pageClass='intelligent'>
            <Global styles={IntelligentStyles} />
            {/* Hero Section */}
            <Hero
                image={page.pageHeroFields.heroImage.sourceUrl}
                mobileImage={page.pageHeroFields.mobileHeroImage.sourceUrl}
                bgColor="#BBD9F1">
                <HeroHeading>{page.pageHeroFields.headline}</HeroHeading>
                <HeroSubheading>{page.pageHeroFields.subheadline}</HeroSubheading>
                <a
                    href={page.intelligentInsurancePageCustomField.intelligentSection2.columns.column3.button.link}
                    onClick={routeLink}
                >
                    <Button background="accent-alt" border="light" color="light">
                        {page.intelligentInsurancePageCustomField.intelligentSection2.columns.column3.button.text}
                    </Button>
                </a>
            </Hero>
            {/* Explore options  */}

            <FlexedSection
                color={page.intelligentInsurancePageCustomField.intelligentSection1.color}
                heading={page.intelligentInsurancePageCustomField.intelligentSection1.heading}>
                <p dangerouslySetInnerHTML={{ __html: page.intelligentInsurancePageCustomField.intelligentSection1.intelligentSectionSubheading }} />
            </FlexedSection>
            {/* 5 cards */}
            <div style={{ background: 'rgb(244, 250, 253)' }}>
                <Cards>
                    {options ? (
                        Object.keys(options).map((key) => {
                            const option = options[key];
                            return (
                                <Card
                                >
                                    <h4 style={{ textAlign: 'center' }}>{option.title}</h4>
                                    <p style={{ textAlign: 'center' }}>{option.description}</p>
                                    <a style={{ display: 'block', textAlign: 'center' }} href={option.link.link}>{option.link.text}</a>
                                </Card>
                            )
                        })
                    ) : null}
                </Cards>
            </div>


            {/* we're here to help  */}
            <Medial color={page.intelligentInsurancePageCustomField.intelligentSection2.color}>
                <img
                    className="chat-bubble"
                    src={page.intelligentInsurancePageCustomField.intelligentSection2.columns.column1.image.sourceUrl}
                    alt="Chat bubble icon"
                />
                <div dangerouslySetInnerHTML={{ __html: page.intelligentInsurancePageCustomField.intelligentSection2.columns.column2.heading }} />

                <div dangerouslySetInnerHTML={{ __html: page.intelligentInsurancePageCustomField.intelligentSection2.subText }} />
                <a
                    href={page.intelligentInsurancePageCustomField.intelligentSection2.columns.column3.button.link}
                    onClick={routeLink}
                >
                    <Button background="accent-alt" border="light" color="light">
                        {page.intelligentInsurancePageCustomField.intelligentSection2.columns.column3.button.text}
                    </Button>
                </a>
            </Medial>


            {/* Three cards */}
            <div style={{ background: 'white' }}>
                <FlexedSection
                    heading={page.intelligentInsurancePageCustomField.intelligentSection3.sectionHeading}
                    color={page.intelligentInsurancePageCustomField.intelligentSection3.sectionColor}
                />
                <Cards>
                    {(plans) ? (
                        Object.keys(plans).map((plan) => {
                            return (
                                <Card
                                    icon={plans[plan].icon.sourceUrl}
                                    mobile={plans[plan].mobileIcon?.sourceUrl}
                                    title={plans[plan].title}
                                    link={plans[plan].link}>
                                    <p dangerouslySetInnerHTML={{ __html: plans[plan].content }} />
                                    <a href={plans[plan].link.link}>{plans[plan].link.text}</a>
                                </Card>
                            )
                        })
                    ) : null}
                </Cards>
            </div>


            <FlexedSection
                heading={page.intelligentInsurancePageCustomField.intelligentSection4.sectionHeading}
                color={page.intelligentInsurancePageCustomField.intelligentSection4.color}
            >
                <List>
                    <ListItem
                        heading={page.intelligentInsurancePageCustomField.intelligentSection4.intelligentListItems.intelligentListItem1.heading}
                    >
                        <div
                            dangerouslySetInnerHTML={{
                                __html: page.intelligentInsurancePageCustomField.intelligentSection4.intelligentListItems.intelligentListItem1.content,
                            }}
                        />
                    </ListItem>
                    <ListItem
                        heading={page.intelligentInsurancePageCustomField.intelligentSection4.intelligentListItems.intelligentListItem2.heading}
                    >
                        <div
                            dangerouslySetInnerHTML={{
                                __html: page.intelligentInsurancePageCustomField.intelligentSection4.intelligentListItems.intelligentListItem2.content,
                            }}
                        />
                    </ListItem>
                    <ListItem
                        heading={page.intelligentInsurancePageCustomField.intelligentSection4.intelligentListItems.intelligentListItem3.heading}
                    >
                        <div
                            dangerouslySetInnerHTML={{
                                __html: page.intelligentInsurancePageCustomField.intelligentSection4.intelligentListItems.intelligentListItem3.content,
                            }}
                        />
                    </ListItem>
                </List>
                <a href={page.intelligentInsurancePageCustomField.intelligentSection4.sectionCta.link} onClick={routeLink}>
                    <Button background="accent-alt" border="light" color="light">
                        {page.intelligentInsurancePageCustomField.intelligentSection4.sectionCta.text}
                    </Button>
                </a>
            </FlexedSection>


            {/* learn more portion */}
            <Section
                color={page.intelligentInsurancePageCustomField.intelligentSection5.color}
                heading={page.intelligentInsurancePageCustomField.intelligentSection5.heading}>
                <RelatedContent />
                {(!hasChildren) ? (
                    <Cards relatedContent={true}>
                        <Card
                            image={page.intelligentInsurancePageCustomField.intelligentSection5.intelligentRelatedContent.intelligentRelatedContent1.image.sourceUrl}
                            title={page.intelligentInsurancePageCustomField.intelligentSection5.intelligentRelatedContent.intelligentRelatedContent1.heading}
                            link={page.intelligentInsurancePageCustomField.intelligentSection5.intelligentRelatedContent.intelligentRelatedContent1.link}>
                            <p dangerouslySetInnerHTML={{ __html: page?.intelligentInsurancePageCustomField?.intelligentSection5?.intelligentRelatedContent?.intelligentRelatedContent1?.content }} />
                        </Card>
                        <Card
                            image={page.intelligentInsurancePageCustomField.intelligentSection5.intelligentRelatedContent.intelligentRelatedContent2.image.sourceUrl}
                            title={page.intelligentInsurancePageCustomField.intelligentSection5.intelligentRelatedContent.intelligentRelatedContent2.heading}
                            link={page.intelligentInsurancePageCustomField.intelligentSection5.intelligentRelatedContent.intelligentRelatedContent2.link}>
                            <p dangerouslySetInnerHTML={{ __html: page.intelligentInsurancePageCustomField.intelligentSection5.intelligentRelatedContent.intelligentRelatedContent2.content }} />
                        </Card>
                        <Card
                            image={page.intelligentInsurancePageCustomField.intelligentSection5.intelligentRelatedContent.intelligentRelatedContent3.image.sourceUrl}
                            title={page.intelligentInsurancePageCustomField.intelligentSection5.intelligentRelatedContent.intelligentRelatedContent3.heading}
                            link={page.intelligentInsurancePageCustomField.intelligentSection5.intelligentRelatedContent.intelligentRelatedContent3.link}>
                            <p dangerouslySetInnerHTML={{ __html: page.intelligentInsurancePageCustomField.intelligentSection5.intelligentRelatedContent.intelligentRelatedContent3.content }} />
                        </Card>
                    </Cards>
                ) : null}
                <div className="full-rounded" style={{ textAlign: "center" }}>
                    <a href={page.intelligentInsurancePageCustomField.intelligentSection5.cta.link} onClick={routeLink}>
                        <Button background="accent-alt" border="light" color="light">
                            {page.intelligentInsurancePageCustomField.intelligentSection5.cta.text}
                        </Button>
                    </a>
                </div>
            </Section>
            <Footer>  {/* I'm guessing you wanted Footer inside Layout */}
                {page.disclaimers.disclaimer}
            </Footer>
        </Layout >
    )
};

export default IntelligentPage;


export const Head = () => {
    const { page } = useIntelligentPageQuery();
    return (
        <>
            <PageHead
                title={page.seo.title}
                description={page.seo.metaDesc} />
            <script src="//cdn.bc0a.com/autopilot/f00000000075672/autopilot_sdk.js"></script>
        </>
    )
}