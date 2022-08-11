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
        }
      }
    }
  `)

  return data
}