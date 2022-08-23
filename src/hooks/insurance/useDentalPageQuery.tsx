import { useStaticQuery, graphql } from "gatsby";

export const useDentalPageQuery = () => {
  const data = useStaticQuery(graphql`
    query DentalQuery {
      page: wpPage(databaseId: {eq: 1210}) {
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
        dentalPageCustomFields {
          dentalSection1 {
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