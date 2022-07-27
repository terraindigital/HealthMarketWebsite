// Library
import * as React from 'react';
import { PageProps } from 'gatsby';

// Styles
import {
    HeroHeading,
    HeroSubheading,
    HomePageHeroForm,
    HomePageHeroInputGroup,
    HomePageHeroInput
} from '../components/Hero/Variants/homePageStyles';

// Components
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import Hero from '../components/Hero';
import Button from '../components/Buttons/Button';
import Section from '../components/Sections';
import Carousel from '../components/Carousel';
import Tile from '../components/Tiles/Tile';
import Medial from '../components/Medials';
import FlexedSection from '../components/Sections/FlexedSection';
import List from '../components/Lists';
import ListItem from '../components/Lists/ListItem';
import Review from '../components/Reviews/Review';

// Images
import ChatBubble from "../images/contact-cta-image.png"
import MapPin from "../images/location.png"

// Queries
import { useHomePageQuery } from '../hooks/useHomePageQuery';

const IndexPage = ({path}: PageProps) => {
    const { home } = useHomePageQuery();

    // console.log(home);

    return (
        <Layout headerColor="light">
            <Seo title="Home"/>
            <Hero
                image={home.featuredImage.node.sourceUrl}
                centered>
                <HeroHeading>More health plan options with less effort? You bet.</HeroHeading>
                <HeroSubheading>We compare thousands of health insurance plans, so you don’t have to.</HeroSubheading>
                <div style={{textAlign: "center"}}>
                    <Button background="accent" border="accent" color="light">Find my plan</Button>
                    <Button background="light" border="accent" color="accent">Talk to an agent</Button>
                    <HomePageHeroForm>
                        <div>
                            <HomePageHeroInputGroup>
                                <img src={MapPin} alt="map location pin image" />
                                <HomePageHeroInput id="homepageHeroLocation" type="text" name="homepageHeroLocation" placeholder="Enter Zip Code/City" />
                            </HomePageHeroInputGroup>
                        </div>
                        <Button style={{borderRadius: "4px"}} background="accent" border="light" color="light">Search</Button>
                    </HomePageHeroForm>
                </div>
            </Hero>
            <Section
                heading="What we offer"
                subheading="Save time and let us search for you—it's fast, free, and fair."
                color="light">
                <Carousel type="tiles">
                    <Tile
                        image={home.homePageCustomFields.wwo.medicare.sourceUrl}
                        title="Medicare"/>
                    <Tile
                        image={home.homePageCustomFields.wwo.dental.sourceUrl}
                        title="Dental"
                        selected />
                    <Tile
                        image={home.homePageCustomFields.wwo.vision.sourceUrl}
                        title="Vision"/>
                    <Tile
                        image={home.homePageCustomFields.wwo.health.sourceUrl}
                        title="Health"/>
                    <Tile
                        image={home.homePageCustomFields.wwo.supplemental.sourceUrl}
                        title="Supplemental"/>
                </Carousel>
            </Section>
            <Medial color="primary">
                <img className="chat-bubble" src={ChatBubble} alt="Chat bubble icon" />
                <h1>Uninsured?<br/>We can help.</h1>
                <Button background="accent" border="accent" color="light">Show me options</Button>
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
                <Button background="accent" border="accent" color="light">Explore my options</Button>
            </FlexedSection>
            <Section color="light">
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
            </Section>
        </Layout>
    );
};

export default IndexPage;


