import React, { useEffect, useState } from "react";
import PageHead from "../../components/PageHead";
import { useIntelligentPageQuery } from "../../hooks/insurance/useIntelligentPageQuery";
import Layout from "../../components/Layout";
import { Global } from "@emotion/react";
import { IntelligentStyles } from "../../components/pages/styles/IntelligentPageStyles";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import { useLocation } from "@reach/router";

// Scripts
import { routeLink } from "../../static/scripts/global";

// Components
import Section from "../../components/Sections";
import Button from "../../components/Buttons/Button";
import Card from "../../components/Cards/Card";
import RelatedContent from "../../components/RelatedContent";
import Cards from "../../components/Cards";
import FlexedSection from "../../components/Sections/FlexedSection";
import List from "../../components/Lists";
import ListItem from "../../components/Lists/ListItem";
import Medial from "../../components/Medials";
import { HeroHeading, HeroSubheading, FlexedSectionContainer} from "../../components/pages/styles/IntelligentPageStyles";

// Images
import PhoneIcon from "../../static/images/phone-icon.png"


const IntelligentPage = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const marketingRefCode = searchParams.get('MarketingRefCode')
    const generalHealthPage = marketingRefCode?.split('_')[3] === 'health'
    const { page } = useIntelligentPageQuery();
    const plans = page.intelligentInsurancePageCustomField.intelligentSection3.intelligentCards;
    const options = generalHealthPage ? page.intelligentInsurancePageCustomField.intelligentSection1.options : page.intelligentInsuranceGIJPageCustomField.intelligentGijSection1.options;
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
                        <div className="button-content">
                    <img src={PhoneIcon} />
                    {page.intelligentInsurancePageCustomField.intelligentSection2.columns.column3.button.text}
                    </div>
                    </Button>
                </a>
            </Hero>
            {/* Explore options  */}

            { generalHealthPage ? 
            <>
            <FlexedSection
                color={page.intelligentInsurancePageCustomField.intelligentSection1.color}
                heading={page.intelligentInsurancePageCustomField.intelligentSection1.heading}>
                <h4 dangerouslySetInnerHTML={{ __html: page.intelligentInsurancePageCustomField.intelligentSection1.intelligentSectionSubheading }} />
            </FlexedSection>
                <div className="card-container" style={{ background: 'rgb(244, 250, 253)' }}>
                <Cards>
                    {options ? (
                        Object.keys(options).map((key) => {
                            const option = options[key];
                            return (
                                <Card
                                title={option.title}
                                link={option.link}
                                >
                                    <p className="card-p">{option.description}</p>
                                    <a className="card-link" href={option.link.link}>{option.link.text}</a>
                                </Card>
                            )
                        })
                    ) : null}
                </Cards>
            </div>
            </>
:
<>
            <FlexedSection
                color={page.intelligentInsuranceGIJPageCustomField.intelligentGijSection1.color}
                heading={page.intelligentInsuranceGIJPageCustomField.intelligentGijSection1.heading}>
                <h4 dangerouslySetInnerHTML={{ __html: page.intelligentInsuranceGIJPageCustomField.intelligentGijSection1.intelligentSectionSubheading }} />
            </FlexedSection>
            <div className="card-container" style={{ background: 'rgb(244, 250, 253)' }}>
                <Cards>
                    {options ? (
                        Object.keys(options).map((key) => {
                            const option = options[key];
                            return (
                                <Card
                                title={option.title}
                                link={option.link}
                                >
                                    <p className="card-p">{option.description}</p>
                                    <a className="card-link" href={option.link.link}>{option.link.text}</a>
                                </Card>
                            )
                        })
                    ) : null}
                </Cards>
            </div>
            </>
}

            {/* we're here to help  */}
            <Medial color={page.intelligentInsurancePageCustomField.intelligentSection2.color}>
                <img
                    className="chat-bubble"
                    src={page.intelligentInsurancePageCustomField.intelligentSection2.columns.column1.image.sourceUrl}
                    alt="Chat bubble icon"
                />
                <div className="medial-header" dangerouslySetInnerHTML={{ __html: page.intelligentInsurancePageCustomField.intelligentSection2.columns.column2.heading }} />
                <div dangerouslySetInnerHTML={{ __html: page.intelligentInsurancePageCustomField.intelligentSection2.subText }} />
                <a
                    href={page.intelligentInsurancePageCustomField.intelligentSection2.columns.column3.button.link}
                    onClick={routeLink}
                >
                    <div className="help-button-container">
                    <Button background="accent-alt" border="light" color="light">
                        <div className="help-button-content">
                    <img className="help-button-content" src={PhoneIcon} />{page.intelligentInsurancePageCustomField.intelligentSection2.columns.column3.button.text}
                    </div>
                    </Button>
                    </div>
                </a>
            </Medial>
        


            {/* Three cards */}
                <FlexedSectionContainer>
                <FlexedSection
                    heading={page.intelligentInsurancePageCustomField.intelligentSection3.sectionHeading}
                    color={page.intelligentInsurancePageCustomField.intelligentSection3.sectionColor}
                />
                </FlexedSectionContainer>
                <div className="shop-card-container" style={{ background: 'rgb(244, 250, 253)' }}>
                <Cards>
                    {plans ? (
                        Object.keys(plans).map((key) => {
                            const plan = plans[key];
                            return (
                                <Card
                                title={plan.title}
                                link={plan.link.link}
                                >
                                    <div className="card-content-container">
                                    <img className="card-image" src={plan.icon.sourceUrl}></img>
                                    <p className="line">______</p>
                                    <p className="card-p">{plan.content}</p>
                                    <p className="line">______</p>
                                    <a className="card-link" href={plan.link.link}>{plan.link.text}</a>
                                    </div>
                                </Card>
                            )
                        })
                    ) : null}
                </Cards>
                </div>


