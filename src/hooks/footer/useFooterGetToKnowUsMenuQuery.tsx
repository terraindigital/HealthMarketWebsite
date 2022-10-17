import { useStaticQuery, graphql } from "gatsby";

export const useFooterGetToKnowUsMenuQuery = () => {
  const data = useStaticQuery(graphql`
    query getToKnowUsMenuQuery {
      wpcontent {
        menu(id: "86", idType: DATABASE_ID) {
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
