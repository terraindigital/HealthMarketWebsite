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

const PageHeroForm: FC<Props> = ({ centered, light, btnLeftText, btnRightText, inputId, buttons, hideFooter  }) => {
  // TODO: send queries to relevant pages
  return (
    <Wrapper className={`${(centered) ? `centered` : ``} ${(light) ? `light` : ``}`}>
      <Form action="/plans/" autocomplete="off">
        {(buttons || buttons === undefined) ? (
          <Buttons>
            <Radio onClick={toggleForm} className="accented">{btnLeftText}
              <input id="radioSearchPlans" type="radio" value="/plans/" checked />
            </Radio>
            <Radio onClick={toggleForm}>{btnRightText}
              <input id="radioSearchAgents" type="radio" value="/local-health-insurance-agent/search/" />
            </Radio>
          </Buttons>
        ) : null}
        <Autocomplete api_key={api_key} />
        {/* <InputGroup> */}
            {/* <img src={MapPin} alt="map location pin image" /> */}
            {/* <div dangerouslySetInnerHTML={{ __html: `<ge-autocomplete api_key={api_key} boundary.country="US"></ge-autocomplete>` }}></div> */}
            {/* <Input id={inputId} type="text" name={inputId} placeholder="Enter Zip Code/City" /> */}
        {/* </InputGroup> */}
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