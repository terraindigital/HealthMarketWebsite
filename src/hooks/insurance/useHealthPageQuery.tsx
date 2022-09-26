import { useStaticQuery, graphql } from "gatsby";

export const useHealthPageQuery = () => {
  const data = useStaticQuery(graphql`
    query HealthQuery {
      page: wpPage(databaseId: {eq: 1130}) {
        id
        slug
        seo {
          fullHead
          title
          metaDesc
        }
        pageHeroFields {
          headline
          subheadline
          heroImage {
            sourceUrl
          }
          mobileHeroImage {
            sourceUrl
          }
          heroButtons {
            heroButton1 {
              text
            }
            heroButton2 {
              text
            }
            heroButton3 {
              text
            }
          }
        }
        healthPageCustomFields {
          healthSection1 {
            color
            heading
            healthCards {
              healthCard1 {
                icon {
                  sourceUrl
                }
                mobile {
                  sourceUrl
                }
                title
                content
                link
              }
              healthCard2 {
                icon {
                  sourceUrl
                }
                mobile {
                  sourceUrl
                }
                title
                content
                link
              }
              healthCard3 {
                icon {
                  sourceUrl
                }
                mobile {
                  sourceUrl
                }
                title
                content
                link
              }
            }
          }
          healthSection2 {
            color
            heading
            healthAccordions {
              healthAccordion1 {
                title
                content
              }
              healthAccordion2 {
                title
                content
              }
              healthAccordion3 {
                title
                content
              }
            }
            cta {
              link
              text
            }
          }
          healthSection3 {
            color
            heading
            healthPlans {
              healthPlan1 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                title
                link
              }
              healthPlan2 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                title
                link
              }
              healthPlan3 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                title
                link
              }
              healthPlan4 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                title
                link
              }
              healthPlan5 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                title
                link
              }
              healthPlan6 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                title
                link
              }
              healthPlan7 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                title
                link
              }
              healthPlan8 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                title
                link
              }
              healthPlan9 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                title
                link
              }
              healthPlan10 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                title
                link
              }
              healthPlan11 {
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
          }
          healthSection4 {
            color
            heading
            healthRelatedContent {
              healthRelatedContent1 {
                image {
                  sourceUrl
                }
                heading
                content
                link
              }
              healthRelatedContent2 {
                image {
                  sourceUrl
                }
                heading
                content
                link
              }
              healthRelatedContent3 {
                image {
                  sourceUrl
                }
                heading
                content
                link
              }
            }
            cta {
              link
              text
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
  `)

  return data
}