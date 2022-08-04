// Library
import * as React from "react";
import { Global } from "@emotion/react";

// Query
import { useLifeInsurancePageQuery } from "../../hooks/insurance/useLifeInsurancePageQuery";

// Styles
import {
  PageStyles, Hero, HeroInner,
  FocusImg, Form, Input,
  Submit, Banner, BannerInner,
  Wrapper, Inner, Types,
  Type, TypeHeading, TypeContent,
  TypeAction, CTABanner, CTABannerInner,
  CTABannerHeading, CTABannerCTAWrapper,
  CTABannerCTA, CTABannerCTAContent,
  CTABannerCTAAction, ResourcesWrapper,
  ResourcesInner, ResourcesChild,
} from "./styles"

// Images

// Components
import Layout from "../../components/Layout";
import Seo from "../../components/SEO";

const LifeInsurancePage = () => {
  const { page } = useLifeInsurancePageQuery()
  const data = page.gatsbyCustomFields.gpLifeInsuranceContent

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
          <img
            src={data.gpLifeEntryContent.image.sourceUrl}
            alt="Humana"/>
          <p dangerouslySetInnerHTML={{ __html: data.gpLifeEntryContent.content }} />
          <Types>
            <Type>
              <TypeHeading>
                <img
                  src={data.gpLifeTypes.gpLifeType1.icon.sourceUrl}
                  alt={data.gpLifeTypes.gpLifeType1.title} />
                <a href={data.gpLifeTypes.gpLifeType1.url}>
                  <h3 className="color-primary font-body">{data.gpLifeTypes.gpLifeType1.title}</h3>
                </a>
              </TypeHeading>
              <TypeContent>
                <p>{data.gpLifeTypes.gpLifeType1.excerpt}</p>
              </TypeContent>
              <TypeAction>
                <a className="button button-primary" href={data.gpLifeTypes.gpLifeType1.url}>
                  Learn More
                </a>
              </TypeAction>
            </Type>
            <Type>
              <TypeHeading>
                <img
                  src={data.gpLifeTypes.gpLifeType2.icon.sourceUrl}
                  alt={data.gpLifeTypes.gpLifeType2.title} />
                <a href={data.gpLifeTypes.gpLifeType2.url}>
                  <h3 className="color-primary font-body">{data.gpLifeTypes.gpLifeType2.title}</h3>
                </a>
              </TypeHeading>
              <TypeContent>
                <p>{data.gpLifeTypes.gpLifeType2.excerpt}</p>
              </TypeContent>
              <TypeAction>
                <a className="button button-primary" href={data.gpLifeTypes.gpLifeType2.url}>
                  Learn More
                </a>
              </TypeAction>
            </Type>
            <Type>
              <TypeHeading>
                <img
                  src={data.gpLifeTypes.gpLifeType3.icon.sourceUrl}
                  alt={data.gpLifeTypes.gpLifeType3.title} />
                <a href={data.gpLifeTypes.gpLifeType3.url}>
                  <h3 className="color-primary font-body">{data.gpLifeTypes.gpLifeType3.title}</h3>
                </a>
              </TypeHeading>
              <TypeContent>
                <p>{data.gpLifeTypes.gpLifeType3.excerpt}</p>
              </TypeContent>
              <TypeAction>
                <a className="button button-primary" href={data.gpLifeTypes.gpLifeType3.url}>
                  Learn More
                </a>
              </TypeAction>
            </Type>
            <Type>
              <TypeHeading>
                <img
                  src={data.gpLifeTypes.gpLifeType4.icon.sourceUrl}
                  alt={data.gpLifeTypes.gpLifeType4.title} />
                <a href={data.gpLifeTypes.gpLifeType4.url}>
                  <h3 className="color-primary font-body">{data.gpLifeTypes.gpLifeType4.title}</h3>
                </a>
              </TypeHeading>
              <TypeContent>
                <p>{data.gpLifeTypes.gpLifeType4.excerpt}</p>
              </TypeContent>
              <TypeAction>
                <a className="button button-primary" href={data.gpLifeTypes.gpLifeType4.url}>
                  Learn More
                </a>
              </TypeAction>
            </Type>
          </Types>
          <p>{data.gpLifeTypes.excerpt}</p>
        </Inner>
      </Wrapper>
      <CTABanner>
        <CTABannerInner>
          <CTABannerHeading>
            <div>
              <img
                src={data.gpLifeCtaBanner.ctaBannerIcon.sourceUrl}
                alt={data.gpLifeCtaBanner.ctaBannerHeadline} />
              <h3 className="color-light font-body">
                {data.gpLifeCtaBanner.ctaBannerHeadline}
              </h3>
            </div>
            <h3 className="color-light font-body">
              {data.gpLifeCtaBanner.ctaBannerSubheadline}
            </h3>
          </CTABannerHeading>
          <CTABannerCTAWrapper>
            <CTABannerCTA>
              <CTABannerCTAContent>
                <img
                  src={data.gpLifeCtaBanner.cta1.icon.sourceUrl}
                  alt="Handshake"/>
                <p>{data.gpLifeCtaBanner.cta1.excerpt}</p>
              </CTABannerCTAContent>
              <CTABannerCTAAction>
                <a
                  className="button button-light color-orange"
                  href={data.gpLifeCtaBanner.cta1.link}>
                  {data.gpLifeCtaBanner.cta1.linkText}
                </a>
              </CTABannerCTAAction>
            </CTABannerCTA>
            <CTABannerCTA>
              <CTABannerCTAContent>
                <img
                  src={data.gpLifeCtaBanner.cta2.icon.sourceUrl}
                  alt="Handshake"/>
                <p>{data.gpLifeCtaBanner.cta2.excerpt}</p>
              </CTABannerCTAContent>
              <CTABannerCTAAction>
                <a
                  className="button button-light color-orange"
                  href={data.gpLifeCtaBanner.cta2.link}>
                  {data.gpLifeCtaBanner.cta2.linkText}
                </a>
              </CTABannerCTAAction>
            </CTABannerCTA>
          </CTABannerCTAWrapper>
        </CTABannerInner>
      </CTABanner>
      <ResourcesWrapper>
        <ResourcesInner>
          <h3 className="font-body">
            <a className="color-primary" href="https://www.healthmarkets.com/resources/life-insurance/" target="_self" data-wpel-link="internal">
              Life Insurance Resources
            </a>
          </h3>
          <ResourcesChild>
            <div className="resources-image">
              <img
                src={data.gpLifeResources.gpLifeResource1.image.sourceUrl}
                alt="Pet grooming business" />
            </div>
            <div className="resources-content">
              <h5>
                <a href={data.gpLifeResources.gpLifeResource1.url}>
                  {data.gpLifeResources.gpLifeResource1.title}
                </a>
              </h5>
              <p>
                {data.gpLifeResources.gpLifeResource1.content}
              </p>
              <p>
                <a href={data.gpLifeResources.gpLifeResource1.url} data-wpel-link="internal">Read More</a>
              </p>
            </div>
          </ResourcesChild>
          <ResourcesChild>
            <div className="resources-content">
              <h5>
                <a href={data.gpLifeResources.gpLifeResource2.url}>
                  {data.gpLifeResources.gpLifeResource2.title}
                </a>
              </h5>
              <p>
                {data.gpLifeResources.gpLifeResource2.content}
              </p>
              <p>
                <a href={data.gpLifeResources.gpLifeResource2.url} data-wpel-link="internal">Read More</a>
              </p>
            </div>
            <div className="resources-image">
              <img
                src={data.gpLifeResources.gpLifeResource2.image.sourceUrl}
                alt="Pet grooming business" />
            </div>
          </ResourcesChild>
        </ResourcesInner>
      </ResourcesWrapper>
    </Layout>
  )
}

export default LifeInsurancePage