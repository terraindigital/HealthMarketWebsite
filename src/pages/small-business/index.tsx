// Library
import * as React from "react";
import { Global } from "@emotion/react";

// Query
import { useSmallBusinessPageQuery } from "../../hooks/insurance/useSmallBusinessPageQuery";

// Styles
import {
  PageStyles, Hero, HeroInner,
  FocusImg, Form, Input,
  Submit, Banner, BannerInner,
  Wrapper, Inner, Cards,
  Card, Muted, MutedInner,
  Story, StoryInner, ShopCTA, ShopCTAInner, BenefitsResourcesChild, BenefitsResourcesWrapper, BenefitsResourcesInner
} from "./styles"

// Images

// Components
import Layout from "../../components/Layout";
import Seo from "../../components/SEO";
import Footer from "../../components/Footer";

const SmallBusinessPage = () => {
  const { page } = useSmallBusinessPageQuery()

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
          <h2 style={{ textAlign: "center", marginBottom: "64px", fontSize: "36px" }} className="color-primary font-body">{page.gatsbyCustomFields.gpSmallBusinessContent.gpSbEntryCards.gpSbEntryCardsTitle}</h2>
          <Cards>
            <Card>
              <img src={page.gatsbyCustomFields.gpSmallBusinessContent.gpSbEntryCards.gpSbEntryCard1.icon.sourceUrl} />
              <div dangerouslySetInnerHTML={{ __html: page.gatsbyCustomFields.gpSmallBusinessContent.gpSbEntryCards.gpSbEntryCard1.content }} />
            </Card>
            <Card>
              <img src={page.gatsbyCustomFields.gpSmallBusinessContent.gpSbEntryCards.gpSbEntryCard2.icon.sourceUrl} />
              <div dangerouslySetInnerHTML={{ __html: page.gatsbyCustomFields.gpSmallBusinessContent.gpSbEntryCards.gpSbEntryCard2.content }} />
            </Card>
            <Card>
              <img src={page.gatsbyCustomFields.gpSmallBusinessContent.gpSbEntryCards.gpSbEntryCard3.icon.sourceUrl} />
              <div dangerouslySetInnerHTML={{ __html: page.gatsbyCustomFields.gpSmallBusinessContent.gpSbEntryCards.gpSbEntryCard3.content }} />
            </Card>
          </Cards>
          <Muted>
            <MutedInner>
              <img src={page.gatsbyCustomFields.gpSmallBusinessContent.gpSbMutedSection.image.sourceUrl} alt="Our Agents" />
              <span>
                <h3 className="color-primary font-body">{page.gatsbyCustomFields.gpSmallBusinessContent.gpSbMutedSection.title}</h3>
                <div dangerouslySetInnerHTML={{ __html: page.gatsbyCustomFields.gpSmallBusinessContent.gpSbMutedSection.content }} />
              </span>
            </MutedInner>
          </Muted>
          <Story bgImage={page.gatsbyCustomFields.gpSmallBusinessContent.gpSbStoryCta.image.sourceUrl}>
            <StoryInner>
              <h2 className="font-body">{page.gatsbyCustomFields.gpSmallBusinessContent.gpSbStoryCta.title}</h2>
              <figure>
                <blockquote>{page.gatsbyCustomFields.gpSmallBusinessContent.gpSbStoryCta.quote}</blockquote>
                <figcaption>{page.gatsbyCustomFields.gpSmallBusinessContent.gpSbStoryCta.author}</figcaption>
              </figure>
              <div>
                <a className="button button-orange" href={page.gatsbyCustomFields.gpSmallBusinessContent.gpSbStoryCta.link}>
                  {page.gatsbyCustomFields.gpSmallBusinessContent.gpSbStoryCta.linkText}
                </a>
              </div>
            </StoryInner>
          </Story>
          <ShopCTA>
            <ShopCTAInner>
              <h3 className="color-primary font-body">{page.gatsbyCustomFields.gpSmallBusinessContent.gpSbShopCta.gpSbShopCtaHeadline}</h3>
              <h4>{page.gatsbyCustomFields.gpSmallBusinessContent.gpSbShopCta.gpSbShopCtaSubheadline}</h4>
              <img
                src={page.gatsbyCustomFields.gpSmallBusinessContent.gpSbShopCta.gpSbShopCtaIcon.sourceUrl}
                alt={page.gatsbyCustomFields.gpSmallBusinessContent.gpSbShopCta.gpSbShopCtaHeadline} />
              <div style={{ padding: "0 12.8rem" }}>
                <h4>{page.gatsbyCustomFields.gpSmallBusinessContent.gpSbShopCta.gpSbShopCtaExcerpt}</h4>
              </div>
              <Form>
                <Input type="text" name="zip" placeholder="Zip Code" />
                <Input type="text" name="emps" placeholder="# of Employees" />
                <Submit type="submit">Shop Plans</Submit>
              </Form>
            </ShopCTAInner>
          </ShopCTA>
        </Inner>
      </Wrapper>
      <BenefitsResourcesWrapper>
        <BenefitsResourcesInner>
          <h3 className="font-body">
            <a className="color-primary" href="https://www.healthmarkets.com/resources/small-business" target="_self" data-wpel-link="internal">
              Benefits Resources
            </a>
          </h3>
          <BenefitsResourcesChild>
            <div className="benefits-resources-image">
              <img
                src={page.gatsbyCustomFields.gpSmallBusinessContent.gpSbResources.gpSbResource1.image.sourceUrl}
                alt="Pet grooming business" />
            </div>
            <div className="benefits-resources-content">
              <h5>
                <a href={page.gatsbyCustomFields.gpSmallBusinessContent.gpSbResources.gpSbResource1.url}>
                  {page.gatsbyCustomFields.gpSmallBusinessContent.gpSbResources.gpSbResource1.title}
                </a>
              </h5>
              <p>
                {page.gatsbyCustomFields.gpSmallBusinessContent.gpSbResources.gpSbResource1.content}
              </p>
              <p>
                <a href={page.gatsbyCustomFields.gpSmallBusinessContent.gpSbResources.gpSbResource1.url} data-wpel-link="internal">Read More</a>
              </p>
            </div>
          </BenefitsResourcesChild>
          <BenefitsResourcesChild>
            <div className="benefits-resources-content">
              <h5>
                <a href={page.gatsbyCustomFields.gpSmallBusinessContent.gpSbResources.gpSbResource2.url}>
                  {page.gatsbyCustomFields.gpSmallBusinessContent.gpSbResources.gpSbResource2.title}
                </a>
              </h5>
              <p>
                {page.gatsbyCustomFields.gpSmallBusinessContent.gpSbResources.gpSbResource2.content}
              </p>
              <p>
                <a href={page.gatsbyCustomFields.gpSmallBusinessContent.gpSbResources.gpSbResource2.url} data-wpel-link="internal">Read More</a>
              </p>
            </div>
            <div className="benefits-resources-image">
              <img
                src={page.gatsbyCustomFields.gpSmallBusinessContent.gpSbResources.gpSbResource2.image.sourceUrl}
                alt="Pet grooming business" />
            </div>
          </BenefitsResourcesChild>
        </BenefitsResourcesInner>
      </BenefitsResourcesWrapper>
      <Footer>
        <div dangerouslySetInnerHTML={{ __html: page.disclaimers.disclaimer }} />
      </Footer>
    </Layout>
  )
}

export default SmallBusinessPage