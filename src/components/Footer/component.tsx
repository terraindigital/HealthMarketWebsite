import React, { FC, ReactNode } from "react"

// Styles
import {
  FooterWrapper,
  WidgetAreaOne,
  FooterLogo,
  SocialWidget,
  SocialIcon,
  BBBSeal,
  WidgetAreaTwo,
  WidgetWrapper,
  FooterMenuWrapper,
  Disclaimer,
} from "./styles"

// Components
import FooterMenu from "./FooterMenu"
import PlansByStateMenu from "./PlansByStateMenu";

// Queries
import { useFooterProductMenuQuery } from "../../hooks/footer/useFooterProductMenuQuery"
import { useFooterConnectMenuQuery } from "../../hooks/footer/useFooterConnectMenuQuery"
import { useFooterGetCounselMenuQuery } from "../../hooks/footer/useFooterGetCounselMenuQuery"
import { useFooterGetToKnowUsMenuQuery } from "../../hooks/footer/useFooterGetToKnowUsMenuQuery"

// Images
import Logo from "../../static/images/HMIA_logo2.png"
import Facebook from "../../static/images/facebook.webp"
import BBB from "../../static/images/bbb-seal.png"

export interface FooterProps {
  complianceCode: string
  children: string
  data: {
    productMenu: any
    connectMenu: any
    counselMenu: any
    getToKnowUsMenu: any
  }
}

const FooterComponent: FC<FooterProps> = ({ data, complianceCode, children }) => {
  const { productMenu, connectMenu, counselMenu, getToKnowUsMenu } = data

  return (
      <FooterWrapper>
        <WidgetAreaOne>
          <FooterLogo>
            <a href="/">
              <img src={Logo} alt="footer logo" />
            </a>
          </FooterLogo>
          <SocialWidget>
            <SocialIcon>
              <a href="https://www.facebook.com/HealthMarkets">
                <img src={Facebook} alt="facebook logo" />
              </a>
            </SocialIcon>
          </SocialWidget>
          <BBBSeal>
            <a href="https://www.bbb.org/us/tx/north-richland-hills/profile/insurance-companies/healthmarkets-insurance-agency-0825-235973986/#sealclick">
              <img src={BBB} alt="better business bureau seal" />
            </a>
          </BBBSeal>
        </WidgetAreaOne>
        <WidgetAreaTwo>
          <WidgetWrapper>
            <FooterMenuWrapper>
              <FooterMenu menu={productMenu} title="Products" />
              <FooterMenu menu={connectMenu} title="Connect" />
              <FooterMenu menu={counselMenu} title="Get Counsel" />
              <FooterMenu menu={getToKnowUsMenu} title="Get to Know Us" />
            </FooterMenuWrapper>
            <Disclaimer className="hide-at-device">
              <p>&copy; 2022 HealthMarkets Insurance Agency. All rights reserved.</p>
              <span dangerouslySetInnerHTML={{ __html: children }} />
              <p className="text-white">{complianceCode}</p>
            </Disclaimer>
          </WidgetWrapper>
          <PlansByStateMenu/>
          <Disclaimer className="show-at-mobile">
            <p>&copy; 2022 HealthMarkets Insurance Agency. All rights reserved.</p>
            <span dangerouslySetInnerHTML={{ __html: children }} />
            <p className="text-white">{complianceCode}</p>
          </Disclaimer>
        </WidgetAreaTwo>
        <Disclaimer className="show-at-device hide-at-mobile">
          <p>&copy; 2022 HealthMarkets Insurance Agency. All rights reserved.</p>
          <span dangerouslySetInnerHTML={{ __html: children }} />
          <p className="text-white">{complianceCode}</p>
        </Disclaimer>
      </FooterWrapper>
  )
}

export default FooterComponent
