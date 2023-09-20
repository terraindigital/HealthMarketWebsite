import { useStaticQuery, graphql } from "gatsby";

export const useSeniorPageQuery = () => {
  const data = useStaticQuery(graphql`
    query SeniorPageQuery {
      page: wpPage(databaseId: {eq: 10026}) {
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
        seniorPageCustomFields {
          senSection1 {
            color
            heading
            subheading
            senPlans {
              senPlan1 {
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
              senPlan2 {
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
              senPlan3 {
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
              senPlan4 {
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
              senPlan5 {
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
              senPlan6 {
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
              senPlan7 {
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
              senPlan8 {
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
              senPlan9 {
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
              senPlan10 {
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
              senPlan11 {
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
          senSection2 {
            color
            cta {
              ctaStyle
              ctaBgColor
              ctaColumns {
                column1 {
                  contentType
                  heading
                }
                column2 {
                  contentType
                  button {
                    buttonStyle
                    button1 {
                      text
                      link
                    }
                    button2 {
                      text
                      link
                    }
                  }
                }
              }
            }
          }
          senSection3 {
            color
            heading
            senRelatedContent {
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
              text
              link
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