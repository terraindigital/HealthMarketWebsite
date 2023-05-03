import React, { useState } from "react";

// Styles
import {
    Wrapper,
    Item,
    LPAgentText,
    LPAgentNumber,
    Translate
} from "./styles"

// Scripts
import {
  changeTextSize,
  toggleNav,
  toggleSearch,
  routeLink
} from "../../../static/scripts/global"

// Components

// Images
import TranslateIcon from "../../../static/images/aca-translate-icon.png"

const LPHeader = ({ headerData }: { headerData: any }) => {

  return (
    <Wrapper className="header-right">
      <Item className="move-at-mobile" style={{minWidth: '230px'}}>
        <LPAgentText>
          <p>Connect with a licensed insurance agent</p>
        </LPAgentText>
        <LPAgentNumber>
          <a className="primary dark" href="tel:+18178134562">
            1-817-813-4562, TTY 771
          </a>
        </LPAgentNumber>
      </Item>
      {/* <Item>
        <Translate>
          <img src={TranslateIcon} alt="Globe icon" />
          <select name="translate" id="lpTranslate">
            <option value="english" selected>English</option>
            <option value="spanish">Espa&ntilde;ol</option>
          </select>
        </Translate>
      </Item> */}
    </Wrapper>
  )
}

export default LPHeader
