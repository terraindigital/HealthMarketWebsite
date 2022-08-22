import { useStaticQuery, graphql } from "gatsby";

export const useFooterGetCounselMenuQuery = () => {
  const data = useStaticQuery(graphql`
    query counselQuery {
      counselMenu: wpMenu(databaseId: {eq: 85}) {
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