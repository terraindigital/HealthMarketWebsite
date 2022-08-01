import { useStaticQuery, graphql } from "gatsby";

export const useHealthPageQuery = () => {
  const data = useStaticQuery(graphql`
    query HealthQuery {
      page: wpPage(databaseId: {eq: 1130}) {
        id
        featuredImage {
          node {
            sourceUrl
          }
        }
        pageHeroHeadlines {
          headline
          subheadline
        }
        healthPageCustomFields {
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
          healthPlans {
            healthPlan1 {
              icon {
                sourceUrl
              }
              title
            }
            healthPlan2 {
              icon {
                sourceUrl
              }
              title
            }
            healthPlan3 {
              icon {
                sourceUrl
              }
              title
            }
            healthPlan4 {
              icon {
                sourceUrl
              }
              title
            }
            healthPlan5 {
              icon {
                sourceUrl
              }
              title
            }
            healthPlan6 {
              icon {
                sourceUrl
              }
              title
            }
            healthPlan7 {
              icon {
                sourceUrl
              }
              title
            }
            healthPlan8 {
              icon {
                sourceUrl
              }
              title
            }
            healthPlan9 {
              icon {
                sourceUrl
              }
              title
            }
            healthPlan10 {
              icon {
                sourceUrl
              }
              title
            }
          }
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
        }
      }
    }
  `)

  return data
}