import { useStaticQuery, graphql } from "gatsby";

export const usePlansPageQuery = () => {
  const data = useStaticQuery(graphql`
    query plansLPQuery {
      page: wpPage(databaseId: {eq: 544}) {
        id
        featuredImage {
          node {
            sourceUrl
          }
        }
        pageHeroHeadlines {
          headline
          subheadline
        }
        plansPageCustomFields {
          cards {
            card1 {
              heading
              content
              icon {
                sourceUrl
              }
            }
            card2 {
              heading
              content
              icon {
                sourceUrl
              }
            }
            card3 {
              heading
              content
              icon {
                sourceUrl
              }
            }
          }
          plans {
            plan1 {
              icon {
                sourceUrl
              }
              title
            }
            plan2 {
              icon {
                sourceUrl
              }
              title
            }
            plan3 {
              icon {
                sourceUrl
              }
              title
            }
            plan4 {
              icon {
                sourceUrl
              }
              title
            }
            plan5 {
              icon {
                sourceUrl
              }
              title
            }
            plan6 {
              icon {
                sourceUrl
              }
              title
            }
            plan7 {
              icon {
                sourceUrl
              }
              title
            }
            plan8 {
              icon {
                sourceUrl
              }
              title
            }
            plan9 {
              icon {
                sourceUrl
              }
              title
            }
            plan10 {
              icon {
                sourceUrl
              }
              title
            }
          }
          accordions {
            accordion1 {
              heading
              content
            }
            accordion2 {
              heading
              content
            }
            accordion3 {
              heading
              content
            }
          }
          relatedContent {
            relatedContent1 {
              image {
                sourceUrl
              }
              heading
              content
            }
            relatedContent2 {
              image {
                sourceUrl
              }
              heading
              content
            }
            relatedContent3 {
              image {
                sourceUrl
              }
              heading
              content
            }
          }
        }
      }
    }
  `)

  return data
}