import { useStaticQuery, graphql } from "gatsby";

export const useMainMenuQuery = () => {
  const data = useStaticQuery(graphql`
    query mainNavQuery {
      menu: wpMenu(databaseId: {eq: 2}) {
        menuItems {
          nodes {
            id
            label
            parentId
            url
            childItems {
              nodes {
                id
                label
                url
              }
            }
          }
        }
      }
    }
  `)

  return data
}