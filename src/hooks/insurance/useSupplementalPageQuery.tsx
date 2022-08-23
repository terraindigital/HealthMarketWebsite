import { useStaticQuery, graphql } from "gatsby";

export const useSupplementalPageQuery = () => {
  const data = useStaticQuery(graphql`
    query SuppQuery {
      page: wpPage(databaseId: {eq: 1254}) {
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
        suppPageCustomFields {
          suppSection1 {
            heading
            bestPrice {
              active
              image {
                sourceUrl
              }
              mobileImage {
                sourceUrl
              }
            }
            suppPlans {
              suppPlan1 {
                icon {
                  sourceUrl
                }
                link
                title
                content
              }
              suppPlan2 {
                icon {
                  sourceUrl
                }
                link
                title
                content
              }
              suppPlan3 {
                icon {
                  sourceUrl
                }
                link
                title
                content
              }
              suppPlan4 {
                icon {
                  sourceUrl
                }
                link
                title
                content
              }
              suppPlan5 {
                icon {
                  sourceUrl
                }
                link
                title
                content
              }
              suppPlan6 {
                icon {
                  sourceUrl
                }
                link
                title
                content
              }
              suppPlan7 {
                icon {
                  sourceUrl
                }
                link
                title
                content
              }
              suppPlan8 {
                icon {
                  sourceUrl
                }
                link
                title
                content
              }
              suppPlan9 {
                icon {
                  sourceUrl
                }
                link
                title
                content
              }
              suppPlan10 {
                icon {
                  sourceUrl
                }
                link
                title
                content
              }
              suppPlan11 {
                icon {
                  sourceUrl
                }
                link
                title
                content
              }
            }
          }
          suppSection2 {
            heading
            suppRelatedContent {
              relatedContent1 {
                image {
                  sourceUrl
                }
                title
                content
              }
              relatedContent2 {
                image {
                  sourceUrl
                }
                title
                content
              }
              relatedContent3 {
                image {
                  sourceUrl
                }
                title
                content
              }
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