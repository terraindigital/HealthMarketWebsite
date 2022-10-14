import { useStaticQuery, graphql } from "gatsby";

export const useMainMenuQuery = () => {
  const data = useStaticQuery(graphql`
    query mainNavQuery {
      wpcontent {
        menu(id: "2", idType: DATABASE_ID) {
          menuItems(first: 200) {
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
    }
  `)

  return data
}
