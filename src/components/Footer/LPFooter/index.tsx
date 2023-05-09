import React, { FC, ReactNode } from "react"
import Script from "../script"

// Queries
import { useFooterLPMenuQuery } from "../../../hooks/footer/useFooterLPMenuQuery"

// Styles
import {
  FooterWrapper,
  WidgetAreaOne,
  FooterLogo,
  BBBSeal,
  WidgetAreaTwo,
  WidgetWrapper,
  FooterMenuWrapper,
  Disclaimer
} from "./styles"

// Scripts
import { routeLink } from "../../../static/scripts/global"

// Components
import FooterMenu from "../FooterMenu"

// Images
import Logo from "../../../static/images/HMIA_logo2.png"
import BBB from "../../../static/images/bbb-seal.png"

export interface FooterProps {
  complianceCode: string
  children: string
  data: {
    productMenu: any
    connectMenu: any
    counselMenu: any
    getToKnowUsMenu: any
    lpMenu: any
  }
}

const LPFooter: FC<FooterProps> = ({ data, complianceCode, children }) => {
  let year = new Date().getFullYear().toString();
  const { wpcontent: { menu: lpMenu } } = useFooterLPMenuQuery();

  return (
    <div className="healthmarkets22 landing">
      <FooterWrapper>
        <WidgetAreaOne>
          <FooterLogo>
            <a href="/" onClick={routeLink}>
              <img src={Logo} alt="footer logo" />
            </a>
          </FooterLogo>
          <BBBSeal>
            <a href="https://www.bbb.org/us/tx/north-richland-hills/profile/insurance-companies/healthmarkets-insurance-agency-0825-235973986/#sealclick">
              <img src={BBB} alt="better business bureau seal" />
            </a>
          </BBBSeal>
        </WidgetAreaOne>
        <WidgetAreaTwo>
          <WidgetWrapper>
            <FooterMenuWrapper>
                <FooterMenu menu={lpMenu} />
            </FooterMenuWrapper>
          </WidgetWrapper>
          <Disclaimer>
            <span dangerouslySetInnerHTML={{ __html: children }} />
            <p className="text-white">{complianceCode}</p>
            <p>&copy; {year} HealthMarkets Insurance Agency. All rights reserved.</p>
          </Disclaimer>
        </WidgetAreaTwo>
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

export default LPFooter
