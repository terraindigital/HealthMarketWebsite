// Library
import React, { ReactNode } from "react";
import { Global } from "@emotion/react";
import { graphql } from "gatsby";

// Styles
import {
  PageStyles,
  Wrapper,
  HeroHeading,
  HeroSubheading
} from '../components/pages/styles/GeneralProductPageStyles';

// Components
import Layout from "../components/Layout";
import Seo from "../components/SEO";
import Hero from '../components/Hero';
import Button from '../components/Buttons/Button';
import Section from "../components/Sections";
import FlexedSection from '../components/Sections/FlexedSection';
import CenteredSection from '../components/Sections/CenteredSection';
import Icons from "../components/Icons";
import Icon from "../components/Icons/Icon";
import Callout from "../components/Callouts/Callout";
import Callouts from "../components/Callouts";
import ListItem from "../components/Lists/ListItem";
import List from '../components/Lists';
import Medial from '../components/Medials';
import PageHeroForm from '../components/Hero/PageHeroForm';
import Footer from '../components/Footer';
import Accordion from "../components/Accordions";
import Cards from "../components/Cards";
import Card from "../components/Cards/Card";

interface IconInfo {
  link: String,
  title: String,
  mobileIcon: {
    sourceUrl: String
  },
  icon: {
    sourceUrl: String
  }
}

interface ListInfo {
  title: String,
  content: String
}

interface CardInfo {
  image: string,
  link: string,
  title: string,
  content: string
}

interface AccordionInfo {
  title: String,
  content: String
}

interface SectionInfo {
  bgColor: String,
  contentType: String, 
  isActive?: Boolean,
  headline: {
    headlineAlignment: String,
    headlineText: String,
  },
  icons: {
    icon1: IconInfo,
    icon2: IconInfo,
    icon3: IconInfo,
    icon4: IconInfo,
    icon5: IconInfo,
    icon6: IconInfo,
    icon7: IconInfo,
    icon8: IconInfo,
    icon9: IconInfo,
    icon10: IconInfo,
    icon11: IconInfo  
  },
  list: {
    listItem1: ListInfo,
    listItem2: ListInfo,
    listItem3: ListInfo,
    listItem4: ListInfo
  },
  cards: {
    card1: CardInfo,
    card2: CardInfo,
    card3: CardInfo
  },
  accordions: {
    accordion1: AccordionInfo,
    accordion2: AccordionInfo,
    accordion3: AccordionInfo
  },
  cta: {
    showCta: boolean,
    background: string,
    border: string,
    color: string,
    link: string,
    text: string
  }
}

interface CalloutInfo {
  number: string,
  tagline: string,
  title: string,
  description: string,
  disclaimer: ReactNode
}

interface PageInfo {
  page: {
    id: string,
    title: string,
    slug: string,
    disclaimers: {
      disclaimer: string
    },
    generalProductCustomFields: {
      gpHero: {
        heroImage: {
          sourceUrl: string
        },
        heroImageMobile: {
          sourceUrl: string
        },
        heroSubheadline: string,
        heroHeadline: string,
        alignment: string,
        contentStyle: string,
        contentBgColor?: string,
        heroButtons: {
          showButtons: boolean,
          heroButton1: {
            text: string
          }
          heroButton2: {
            text: string
          }
        }
      },
      gpSections: {
        gpSection1: SectionInfo,
        gpSection2: SectionInfo,
        gpSection3: SectionInfo,
        gpSection4: SectionInfo,
        gpSection5: SectionInfo
      }
    }
    calloutsCustomField: {
      isActive: boolean,
      callouts: {
        callout1: CalloutInfo,
        callout2: CalloutInfo,
        callout3: CalloutInfo,
      }
    }
  }
}

