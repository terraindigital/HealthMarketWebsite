import { useStaticQuery, graphql } from "gatsby";

export const useFooterProductMenuQuery = () => {
  const data = useStaticQuery(graphql`
    query productMenuQuery {
      productMenu: wpMenu(databaseId: {eq: 83}) {
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