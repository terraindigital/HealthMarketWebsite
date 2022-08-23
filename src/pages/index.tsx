// Library
import * as React from 'react';
import { PageProps } from 'gatsby';

// Queries
import { useHomePageQuery } from '../hooks/useHomePageQuery';

// Styles
import { HeroHeading, HeroSubheading } from '../components/Hero/Variants/homePageStyles';

// Components
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import Hero from '../components/Hero';
import PageHeroForm from '../components/Hero/PageHeroForm';
import Button from '../components/Buttons/Button';
import Section from '../components/Sections';
import Carousel from '../components/Carousel';
import Tile from '../components/Tiles/Tile';
import Medial from '../components/Medials';
import FlexedSection from '../components/Sections/FlexedSection';
import List from '../components/Lists';
import ListItem from '../components/Lists/ListItem';
import Reviews from '../components/Reviews';
import Review from '../components/Reviews/Review';
import Footer from '../components/Footer';

const IndexPage = ({path}: PageProps) => {
    const { home } = useHomePageQuery();

    return (
        <Layout pageClass="home" headerColor="light">
            <Seo title="Home"/>
            <Hero
                image={home.pageHeroFields.heroImage.sourceUrl}
                mobileImage={home.pageHeroFields.mobileHeroImage.sourceUrl}
                centered>
                <HeroHeading>{home.pageHeroFields.headline}</HeroHeading>
                <HeroSubheading>{home.pageHeroFields.subheadline}</HeroSubheading>
                <PageHeroForm
                    centered
                    btnLeftText={home.pageHeroFields.heroButtons.heroButton1.text}
                    btnRightText={home.pageHeroFields.heroButtons.heroButton2.text}
                    inputId="homepageHeroLocation"
                    button />
            </Hero>
            <Section
                heading={home.homePageCustomFields.homeSection1.heading}
                subheading={home.homePageCustomFields.homeSection1.subheading}
                color={home.homePageCustomFields.homeSection1.color}>
                <Carousel type="tiles">
                    <Tile
                        image={home.homePageCustomFields.homeSection1.tiles.tile1.image.sourceUrl}
                        title={home.homePageCustomFields.homeSection1.tiles.tile1.title}
                        link={home.homePageCustomFields.homeSection1.tiles.tile1.link}
                        />
                    <Tile
                        image={home.homePageCustomFields.homeSection1.tiles.tile2.image.sourceUrl}
                        title={home.homePageCustomFields.homeSection1.tiles.tile2.title}
                        link={home.homePageCustomFields.homeSection1.tiles.tile2.link}
                        />
                    <Tile
                        image={home.homePageCustomFields.homeSection1.tiles.tile3.image.sourceUrl}
                        title={home.homePageCustomFields.homeSection1.tiles.tile3.title}
                        link={home.homePageCustomFields.homeSection1.tiles.tile3.link}
                        />
                    <Tile
                        image={home.homePageCustomFields.homeSection1.tiles.tile4.image.sourceUrl}
                        title={home.homePageCustomFields.homeSection1.tiles.tile4.title}
                        link={home.homePageCustomFields.homeSection1.tiles.tile4.link}
                        />
                    <Tile
                        image={home.homePageCustomFields.homeSection1.tiles.tile5.image.sourceUrl}
                        title={home.homePageCustomFields.homeSection1.tiles.tile5.title}
                        link={home.homePageCustomFields.homeSection1.tiles.tile5.link}
                        />
                </Carousel>
            </Section>
            <Medial color={home.homePageCustomFields.homeSection2.color}>
                <img className="chat-bubble" src={home.homePageCustomFields.homeSection2.columns.column1.image.sourceUrl} alt="Chat bubble icon" />
                <div dangerouslySetInnerHTML={{ __html: home.homePageCustomFields.homeSection2.columns.column2.heading }} />
                <a href={home.homePageCustomFields.homeSection2.columns.column3.button.link}>
                    <Button background="accent" border="accent" color="light">
                        {home.homePageCustomFields.homeSection2.columns.column3.button.text}
                    </Button>
                </a>
            </Medial>
            <FlexedSection
                heading={home.homePageCustomFields.homeSection3.heading}
                color={home.homePageCustomFields.homeSection3.color}>
                <List>
                    <ListItem heading={home.homePageCustomFields.homeSection3.homeListItems.homeListItem1.heading}>
                        <div dangerouslySetInnerHTML={{ __html: home.homePageCustomFields.homeSection3.homeListItems.homeListItem1.content }} />
                    </ListItem>
                    <ListItem heading={home.homePageCustomFields.homeSection3.homeListItems.homeListItem2.heading}>
                        <div dangerouslySetInnerHTML={{ __html: home.homePageCustomFields.homeSection3.homeListItems.homeListItem2.content }} />
                    </ListItem>
                    <ListItem heading={home.homePageCustomFields.homeSection3.homeListItems.homeListItem3.heading}>
                        <div dangerouslySetInnerHTML={{ __html: home.homePageCustomFields.homeSection3.homeListItems.homeListItem3.content }} />
                    </ListItem>
                </List>
                <a href={home.homePageCustomFields.homeSection3.sectionCta.link}>
                    <Button background="accent" border="accent" color="light">{home.homePageCustomFields.homeSection3.sectionCta.text}</Button>
                </a>
            </FlexedSection>
            <Section color="light">
                <div className="hide-at-mobile">
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
                </div>
                <div className="show-at-mobile">
                    <Reviews>
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
                    </Reviews>
                    <div style={{ textAlign: "center" }}>
                        <a href="#">See all reviews</a>
                    </div>
                </div>
            </Section>
            <Footer>
                <div dangerouslySetInnerHTML={{ __html: home.disclaimers.disclaimer }} />
            </Footer>
        </Layout>
    );
};

export default IndexPage;


