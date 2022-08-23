import { useStaticQuery, graphql } from "gatsby";

export const useHealthPageQuery = () => {
  const data = useStaticQuery(graphql`
    query HealthQuery {
      page: wpPage(databaseId: {eq: 1130}) {
        id
        pageHeroFields {
          headline
          subheadline
          heroImage {
            sourceUrl
          }
          mobileHeroImage {
            sourceUrl
          }
        }
        healthPageCustomFields {
          healthSection1 {
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
            heading
            healthRelatedContent {
              healthRelatedContent1 {
                image {
                  sourceUrl
                }
                heading
                content
              }
              healthRelatedContent2 {
                image {
                  sourceUrl
                }
                heading
                content
              }
              healthRelatedContent3 {
                image {
                  sourceUrl
                }
                heading
                content
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