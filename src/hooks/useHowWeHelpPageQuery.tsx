import { useStaticQuery, graphql } from "gatsby";

export const useHowWeHelpPageQuery = () => {
  const data = useStaticQuery(graphql`
    query hwhPageQuery {
      hwh: wpPage(databaseId: {eq: 395}) {
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
        howWeHelpCustomFields {
          hwhSection1 {
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
            heading
            hwhCards {
              hwhCard1 {
                icon {
                  sourceUrl
                }
                heading
                content
              }
              hwhCard2 {
                icon {
                  sourceUrl
                }
                heading
                content
              }
              hwhCard3 {
                icon {
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