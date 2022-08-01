import { useStaticQuery, graphql } from "gatsby";

export const useMedicarePageQuery = () => {
  const data = useStaticQuery(graphql`
    query MedicareQuery {
      page: wpPage(databaseId: {eq: 1340}) {
        id
        featuredImage {
          node {
            sourceUrl
          }
        }
        pageHeroHeadlines {
          headline
          subheadline
        }
        medicarePageCustomFields {
          medicareCards {
            medicareCard1 {
              icon {
                sourceUrl
              }
              title
              content
            }
            medicareCard2 {
              icon {
                sourceUrl
              }
              title
              content
            }
            medicareCard3 {
              icon {
                sourceUrl
              }
              title
              content
            }
          }
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
          }
        }
      }
    }
  `)
  
  return data
}