// Library
import React, { FC, FormEventHandler, useEffect, useState } from "react";
import { useLocation, navigate } from '@reach/router';

// Styles
import {
  Wrapper,
  Buttons,
  Form,
  Radio,
  Footer,
  CTA,
  FirstWrapper,
  HideOnDesktopWrapper,
  HideOnMobileWrapper,
  CallButton
} from "./styles"

// Scripts
import {
  isValidZip,
  toggleForm,
} from "../../../static/scripts/global"

// Components
import Button from "../../Buttons/Button"
import ZipInput from "../../Inputs/ZipInput";

// Images
import PhoneIcon from "../../../static/images/phone-icon.png"

interface Props {
  centered?: boolean,
  light?: boolean,
  btnLeftText: string,
  btnRightText: string,
  inputId: string,
  buttons?: boolean,
  footerContent: string,
  hideFooter?: boolean,
  whiteText?: boolean
}

// set geocode earth api key
const api_key = 'ge-8876b9780ea0871d';

const PageHeroForm: FC<Props> = ({ centered, light, whiteText, btnLeftText, btnRightText, inputId, buttons, footerContent, hideFooter,...rest  }) => {
const [firstButtonActive, setFirstButtonActive] = useState(true);
const [secondButtonActive, setSecondButtonActive] = useState(false);

// set the urls to change the form action to
const location = useLocation();
let plans: string;
const agents = "/local-health-insurance-agent/search/";
let agentsFilterAppend: string;
if (location.pathname.includes("medicare")) {
  plans = "https://healthmarkets6.destinationrx.com/pc/2024/shopping/home";
  agentsFilterAppend = "&filter=medicare";
} else {
  plans = "https://shop.healthmarkets.com/";
  agentsFilterAppend = "";
}
const finalExpense = "/life-insurance/final-expense-insurance";

// these functions and conditionals will serve as temporary measures until all pages have been redesigned to reflect the updated requirements for this component

  const onClickFirstButton = (el) => {
    toggleForm(el)
    setFirstButtonActive(true);
    setSecondButtonActive(false)
  }

  const onClickSecondButton = (el) => {
    toggleForm(el)
    setFirstButtonActive(false);
    setSecondButtonActive(true)
  }

  const renderButton = () => { 
  if (firstButtonActive) {
    return (
      <>
      <FirstWrapper>
      <Footer>
      <CallButton href="tel:+18339100995" style={{borderRadius: "4px", marginTop: "-180px", height: '50px'}} background="accent-alt" border="light" color="light">Call 1-833-910-0995</CallButton>
      </Footer>
      </FirstWrapper>
      </>
    ) 
  } else if (secondButtonActive) {
    return (
      <>
      <ZipInput zip={zip} setZip={setZip}/>
      <div id="zipCodeField" className="hidden-inputs">
          <input type="hidden" id="zipCode" value="" />
          <input type="hidden" id="county" value="" />
        </div>
        <Footer>
          <Button style={{borderRadius: "4px"}} background="accent-alt" border="light" color="light"><div className="mobile-button">Search</div><div className="desktop-button">Find a licensed insurance agent</div></Button>
          <CTA className="cta-phone">
              <img src={PhoneIcon} />
              <span dangerouslySetInnerHTML={{ __html: footerContent }} />
            </CTA>
            </Footer>
      </>
   )
  }
}

  const [zip, setZip] = useState('');

  const onSubmitForm: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    let redirectUrl: string;
    if (firstButtonActive && !location?.pathname?.includes(finalExpense)) {
      redirectUrl = `${plans}?zip=${zip}`;
    } else {
      redirectUrl = `${agents}?zip=${zip}${agentsFilterAppend}`;
    }
    navigate(redirectUrl);
  };

  return (
    <Wrapper className={`${(centered) ? `centered` : ``} ${(light) ? `light` : ``} ${(whiteText) ? `white-text` : ``}`} {...rest}>
      <Form id="zipCodeForm" action={plans} autoComplete="off" onSubmit={onSubmitForm}>
    { !location?.pathname?.includes(finalExpense) ?
        <>
        {(buttons || buttons === undefined) ? (
          <Buttons>
            <Radio onClick={onClickFirstButton} className="accented">{btnLeftText}
              <input id="radioSearchPlans" type="radio" value={plans} checked />
            </Radio>
            <Radio onClick={onClickSecondButton}>{btnRightText}
              <input id="radioSearchAgents" type="radio" value={agents} />
            </Radio>
          </Buttons>
        ) : null}
        <ZipInput zip={zip} setZip={setZip}/>
        <div id="zipCodeField" className="hidden-inputs">
          <input type="hidden" id="zipCode" value="" />
          <input type="hidden" id="county" value="" />
        </div>
        <Footer>
          <Button style={{borderRadius: "4px"}} background="accent-alt" border="light" color="light" disabled={!isValidZip(zip)}>Search</Button>
          {(!hideFooter || hideFooter === undefined) ? (
            <CTA className="cta-phone">
              <img src={PhoneIcon} />
              <span dangerouslySetInnerHTML={{ __html: footerContent }} />
            </CTA>
          ) : null}
        </Footer>
        </>
        : (
          <>
          <HideOnDesktopWrapper>
          <Buttons>
            <Radio onClick={onClickFirstButton} className="accented">{btnLeftText}
              <input id="radioSearchPlans" type="radio" value={plans} checked />
            </Radio>
            <Radio onClick={onClickSecondButton}>{btnRightText}
              <input id="radioSearchAgents" type="radio" value={agents} />
            </Radio>
          </Buttons>
          </HideOnDesktopWrapper>
          {renderButton()}
          <HideOnMobileWrapper>
            <ZipInput zip={zip} setZip={setZip}/>
              <div id="zipCodeField" className="hidden-inputs">
                <input type="hidden" id="zipCode" value="" />
                <input type="hidden" id="county" value="" />
              </div>
              <div className="button-container">
              <Button style={{borderRadius: "4px"}} background="accent-alt" border="light" color="light" disabled={!isValidZip(zip)}>Find a licensed insurance agent</Button>
              </div>
            <CTA className="cta-phone">
              <img src={PhoneIcon} />
              <span dangerouslySetInnerHTML={{ __html: footerContent }} />
            </CTA>
          </HideOnMobileWrapper>
            </>)}
      </Form>
    </Wrapper>
  )
}

export default PageHeroForm