import { useStaticQuery, graphql } from "gatsby";

export const useContactPageQuery = () => {
  const data = useStaticQuery(graphql`
    query contactQuery {
      page: wpPage(databaseId: {eq: 12}) {
        id
        metadataCustomFields {
          metaTitle
          metaDescription
          metaKeywords
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