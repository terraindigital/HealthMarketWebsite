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
              link
            }
            suppPlan2 {
              icon {
                sourceUrl
              }
              title
              content
              link
            }
            suppPlan3 {
              icon {
                sourceUrl
              }
              title
              content
              link
            }
            suppPlan4 {
              icon {
                sourceUrl
              }
              title
              content
              link
            }
            suppPlan5 {
              icon {
                sourceUrl
              }
              title
              content
              link
            }
            suppPlan6 {
              icon {
                sourceUrl
              }
              title
              content
              link
            }
            suppPlan7 {
              icon {
                sourceUrl
              }
              title
              content
              link
            }
            suppPlan8 {
              icon {
                sourceUrl
              }
              title
              content
              link
            }
            suppPlan9 {
              icon {
                sourceUrl
              }
              title
              content
              link
            }
            suppPlan10 {
              icon {
                sourceUrl
              }
              title
              content
              link
            }
            suppPlan11 {
              icon {
                sourceUrl
              }
              title
              content
              link
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