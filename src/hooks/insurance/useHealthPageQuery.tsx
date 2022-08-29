import { useStaticQuery, graphql } from "gatsby";

export const useHealthPageQuery = () => {
  const data = useStaticQuery(graphql`
    query HealthQuery {
      page: wpPage(databaseId: {eq: 1130}) {
        id
        metadataCustomFields {
          metaTitle
          metaDescription
          metaKeywords
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
                title
                content
              }
              healthCard2 {
                icon {
                  sourceUrl
                }
                title
                content
              }
              healthCard3 {
                icon {
                  sourceUrl
                }
                title
                content
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
                title
                link
              }
              healthPlan2 {
                icon {
                  sourceUrl
                }
                title
                link
              }
              healthPlan3 {
                icon {
                  sourceUrl
                }
                title
                link
              }
              healthPlan4 {
                icon {
                  sourceUrl
                }
                title
                link
              }
              healthPlan5 {
                icon {
                  sourceUrl
                }
                title
                link
              }
              healthPlan6 {
                icon {
                  sourceUrl
                }
                title
                link
              }
              healthPlan7 {
                icon {
                  sourceUrl
                }
                title
                link
              }
              healthPlan8 {
                icon {
                  sourceUrl
                }
                title
                link
              }
              healthPlan9 {
                icon {
                  sourceUrl
                }
                title
                link
              }
              healthPlan10 {
                icon {
                  sourceUrl
                }
                title
                link
              }
              healthPlan11 {
                icon {
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
      }
    }
  `)

  return data
}