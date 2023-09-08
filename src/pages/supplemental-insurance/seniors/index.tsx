// Library
import React, { useEffect, useState } from "react";
import { Global } from "@emotion/react";

// Query
import { useSeniorPageQuery } from "../../../hooks/insurance/useSeniorPageQuerty";

// Styles
import { PageStyles, HeroHeading, HeroSubheading } from "../../../components/pages/styles/SeniorsPageStyles";

// Scripts
import { routeLink } from "../../../static/scripts/global";

// Components
import Layout from "../../../components/Layout";
import Hero from "../../../components/Hero";
import PageHeroForm from "../../../components/Hero/PageHeroForm";
import Section from "../../../components/Sections";
import Cards from "../../../components/Cards";
import Card from "../../../components/Cards/Card";
import Button from "../../../components/Buttons/Button";
import Footer from "../../../components/Footer";
import PageHead from "../../../components/PageHead";
import RelatedContent from "../../../components/RelatedContent";
import { ButtonWrapper } from "../../../components/pages/styles/ShortTermStyles";
import Medial from "../../../components/Medials";
import FlexedSection from "../../../components/Sections/FlexedSection";

const SeniorsPage = () => {
    const { page } = useSeniorPageQuery();
    const plans = page.seniorPageCustomFields.senSection1.senPlans;

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
        <Layout pageClass="senior" >
            <Global styles={PageStyles} />
            <Hero
                image={page.pageHeroFields.heroImage.sourceUrl}
                mobileImage={page.pageHeroFields.mobileHeroImage.sourceUrl}
                bgColor="#82BBCF"

            >
                <HeroHeading style={{ color: 'white' }}>{page.pageHeroFields.headline}</HeroHeading>
                <HeroSubheading style={{ color: 'white' }}>{page.pageHeroFields.subheadline}</HeroSubheading>
                <PageHeroForm
                    light
                    btnLeftText={page.pageHeroFields.heroButtons.heroButton1.text}
                    btnRightText={page.pageHeroFields.heroButtons.heroButton2.text}
                    inputId="senior-insurance"
                    footerContent={page.pageHeroFields.callUs}
                />
            </Hero>
            <FlexedSection
                color={page.seniorPageCustomFields.senSection1.color}
                heading={page.seniorPageCustomFields.senSection1.heading}>
                <div className="flex-container" style={{ textAlign: 'left', }}>
                    <p style={{ lineHeight: '2rem' }}>{page.seniorPageCustomFields.senSection1.subheading}</p>
                </div>
            </FlexedSection>
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
                            </Card>
                        )
                    })
                ) : null}
            </Cards>
            <Medial color={page.seniorPageCustomFields.senSection2.cta.ctaBgColor}>
                <div dangerouslySetInnerHTML={{ __html: page.seniorPageCustomFields.senSection2.cta.ctaColumns.column1.heading }} style={{ color: '#009FDA' }} />
                <ButtonWrapper>
                    <a href={page.seniorPageCustomFields.senSection2.cta.ctaColumns.column2?.button?.button1.link} onClick={routeLink}>
                        <Button
                            background={(page.seniorPageCustomFields.senSection2.cta.ctaBgColor === "accent") ? "primary" : "accent-alt"}
                            border={(page.seniorPageCustomFields.senSection2.cta.ctaBgColor === "accent") ? "primary" : "light"}
                            color="light">
                            {page.seniorPageCustomFields.senSection2.cta.ctaColumns.column2?.button?.button1.text}
                        </Button>
                    </a>
                    <a href={page.seniorPageCustomFields.senSection2.cta.ctaColumns.column2?.button?.button2.link} onClick={routeLink}>
                        <Button
                            background={(page.seniorPageCustomFields.senSection2.cta.ctaBgColor === "accent") ? "primary" : "accent-alt"}
                            border={(page.seniorPageCustomFields.senSection2.cta.ctaBgColor === "accent") ? "primary" : "light"}
                            color="light">
                            {page.seniorPageCustomFields.senSection2.cta.ctaColumns.column2?.button?.button2.text}
                        </Button>
                    </a>
                </ButtonWrapper>
            </Medial>

            <Section
                color={page.seniorPageCustomFields.senSection3.color}
                heading={page.seniorPageCustomFields.senSection3.heading}>
                <RelatedContent />
                {(!hasChildren) ? (
                    <Cards relatedContent={true}>
                        <Card
                            image={page.seniorPageCustomFields.senSection3.senRelatedContent.relatedContent1.image.sourceUrl}
                            title={page.seniorPageCustomFields.senSection3.senRelatedContent.relatedContent1.title}
                            link={page.seniorPageCustomFields.senSection3.senRelatedContent.relatedContent1.link}>
                            <div dangerouslySetInnerHTML={{ __html: page.seniorPageCustomFields.senSection3.senRelatedContent.relatedContent1.content }} />
                        </Card>
                        <Card
                            image={page.seniorPageCustomFields.senSection3.senRelatedContent.relatedContent2.image.sourceUrl}
                            title={page.seniorPageCustomFields.senSection3.senRelatedContent.relatedContent2.title}
                            link={page.seniorPageCustomFields.senSection3.senRelatedContent.relatedContent2.link}>
                            <div dangerouslySetInnerHTML={{ __html: page.seniorPageCustomFields.senSection3.senRelatedContent.relatedContent2.content }} />
                        </Card>
                        <Card
                            image={page.seniorPageCustomFields.senSection3.senRelatedContent.relatedContent3.image.sourceUrl}
                            title={page.seniorPageCustomFields.senSection3.senRelatedContent.relatedContent3.title}
                            link={page.seniorPageCustomFields.senSection3.senRelatedContent.relatedContent3.link}>
                            <div dangerouslySetInnerHTML={{ __html: page.seniorPageCustomFields.senSection3.senRelatedContent.relatedContent3.content }} />
                        </Card>
                    </Cards>
                ) : null}
                <div className="full-rounded" style={{ textAlign: "center" }}>
                    <a href={page.seniorPageCustomFields.senSection3.cta.link} onClick={routeLink}>
                        <Button background="accent-alt" border="light" color="light">
                            {page.seniorPageCustomFields.senSection3.cta.text}
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

export default SeniorsPage;

export const Head = () => {
    const { page } = useSeniorPageQuery();
    return (
        <>
            <PageHead
                title={page.seo.title}
                description={page.seo.metaDesc} />
            <script src="//cdn.bc0a.com/autopilot/f00000000075672/autopilot_sdk.js"></script>
        </>
    )
}
