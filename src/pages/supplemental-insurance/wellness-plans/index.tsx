// Library
import * as React from "react";
import { Global } from "@emotion/react";
import { graphql } from "gatsby";

// Query
import { useWellnessPageQuery } from "../../../hooks/insurance/useWellnessPageQuery";

// Styles
import {
  PageStyles, Hero, HeroInner,
  FocusImg, Form, Input,
  Submit, Banner, BannerInner,
  Wrapper, Inner, Aside, Main,
  ResourcesChild, ResourcesInner,
  ResourcesWrapper,
  AsideInner
} from "./styles"

// Images

// Components
import Layout from "../../../components/Layout";
import Seo from "../../../components/SEO";
import Footer from "../../../components/Footer";

const WellnessPage = () => {
  const { page } = useWellnessPageQuery()

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
            <img src={page.gatsbyCustomFields.gpBanner.gpBannerIcon.sourceUrl} alt={page.gatsbyCustomFields.gpBanner.gpBannerHeadline} />
            <h2 className="font-body">{page.gatsbyCustomFields.gpBanner.gpBannerHeadline}</h2>
          </div>
          <h3 className="font-body">{page.gatsbyCustomFields.gpBanner.gpBannerSubheadline}</h3>
        </BannerInner>
      </Banner>
      <Wrapper>
        <Inner>
          <Main>
            <div dangerouslySetInnerHTML={{ __html: page.gatsbyCustomFields.gpWellnessContent.gpWellnessMainContent }} />
            <ResourcesWrapper>
              <ResourcesInner>
                <h3 className="font-body">
                  <a className="color-primary" href="http://www.healthmarkets.com/resources/other-products/" target="_self" data-wpel-link="internal">
                    Wellness Resources
                  </a>
                </h3>
                <ResourcesChild>
                  <div className="resources-image">
                    <img
                      src={page.gatsbyCustomFields.gpWellnessContent.gpWellnessResources.gpWellnessResource1.image.sourceUrl}
                      alt="Pet grooming business" />
                  </div>
                  <div className="resources-content">
                    <h5>
                      <a href={page.gatsbyCustomFields.gpWellnessContent.gpWellnessResources.gpWellnessResource1.url}>
                        {page.gatsbyCustomFields.gpWellnessContent.gpWellnessResources.gpWellnessResource1.title}
                      </a>
                    </h5>
                    <p>
                      {page.gatsbyCustomFields.gpWellnessContent.gpWellnessResources.gpWellnessResource1.content}
                    </p>
                    <p>
                      <a href={page.gatsbyCustomFields.gpWellnessContent.gpWellnessResources.gpWellnessResource1.url} data-wpel-link="internal">Read More</a>
                    </p>
                  </div>
                </ResourcesChild>
                <ResourcesChild>
                  <div className="resources-content">
                    <h5>
                      <a href={page.gatsbyCustomFields.gpWellnessContent.gpWellnessResources.gpWellnessResource2.url}>
                        {page.gatsbyCustomFields.gpWellnessContent.gpWellnessResources.gpWellnessResource2.title}
                      </a>
                    </h5>
                    <p>
                      {page.gatsbyCustomFields.gpWellnessContent.gpWellnessResources.gpWellnessResource2.content}
                    </p>
                    <p>
                      <a href={page.gatsbyCustomFields.gpWellnessContent.gpWellnessResources.gpWellnessResource2.url} data-wpel-link="internal">Read More</a>
                    </p>
                  </div>
                  <div className="resources-image">
                    <img
                      src={page.gatsbyCustomFields.gpWellnessContent.gpWellnessResources.gpWellnessResource2.image.sourceUrl}
                      alt="Pet grooming business" />
                  </div>
                </ResourcesChild>
              </ResourcesInner>
            </ResourcesWrapper>
          </Main>
          <Aside>
            <AsideInner>
              <div>
                <h4 className="color-primary font-body">Still Have Questions?</h4>
              </div>
              <div>
                <figure>
                  <div>
                    <img width="295" height="286" src="//www.healthmarkets.com/wp-content/uploads/2016/05/customer-service-rep.jpg" alt="" />
                    <noscript>
                      <img width="295" height="286" src="//www.healthmarkets.com/wp-content/uploads/2016/05/customer-service-rep.jpg" alt="" />
                    </noscript>
                  </div>
                </figure>
              </div>
              <a className="button button-orange" href="tel:8005505971" data-wpel-link="internal">(800) 550-5971</a>
              <div style={{ marginTop: "0.8rem", marginBottom: "0.8rem" }}>
                <p>
                  <a style={{ color: "#69BE28" }} href="http://www.healthmarkets.com/faq/" title="" target="_self" data-wpel-link="internal">Visit our FAQs</a>
                </p>
              </div>
              <div>
                <figure>
                  <a href="https://www.healthmarkets.com/information-best-price-guarantee/" target="_self">
                    <img width="300" height="165" src="//www.healthmarkets.com/wp-content/uploads/2016/05/best-price-colorized-vector-450x247.png" alt=""  />
                    <noscript>
                      <img width="300" height="165" src="//www.healthmarkets.com/wp-content/uploads/2016/05/best-price-colorized-vector-450x247.png" alt="" />
                    </noscript>
                  </a>
                </figure>
              </div>
              <div style={{ marginTop: "3.2rem" }}>
                <a className="button button-accent" href="https://shop.healthmarkets.com/about-me/info/?dentalenrollonline=yes&amp;healthACAenrollonline=yes&amp;healthShortTermEnrollOnline=yes&amp;lob=supplemental%3Flob%3DSupplemental&amp;medicareMAenrollonline=yes&amp;medicarePDPenrollonline=yes&amp;medicareSuppenrollonline=yes&amp;utm_campaign=content_audit_redirect_012221&amp;utm_medium=direct&amp;visionenrollonline=yes" data-cta="true" title="Get a quote">Get a Quote » </a>
              </div>
            </AsideInner>
          </Aside>
        </Inner>
      </Wrapper>
      <Footer>
        <div dangerouslySetInnerHTML={{ __html: page.disclaimers.disclaimer }} />
      </Footer>
    </Layout>
  )
}

export default WellnessPage