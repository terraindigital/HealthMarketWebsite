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
import SplitSection from '../../components/Sections/SplitSection';
import ContactForm from '../../components/Forms/ContactForm';
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
            <ContactForm />
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
