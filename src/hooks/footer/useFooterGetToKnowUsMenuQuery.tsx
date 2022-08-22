import { useStaticQuery, graphql } from "gatsby";

export const useFooterGetToKnowUsMenuQuery = () => {
  const data = useStaticQuery(graphql`
    query getToKnowUsMenuQuery {
      getToKnowUsMenu: wpMenu(databaseId: {eq: 86}) {
        menuItems {
          nodes {
            id
            label
            cssClasses
            url
          }
        }
      }
    }
  `)

  return data
}