// Library
import React, { FC, useEffect, useState } from "react";

// Styles
import {
  Wrapper,
  Buttons,
  Form,
  Radio,
  Footer,
  CTA,
  // InputGroup,
  // Input
} from "./styles"

// Scripts
import { toggleForm } from "../../../static/scripts/global"

// Components
import Button from "../../Buttons/Button"
import Autocomplete from "../../Inputs/Autocomplete";

// Images
// import MapPin from "../../../static/images/location.png"
import PhoneIcon from "../../../static/images/phone-icon.png"

interface Props {
  centered?: boolean,
  light?: boolean,
  btnLeftText: String,
  btnRightText: String,
  inputId: String,
  buttons?: boolean,
  hideFooter?: boolean
}

// set geocode earth api key
const api_key = 'ge-aee0e5253d70b022';

// set the urls to change the form action to
const plans = "https://shop.healthmarkets.com/en/about-me/plans-found";
const agents = "/local-health-insurance-agent/search/";

const PageHeroForm: FC<Props> = ({ centered, light, btnLeftText, btnRightText, inputId, buttons, hideFooter  }) => {
  // TODO: send queries to relevant pages
  return (
    <Wrapper className={`${(centered) ? `centered` : ``} ${(light) ? `light` : ``}`}>
      <Form id="zipCodeForm" action={plans} autocomplete="off">
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
        <Autocomplete api_key={api_key} />
        {
          hideFooter ? (<></>) : (
          <Footer>
            <Button style={{borderRadius: "4px"}} background="accent" border="light" color="light">Search</Button>
            {(buttons || buttons === undefined) ? (
              <CTA>
                <img src={PhoneIcon} />
                <span>
                  Call us 24/7 at <a href="tel:+18555652552">(855) 565-2552</a>
                </span>
              </CTA>
            ) : null}
          </Footer>
          )
        }
      </Form>
    </Wrapper>
  )
}

export default PageHeroForm