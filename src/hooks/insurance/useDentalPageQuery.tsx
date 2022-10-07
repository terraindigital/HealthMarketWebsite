import { useStaticQuery, graphql } from "gatsby";

export const useDentalPageQuery = () => {
  const data = useStaticQuery(graphql`
    query DentalQuery {
      page: wpPage(databaseId: {eq: 1210}) {
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
                link
              }
              dentalRelatedContent2 {
                image {
                  sourceUrl
                }
                heading
                content
                link
              }
              dentalRelatedContent3 {
                image {
                  sourceUrl
                }
                heading
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