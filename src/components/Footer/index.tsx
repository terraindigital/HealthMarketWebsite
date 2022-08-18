import React from "react"
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
import { useFooterProductMenuQuery } from "../../hooks/useFooterProductMenuQuery"
import { useFooterConnectMenuQuery } from "../../hooks/useFooterConnectMenuQuery"
import { useFooterGetCounselMenuQuery } from "../../hooks/useFooterGetCounselMenuQuery"
import { useFooterGetToKnowUsMenuQuery } from "../../hooks/useFooterGetToKnowUsMenuQuery"

// Images
import Logo from "../../images/HMIA_logo2.png"
import Twitter from "../../images/twitter.webp"
import Facebook from "../../images/facebook.webp"
import YouTube from "../../images/youtube.webp"
import BBB from "../../images/bbb-seal.png"

const Footer = () => {
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
            <p>Attention: This website is operated by HealthMarkets Insurance Agency and is not the Health Insurance Marketplace® website. In offering this website, HealthMarkets Insurance Agency is required to comply with all applicable federal laws, including the standards established under 45 C.F.R. § 155.220(c) and (d) and standards established under 45 C.F.R. § 155.260 to protect the privacy and security of personally identifiable information. This website may not display all data on Qualified Health Plans (QHPs) being offered in your state through the Health Insurance Marketplace® website. To see all available data on Qualified Health Plan options in your state, go to the Health Insurance Marketplace® website at HealthCare.gov.</p>
            <p>HealthMarkets Insurance Agency offers the opportunity to enroll in either QHPs or off-Marketplace coverage. Please visit HealthCare.gov for information on the benefits of enrolling in a QHP. Off-Marketplace coverage is not eligible for the cost savings offered for coverage through the Marketplaces.</p>
            <p>HealthMarkets Insurance Agency, Inc. is licensed as an insurance agency in all 50 states and DC. Not all agents are licensed to sell all products. Service and product availability varies by state. Sales agents may be compensated based on a consumer’s enrollment in a health plan. No obligation to enroll. Agent cannot provide tax or legal advice. Contact your tax or legal professional to discuss details regarding your individual business circumstances. Our quoting tool is provided for your information only. All quotes are estimates and are not final until consumer is enrolled. Medicare has neither reviewed nor endorsed this information.</p>
            <p><strong>Sources:</strong></p>
            <p>Kaiser Family Foundation (2019). Average Single Premium per Enrolled Employee For Employer-Based Health Insurance.</p>
            <p>46513-HM-1020</p>
          </Disclaimer>
        </WidgetWrapper>
        <PlansByStateMenu/>
        <Disclaimer className="show-at-mobile">
          <p>&copy; 2022 HealthMarkets Insurance Agency. All rights reserved.</p>
          <p>Attention: This website is operated by HealthMarkets Insurance Agency and is not the Health Insurance Marketplace® website. In offering this website, HealthMarkets Insurance Agency is required to comply with all applicable federal laws, including the standards established under 45 C.F.R. § 155.220(c) and (d) and standards established under 45 C.F.R. § 155.260 to protect the privacy and security of personally identifiable information. This website may not display all data on Qualified Health Plans (QHPs) being offered in your state through the Health Insurance Marketplace® website. To see all available data on Qualified Health Plan options in your state, go to the Health Insurance Marketplace® website at HealthCare.gov.</p>
          <p>HealthMarkets Insurance Agency offers the opportunity to enroll in either QHPs or off-Marketplace coverage. Please visit HealthCare.gov for information on the benefits of enrolling in a QHP. Off-Marketplace coverage is not eligible for the cost savings offered for coverage through the Marketplaces.</p>
          <p>HealthMarkets Insurance Agency, Inc. is licensed as an insurance agency in all 50 states and DC. Not all agents are licensed to sell all products. Service and product availability varies by state. Sales agents may be compensated based on a consumer’s enrollment in a health plan. No obligation to enroll. Agent cannot provide tax or legal advice. Contact your tax or legal professional to discuss details regarding your individual business circumstances. Our quoting tool is provided for your information only. All quotes are estimates and are not final until consumer is enrolled. Medicare has neither reviewed nor endorsed this information.</p>
          <p><strong>Sources:</strong></p>
          <p>Kaiser Family Foundation (2019). Average Single Premium per Enrolled Employee For Employer-Based Health Insurance.</p>
          <p>46513-HM-1020</p>
        </Disclaimer>
      </WidgetAreaTwo>
    </FooterWrapper>
  )
}

export default Footer