import React, { useState } from 'react';
import { withPrefix } from 'gatsby';

// Scripts
// import submitContactForm from '../../static/scripts/global';

// components
import Input from '../Inputs/Input';
import Checkbox from '../Inputs/Checkbox';
import CheckboxGroup from '../Inputs/Checkbox/CheckboxGroup';
import TextArea from '../Inputs/TextArea';
import Button from '../Buttons/Button';
import Modal from '../Modals';

const ContactForm = () => {

    const submit = async (e) => {
      e.preventDefault();

      const data = e.target;
      const body = {
        fname: data.fName.value,
        lname: data.lName.value,
        phone: data.phNumber.value,
        zip: data.zipCode.value,
        email: data.email.value,
        medicare: data.medicare.checked,
        shortTerm: data.shortTerm.checked,
        acaHealth: data.acaHealth.checked,
        dental: data.dental.checked,
        supplemental: data.supplemental.checked,
        vision: data.vision.checked,
        message: data.tellUsMore.value
      }

      fetch(withPrefix('/api/contact-form'), {
        method: 'POST',
        body: JSON.stringify(body),
      }).then((res) => {
        if (!res.ok) {
          console.log(res);
        }
        res.json();
      }).then(() => {
        // activate confirmation modal
        let modal = document.querySelector('.is-modal.confirmation');
        modal?.classList.add('is-active');

        // clear form
        document.getElementById('contactForm')?.reset();
      }).catch(() => {
        // activate unsuccessful modal
        let modal = document.querySelector('.is-modal.unsuccessful');
        modal?.classList.add('is-active');
      });
    };

    return (
      <form className="contact-form" id="contactForm" onSubmit={ submit }>
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
        <p className="contact-disclaimer"><small>By clicking “Submit” I expressly consent to my contact information being provided to HealthMarkets or one of their licensed insurance agents for future contact regarding health, life, supplemental, Medicare Advantage or Medicare Supplement insurance, depending on my need.  I understand I may receive phone calls (including to any wireless number that I provide) including automatic telephone dialing systems orby artificial/pre-recorded messages text message and/or emails for the purpose of marketing insurance products and services. By providing my information, I understand that my consent is not a condition of purchase of any product or services, and carrier messaging and data rates may apply. I may revoke this consent at any time by contacting us at <a href="tel:8886379621">888-637-9621</a> to be place on our do-not-call list. <a href="#">Privacy Policy</a></small></p>
        <Button background="accent-alt" border="light" color="light">Agree and Submit</Button>
        <Modal
          classes="confirmation"
          heading="Thank you!"
          subheading="You are one step closer to finding the option that's right for you."
          />
        <Modal
          classes="unsuccessful"
          heading="Oops!"
          subheading="Looks like something went wrong. Please try again."
          />
      </form>
    )
};

export default ContactForm;
