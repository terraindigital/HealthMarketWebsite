import { useStaticQuery, graphql } from "gatsby";

export const useResourceCenterPageQuery = () => {
  const data = useStaticQuery(graphql`
    query resourceCenterLPQuery {
      page: wpPage(databaseId: {eq: 985}) {
        id
        pageHeroFields {
          headline
          subheadline
          heroImage {
            sourceUrl
          }
          mobileHeroImage {
            sourceUrl
          }
        }
        resourceCenterPageCustomFields {
          featuredArticle {
            image {
              sourceUrl
            }
            title
            content
          }
          additionalArticles {
            article1 {
              image {
                sourceUrl
              }
              title
              content
            }
            article2 {
              image {
                sourceUrl
              }
              title
              content
            }
            article3 {
              image {
                sourceUrl
              }
              title
              content
            }
            article4 {
              image {
                sourceUrl
              }
              title
              content
            }
            article5 {
              image {
                sourceUrl
              }
              title
              content
            }
            article6 {
              image {
                sourceUrl
              }
              title
              content
            }
          }
          rcPlans {
            rcPlan1 {
              icon {
                sourceUrl
              }
              title
            }
            rcPlan2 {
              icon {
                sourceUrl
              }
              title
            }
            rcPlan3 {
              icon {
                sourceUrl
              }
              title
            }
            rcPlan4 {
              icon {
                sourceUrl
              }
              title
            }
            rcPlan5 {
              icon {
                sourceUrl
              }
              title
            }
            rcPlan6 {
              icon {
                sourceUrl
              }
              title
            }
            rcPlan7 {
              icon {
                sourceUrl
              }
              title
            }
            rcPlan8 {
              icon {
                sourceUrl
              }
              title
            }
            rcPlan9 {
              icon {
                sourceUrl
              }
              title
            }
            rcPlan10 {
              icon {
                sourceUrl
              }
              title
            }
          }
        }
      }
    }
  `)

  return data
}