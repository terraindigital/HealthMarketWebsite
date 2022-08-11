import { useStaticQuery, graphql } from "gatsby";

export const useHomePageQuery = () => {
  const data = useStaticQuery(graphql`
    query homepageQuery {
      home: wpPage(isFrontPage: {eq: true}) {
        id
        homePageCustomFields {
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
        pageHeroFields {
          heroImage {
            sourceUrl
          }
          mobileHeroImage {
            sourceUrl
          }
          headline
          subheadline
        }
      }
    }
  `)

  return data
}