// Library
import * as React from 'react';
import { PageProps } from 'gatsby';

// Styles

// Components
import Layout from "../../components/Layout"
import Seo from "../../components/SEO"
import Header from "../../components/Example/Header"
import Hero from "../../components/Example/Hero"
import Input from "../../components/Example/Inputs/Input"
import Section from "../../components/Example/Sections"
import FlexedSection from "../../components/Example/Sections/FlexedSection"
import Typography from "../../components/Example/Typography"
import Buttons from "../../components/Example/Buttons"
import Button from "../../components/Example/Buttons/Button"
import Medial from "../../components/Example/Medials"
import Accordion from "../../components/Example/Accordions"
import Cards from "../../components/Example/Cards"
import Card from "../../components/Example/Cards/Card"
import Carousel from "../../components/Example/Carousel"
import Review from "../../components/Example/Reviews"
import Footer from "../../components/Example/Footer"

// Images
import DentalIcon from "../../images/tooth.png"
import RectThree from "../../images/rectangle3.png"
import HeroImage from "../../images/hero-image.jpeg"
import ChatBubble from "../../images/contact-cta-image.png"

const ExamplePage = ({path}: PageProps) => {
    return (
        <Layout>
            <Seo title="Home"/>
            <Header />
            <Hero image={HeroImage}>
                <h1 style={{ color: "#009FDA", fontSize: "75px", lineHeight: "75px", marginBottom: "3.4rem" }}>Health insurance made easy</h1>
                <h4 style={{ lineHeight: "36px", fontWeight: "normal" }}>We sift through thousands of plans and compare them to your current coverage — for free.</h4>
                <Input hero type="text" name="heroLocationInput" placeholder="Enter zip code/City" />
                <Button style={{ borderRadius: "4px" }} background="accent" border="light" color="light">Get a free quote</Button>
            </Hero>

            <Section heading="Typography" color="primary">
                <Typography />
            </Section>
            
            <Section heading="Buttons" color="light">
                <Buttons />
            </Section>

            <FlexedSection heading="Accordions" color="accent">
                <Accordion
                    title="Best health insurance plans"
                    content="We make it easy to find low-cost health coverage with the FitScore. 
                    Just answer a few short questions, and we’ll search all the available 
                    plans in your area to find the most affordable options that meet your 
                    needs in minutes. The higher a plan’s FitScore, the closer the match is 
                    to your needs. Our Best Price Guarantee means that you won’t find a 
                    lower price anywherefor an insurance product that we offer."
                />
                <Accordion
                    title="How to find low-cost health insurance"
                    content="We make it easy to find low-cost health coverage with the FitScore. 
                    Just answer a few short questions, and we’ll search all the available 
                    plans in your area to find the most affordable options that meet your 
                    needs in minutes. The higher a plan’s FitScore, the closer the match is 
                    to your needs. Our Best Price Guarantee means that you won’t find a 
                    lower price anywherefor an insurance product that we offer."
                />
                <Accordion
                    title="Reliable health insurance quotes"
                    content="We make it easy to find low-cost health coverage with the FitScore. 
                    Just answer a few short questions, and we’ll search all the available 
                    plans in your area to find the most affordable options that meet your 
                    needs in minutes. The higher a plan’s FitScore, the closer the match is 
                    to your needs. Our Best Price Guarantee means that you won’t find a 
                    lower price anywherefor an insurance product that we offer."
                />
                <Button background="accent" border="accent" color="light">Show me options</Button>
            </FlexedSection>

            <Medial color="accent">
                <img className="chat-bubble" src={ChatBubble} alt="Chat bubble icon" />
                <h1>Uninsured?<br/>We can help.</h1>
                <Button background="primary" border="primary" color="light">Show me options</Button>
            </Medial>

            <Section heading="Cards" color="light">
                <Cards>
                    <Card
                        icon={DentalIcon}
                        title="Dental"
                    >
                        <p>Some supplemental dental policies provide coverage for services 
                        such as orthodontics, teeth whitening, and dental implants, and many are 
                        available at reasonable rates.</p>
                    </Card>
                    <Card
                        icon={DentalIcon}
                        title="Vision"
                    >
                        <p>Most eye care, including glasses and office visits, isn’t 
                        covered in a typical medical plan. Compare vision policies from multiple 
                        insurance companies at various rates and coverage levels.</p>
                    </Card>
                    <Card
                        icon={DentalIcon}
                        title="Wellness"
                    >
                        <p>Be well, fill medical coverage gaps, and save money with these 
                        budget-friendly, noninsurance products.</p>
                    </Card>
                    <Card
                        image={RectThree}
                        title="What Is The Affordable Care Act?"
                    >
                        <p style={{ textAlign: "left" }}>6-MINUTE READ<br/>What is the Affordable Care Act? HealthMarkets can answer this question and others that you may have about health insurance.</p>
                    </Card>
                    <Card
                        image={RectThree}
                        title="Ilisa Gillmer | Health And Life Insurance Agent | Los Angeles, CA 90066"
                    >
                        <p style={{ textAlign: "left" }}>6-MINUTE READ<br/>My name is Ilisa Gillmer and I am a native to Los Angeles for over 50 years!</p>
                    </Card>
                    <Card
                        image={RectThree}
                        title="Amy Powell | Health And Life Insurance Agent | Phoenix, AZ 85016"
                    >
                        <p style={{ textAlign: "left" }}>6-MINUTE READ<br/>I am very proud to represent HealthMarkets Insurance Company in the states of Arizona.</p>
                    </Card>
                </Cards>
            </Section>
            
            <Medial color="primary">
                <h1>Still have questions?<br/>Contact us.</h1>
                <Button background="accent" border="accent" color="light">Call 900-000-0000</Button>
                <Button background="accent" border="accent" color="light">Find an agent</Button>
            </Medial>
            
            <Section heading="Carousels" color="light">
                <Carousel background="full">
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

            <Footer />
        </Layout>
    );
};

export default ExamplePage;


