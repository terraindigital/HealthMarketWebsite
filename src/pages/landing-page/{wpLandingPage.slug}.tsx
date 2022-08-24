// Library
import React from "react";
import { Global } from "@emotion/react";
import { graphql } from "gatsby";

// Styles
import { HeroHeading, HeroSubheading, PageStyles } from './styles';

// Components

import Layout from "../../components/Layout";
import Seo from "../../components/SEO";
import Hero from '../../components/Hero';
import Button from '../../components/Buttons/Button';
import Input from "../../components/Inputs/Input"
import Section from "../../components/Sections";
import Icons from "../../components/Icons";
import Icon from "../../components/Icons/Icon";
import Carousel from "../../components/Carousel";
import Review from "../../components/Reviews/Review";
import Reviews from "../../components/Reviews";
import FlexedSection from '../../components/Sections/FlexedSection';
import ListItem from "../../components/Lists/ListItem";
import List from '../../components/Lists';
import Medial from '../../components/Medials';
import PageHeroForm from '../../components/Hero/PageHeroForm';

interface IconInfo {
  link: String,  
  title: String
  icon: {
    sourceUrl: String
  }
}

interface ListInfo {
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
    icon10: IconInfo    
  },
  list: {
    listItem1: ListInfo,
    listItem2: ListInfo,
    listItem3: ListInfo,
    listCta: {
      ctaLink: String,
      ctaText: String,
      showCta: String
    }
  }
}

interface PageInfo {
  page: {
    id: string;
    title: string;
    slug: string
    landingPageCustomFields?: {
      lpHero: {
        heroImage: {
          sourceUrl: string
        }
        heroImageMobile: {
          sourceUrl: string
        }
        heroSubheadline: string
        heroHeadline: string
      },
      lpSections: {
        lpSection1: SectionInfo,
        lpSection2: SectionInfo,
        lpSection3: SectionInfo,
        lpSection4: SectionInfo
      }
    }
  }
}

const LPPage = ({data}: { data: PageInfo }) => {
  const { page } = data
  const section1 = page.landingPageCustomFields?.lpSections.lpSection1;
  const section2 = page.landingPageCustomFields?.lpSections.lpSection2;


  return (
    <Layout>
      <Global styles={PageStyles} />
      <Seo title={page.title}/>
      <div className={page.slug}>        
        <Hero
            image={page.landingPageCustomFields.lpHero.heroImage.sourceUrl}
            mobileImage={page.landingPageCustomFields.lpHero.heroImageMobile.sourceUrl}
            left
            centered={page.slug == "campaign-c"}
          >
            <HeroHeading>{page.landingPageCustomFields.lpHero.heroHeadline}</HeroHeading>
            <HeroSubheading>{page.landingPageCustomFields.lpHero.heroSubheadline}</HeroSubheading>

            {
              (page.slug == "campaign-a") ? (
                <>
                <Input hero type="text" name="heroLocationInput" placeholder="Enter zip code/City" />
                <Button style={{ borderRadius: "4px" }} background="accent" border="light" color="light">Get a free quote</Button>
                </>
              ) : (
                <PageHeroForm btnLeftText="Get a Free quote" btnRightText="Find an agent" inputId="homepageHeroLocation" hideFooter={page.slug == "campaign-c"}/>
              )
            }
            
        </Hero>

        {
          section1.isActive && section1?.contentType == "Icon" ? (
            <Section
            color={section1.bgColor}
            heading={section1.headline.headlineText}>
              <Icons>
              {(section1.icons) ? (
                Object.keys(section1.icons).map((plan) => {
                  return (
                    <Icon
                      icon={section1.icons[plan].icon.sourceUrl}
                      title={section1.icons[plan].title} key={plan} />
                  )
                })
              ) : null}
            </Icons>
            </Section>
          ) : (<></>)
        }

        {
          page.slug != "campaign-c" && section1.isActive && section1.contentType == "List" ? (
            <FlexedSection
                heading={section1?.headline.headlineText}
                color={section1?.bgColor}>
                <List>
                  {(section1.list) ? (
                    Object.keys(section1.list).map((li) => {
                      if (li.indexOf("listItem") >= 0) {
                        return (<ListItem key={li} heading={section1.list[li].title}><div dangerouslySetInnerHTML={{ __html: section1.list[li].content }} /></ListItem>);
                      }
                    } )
                  ): null}
                </List>
                {
                  section1?.list.listCta.showCta ? (
                  <a href={section1?.list.listCta.ctaLink}>
                    <Button background="accent" border="accent" color="light">{section1?.list.listCta.ctaText}</Button>
                  </a>
                  ) : (<></>)
                }
                
            </FlexedSection>
          ) : (<></>)
        }

        {
          page.slug == "campaign-c" && section1.isActive && section1.contentType == "List" ? (
            <Section
                page = {section1.contentType}
                heading={section1?.headline.headlineText}
                color={section1?.bgColor}>
                <List>
                  {(section1.list) ? (
                    Object.keys(section1.list).map((li) => {
                      if (li.indexOf("listItem") >= 0) {
                        return (<ListItem key={li} heading={section1.list[li].title}><div dangerouslySetInnerHTML={{ __html: section1.list[li].content }} /></ListItem>);
                      }
                    } )
                  ): null}
                </List>
                {
                  section1?.list.listCta.showCta ? (
                  <div className="listCta">
                    <a href={section1?.list.listCta.ctaLink}>
                      <Button background="primary" border="primary" color="light">{section1?.list.listCta.ctaText}</Button>
                    </a>
                  </div>
                  ) : (<></>)
                }
                
            </Section>
          ) : (<></>)
        }

        {
          section2.isActive && section2.contentType == "Icons" ? (
            <Section
            color={section2.bgColor}
            heading={section2.headline.headlineText}>
              <Icons>
              {(section2.icons) ? (
                Object.keys(section2.icons).map((plan) => {
                  return (
                    <Icon
                      icon={section2.icons[plan].icon.sourceUrl}
                      title={section2.icons[plan].title} key={plan} />
                  )
                })
              ) : null}
            </Icons>
            </Section>
          ) : (<></>)
        }

      <Section color="light">
        <div className="hide-at-mobile">
          <Carousel type="reviews" background={page.slug == "campaign-c" ? "primary" : "half"}>
            <Review
              stars="5"
              quote='"Laura Roush is an excellent resource for personalized coverage tailored to your needs!"'
              author="Stephen Friedrichs"
            />
            <Review
              stars="5"
              quote='"Laura Roush is an excellent resource for personalized coverage tailored to your needs!"'
              author="Stephen Friedrichs"
            />
            <Review
              stars="5"
              quote='"Laura Roush is an excellent resource for personalized coverage tailored to your needs!"'
              author="Stephen Friedrichs"
            />
            <Review
              stars="5"
              quote='"Laura Roush is an excellent resource for personalized coverage tailored to your needs!"'
              author="Stephen Friedrichs"
            />
            <Review
              stars="5"
              quote='"Laura Roush is an excellent resource for personalized coverage tailored to your needs!"'
              author="Stephen Friedrichs"
            />
          </Carousel>
        </div>
        <div className="show-at-mobile">
            <Reviews>
                <Review
                    stars="5"
                    quote='"Laura Roush is an excellent resource for personalized coverage tailored to your needs!"'
                    author="Stephen Friedrichs"
                />
                <Review
                    stars="5"
                    quote='"Laura Roush is an excellent resource for personalized coverage tailored to your needs!"'
                    author="Stephen Friedrichs"
                />
            </Reviews>
            <div style={{ textAlign: "center" }}>
                <a href="#">See all reviews</a>
            </div>
        </div>
      </Section>

      <Medial color="primary">
          <img className="chat-bubble" src={"https://hmnm2022.wpengine.com/wp-content/uploads/2022/08/contact-cta-image.png"} alt="Chat bubble icon" />
          <h1 dangerouslySetInnerHTML={{ __html: "Uninsured?<br>We can help." }} />
          <a href={"https://www.healthmarkets.com/find-coverage"}>
              <Button background="accent" border="accent" color="light">
                  {"Show me options"}
              </Button>
          </a>
      </Medial>
      </div>
    </Layout>
  )
}