{/* How we help */}
            <FlexedSection
                heading={page.intelligentInsurancePageCustomField.intelligentSection4.sectionHeading}
                color={page.intelligentInsurancePageCustomField.intelligentSection4.color}
            >
                <div className="list-container">
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
                </div>
            </FlexedSection>


            {/* learn more portion */}
            <Section
color={page.intelligentInsuranceGIJPageCustomField.intelligentGijSection5.color}
heading={page.intelligentInsuranceGIJPageCustomField.intelligentGijSection5.sectionHeading}>
    <Cards>
            { generalHealthPage ? 

<><Card
image="https://hmnm2022.wpengine.com/wp-content/uploads/2023/08/related-content-1-300x181-1.png"
title="What Is The Affordable Care Act?"
link="https://www.healthmarkets.com/aca-insurance-plans/">
<p className="content-description">What is the Affordable Care Act? HealthMarkets can answer this question and others that you may have about health insurance. </p>
</Card><Card
image="https://hmnm2022.wpengine.com/wp-content/uploads/2022/10/couple-snuggled.jpg"
title="What Does Basic Health Insurance Cost?"
link="https://www.healthmarkets.com/resources/health-insurance/health-insurance-guide/">
    <p className="content-description">Shopping for healthcare can be time-consuming and feel overwhelming. And one frustrating part can be figuring out what health insurance might cost. There’s no one-size-fits-all answer...</p>
</Card><Card
    image="https://hmnm2022.wpengine.com/wp-content/uploads/2022/10/woman-on-smartwatch.jpg"
    title="Picking a Healthcare Plan?"
    link="https://www.healthmarkets.com/resources/health-insurance/insurance-agent-aca/">
    <p className="content-description">Knowing that your healthcare costs are covered for the year ahead can be a big relief. Thankfully, millions of Americans have access to health insurance through the Affordable Care Act (ACA).</p>
</Card></>

:
                        <><Card
                            image="https://hmnm2022.wpengine.com/wp-content/uploads/2023/04/final-expense-hero-desktop.png"
                            title="Compare final expense insurance plans"
                            link="https://www.healthmarkets.com/life-insurance/final-expense-insurance">
                            <p className="content-description">Cover funeral and burial expenses so your family won't have to.</p>
                        </Card><Card
                            image="https://hmnm2022.wpengine.com/wp-content/uploads/2023/09/image-53-2.png"
                            title="Set your sights on an affordable vision plan"
                            link="https://www.healthmarkets.com/vision-insurance/">
                                <p className="content-description">Shop vision plans to see what’s right for you.</p>
                            </Card><Card
                                image="https://hmnm2022.wpengine.com/wp-content/uploads/2023/09/GettyImages-1074886550-copy-scaled-e1695160474267.jpeg"
                                title="Looking for individual health insurance?"
                                link="https://www.healthmarkets.com/health-insurance/individual/">
                                <p className="content-description">We can help find a plan that works for you.</p>
                            </Card></>

            }
</Cards>
<div className="full-rounded" style={{ textAlign: "center" }}>
    <a href={page.intelligentInsuranceGIJPageCustomField.intelligentGijSection5.cta.link} onClick={routeLink}>
        <Button background="accent-alt" border="light" color="light">
            {page.intelligentInsuranceGIJPageCustomField.intelligentGijSection5.cta.text}
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