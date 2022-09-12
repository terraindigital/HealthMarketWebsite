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
  Footer,
  CTA
} from "./styles"

// Components
import Button from "../../Buttons/Button"

// Images
import MapPin from "../../../assets/images/location.png"
import PhoneIcon from "../../../assets/images/phone-icon.png"

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
  // TODO: link up with design re: this
  const toggleForm = (el) => {
    const parent = el.target.parentElement;
    // if not already active...
    if (el.target.classList.contains('accented')) return
    // toggle button state
    parent.firstChild.classList.toggle('accented')
    parent.firstChild.nextSibling.classList.toggle('accented')
    // toggle form state
    parent.parentElement.classList.toggle('agent')
  }

  return (
    <Wrapper className={`${(centered) ? `centered` : ``} ${(light) ? `light` : ``}`}>
      {(buttons || buttons === undefined) ? (
        <Buttons>
          <Btn className="accented" onClick={toggleForm}>{btnLeftText}</Btn>
          <Btn onClick={toggleForm}>{btnRightText}</Btn>
        </Buttons>
      ) : null}
      <Form>
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