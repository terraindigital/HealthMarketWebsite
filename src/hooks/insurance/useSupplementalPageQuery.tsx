import { useStaticQuery, graphql } from "gatsby";

export const useSupplementalPageQuery = () => {
  const data = useStaticQuery(graphql`
    query SuppQuery {
      page: wpPage(databaseId: {eq: 1254}) {
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
        suppPageCustomFields {
          suppPlans {
            suppPlan1 {
              icon {
                sourceUrl
              }
              title
              content
            }
            suppPlan2 {
              icon {
                sourceUrl
              }
              title
              content
            }
            suppPlan3 {
              icon {
                sourceUrl
              }
              title
              content
            }
            suppPlan4 {
              icon {
                sourceUrl
              }
              title
              content
            }
            suppPlan5 {
              icon {
                sourceUrl
              }
              title
              content
            }
            suppPlan6 {
              icon {
                sourceUrl
              }
              title
              content
            }
            suppPlan7 {
              icon {
                sourceUrl
              }
              title
              content
            }
            suppPlan8 {
              icon {
                sourceUrl
              }
              title
              content
            }
            suppPlan9 {
              icon {
                sourceUrl
              }
              title
              content
            }
            suppPlan10 {
              icon {
                sourceUrl
              }
              title
              content
            }
          }
          suppRelatedContent {
            suppRelatedContent1 {
              image {
                sourceUrl
              }
              title
              content
            }
            suppRelatedContent2 {
              image {
                sourceUrl
              }
              title
              content
            }
            suppRelatedContent3 {
              image {
                sourceUrl
              }
              title
              content
            }
          }
        }
      }
    }

  `)

  return data
}