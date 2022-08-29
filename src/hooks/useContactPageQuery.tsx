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
      }
    }
  `)

  return data
}