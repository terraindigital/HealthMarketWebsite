import { useStaticQuery, graphql } from "gatsby";

export const useSupplementalPageQuery = () => {
  const data = useStaticQuery(graphql`
    query SuppQuery {
      page: wpPage(databaseId: {eq: 1254}) {
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
        suppPageCustomFields {
          suppSection1 {
            color
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
            color
            heading
            suppRelatedContent {
              relatedContent1 {
                image {
                  sourceUrl
                }
                title
                content
                link
              }
              relatedContent2 {
                image {
                  sourceUrl
                }
                title
                content
                link
              }
              relatedContent3 {
                image {
                  sourceUrl
                }
                title
                content
                link
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