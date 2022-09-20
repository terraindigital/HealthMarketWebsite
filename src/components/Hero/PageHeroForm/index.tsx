// Library
import React, { FC } from "react";

// Styles
import {
  Wrapper,
  Buttons,
  Btn,
  Form,
  InputGroup,
  Input,
  Radio,
  Footer,
  CTA
} from "./styles"

// Scripts
import { toggleForm } from "../../../static/scripts/global"

// Components
import Button from "../../Buttons/Button"

// Images
import MapPin from "../../../static/images/location.png"
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

const PageHeroForm: FC<Props> = ({ centered, light, btnLeftText, btnRightText, inputId, buttons, hideFooter  }) => {
  // TODO: send queries to relevant pages
  return (
    <Wrapper className={`${(centered) ? `centered` : ``} ${(light) ? `light` : ``}`}>
      <Form action="/plans">
        {(buttons || buttons === undefined) ? (
          <Buttons>
            <Radio onClick={toggleForm} className="accented">{btnLeftText}
              <input id="radioSearchPlans" type="radio" name="radioSearch" value="plans" checked />
            </Radio>
            <Radio onClick={toggleForm}>{btnRightText}
              <input id="radioSearchAgents" type="radio" name="radioSearch" value="agents" />
            </Radio>
          </Buttons>
        ) : null}
        <InputGroup>
            <img src={MapPin} alt="map location pin image" />
            <Input id={inputId} type="text" name={inputId} placeholder="Enter Zip Code/City" />
        </InputGroup>
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