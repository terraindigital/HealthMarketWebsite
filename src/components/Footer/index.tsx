import React, { FC, ReactNode } from "react"
import { Link } from "gatsby"

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
import Logo from "../../images/HMIA_logo2.png"
import Twitter from "../../images/twitter.webp"
import Facebook from "../../images/facebook.webp"
import YouTube from "../../images/youtube.webp"
import BBB from "../../images/bbb-seal.png"

interface Props {
  children: ReactNode
}

const Footer: FC<Props> = ({children}) => {
  const { productMenu } = useFooterProductMenuQuery()
  const { connectMenu } = useFooterConnectMenuQuery()
  const { counselMenu } = useFooterGetCounselMenuQuery()
  const { getToKnowUsMenu } = useFooterGetToKnowUsMenuQuery()

  return (
    <FooterWrapper>
      <WidgetAreaOne>
        <FooterLogo>
          <Link to="/">
            <img src={Logo} alt="footer logo" />
          </Link>
        </FooterLogo>
        <SocialWidget>
          <SocialIcon>
            <a href="#facebook">
              <img src={Facebook} alt="facebook logo" />
            </a>
          </SocialIcon>
        </SocialWidget>
        <BBBSeal>
          <a href="#bbb">
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
          <Disclaimer className="hide-at-mobile">
            <p>&copy; 2022 HealthMarkets Insurance Agency. All rights reserved.</p>
            {children}
          </Disclaimer>
        </WidgetWrapper>
        <PlansByStateMenu/>
        <Disclaimer className="show-at-mobile">
          <p>&copy; 2022 HealthMarkets Insurance Agency. All rights reserved.</p>
          {children}
        </Disclaimer>
      </WidgetAreaTwo>
    </FooterWrapper>
  )
}

export default Footer