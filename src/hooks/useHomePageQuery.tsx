import { useStaticQuery, graphql } from "gatsby";

export const useHomePageQuery = () => {
  const data = useStaticQuery(graphql`
    query homepageQuery {
      home: wpPage(isFrontPage: {eq: true}) {
        id
        homePageCustomFields {
          wwo {
            hpTile1 {
              image {
                sourceUrl
              }
              title
              link
            }
            hpTile2 {
              image {
                sourceUrl
              }
              title
              link
            }
            hpTile3 {
              image {
                sourceUrl
              }
              title
              link
            }
            hpTile4 {
              image {
                sourceUrl
              }
              title
              link
            }
            hpTile5 {
              image {
                sourceUrl
              }
              title
              link
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
