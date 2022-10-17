import { useStaticQuery, graphql } from "gatsby";

export const useFooterConnectMenuQuery = () => {
  const data = useStaticQuery(graphql`
    query connectMenu {
      wpcontent {
        menu(id: "84", idType: DATABASE_ID) {
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
