// Library
import React, {FC, FormEventHandler, useState} from "react";

// Styles
import {
  Wrapper,
  Buttons,
  Form,
  Radio,
  Footer,
  CTA,
} from "./styles"

// Scripts
import {
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
  hideFooter?: boolean
}

// set geocode earth api key
const api_key = 'ge-8876b9780ea0871d';

// set the urls to change the form action to
const plans = "https://shop.healthmarkets.com/en/about-me/info/";
const agents = "/local-health-insurance-agent/search/";

const PageHeroForm: FC<Props> = ({ centered, light, btnLeftText, btnRightText, inputId, buttons, footerContent, hideFooter,...rest  }) => {
  console.log(hideFooter);

  const [zip, setZip] = useState('');

  const onSubmitForm: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const redirectUrl = `${plans}?zip=${zip}`;
    window.location.assign(redirectUrl);
  };

  return (
    <Wrapper className={`${(centered) ? `centered` : ``} ${(light) ? `light` : ``}`} {...rest}>
      <Form id="zipCodeForm" action={plans} autoComplete="off" onSubmit={onSubmitForm}>
        {(buttons || buttons === undefined) ? (
          <Buttons>
            <Radio onClick={toggleForm} className="accented">{btnLeftText}
              <input id="radioSearchPlans" type="radio" value={plans} checked />
            </Radio>
            <Radio onClick={toggleForm}>{btnRightText}
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
          <Button style={{borderRadius: "4px"}} background="accent-alt" border="light" color="light" disabled>Search</Button>
          {(!hideFooter || hideFooter === undefined) ? (
            <CTA>
              <img src={PhoneIcon} />
              <span dangerouslySetInnerHTML={{ __html: footerContent }} />
            </CTA>
          ) : null}
        </Footer>
      </Form>
    </Wrapper>
  )
}

export default PageHeroForm