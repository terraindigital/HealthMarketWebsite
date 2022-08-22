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

// Images
import ChatBubble from "../images/contact-cta-image.png"

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
                <PageHeroForm centered btnLeftText="Find my plan" btnRightText="Find a licensed insurance agent" inputId="homepageHeroLocation" button />
            </Hero>
            <Section
                heading="What we offer"
                subheading="Save time and let us search for you—it's fast, free, and fair."
                color="light">
                <Carousel type="tiles">
                <Tile
                        image={home.homePageCustomFields.wwo.hpTile1.image.sourceUrl}
                        title={home.homePageCustomFields.wwo.hpTile1.title}
                        link={home.homePageCustomFields.wwo.hpTile1.link}
                        />
                    <Tile
                        image={home.homePageCustomFields.wwo.hpTile2.image.sourceUrl}
                        title={home.homePageCustomFields.wwo.hpTile2.title}
                        link={home.homePageCustomFields.wwo.hpTile2.link}
                        />
                    <Tile
                        image={home.homePageCustomFields.wwo.hpTile3.image.sourceUrl}
                        title={home.homePageCustomFields.wwo.hpTile3.title}
                        link={home.homePageCustomFields.wwo.hpTile3.link}
                        />
                    <Tile
                        image={home.homePageCustomFields.wwo.hpTile4.image.sourceUrl}
                        title={home.homePageCustomFields.wwo.hpTile4.title}
                        link={home.homePageCustomFields.wwo.hpTile4.link}
                        />
                    <Tile
                        image={home.homePageCustomFields.wwo.hpTile5.image.sourceUrl}
                        title={home.homePageCustomFields.wwo.hpTile5.title}
                        link={home.homePageCustomFields.wwo.hpTile5.link}
                        />
                </Carousel>
            </Section>
            <Medial color="primary">
                <img className="chat-bubble" src={ChatBubble} alt="Chat bubble icon" />
                <h1 className="hide-at-mobile">Uninsured?<br/>We can help.</h1>
                <div className="show-at-mobile">
                    <h2>Uninsured and not sure where to start?</h2>
                    <p><strong>We can help.</strong></p>
                </div>
                <a href="https://www.healthmarkets.com/find-coverage">
                    <Button background="accent" border="accent" color="light">Show me options</Button>
                </a>
            </Medial>
            <FlexedSection
                heading="How we help"
                color="primary">
                <List>
                    <ListItem heading="A FitScore&reg; in minutes">
                        <p>Our FitScore technology uses your answers to recommend relevant plans and compare them to your current plan. The higher the FitScore, the closer the plan is to your ideal match.</p>
                    </ListItem>
                    <ListItem heading="Personalized recommendations in minutes">
                        <p>HealthMarkets instantly scans and ranks thousands of health insurance plans to find the right fit for you. We’ll recommend the top plans in your area for you.</p>
                    </ListItem>
                    <ListItem heading="Fair and Reliable">
                        <p>Our recommendations are based on what is best for your needs and budget, and the result of a complete search of thousands of plans. </p>
                    </ListItem>
                </List>
                <a href="https://www.healthmarkets.com/how-you-save/">
                    <Button background="accent" border="accent" color="light">Explore my options</Button>
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


