// Library
import * as React from 'react';
import { Global } from '@emotion/react';

// Queries
import { useContactPageQuery } from '../../hooks/useContactPageQuery';

// Styles
import { PageStyles } from "./styles"

// Components
import Layout from '../../components/Layout';
import Seo from '../../components/SEO';
import Section from '../../components/Sections';
import Checkbox from '../../components/Inputs/Checkbox';
import CheckboxGroup from '../../components/Inputs/Checkbox/CheckboxGroup';
import Input from '../../components/Inputs/Input';
import TextArea from '../../components/Inputs/TextArea';
import SplitSection from '../../components/Sections/SplitSection';
import Button from '../../components/Buttons/Button';
import Carousel from '../../components/Carousel';
import Review from '../../components/Reviews/Review';
import Footer from '../../components/Footer';

const ContactPage = () => {
  const { page } = useContactPageQuery();

  return (
    <Layout staticHeader>
      <Global styles={PageStyles}/>
      <Seo title="Contact" />
      <Section page="contact" color="muted" heading="Let's connect">
        <SplitSection color="muted">
          <div className="left">
            <h3 style={{ fontWeight: "normal" }}>Submit your contact info and a licensed insurance agent will be in touch soon!</h3>
            <form>
              <Input id="fName" type="text" name="fName" placeholder="First name" required />
              <Input id="lName" type="text" name="lName" placeholder="Last name" required />
              <Input id="phNumber" type="phone" name="phNumber" placeholder="Phone number" required />
              <Input id="zipCode" type="number" name="zipCode" pattern="[0-9]{5}" placeholder="Zip code" required />
              <Input id="email" type="email" name="email" placeholder="Email" required />
              <CheckboxGroup title="Select all that apply">
                <Checkbox id="medicare" name="medicare" label="Medicare Insurance" />
                <Checkbox id="shortTerm" name="shortTerm" label="Short Term Health Insurance" />
                <Checkbox id="acaHealth" name="acaHealth" label="ACA Health Insurance" />
                <Checkbox id="dental" name="dental" label="Dental Insurance" />
                <Checkbox id="supplemental" name="supplemental" label="Supplemental Insurance" />
                <Checkbox id="vision" name="vision" label="Vision Insurance" />
              </CheckboxGroup>
              <TextArea id="tellUsMore" name="tellUsMore" placeholder="Tell us more — What are your insurance needs?" />
              <p style={{ margin: "3.4rem 0" }}><small>By clicking “Submit” I expressly consent to my contact information being provided to HealthMarkets orone of their licensed insurance agents for future contact regarding health, life, supplemental, Medicare Advantage or Medicare Supplement insurance, depending on my need.  I understand I may receive phone calls (including to any wireless number that I provide) including automatic telephone dialing systems orby artificial/pre-recorded messages text message and/or emails for the purpose of marketing insurance products and services. By providing my information, I understand that my consent is not a condition of purchase of any product or services, and carrier messaging and data rates may apply. I may revoke this consent at any time by contacting us at <a href="tel:8886379621">888-637-9621</a> to be place on our do-not-call list. <a href="#">Privacy Policy</a></small></p>
              <Button background="accent" border="accent" color="light">Submit</Button>
            </form>
          </div>
          <div className="right">
            <Carousel type="reviews" background="full">
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
        </SplitSection>
      </Section>
      <Footer>
        <div dangerouslySetInnerHTML={{ __html: page.disclaimers.disclaimer }} />
      </Footer>
    </Layout>
  )
}

export default ContactPage