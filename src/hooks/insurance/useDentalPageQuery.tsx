import { useStaticQuery, graphql } from "gatsby";

export const useDentalPageQuery = () => {
  const data = useStaticQuery(graphql`
    query DentalQuery {
      page: wpPage(databaseId: {eq: 1210}) {
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
        dentalPageCustomFields {
          dentalSection1 {
            color
            heading
            dentalAccordions {
              dentalAccordion1 {
                heading
                content
              }
              dentalAccordion2 {
                heading
                content
              }
              dentalAccordion3 {
                heading
                content
              }
            }
            cta {
              link
              text
            }
          }
          dentalSection2 {
            color
            heading
            dentalRelatedContent {
              dentalRelatedContent1 {
                image {
                  sourceUrl
                }
                heading
                content
              }
              dentalRelatedContent2 {
                image {
                  sourceUrl
                }
                heading
                content
              }
              dentalRelatedContent3 {
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