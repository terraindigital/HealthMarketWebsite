import { useStaticQuery, graphql } from "gatsby";

export const useContentPageQuery = () => {
  const data = useStaticQuery(graphql`
    query contentLPQuery {
      page: wpPage(databaseId: {eq: 1067}) {
        id
        contentPageCustomFields {
          contentArticles {
            contentArticle1 {
              image {
                sourceUrl
              }
              title
              content
            }
            contentArticle2 {
              image {
                sourceUrl
              }
              title
              content
            }
            contentArticle3 {
              image {
                sourceUrl
              }
              title
              content
            }
            contentArticle4 {
              image {
                sourceUrl
              }
              title
              content
            }
            contentArticle5 {
              image {
                sourceUrl
              }
              title
              content
            }
            contentArticle6 {
              image {
                sourceUrl
              }
              title
              content
            }
          }
        }
        disclaimers {
          disclaimer
        }
      }
    }
  `)

  return data
}