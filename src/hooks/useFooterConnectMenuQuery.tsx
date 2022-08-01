import { useStaticQuery, graphql } from "gatsby";

export const useFooterConnectMenuQuery = () => {
  const data = useStaticQuery(graphql`
    query connectMenu {
      connectMenu: wpMenu(databaseId: {eq: 84}) {
        menuItems {
          nodes {
            id
            label
            url
          }
        }
      }
    }
  `)

  return data
}