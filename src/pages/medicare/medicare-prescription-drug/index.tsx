// Library
import React, {FC, ReactNode} from "react";
import {Global} from "@emotion/react";

// Query
import {useMedicarePrescriptionDrugPageQuery} from "../../../hooks/insurance/useMedicarePrescriptionDrugPageQuery";

// Styles

import {
    BelowHeroMobileImg,
    ColoredListItem,
    ColoredParagraph,
    HeroDisclaimerLight,
    HeroHeadingLight,
    HeroSubheadingLight,
    PageStyles,
    SectionDescription,
    SectionSubHeading,
    ShopCta
} from "../../../components/pages/styles/MedicarePrescriptionDrugStyles";

// Scripts
import {routeLink} from "../../../static/scripts/global";

// Components
import Layout from "../../../components/Layout";
import PageHead from "../../../components/PageHead";
import Hero from "../../../components/Hero";
import PageHeroForm from "../../../components/Hero/PageHeroForm";
import Button from "../../../components/Buttons/Button";
import Section from "../../../components/Sections";
import Cards from "../../../components/Cards";
import Card from "../../../components/Cards/Card";
import FlexedSection from "../../../components/Sections/FlexedSection";
import Medial from "../../../components/Medials";
import Footer from "../../../components/Footer";
import RelatedContent from "../../../components/RelatedContent";
import List from "../../../components/Lists";
import ListItem from "../../../components/Lists/ListItem";
import {Img} from "../../../components/Cards/Card/styles";

