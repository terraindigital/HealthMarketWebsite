// Library
import * as React from "react";
import { Global } from "@emotion/react";

// Query
import { useAboutUsPageQuery } from "../../hooks/useAboutUsPageQuery";

// Styles
import {
  PageStyles, Hero, HeroInner,
  FocusImg, Form, Input,
  Submit, Banner, BannerInner,
  Wrapper, Inner
} from "./styles"

// Images

// Components
import Layout from "../../components/Layout";
import Seo from "../../components/SEO";
import Footer from "../../components/Footer";

const AboutUsPage = () => {
  const { page } = useAboutUsPageQuery()

  const BannerIcon = page.gatsbyCustomFields.gpBanner.gpBannerIcon.sourceUrl

  return (
    <Layout staticHeader>
      <Global styles={PageStyles} />
      <Seo title={page.gatsbyCustomFields.gpSeoTitle} />
      <Hero bgImage={page.gatsbyCustomFields.gpHero.gpHeroBgImage.sourceUrl}>
        <HeroInner>
          <div style={{ maxWidth: "50%" }}>
            <h1 className="color-primary font-body">{page.gatsbyCustomFields.gpHero.gpHeroHeadline}</h1>
            <h4>{page.gatsbyCustomFields.gpHero.gpHeroSubheadline}</h4>
            <Form>
              <Input type="text" name="zip" placeholder="Zip Code" />
              <Input type="text" name="emps" placeholder="# of Employees" />
              <Submit type="submit">Shop Plans</Submit>
            </Form>
            <div className="sb-hero-cta" dangerouslySetInnerHTML={{ __html: page.gatsbyCustomFields.gpHero.gpHeroCta }} />
          </div>
          <FocusImg>
            <img
              src={page.gatsbyCustomFields.gpHero.gpHeroFocusImage.sourceUrl}
              alt={page.gatsbyCustomFields.gpSeoTitle}
              width="700"
              height="592" />
          </FocusImg>
        </HeroInner>
      </Hero>
      <Banner color={page.gatsbyCustomFields.gpBanner.gpBannerColor}>
        <BannerInner>
          <div>
            {(BannerIcon) ? (
              <img src={BannerIcon} alt={page.gatsbyCustomFields.gpBanner.gpBannerHeadline} />
            ) : ""}
            <h2 className="font-body">{page.gatsbyCustomFields.gpBanner.gpBannerHeadline}</h2>
          </div>
          <h3 className="font-body">{page.gatsbyCustomFields.gpBanner.gpBannerSubheadline}</h3>
        </BannerInner>
      </Banner>
      <Wrapper>
        <Inner>
          <div dangerouslySetInnerHTML={{ __html: page.gatsbyCustomFields.gpAboutContent }} />
        </Inner>
      </Wrapper>
      <Footer>
        <div dangerouslySetInnerHTML={{ __html: page.disclaimers.disclaimer }} />
      </Footer>
    </Layout>
  )
}

export default AboutUsPage