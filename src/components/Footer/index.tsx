import React from "react"

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
  PlansByStateLinks
} from "./styles"

// Components
import FooterMenu from "./FooterMenu"

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
import { Link } from "gatsby"

const Footer = () => {
  const { productMenu } = useFooterProductMenuQuery()
  const { connectMenu } = useFooterConnectMenuQuery()
  const { counselMenu } = useFooterGetCounselMenuQuery()
  const { getToKnowUsMenu } = useFooterGetToKnowUsMenuQuery()

  return (
    <FooterWrapper>
      <WidgetAreaOne>
        <FooterLogo>
          <img src={Logo} alt="footer logo" />
        </FooterLogo>
        <SocialWidget>
          <SocialIcon>
            <img src={Facebook} alt="facebook logo" />
          </SocialIcon>
        </SocialWidget>
        <BBBSeal>
          <img src={BBB} alt="better business bureau seal" />
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
        <PlansByStateLinks>
          <h6>Medicare Eligibility by State</h6>
          <div className="medicare-eligibility-by-state">
            <Link to="/medicare-eligibility/al">AL</Link>
            <Link to="/medicare-eligibility/ak">AK</Link>
            <Link to="/medicare-eligibility/ar">AR</Link>
            <Link to="/medicare-eligibility/az">AZ</Link>
            <Link to="/medicare-eligibility/ca">CA</Link>
            <Link to="/medicare-eligibility/co">CO</Link>
            <Link to="/medicare-eligibility/ct">CT</Link>
            <Link to="/medicare-eligibility/de">DE</Link>
            <Link to="/medicare-eligibility/fl">FL</Link>
            <Link to="/medicare-eligibility/ga">GA</Link>
            <Link to="/medicare-eligibility/ia">IA</Link>
            <Link to="/medicare-eligibility/id">ID</Link>
            <Link to="/medicare-eligibility/il">IL</Link>
            <Link to="/medicare-eligibility/in">IN</Link>
            <Link to="/medicare-eligibility/ks">KS</Link>
            <Link to="/medicare-eligibility/ky">KY</Link>
            <Link to="/medicare-eligibility/la">LA</Link>
            <Link to="/medicare-eligibility/ma">MA</Link>
            <Link to="/medicare-eligibility/md">MD</Link>
            <Link to="/medicare-eligibility/me">ME</Link>
            <Link to="/medicare-eligibility/mi">MI</Link>
            <Link to="/medicare-eligibility/mn">MN</Link>
            <Link to="/medicare-eligibility/mo">MO</Link>
            <Link to="/medicare-eligibility/ms">MS</Link>
            <Link to="/medicare-eligibility/mt">MT</Link>
            <Link to="/medicare-eligibility/nc">NC</Link>
            <Link to="/medicare-eligibility/ne">NE</Link>
            <Link to="/medicare-eligibility/nh">NH</Link>
            <Link to="/medicare-eligibility/nj">NJ</Link>
            <Link to="/medicare-eligibility/nm">NM</Link>
            <Link to="/medicare-eligibility/nv">NV</Link>
            <Link to="/medicare-eligibility/ny">NY</Link>
            <Link to="/medicare-eligibility/oh">OH</Link>
            <Link to="/medicare-eligibility/ok">OK</Link>
            <Link to="/medicare-eligibility/or">OR</Link>
            <Link to="/medicare-eligibility/pa">PA</Link>
            <Link to="/medicare-eligibility/ri">RI</Link>
            <Link to="/medicare-eligibility/sc">SC</Link>
            <Link to="/medicare-eligibility/tn">TN</Link>
            <Link to="/medicare-eligibility/tx">TX</Link>
            <Link to="/medicare-eligibility/ut">UT</Link>
            <Link to="/medicare-eligibility/va">VA</Link>
            <Link to="/medicare-eligibility/wa">WA</Link>
            <Link to="/medicare-eligibility/wi">WI</Link>
            <Link to="/medicare-eligibility/wv">WV</Link>
            <Link to="/medicare-eligibility/wy">WY</Link>
          </div>
          <h6>Medicare Plans by State</h6>
          <div className="medicare-plans-by-state">
            <Link to="/plans-by-state/medicare/al">AL</Link>
            <Link to="/plans-by-state/medicare/ak">AK</Link>
            <Link to="/plans-by-state/medicare/ar">AR</Link>
            <Link to="/plans-by-state/medicare/az">AZ</Link>
            <Link to="/plans-by-state/medicare/ca">CA</Link>
            <Link to="/plans-by-state/medicare/co">CO</Link>
            <Link to="/plans-by-state/medicare/ct">CT</Link>
            <Link to="/plans-by-state/medicare/de">DE</Link>
            <Link to="/plans-by-state/medicare/fl">FL</Link>
            <Link to="/plans-by-state/medicare/ga">GA</Link>
            <Link to="/plans-by-state/medicare/ia">IA</Link>
            <Link to="/plans-by-state/medicare/id">ID</Link>
            <Link to="/plans-by-state/medicare/il">IL</Link>
            <Link to="/plans-by-state/medicare/in">IN</Link>
            <Link to="/plans-by-state/medicare/ks">KS</Link>
            <Link to="/plans-by-state/medicare/ky">KY</Link>
            <Link to="/plans-by-state/medicare/la">LA</Link>
            <Link to="/plans-by-state/medicare/ma">MA</Link>
            <Link to="/plans-by-state/medicare/md">MD</Link>
            <Link to="/plans-by-state/medicare/me">ME</Link>
            <Link to="/plans-by-state/medicare/mi">MI</Link>
            <Link to="/plans-by-state/medicare/mn">MN</Link>
            <Link to="/plans-by-state/medicare/mo">MO</Link>
            <Link to="/plans-by-state/medicare/ms">MS</Link>
            <Link to="/plans-by-state/medicare/mt">MT</Link>
            <Link to="/plans-by-state/medicare/nc">NC</Link>
            <Link to="/plans-by-state/medicare/ne">NE</Link>
            <Link to="/plans-by-state/medicare/nh">NH</Link>
            <Link to="/plans-by-state/medicare/nj">NJ</Link>
            <Link to="/plans-by-state/medicare/nm">NM</Link>
            <Link to="/plans-by-state/medicare/nv">NV</Link>
            <Link to="/plans-by-state/medicare/ny">NY</Link>
            <Link to="/plans-by-state/medicare/oh">OH</Link>
            <Link to="/plans-by-state/medicare/ok">OK</Link>
            <Link to="/plans-by-state/medicare/or">OR</Link>
            <Link to="/plans-by-state/medicare/pa">PA</Link>
            <Link to="/plans-by-state/medicare/ri">RI</Link>
            <Link to="/plans-by-state/medicare/sc">SC</Link>
            <Link to="/plans-by-state/medicare/tn">TN</Link>
            <Link to="/plans-by-state/medicare/tx">TX</Link>
            <Link to="/plans-by-state/medicare/ut">UT</Link>
            <Link to="/plans-by-state/medicare/va">VA</Link>
            <Link to="/plans-by-state/medicare/wa">WA</Link>
            <Link to="/plans-by-state/medicare/wi">WI</Link>
            <Link to="/plans-by-state/medicare/wv">WV</Link>
            <Link to="/plans-by-state/medicare/wy">WY</Link>
          </div>
          <h6>Health Insurance Plans by State</h6>
          <div className="health-insurance-by-state">
            <Link to="/plans-by-state/health-insurance/al">AL</Link>
            <Link to="/plans-by-state/health-insurance/ak">AK</Link>
            <Link to="/plans-by-state/health-insurance/ar">AR</Link>
            <Link to="/plans-by-state/health-insurance/az">AZ</Link>
            <Link to="/plans-by-state/health-insurance/ca">CA</Link>
            <Link to="/plans-by-state/health-insurance/co">CO</Link>
            <Link to="/plans-by-state/health-insurance/ct">CT</Link>
            <Link to="/plans-by-state/health-insurance/de">DE</Link>
            <Link to="/plans-by-state/health-insurance/fl">FL</Link>
            <Link to="/plans-by-state/health-insurance/ga">GA</Link>
            <Link to="/plans-by-state/health-insurance/ia">IA</Link>
            <Link to="/plans-by-state/health-insurance/id">ID</Link>
            <Link to="/plans-by-state/health-insurance/il">IL</Link>
            <Link to="/plans-by-state/health-insurance/in">IN</Link>
            <Link to="/plans-by-state/health-insurance/ks">KS</Link>
            <Link to="/plans-by-state/health-insurance/ky">KY</Link>
            <Link to="/plans-by-state/health-insurance/la">LA</Link>
            <Link to="/plans-by-state/health-insurance/ma">MA</Link>
            <Link to="/plans-by-state/health-insurance/md">MD</Link>
            <Link to="/plans-by-state/health-insurance/me">ME</Link>
            <Link to="/plans-by-state/health-insurance/mi">MI</Link>
            <Link to="/plans-by-state/health-insurance/mn">MN</Link>
            <Link to="/plans-by-state/health-insurance/mo">MO</Link>
            <Link to="/plans-by-state/health-insurance/ms">MS</Link>
            <Link to="/plans-by-state/health-insurance/mt">MT</Link>
            <Link to="/plans-by-state/health-insurance/nc">NC</Link>
            <Link to="/plans-by-state/health-insurance/ne">NE</Link>
            <Link to="/plans-by-state/health-insurance/nh">NH</Link>
            <Link to="/plans-by-state/health-insurance/nj">NJ</Link>
            <Link to="/plans-by-state/health-insurance/nm">NM</Link>
            <Link to="/plans-by-state/health-insurance/nv">NV</Link>
            <Link to="/plans-by-state/health-insurance/ny">NY</Link>
            <Link to="/plans-by-state/health-insurance/oh">OH</Link>
            <Link to="/plans-by-state/health-insurance/ok">OK</Link>
            <Link to="/plans-by-state/health-insurance/or">OR</Link>
            <Link to="/plans-by-state/health-insurance/pa">PA</Link>
            <Link to="/plans-by-state/health-insurance/ri">RI</Link>
            <Link to="/plans-by-state/health-insurance/sc">SC</Link>
            <Link to="/plans-by-state/health-insurance/tn">TN</Link>
            <Link to="/plans-by-state/health-insurance/tx">TX</Link>
            <Link to="/plans-by-state/health-insurance/ut">UT</Link>
            <Link to="/plans-by-state/health-insurance/va">VA</Link>
            <Link to="/plans-by-state/health-insurance/wa">WA</Link>
            <Link to="/plans-by-state/health-insurance/wi">WI</Link>
            <Link to="/plans-by-state/health-insurance/wv">WV</Link>
            <Link to="/plans-by-state/health-insurance/wy">WY</Link>
          </div>
          <h6>Dental Insurance Plans by State</h6>
          <div className="dental-insurance-by-state">
            <Link to="/plans-by-state/dental-insurance/al">AL</Link>
            <Link to="/plans-by-state/dental-insurance/ak">AK</Link>
            <Link to="/plans-by-state/dental-insurance/ar">AR</Link>
            <Link to="/plans-by-state/dental-insurance/az">AZ</Link>
            <Link to="/plans-by-state/dental-insurance/ca">CA</Link>
            <Link to="/plans-by-state/dental-insurance/co">CO</Link>
            <Link to="/plans-by-state/dental-insurance/ct">CT</Link>
            <Link to="/plans-by-state/dental-insurance/de">DE</Link>
            <Link to="/plans-by-state/dental-insurance/fl">FL</Link>
            <Link to="/plans-by-state/dental-insurance/ga">GA</Link>
            <Link to="/plans-by-state/dental-insurance/ia">IA</Link>
            <Link to="/plans-by-state/dental-insurance/id">ID</Link>
            <Link to="/plans-by-state/dental-insurance/il">IL</Link>
            <Link to="/plans-by-state/dental-insurance/in">IN</Link>
            <Link to="/plans-by-state/dental-insurance/ks">KS</Link>
            <Link to="/plans-by-state/dental-insurance/ky">KY</Link>
            <Link to="/plans-by-state/dental-insurance/la">LA</Link>
            <Link to="/plans-by-state/dental-insurance/ma">MA</Link>
            <Link to="/plans-by-state/dental-insurance/md">MD</Link>
            <Link to="/plans-by-state/dental-insurance/me">ME</Link>
            <Link to="/plans-by-state/dental-insurance/mi">MI</Link>
            <Link to="/plans-by-state/dental-insurance/mn">MN</Link>
            <Link to="/plans-by-state/dental-insurance/mo">MO</Link>
            <Link to="/plans-by-state/dental-insurance/ms">MS</Link>
            <Link to="/plans-by-state/dental-insurance/mt">MT</Link>
            <Link to="/plans-by-state/dental-insurance/nc">NC</Link>
            <Link to="/plans-by-state/dental-insurance/ne">NE</Link>
            <Link to="/plans-by-state/dental-insurance/nh">NH</Link>
            <Link to="/plans-by-state/dental-insurance/nj">NJ</Link>
            <Link to="/plans-by-state/dental-insurance/nm">NM</Link>
            <Link to="/plans-by-state/dental-insurance/nv">NV</Link>
            <Link to="/plans-by-state/dental-insurance/ny">NY</Link>
            <Link to="/plans-by-state/dental-insurance/oh">OH</Link>
            <Link to="/plans-by-state/dental-insurance/ok">OK</Link>
            <Link to="/plans-by-state/dental-insurance/or">OR</Link>
            <Link to="/plans-by-state/dental-insurance/pa">PA</Link>
            <Link to="/plans-by-state/dental-insurance/ri">RI</Link>
            <Link to="/plans-by-state/dental-insurance/sc">SC</Link>
            <Link to="/plans-by-state/dental-insurance/tn">TN</Link>
            <Link to="/plans-by-state/dental-insurance/tx">TX</Link>
            <Link to="/plans-by-state/dental-insurance/ut">UT</Link>
            <Link to="/plans-by-state/dental-insurance/va">VA</Link>
            <Link to="/plans-by-state/dental-insurance/wa">WA</Link>
            <Link to="/plans-by-state/dental-insurance/wi">WI</Link>
            <Link to="/plans-by-state/dental-insurance/wv">WV</Link>
            <Link to="/plans-by-state/dental-insurance/wy">WY</Link>
          </div>
          <h6>Life Insurance Plans by State</h6>
          <div className="life-insurance-by-state">
            <Link to="/plans-by-state/life-insurance/al">AL</Link>
            <Link to="/plans-by-state/life-insurance/ak">AK</Link>
            <Link to="/plans-by-state/life-insurance/ar">AR</Link>
            <Link to="/plans-by-state/life-insurance/az">AZ</Link>
            <Link to="/plans-by-state/life-insurance/ca">CA</Link>
            <Link to="/plans-by-state/life-insurance/co">CO</Link>
            <Link to="/plans-by-state/life-insurance/ct">CT</Link>
            <Link to="/plans-by-state/life-insurance/de">DE</Link>
            <Link to="/plans-by-state/life-insurance/fl">FL</Link>
            <Link to="/plans-by-state/life-insurance/ga">GA</Link>
            <Link to="/plans-by-state/life-insurance/ia">IA</Link>
            <Link to="/plans-by-state/life-insurance/id">ID</Link>
            <Link to="/plans-by-state/life-insurance/il">IL</Link>
            <Link to="/plans-by-state/life-insurance/in">IN</Link>
            <Link to="/plans-by-state/life-insurance/ks">KS</Link>
            <Link to="/plans-by-state/life-insurance/ky">KY</Link>
            <Link to="/plans-by-state/life-insurance/la">LA</Link>
            <Link to="/plans-by-state/life-insurance/ma">MA</Link>
            <Link to="/plans-by-state/life-insurance/md">MD</Link>
            <Link to="/plans-by-state/life-insurance/me">ME</Link>
            <Link to="/plans-by-state/life-insurance/mi">MI</Link>
            <Link to="/plans-by-state/life-insurance/mn">MN</Link>
            <Link to="/plans-by-state/life-insurance/mo">MO</Link>
            <Link to="/plans-by-state/life-insurance/ms">MS</Link>
            <Link to="/plans-by-state/life-insurance/mt">MT</Link>
            <Link to="/plans-by-state/life-insurance/nc">NC</Link>
            <Link to="/plans-by-state/life-insurance/ne">NE</Link>
            <Link to="/plans-by-state/life-insurance/nh">NH</Link>
            <Link to="/plans-by-state/life-insurance/nj">NJ</Link>
            <Link to="/plans-by-state/life-insurance/nm">NM</Link>
            <Link to="/plans-by-state/life-insurance/nv">NV</Link>
            <Link to="/plans-by-state/life-insurance/ny">NY</Link>
            <Link to="/plans-by-state/life-insurance/oh">OH</Link>
            <Link to="/plans-by-state/life-insurance/ok">OK</Link>
            <Link to="/plans-by-state/life-insurance/or">OR</Link>
            <Link to="/plans-by-state/life-insurance/pa">PA</Link>
            <Link to="/plans-by-state/life-insurance/ri">RI</Link>
            <Link to="/plans-by-state/life-insurance/sc">SC</Link>
            <Link to="/plans-by-state/life-insurance/tn">TN</Link>
            <Link to="/plans-by-state/life-insurance/tx">TX</Link>
            <Link to="/plans-by-state/life-insurance/ut">UT</Link>
            <Link to="/plans-by-state/life-insurance/va">VA</Link>
            <Link to="/plans-by-state/life-insurance/wa">WA</Link>
            <Link to="/plans-by-state/life-insurance/wi">WI</Link>
            <Link to="/plans-by-state/life-insurance/wv">WV</Link>
            <Link to="/plans-by-state/life-insurance/wy">WY</Link>
          </div>
        </PlansByStateLinks>
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