const GPPage = ({data}: { data: PageInfo }) => {
  const { page } = data;
  const sections = page.generalProductCustomFields.gpSections;
  const callouts = page.calloutsCustomField.callouts;

  return (
    <Layout pageClass={page.slug}>
      <Global styles={PageStyles} />
      <Seo
        title={page.metadataCustomFields.metaTitle}
        description={page.metadataCustomFields.metaDescription}/>
      <Wrapper>
        <Hero
          image={page.generalProductCustomFields.gpHero.heroImage.sourceUrl}
          mobileImage={page.generalProductCustomFields.gpHero.heroImageMobile.sourceUrl}
          centered={(page.generalProductCustomFields.gpHero.alignment === "centered")}
          boxed={(page.generalProductCustomFields.gpHero.contentStyle === "boxed")}
          color={page.generalProductCustomFields.gpHero.contentBgColor}
          >
          <HeroHeading>{page.generalProductCustomFields.gpHero.heroHeadline}</HeroHeading>
          <HeroSubheading>{page.generalProductCustomFields.gpHero.heroSubheadline}</HeroSubheading>
          <PageHeroForm
            centered={(page.generalProductCustomFields.gpHero.alignment === "centered")}
            btnLeftText={page.generalProductCustomFields.gpHero.heroButtons.heroButton1.text}
            btnRightText={page.generalProductCustomFields.gpHero.heroButtons.heroButton2.text}
            inputId={`${page.title.replaceAll(' ', '')}HeroLocation`}
            buttons={page.generalProductCustomFields.gpHero.heroButtons.showButtons} />
        </Hero>

        {Object.keys(sections).map((i) => {
          const section = sections[i];

          if (section.isActive) {
            if (section.contentType === "List") {
              if (section.headline.headlineAlignment === "Centered") {
                return (
                  <CenteredSection
                    color={(section.bgColor) ? section.bgColor : "light"}
                    heading={section.headline.headlineText}>
                    <List>
                      {(section.list) ? (
                        Object.keys(section.list).map((i) => {
                          const item = section.list[i];
                          if (item.title) {
                            return (
                              <ListItem heading={item.title}>
                                <p>{item.content}</p>
                              </ListItem>
                            )
                          }
                        })
                      ) : null}
                    </List>
                    {(section.cta.showCta) ? (
                      <div style={{ marginTop: "5.5rem" }}>
                        <a href={section.cta.link}>
                          <Button
                            background={section.cta.background}
                            border={section.cta.border}
                            color={section.cta.color}>
                            {section.cta.text}
                          </Button>
                        </a>
                      </div>
                    ) : null}
                  </CenteredSection>
                )
              } else {
                return (
                  <FlexedSection
                    color={(section.bgColor) ? section.bgColor : "light"}
                    heading={section.headline.headlineText}>
                    <List>
                    {(section.list) ? (
                      Object.keys(section.list).map((i) => {
                        const item = section.list[i];
                        if (item.title) {
                          return (
                            <ListItem heading={item.title}>
                              <p>{item.content}</p>
                            </ListItem>
                          )
                        }
                      })
                    ) : null}
                    </List>
                    {(section.cta.showCta) ? (
                      <div>
                        <a href={section.cta.link}>
                          <Button
                            background={section.cta.background}
                            border={section.cta.border}
                            color={section.cta.color}>
                            {section.cta.text}
                          </Button>
                        </a>
                      </div>
                    ) : null}
                  </FlexedSection>
                )
              }
            }

            if (section.contentType === "Accordions") {
              if (section.headline.headlineAlignment === "Centered") {
                return (
                  <CenteredSection
                    color={(section.bgColor) ? section.bgColor : "light"}
                    heading={section.headline.headlineText}>
                    {(section.accordions) ? (
                      Object.keys(section.accordions).map((i) => {
                        const accordion = section.accordions[i];
                        if (accordion.title) {
                          return (
                            <Accordion
                              title={accordion.title}
                              content={accordion.content} />
                          )
                        }
                      })
                    ) : null}
                    {(section.cta.showCta) ? (
                      <div style={{ marginTop: "5.5rem" }}>
                        <a href={section.cta.link}>
                          <Button
                            background={section.cta.background}
                            border={section.cta.border}
                            color={section.cta.color}>
                            {section.cta.text}
                          </Button>
                        </a>
                      </div>
                    ) : null}
                  </CenteredSection>
                )
              } else {
                return (
                  <FlexedSection
                    color={(section.bgColor) ? section.bgColor : "light"}
                    heading={section.headline.headlineText}>
                    {(section.accordions) ? (
                      Object.keys(section.accordions).map((i) => {
                        const accordion = section.accordions[i];
                        if (accordion.title) {
                          return (
                            <Accordion
                              title={accordion.title}
                              content={accordion.content} />
                          )
                        }
                      })
                    ) : null}
                    {(section.cta.showCta) ? (
                      <div>
                        <a href={section.cta.link}>
                          <Button
                            background={section.cta.background}
                            border={section.cta.border}
                            color={section.cta.color}>
                            {section.cta.text}
                          </Button>
                        </a>
                      </div>
                    ) : null}
                  </FlexedSection>
                )
              }
            }

            if (section.contentType === "Cards") {
              if (section.headline.headlineAlignment === "Centered") {
                return (
                  <CenteredSection
                    color={(section.bgColor) ? section.bgColor : "light"}
                    heading={section.headline.headlineText}>
                    <Cards openAtMobile>
                      {(section.cards) ? (
                        Object.keys(section.cards).map((i) => {
                          const card = section.cards[i];
                          if (card.title) {
                            return (
                              <Card
                                image={(card.image) ? card.image.sourceUrl : null}
                                icon={(card.icon) ? card.icon.sourceUrl : null}
                                mobile={(card.mobile) ? card.mobile.sourceUrl : null}
                                title={card.title}
                                link={(card.link) ? card.link : null}>
                                <p dangerouslySetInnerHTML={{ __html: card.content }} />
                              </Card>
                            )
                          }
                        })
                      ) : null}
                    </Cards>
                    {(section.cta.showCta) ? (
                      <div style={{ marginTop: "5.5rem" }}>
                        <a href={section.cta.link}>
                          <Button
                            background={section.cta.background}
                            border={section.cta.border}
                            color={section.cta.color}>
                            {section.cta.text}
                          </Button>
                        </a>
                      </div>
                    ) : null}
                  </CenteredSection>
                )
              } else {
                return (
                  <Section
                    color={(section.bgColor) ? section.bgColor : "light"}
                    heading={section.headline.headlineText}>
                    <Cards openAtMobile>
                      {(section.cards) ? (
                        Object.keys(section.cards).map((i) => {
                          const card = section.cards[i];
                          if (card.title) {
                            return (
                              <Card
                                image={(card.image) ? card.image.sourceUrl : null}
                                icon={(card.icon) ? card.icon.sourceUrl : null}
                                mobile={(card.mobile) ? card.mobile.sourceUrl : null}
                                title={card.title}
                                link={(card.link) ? card.link : null}>
                                <p dangerouslySetInnerHTML={{ __html: card.content }} />
                              </Card>
                            )
                          }
                        })
                      ) : null}
                    </Cards>
                    {(section.cta.showCta) ? (
                      <div>
                        <a href={section.cta.link}>
                          <Button
                            background={section.cta.background}
                            border={section.cta.border}
                            color={section.cta.color}>
                            {section.cta.text}
                          </Button>
                        </a>
                      </div>
                    ) : null}
                  </Section>
                )
              }
            }

            if (section.contentType === "Icons") {
              if (section.headline.headlineAlignment === "Centered") {
                return (
                  <CenteredSection
                    color={(section.bgColor) ? section.bgColor : "light"}
                    heading={section.headline.headlineText}>
                    <Icons>
                      {(section.icons) ? (
                        Object.keys(section.icons).map((i) => {
                          const icon = section.icons[i];
                          if (icon.title) {
                            return (
                              <Icon
                                icon={icon.icon.sourceUrl}
                                mobile={icon.mobileIcon.sourceUrl}
                                title={icon.title}
                                link={icon.link} />
                            )
                          }
                        })
                      ) : null}
                    </Icons>
                    {(section.cta.showCta) ? (
                      <div style={{ marginTop: "5.5rem" }}>
                        <a href={section.cta.link}>
                          <Button
                            background={section.cta.background}
                            border={section.cta.border}
                            color={section.cta.color}>
                            {section.cta.text}
                          </Button>
                        </a>
                      </div>
                    ) : null}
                  </CenteredSection>
                )
              } else {
                return (
                  <Section
                    color={(section.bgColor) ? section.bgColor : "light"}
                    heading={section.headline.headlineText}>
                    <Icons>
                      {(section.icons) ? (
                        Object.keys(section.icons).map((i) => {
                          const icon = section.icons[i];
                          if (icon.title) {
                            return (
                              <Icon
                                icon={icon.icon.sourceUrl}
                                mobile={icon.mobileIcon.sourceUrl}
                                title={icon.title}
                                link={icon.link} />
                            )
                          }
                        })
                      ) : null}
                    </Icons>
                    {(section.cta.showCta) ? (
                      <div>
                        <a href={section.cta.link}>
                          <Button
                            background={section.cta.background}
                            border={section.cta.border}
                            color={section.cta.color}>
                            {section.cta.text}
                          </Button>
                        </a>
                      </div>
                    ) : null}
                  </Section>
                )
              }
            }
          }
        })}
        
        <Section color="light">
          <Callouts>
            {(callouts) ? (
              Object.keys(callouts).map((index) => {
                const callout = callouts[index];
                return (
                  <Callout
                    number={callout.number}
                    tagline={callout.tagline}
                    title={callout.title}
                    description={callout.description}
                    disclaimer={callout.disclaimer}
                  />
                )
              })
            ) : null}
          </Callouts>
        </Section>
      </Wrapper>
      <Footer>
          <div dangerouslySetInnerHTML={{ __html: page.disclaimers.disclaimer }} />
      </Footer>
    </Layout>
  )
}