export default LPPage

export const pageQuery = graphql`
  query($slug: String!) {
    page: wpLandingPage(slug: {eq: $slug}) {
      id
      title
      slug
      landingPageCustomFields {
        lpHero {
          heroImage {
            sourceUrl
          }
          heroImageMobile {
            sourceUrl
          }
          heroSubheadline
          heroHeadline
        }
        lpSections {
          lpSection1 {
            bgColor
            contentType
            isActive
            headline {
              headlineText
              headlineAlignment
            }
            icons {
              icon1 {
                link
                title
                icon {
                  sourceUrl
                }    
              }
              icon2 {
                link
                title
                icon {
                  sourceUrl
                }
              }
              icon3 {
                link
                title
                icon {
                  sourceUrl
                }
              }
              icon4 {
                link
                title
                icon {
                  sourceUrl
                }
              }
              icon5 {
                link
                title
                icon {
                  sourceUrl
                }
              }
              icon6 {
                link
                title
                icon {
                  sourceUrl
                }
              }
              icon7 {
                link
                title
                icon {
                  sourceUrl
                }
              }
              icon8 {
                link
                title
                icon {
                  sourceUrl
                }
              }
              icon9 {
                link
                title
                icon {
                  sourceUrl
                }
              }
              icon10 {
                link
                title
                icon {
                  sourceUrl
                }
              }            
            }

            list {
              listItem1 {
                content
                title
              }
              listItem2 {
                content
                title
              }
              listItem3 {
                content
                title
              },
              listCta {
                ctaLink
                ctaText
                showCta
              }
            }

          }

          lpSection2{
            bgColor
            contentType
            isActive
            headline {
              headlineText
              headlineAlignment
            }
            icons {
              icon1 {
                link
                title
                icon {
                  sourceUrl
                }    
              }
              icon2 {
                link
                title
                icon {
                  sourceUrl
                }
              }
              icon3 {
                link
                title
                icon {
                  sourceUrl
                }
              }
              icon4 {
                link
                title
                icon {
                  sourceUrl
                }
              }
              icon5 {
                link
                title
                icon {
                  sourceUrl
                }
              }
              icon6 {
                link
                title
                icon {
                  sourceUrl
                }
              }
              icon7 {
                link
                title
                icon {
                  sourceUrl
                }
              }
              icon8 {
                link
                title
                icon {
                  sourceUrl
                }
              }
              icon9 {
                link
                title
                icon {
                  sourceUrl
                }
              }
              icon10 {
                link
                title
                icon {
                  sourceUrl
                }
              }            
            }

            list {
              listItem1 {
                content
                title
              }
              listItem2 {
                content
                title
              }
              listItem3 {
                content
                title
              },
              listCta {
                ctaLink
                ctaText
                showCta
              }
            }

          }
        }        
      }
    }
  }
`