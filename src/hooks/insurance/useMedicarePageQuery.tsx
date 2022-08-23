import { useStaticQuery, graphql } from "gatsby";

export const useMedicarePageQuery = () => {
  const data = useStaticQuery(graphql`
    query MedicareQuery {
      page: wpPage(databaseId: {eq: 1340}) {
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
        medicarePageCustomFields {
          medicareSection1 {
            heading
            medicareCards {
              medicareCard1 {
                icon {
                  sourceUrl
                }
                link
                title
                content
              }
              medicareCard2 {
                icon {
                  sourceUrl
                }
                link
                title
                content
              }
              medicareCard3 {
                icon {
                  sourceUrl
                }
                link
                title
                content
              }
            }
            disclaimer
          }
          medicareSection2 {
            heading
            medicareAccordions {
              medicareAccordion1 {
                heading
                content
              }
              medicareAccordion2 {
                heading
                content
              }
              medicareAccordion3 {
                heading
                content
              }
              medicareAccordion4 {
                heading
                content
              }
              medicareAccordion5 {
                heading
                content
              }
              medicareAccordion6 {
                heading
                content
              }
            }
          }
          medicareSection3 {
            medicareCtaStyle
            medicareColumns {
              medicareColumn1 {
                heading
                button {
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
              medicareColumn2 {
                heading
                button {
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
        disclaimers {
          disclaimer
        }
      }
    }
  `)
  
  return data
}