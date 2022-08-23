import { useStaticQuery, graphql } from "gatsby";

export const useHomePageQuery = () => {
  const data = useStaticQuery(graphql`
    query homepageQuery {
      home: wpPage(isFrontPage: {eq: true}) {
        id
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
        homePageCustomFields {
          homeSection1 {
            heading
            subheading
            tiles {
              tile1 {
                image {
                  sourceUrl
                }
                title
                link
              }
              tile2 {
                image {
                  sourceUrl
                }
                title
                link
              }
              tile3 {
                image {
                  sourceUrl
                }
                title
                link
              }
              tile4 {
                image {
                  sourceUrl
                }
                title
                link
              }
              tile5 {
                image {
                  sourceUrl
                }
                title
                link
              }
            }
          }
          homeSection2 {
            columns {
              column1 {
                image {
                  sourceUrl
                }
              }
              column2 {
                heading
              }
              column3 {
                button {
                  text
                  link
                }
              }
            }
          }
          homeSection3 {
            heading
            homeListItems {
              homeListItem1 {
                heading
                content
              }
              homeListItem2 {
                heading
                content
              }
              homeListItem3 {
                heading
                content
              }
            }
            sectionCta {
              link
              text
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