export default GPPage

export const pageQuery = graphql`
  query ($slug: String!) {
    page: wpProduct(slug: {eq: $slug}) {
      id
      title
      slug
      metadataCustomFields {
        metaTitle
        metaDescription
        metaKeywords
      }
      disclaimers {
        disclaimer
      }
      calloutsCustomField {
        isActive
        callouts {
          callout1 {
            number
            tagline
            title
            description
            disclaimer
          }
          callout2 {
            number
            tagline
            title
            description
            disclaimer
          }
          callout3 {
            number
            tagline
            title
            description
            disclaimer
          }
        }
      }
      generalProductCustomFields {
        gpHero {
          alignment
          contentBgColor
          contentStyle
          heroHeadline
          heroSubheadline
          showForm
          heroButtons {
            heroButton1 {
              text
            }
            heroButton2 {
              text
            }
            showButtons
          }
          heroImage {
            sourceUrl
          }
          heroImageMobile {
            sourceUrl
          }
        }
        gpRelatedContent {
          relatedContent1 {
            image {
              sourceUrl
            }
            heading
            content
            link
          }
          relatedContent2 {
            image {
              sourceUrl
            }
            heading
            content
            link
          }
          relatedContent3 {
            image {
              sourceUrl
            }
            heading
            content
            link
          }
        }
        gpSections {
          gpSection1 {
            isActive
            bgColor
            contentType
            accordions {
              accordion1 {
                title
                content
              }
              accordion2 {
                title
                content
              }
              accordion3 {
                title
                content
              }
              accordion4 {
                title
                content
              }
              accordion5 {
                title
                content
              }
            }
            cards {
              card1 {
                image {
                  sourceUrl
                }
                icon {
                  sourceUrl
                }
                mobile {
                  sourceUrl
                }
                link
                title
                content
              }
              card2 {
                image {
                  sourceUrl
                }
                icon {
                  sourceUrl
                }
                mobile {
                  sourceUrl
                }
                link
                title
                content
              }
              card3 {
                image {
                  sourceUrl
                }
                icon {
                  sourceUrl
                }
                mobile {
                  sourceUrl
                }
                link
                title
                content
              }
            }
            cta {
              showCta
              link
              text
              color
              border
              background
            }
            headline {
              headlineText
              headlineAlignment
            }
            icons {
              icon1 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                title
                link
              }
              icon2 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                title
                link
              }
              icon3 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                title
                link
              }
              icon4 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                title
                link
              }
              icon5 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                title
                link
              }
              icon6 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                title
                link
              }
              icon7 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                title
                link
              }
              icon8 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                title
                link
              }
              icon9 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                title
                link
              }
              icon10 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                title
                link
              }
              icon11 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                title
                link
              }
            }
            list {
              listItem1 {
                title
                content
              }
              listItem2 {
                title
                content
              }
              listItem3 {
                title
                content
              }
              listItem4 {
                title
                content
              }
            }
          }
          gpSection2 {
            isActive
            bgColor
            contentType
            accordions {
              accordion1 {
                title
                content
              }
              accordion2 {
                title
                content
              }
              accordion3 {
                title
                content
              }
              accordion4 {
                title
                content
              }
              accordion5 {
                title
                content
              }
            }
            cards {
              card1 {
                image {
                  sourceUrl
                }
                icon {
                  sourceUrl
                }
                mobile {
                  sourceUrl
                }
                link
                title
                content
              }
              card2 {
                image {
                  sourceUrl
                }
                icon {
                  sourceUrl
                }
                mobile {
                  sourceUrl
                }
                link
                title
                content
              }
              card3 {
                image {
                  sourceUrl
                }
                icon {
                  sourceUrl
                }
                mobile {
                  sourceUrl
                }
                link
                title
                content
              }
            }
            cta {
              showCta
              link
              text
              color
              border
              background
            }
            headline {
              headlineText
              headlineAlignment
            }
            icons {
              icon1 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                title
                link
              }
              icon2 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                title
                link
              }
              icon3 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                title
                link
              }
              icon4 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                title
                link
              }
              icon5 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                title
                link
              }
              icon6 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                title
                link
              }
              icon7 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                title
                link
              }
              icon8 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                title
                link
              }
              icon9 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                title
                link
              }
              icon10 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                title
                link
              }
              icon11 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                title
                link
              }
            }
            list {
              listItem1 {
                title
                content
              }
              listItem2 {
                title
                content
              }
              listItem3 {
                title
                content
              }
              listItem4 {
                title
                content
              }
            }
          }
          gpSection3 {
            isActive
            bgColor
            contentType
            accordions {
              accordion1 {
                title
                content
              }
              accordion2 {
                title
                content
              }
              accordion3 {
                title
                content
              }
              accordion4 {
                title
                content
              }
              accordion5 {
                title
                content
              }
            }
            cards {
              card1 {
                image {
                  sourceUrl
                }
                icon {
                  sourceUrl
                }
                mobile {
                  sourceUrl
                }
                link
                title
                content
              }
              card2 {
                image {
                  sourceUrl
                }
                icon {
                  sourceUrl
                }
                mobile {
                  sourceUrl
                }
                link
                title
                content
              }
              card3 {
                image {
                  sourceUrl
                }
                icon {
                  sourceUrl
                }
                mobile {
                  sourceUrl
                }
                link
                title
                content
              }
            }
            cta {
              showCta
              link
              text
              color
              border
              background
            }
            headline {
              headlineText
              headlineAlignment
            }
            icons {
              icon1 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                title
                link
              }
              icon2 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                title
                link
              }
              icon3 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                title
                link
              }
              icon4 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                title
                link
              }
              icon5 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                title
                link
              }
              icon6 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                title
                link
              }
              icon7 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                title
                link
              }
              icon8 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                title
                link
              }
              icon9 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                title
                link
              }
              icon10 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                title
                link
              }
              icon11 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                title
                link
              }
            }
            list {
              listItem1 {
                title
                content
              }
              listItem2 {
                title
                content
              }
              listItem3 {
                title
                content
              }
              listItem4 {
                title
                content
              }
            }
          }
          gpSection4 {
            isActive
            bgColor
            contentType
            accordions {
              accordion1 {
                title
                content
              }
              accordion2 {
                title
                content
              }
              accordion3 {
                title
                content
              }
              accordion4 {
                title
                content
              }
              accordion5 {
                title
                content
              }
            }
            cards {
              card1 {
                image {
                  sourceUrl
                }
                icon {
                  sourceUrl
                }
                mobile {
                  sourceUrl
                }
                link
                title
                content
              }
              card2 {
                image {
                  sourceUrl
                }
                icon {
                  sourceUrl
                }
                mobile {
                  sourceUrl
                }
                link
                title
                content
              }
              card3 {
                image {
                  sourceUrl
                }
                icon {
                  sourceUrl
                }
                mobile {
                  sourceUrl
                }
                link
                title
                content
              }
            }
            cta {
              showCta
              link
              text
              color
              border
              background
            }
            headline {
              headlineText
              headlineAlignment
            }
            icons {
              icon1 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                title
                link
              }
              icon2 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                title
                link
              }
              icon3 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                title
                link
              }
              icon4 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                title
                link
              }
              icon5 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                title
                link
              }
              icon6 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                title
                link
              }
              icon7 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                title
                link
              }
              icon8 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                title
                link
              }
              icon9 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                title
                link
              }
              icon10 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                title
                link
              }
              icon11 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                title
                link
              }
            }
            list {
              listItem1 {
                title
                content
              }
              listItem2 {
                title
                content
              }
              listItem3 {
                title
                content
              }
              listItem4 {
                title
                content
              }
            }
          }
          gpSection5 {
            isActive
            bgColor
            contentType
            accordions {
              accordion1 {
                title
                content
              }
              accordion2 {
                title
                content
              }
              accordion3 {
                title
                content
              }
              accordion4 {
                title
                content
              }
              accordion5 {
                title
                content
              }
            }
            cards {
              card1 {
                image {
                  sourceUrl
                }
                icon {
                  sourceUrl
                }
                mobile {
                  sourceUrl
                }
                link
                title
                content
              }
              card2 {
                image {
                  sourceUrl
                }
                icon {
                  sourceUrl
                }
                mobile {
                  sourceUrl
                }
                link
                title
                content
              }
              card3 {
                image {
                  sourceUrl
                }
                icon {
                  sourceUrl
                }
                mobile {
                  sourceUrl
                }
                link
                title
                content
              }
            }
            cta {
              showCta
              link
              text
              color
              border
              background
            }
            headline {
              headlineText
              headlineAlignment
            }
            icons {
              icon1 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                title
                link
              }
              icon2 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                title
                link
              }
              icon3 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                title
                link
              }
              icon4 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                title
                link
              }
              icon5 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                title
                link
              }
              icon6 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                title
                link
              }
              icon7 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                title
                link
              }
              icon8 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                title
                link
              }
              icon9 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                title
                link
              }
              icon10 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                title
                link
              }
              icon11 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                title
                link
              }
            }
            list {
              listItem1 {
                title
                content
              }
              listItem2 {
                title
                content
              }
              listItem3 {
                title
                content
              }
              listItem4 {
                title
                content
              }
            }
          }
        }
      }
    }
  }
`