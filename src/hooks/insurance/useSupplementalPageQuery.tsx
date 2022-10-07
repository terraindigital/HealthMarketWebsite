import { useStaticQuery, graphql } from "gatsby";

export const useSupplementalPageQuery = () => {
  const data = useStaticQuery(graphql`
    query SuppQuery {
      page: wpPage(databaseId: {eq: 1254}) {
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
          callUs
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
                mobileIcon {
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
                mobileIcon {
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
                mobileIcon {
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
                mobileIcon {
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
                mobileIcon {
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
                mobileIcon {
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
                mobileIcon {
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
                mobileIcon {
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
                mobileIcon {
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
                mobileIcon {
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
                mobileIcon {
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