const MedicarePrescriptionDrugPage = () => {
    const { page } = useMedicarePrescriptionDrugPageQuery();
    return (
        <Layout pageClass="medicare-prescription-drug">
            <Global styles={PageStyles} />
            <Hero
                wrapperStyle={{paddingBottom: '0'}}
                mobileImgStyle={{display: 'none'}}
                image={page.pageHeroFields.heroImage.sourceUrl}
                // The hero in this page will be displayed below the form and disclaimer, so, now we only display a single pixel image as mobile hero image.
                mobileImage={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAA1JREFUGFdjePrg9n8ACO4DoC5ZRGcAAAAASUVORK5CYII='}
                bgColor="#e5e0db">
                <HeroHeadingLight>{page.pageHeroFields.headline}</HeroHeadingLight>
                <HeroSubheadingLight>{page.pageHeroFields.subheadline}</HeroSubheadingLight>
                <PageHeroForm
                    light
                    btnLeftText={page.pageHeroFields.heroButtons.heroButton1.text}
                    btnRightText={page.pageHeroFields.heroButtons.heroButton2.text}
                    footerContent={page.pageHeroFields.callUs} />
                <HeroDisclaimerLight dangerouslySetInnerHTML={{ __html: page.medicarePrescriptionDrugPageCustomFields?.heroDisclaimer }}/>
                <BelowHeroMobileImg src={page.pageHeroFields.mobileHeroImage.sourceUrl} alt="Hero" />
            </Hero>
            <FlexedSection
                heading={page.medicarePrescriptionDrugPageCustomFields.medicarePrescriptionDrugSection1.heading}
                color={page.medicarePrescriptionDrugPageCustomFields.medicarePrescriptionDrugSection1.color}>
                <SectionDescription>
                    {page.medicarePrescriptionDrugPageCustomFields.medicarePrescriptionDrugSection1.subheading}
                </SectionDescription>
                <SectionSubHeading>
                    {page.medicarePrescriptionDrugPageCustomFields.medicarePrescriptionDrugSection1.listTitle}
                </SectionSubHeading>
                <List>
                    {page.medicarePrescriptionDrugPageCustomFields.medicarePrescriptionDrugSection1.listItems?.split("\n").filter((item: string) => Boolean(item.trim())).map((item: string, i: number) => (
                        <ListItem key={`item-${i}`}>
                            <ColoredListItem>
                                {item}
                            </ColoredListItem>
                        </ListItem>
                    ))}
                </List>
                <ShopCta href={page.medicarePrescriptionDrugPageCustomFields.medicarePrescriptionDrugSection1.sectionCta.link} onClick={routeLink}>
                    <Button background="accent-alt" border="light" color="light">{page.medicarePrescriptionDrugPageCustomFields.medicarePrescriptionDrugSection1.sectionCta.text}</Button>
                </ShopCta>
            </FlexedSection>

            {/*Don't delete this div. It prevents adding a padding-top: 0 in the 'Medial'.*/}
            <div/>

            <Medial color={page.medicarePrescriptionDrugPageCustomFields.medicarePrescriptionDrugSection2.color}>
                <div>
                    <h3>{page.medicarePrescriptionDrugPageCustomFields.medicarePrescriptionDrugSection2.title}</h3>
                    <ColoredParagraph>{page.medicarePrescriptionDrugPageCustomFields.medicarePrescriptionDrugSection2.subtitle}</ColoredParagraph>
                </div>
                <div className="button-container" style={{textAlign: 'center'}}>
                    <Img
                        src={page.medicarePrescriptionDrugPageCustomFields.medicarePrescriptionDrugSection2.buttonImage?.sourceUrl}
                        style={{width: '171px', height: '112px'}}
                        alt="Calculator Icon"
                    />
                    <a href={page.medicarePrescriptionDrugPageCustomFields.medicarePrescriptionDrugSection2.buttonUrl} onClick={routeLink}>
                        <Button background="accent-alt" border="light" color="light">
                            {page.medicarePrescriptionDrugPageCustomFields.medicarePrescriptionDrugSection2.buttonText}
                        </Button>
                    </a>
                </div>
            </Medial>
            <Section
                color={page.medicarePrescriptionDrugPageCustomFields.medicarePrescriptionDrugRelated.sectionColor}
                heading={page.medicarePrescriptionDrugPageCustomFields.medicarePrescriptionDrugRelated.sectionHeading}>
                <RelatedContent />
                <Cards>
                    <Card
                        image={page.medicarePrescriptionDrugPageCustomFields.medicarePrescriptionDrugRelated.medicarePrescriptionDrugRelated1.image.sourceUrl}
                        imgStyle={{width: '100%'}}
                        title={page.medicarePrescriptionDrugPageCustomFields.medicarePrescriptionDrugRelated.medicarePrescriptionDrugRelated1.title}
                        link={page.medicarePrescriptionDrugPageCustomFields.medicarePrescriptionDrugRelated.medicarePrescriptionDrugRelated1.link}>
                        <p dangerouslySetInnerHTML={{ __html: page.medicarePrescriptionDrugPageCustomFields.medicarePrescriptionDrugRelated.medicarePrescriptionDrugRelated1.content}} />
                    </Card>
                    <Card
                        image={page.medicarePrescriptionDrugPageCustomFields.medicarePrescriptionDrugRelated.medicarePrescriptionDrugRelated2.image.sourceUrl}
                        imgStyle={{width: '100%'}}
                        title={page.medicarePrescriptionDrugPageCustomFields.medicarePrescriptionDrugRelated.medicarePrescriptionDrugRelated2.title}
                        link={page.medicarePrescriptionDrugPageCustomFields.medicarePrescriptionDrugRelated.medicarePrescriptionDrugRelated2.link}>
                        <p dangerouslySetInnerHTML={{ __html: page.medicarePrescriptionDrugPageCustomFields.medicarePrescriptionDrugRelated.medicarePrescriptionDrugRelated2.content}} />
                    </Card>
                    <Card
                        image={page.medicarePrescriptionDrugPageCustomFields.medicarePrescriptionDrugRelated.medicarePrescriptionDrugRelated3.image.sourceUrl}
                        imgStyle={{width: '100%'}}
                        title={page.medicarePrescriptionDrugPageCustomFields.medicarePrescriptionDrugRelated.medicarePrescriptionDrugRelated3.title}
                        link={page.medicarePrescriptionDrugPageCustomFields.medicarePrescriptionDrugRelated.medicarePrescriptionDrugRelated3.link}>
                        <p dangerouslySetInnerHTML={{ __html: page.medicarePrescriptionDrugPageCustomFields.medicarePrescriptionDrugRelated.medicarePrescriptionDrugRelated3.content}} />
                    </Card>
                </Cards>
                <div className="full-rounded" style={{ textAlign: "center" }}>
                    <a href={page.medicarePrescriptionDrugPageCustomFields.medicarePrescriptionDrugRelated.ctaLink} onClick={routeLink}>
                        <Button background="accent-alt" border="light" color="light">
                            {page.medicarePrescriptionDrugPageCustomFields.medicarePrescriptionDrugRelated.ctaText}
                        </Button>
                    </a>
                </div>
            </Section>
            <Footer>
                {page.disclaimers.disclaimer}
            </Footer>
        </Layout>
    );
};

export default MedicarePrescriptionDrugPage;

export const Head = () => {
    const { page } = useMedicarePrescriptionDrugPageQuery();
    return (
        <>
            <PageHead
                title={page.seo.title}
                description={page.seo.metaDesc} />
        </>
    );
};
