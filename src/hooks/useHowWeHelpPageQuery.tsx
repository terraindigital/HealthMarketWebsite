import { useStaticQuery, graphql } from "gatsby";

export const useHowWeHelpPageQuery = () => {
  const data = useStaticQuery(graphql`
    query hwhPageQuery {
      hwh: wpPage(databaseId: {eq: 395}) {
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
        howWeHelpCustomFields {
          hwhSection1 {
            color
            heading
            hwhListItems {
              hwhListItem1 {
                heading
                content
              }
              hwhListItem2 {
                heading
                content
              }
              hwhListItem3 {
                heading
                content
              }
            }
            cta {
              link
              text
            }
          }
          hwhSection2 {
            color
            hwhBlocks {
              hwhBlock1 {
                image {
                  sourceUrl
                }
                heading
                content
                button {
                  link
                  text
                }
              }
              hwhBlock2 {
                image {
                  sourceUrl
                }
                heading
                content
                button {
                  link
                  text
                }
              }
              hwhBlock3 {
                image {
                  sourceUrl
                }
                heading
                content
                button {
                  link
                  text
                }
              }
            }
          }
          hwhSection3 {
            color
            heading
            hwhAccordions {
              hwhAccordion1 {
                heading
                content
              }
              hwhAccordion2 {
                heading
                content
              }
              hwhAccordion3 {
                heading
                content
              }
              hwhAccordion4 {
                heading
                content
              }
            }
            cta {
              link
              text
            }
          }
          hwhSection4 {
            color
            heading
            subheading
            hwhCards {
              hwhCard1 {
                icon {
                  sourceUrl
                }
                mobile {
                  sourceUrl
                }
                heading
                content
              }
              hwhCard2 {
                icon {
                  sourceUrl
                }
                mobile {
                  sourceUrl
                }
                heading
                content
              }
              hwhCard3 {
                icon {
                  sourceUrl
                }
                mobile {
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