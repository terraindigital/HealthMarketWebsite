// Library
import React, { useEffect } from 'react';
import { Global } from '@emotion/react';

// Queries
import { useContactPageQuery } from '../../hooks/useContactPageQuery';

// Styles
import { PageStyles } from "../../components/pages/styles/ContactStyles";

// Components
import Layout from '../../components/Layout';
import PageHead from '../../components/PageHead';
import Section from '../../components/Sections';
import Checkbox from '../../components/Inputs/Checkbox';
import CheckboxGroup from '../../components/Inputs/Checkbox/CheckboxGroup';
import Input from '../../components/Inputs/Input';
import TextArea from '../../components/Inputs/TextArea';
import SplitSection from '../../components/Sections/SplitSection';
import Button from '../../components/Buttons/Button';
import Callout from '../../components/Callouts/Callout';
import Footer from '../../components/Footer';

const ContactPage = () => {
  const { page } = useContactPageQuery();
  const callout = page.calloutsCustomField.callouts.callout1;

  return (
    <Layout staticHeader>
      <Global styles={PageStyles}/>
      <Section page="contact" color="muted" heading="Let's connect">
        <SplitSection align="top" color="muted">
          <div className="left">
            <h4 style={{ fontWeight: "normal" }}>Submit your contact info and a licensed insurance agent will be in touch soon!</h4>
            <form>
              <Input id="fName" type="text" name="fName" placeholder="First name" required />
              <Input id="lName" type="text" name="lName" placeholder="Last name" required />
              <Input id="phNumber" type="phone" name="phNumber" placeholder="Phone number" required />
              <Input id="zipCode" type="number" name="zipCode" pattern="[0-9]{5}" placeholder="Zip code" required />
              <Input id="email" type="email" name="email" placeholder="Email" required />
              <CheckboxGroup title="Select all that apply">
                <Checkbox id="medicare" name="medicare" label="Medicare Insurance" location="contact" />
                <Checkbox id="shortTerm" name="shortTerm" label="Short Term Health Insurance" location="contact" />
                <Checkbox id="acaHealth" name="acaHealth" label="ACA Health Insurance" location="contact" />
                <Checkbox id="dental" name="dental" label="Dental Insurance" location="contact" />
                <Checkbox id="supplemental" name="supplemental" label="Supplemental Insurance" location="contact" />
                <Checkbox id="vision" name="vision" label="Vision Insurance" location="contact" />
              </CheckboxGroup>
              <TextArea id="tellUsMore" name="tellUsMore" placeholder="Tell us more — What are your insurance needs?" />
              <p className="contact-disclaimer" data-disclaimer="medicare"><small>We do not offer every plan available in your area. Any information we provide is limited to those plans we do offer in your area. Please contact Medicare.gov or 1-800-MEDICARE (TTY users should call 1- 844-704-7357), 24 hours a day/7 days a week, to get information on all of your options.</small></p>
              <p className="contact-disclaimer"><small>By clicking “Submit” I expressly consent to my contact information being provided to HealthMarkets orone of their licensed insurance agents for future contact regarding health, life, supplemental, Medicare Advantage or Medicare Supplement insurance, depending on my need.  I understand I may receive phone calls (including to any wireless number that I provide) including automatic telephone dialing systems orby artificial/pre-recorded messages text message and/or emails for the purpose of marketing insurance products and services. By providing my information, I understand that my consent is not a condition of purchase of any product or services, and carrier messaging and data rates may apply. I may revoke this consent at any time by contacting us at <a href="tel:8886379621">888-637-9621</a> to be place on our do-not-call list. <a href="#">Privacy Policy</a></small></p>
              <Button background="accent-alt" border="light" color="light">Agree and Submit</Button>
            </form>
          </div>
          <div className="right">
            <Callout
              number={callout.number}
              tagline={callout.tagline}
              title={callout.title}
              description={callout.description}
              disclaimer={callout.disclaimer}
            />
          </div>
        </SplitSection>
      </Section>
      <Footer>
        {page.disclaimers.disclaimer}
      </Footer>
    </Layout>
  )
}

export default ContactPage

export const Head = () => {
  const { page } = useContactPageQuery();
  return (
    <>
      <PageHead
        title={page.seo.title}
        description={page.seo.metaDesc}/>
    </>
  )
}
