import { useStaticQuery, graphql } from "gatsby";

export const useFooterProductMenuQuery = () => {
  const data = useStaticQuery(graphql`
    query productMenuQuery {
      wpcontent {
        menu(id: "83", idType: DATABASE_ID) {
          menuItems {
            nodes {
              id
              label
              parentId
              url
              cssClasses
            }
          }
        }
      }
    }
  `)

  return data
}
