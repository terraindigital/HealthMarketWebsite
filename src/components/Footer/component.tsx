import React, { FC, ReactNode } from "react"
import Script from "./script"

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

// Scripts
import { routeLink } from "../../static/scripts/global"

// Components
import FooterMenu from "./FooterMenu"
import PlansByStateMenu from "./PlansByStateMenu"

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
      <div className="healthmarkets22">
        <FooterWrapper>
          <WidgetAreaOne>
            <FooterLogo>
              <a href="/" onClick={routeLink}>
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
        <Script
            id="invoca"
            body={`
            (function(i,n,v,o,c,a) { i.InvocaTagId = o; var s = n.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = ('https:' === n.location.protocol ? 'https://' : 'http://' ) + v; var fs = n.getElementsByTagName('script')[0]; fs.parentNode.insertBefore(s, fs); })(window, document, 'solutions.invocacdn.com/js/pnapi_integration-latest.min.js', '548/0332272152');
          `}
        />
      </div>
  )
}

export default FooterComponent
