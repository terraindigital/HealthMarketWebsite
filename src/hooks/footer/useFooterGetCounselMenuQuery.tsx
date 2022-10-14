import { useStaticQuery, graphql } from "gatsby";

export const useFooterGetCounselMenuQuery = () => {
  const data = useStaticQuery(graphql`
    query counselQuery {
      wpcontent {
        menu(id: "85", idType: DATABASE_ID) {
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
