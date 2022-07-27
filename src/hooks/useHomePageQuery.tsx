import { useStaticQuery, graphql } from "gatsby";

export const useHomePageQuery = () => {
  const data = useStaticQuery(graphql`
    query homepageQuery {
      home: wpPage(isFrontPage: {eq: true}) {
        id
        title
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
        homePageCustomFields {
          heroHeadline1
          heroHeadline2
          wwo {
            medicare {
              sourceUrl
            }
            dental {
              sourceUrl
            }
            vision {
              sourceUrl
            }
            health {
              sourceUrl
            }
            supplemental {
              sourceUrl
            }
          }
          listItem1 {
            heading
            content
          }
          listItem2 {
            heading
            content
          }
          listItem3 {
            heading
            content
          }
        }
      }
    }
  `)

  return data
}