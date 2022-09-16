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
} from '../components/pages/styles/LandingPageStyles';

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
  image: {
    sourceUrl: string,
  }
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
    landingPageCustomFields: {
      lpCta: {
        showCta?: boolean,
        ctaStyle: string,
        bgColor: string,
        ctaColumns: {
          column1: {
            contentType: string,
            image?: {
              sourceUrl: string
            },
            heading?: string,
            button?: {
              link: string,
              text: string
            }
          }
          column2: {
            contentType: string,
            image?: {
              sourceUrl: string
            },
            heading?: string,
            button?: {
              link: string,
              text: string
            }
          }
          column3?: {
            contentType: string,
            image?: {
              sourceUrl: string
            },
            heading?: string,
            button?: {
              link: string,
              text: string
            }
          }
        }
      },
      lpHero: {
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
        bgColor?: string,
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
      lpSections: {
        lpSection1: SectionInfo,
        lpSection2: SectionInfo,
        lpSection3: SectionInfo,
        lpSection4: SectionInfo,
        lpSection5: SectionInfo
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

const LPPage = ({data}: { data: PageInfo }) => {
  const { page } = data;
  const sections = page.landingPageCustomFields.lpSections;
  const callouts = page.calloutsCustomField.callouts;

  return (
    <Layout pageClass={page.slug}>
      <Global styles={PageStyles} />
      <Seo
          title={page.metadataCustomFields.metaTitle}
          description={page.metadataCustomFields.metaDescription}/>
      <Wrapper>
        <Hero
          image={page.landingPageCustomFields.lpHero.heroImage.sourceUrl}
          mobileImage={page.landingPageCustomFields.lpHero.heroImageMobile.sourceUrl}
          bgColor={(page.landingPageCustomFields.lpHero.bgColor) ? page.landingPageCustomFields.lpHero.bgColor : "#ffffff"}
          centered={(page.landingPageCustomFields.lpHero.alignment === "centered")}
          boxed={(page.landingPageCustomFields.lpHero.contentStyle === "boxed")}
          color={page.landingPageCustomFields.lpHero.contentBgColor}
          >
          <HeroHeading>{page.landingPageCustomFields.lpHero.heroHeadline}</HeroHeading>
          <HeroSubheading>{page.landingPageCustomFields.lpHero.heroSubheadline}</HeroSubheading>
          <PageHeroForm
            centered={(page.landingPageCustomFields.lpHero.alignment === "centered")}
            btnLeftText={page.landingPageCustomFields.lpHero.heroButtons.heroButton1.text}
            btnRightText={page.landingPageCustomFields.lpHero.heroButtons.heroButton2.text}
            inputId={`${page.title.replaceAll(' ', '')}HeroLocation`}
            buttons={page.landingPageCustomFields.lpHero.heroButtons.showButtons} />
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
                      {Object.keys(section.list).map((listItem) => (
                        <ListItem heading={section.list[listItem].title}>
                          <p>{section.list[listItem].content}</p>
                        </ListItem>
                      ))}
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
                      {Object.keys(section.list).map((listItem) => (
                        <ListItem heading={section.list[listItem].title}>
                          <p>{section.list[listItem].content}</p>
                        </ListItem>
                      ))}
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

            if (section.contentType === "Accordion") {
              if (section.headline.headlineAlignment === "Centered") {
                return (
                  <CenteredSection
                    color={(section.bgColor) ? section.bgColor : "light"}
                    heading={section.headline.headlineText}>
                    <Accordion
                      title={section.accordions.heading}
                      content={section.accordions.content} />
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
                    <Accordion
                      title={section.accordions.heading}
                      content={section.accordions.content} />
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
                          return (
                            <Card
                              icon={card.icon.sourceUrl}
                              title={card.title}
                              list={(card.list) ? card.list : null}>
                              <p dangerouslySetInnerHTML={{ __html: card.content }} />
                            </Card>
                          )
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
                          return (
                            <Card
                              icon={card.icon.sourceUrl}
                              title={card.title}
                              list={(card.list) ? card.list : null}>
                              <p dangerouslySetInnerHTML={{ __html: card.content }} />
                            </Card>
                          )
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
                          return (
                            <Icon
                              icon={icon.icon.sourceUrl}
                              mobile={icon.mobileIcon.sourceUrl}
                              title={icon.title}
                              link={icon.link} />
                          )
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
                          return (
                            <Icon
                              icon={icon.icon.sourceUrl}
                              mobile={icon.mobileIcon.sourceUrl}
                              title={icon.title}
                              link={icon.link} />
                          )
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

        {(page.landingPageCustomFields.lpCta.showCta) ? (
          <Medial
            color={page.landingPageCustomFields.lpCta.bgColor}>
              <img className="chat-bubble" src={page.landingPageCustomFields.lpCta.ctaColumns.column1.image?.sourceUrl} alt="Chat bubble icon" />
              <h1 dangerouslySetInnerHTML={{ __html: page.landingPageCustomFields.lpCta.ctaColumns.column2.heading }} />
              <a href={page.landingPageCustomFields.lpCta.ctaColumns.column3?.button?.link}>
                  <Button
                    background={(page.landingPageCustomFields.lpCta.bgColor === "accent") ? "primary" : "accent"}
                    border={(page.landingPageCustomFields.lpCta.bgColor === "accent") ? "primary" : "accent"}
                    color="light">
                      {page.landingPageCustomFields.lpCta.ctaColumns.column3?.button?.text}
                  </Button>
              </a>
          </Medial>
        ) : null}
      </Wrapper>
      <Footer>
          <div dangerouslySetInnerHTML={{ __html: page.disclaimers.disclaimer }} />
      </Footer>
    </Layout>
  )
}

export default LPPage

export const pageQuery = graphql`
  query ($slug: String!) {
    page: wpLandingPage(slug: {eq: $slug}) {
      id
      title
      slug
      metadataCustomFields {
        metaTitle
        metaDescription
        metaKeywords
      }
      landingPageCustomFields {
        lpCta {
          showCta
          ctaStyle
          bgColor
          ctaColumns {
            column1 {
              button {
                link
                text
              }
              contentType
              heading
              image {
                sourceUrl
              }
            }
            column2 {
              button {
                link
                text
              }
              contentType
              heading
              image {
                sourceUrl
              }
            }
            column3 {
              button {
                link
                text
              }
              contentType
              heading
              image {
                sourceUrl
              }
            }
          }
        }
        lpHero {
          alignment
          contentStyle
          contentBgColor
          heroHeadline
          heroSubheadline
          heroImage {
            sourceUrl
          }
          heroImageMobile {
            sourceUrl
          }
          bgColor
          heroButtons {
            showButtons
            heroButton1 {
              text
            }
            heroButton2 {
              text
            }
          }
        }
        lpSections {
          lpSection1 {
            isActive
            bgColor
            contentType
            headline {
              headlineText
              headlineAlignment
            }
            cta {
              showCta
              background
              border
              color
              link
              text
            }
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
                link
                title
                content
              }
              card2 {
                image {
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
                link
                title
                content
              }
            }
            icons {
              icon1 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon2 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon3 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon4 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon5 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon6 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon7 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon8 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon9 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon10 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon11 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
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
          lpSection2 {
            isActive
            bgColor
            contentType
            headline {
              headlineText
              headlineAlignment
            }
            cta {
              showCta
              background
              border
              color
              link
              text
            }
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
                link
                title
                content
              }
              card2 {
                image {
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
                link
                title
                content
              }
            }
            icons {
              icon1 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon2 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon3 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon4 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon5 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon6 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon7 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon8 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon9 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon10 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon11 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
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
          lpSection3 {
            isActive
            bgColor
            contentType
            headline {
              headlineText
              headlineAlignment
            }
            cta {
              showCta
              background
              border
              color
              link
              text
            }
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
                link
                title
                content
              }
              card2 {
                image {
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
                link
                title
                content
              }
            }
            icons {
              icon1 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon2 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon3 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon4 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon5 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon6 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon7 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon8 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon9 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon10 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon11 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
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
          lpSection4 {
            isActive
            bgColor
            contentType
            headline {
              headlineText
              headlineAlignment
            }
            cta {
              showCta
              background
              border
              color
              link
              text
            }
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
                link
                title
                content
              }
              card2 {
                image {
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
                link
                title
                content
              }
            }
            icons {
              icon1 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon2 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon3 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon4 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon5 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon6 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon7 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon8 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon9 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon10 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon11 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
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
          lpSection5 {
            isActive
            bgColor
            contentType
            headline {
              headlineText
              headlineAlignment
            }
            cta {
              showCta
              background
              border
              color
              link
              text
            }
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
                link
                title
                content
              }
              card2 {
                image {
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
                link
                title
                content
              }
            }
            icons {
              icon1 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon2 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon3 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon4 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon5 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon6 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon7 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon8 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon9 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon10 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon11 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
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
    }
  }
`