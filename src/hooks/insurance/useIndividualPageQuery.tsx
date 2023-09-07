import { useStaticQuery, graphql } from "gatsby";
export const useIndividualPageQuery = () => {
  const data = useStaticQuery(graphql`
    query IndividualQuery {
      page: wpPage(databaseId: {eq: 9583}) {
        id
        slug
        seo {
          fullHead
          title
          metaDesc
        }
        pageHeroFields {
          headline
          subheadline
          heroImage {
            sourceUrl
          }
          mobileHeroImage {
            sourceUrl
          }
          heroButtons {
            heroButton1 {
              text
            }
            heroButton2 {
              text
            }
            heroButton3 {
              text
            }
          }
          callUs
        }
        individualPageCustomField {
          individualSection1 {
            sectionHeading
            color
            text
          }
          individualSection2 {
            title
            color
            statement
            bronzePlan {
              planName
              dotColor
              highlightedText
              normalText
            }
            silverPlan {
              planName
              dotColor
              highlightedText
              normalText
            }
            goldPlan {
              planName
              dotColor
              highlightedText
              normalText
            }
            platinumPlan {
              planName
              dotColor
              highlightedText
              normalText
            }
            catastrophicCoverage {
              planName
              dotColor
              highlightedText
              normalText
            }
            statement2
            cta {
              text
              link
            }
          }
            individualSection3 {
                color
                heading
                subHeading
                cta {
                    text
                    link
                }
            }
          individualSection4 {
            heading
            color
            individualRelatedContent {
              individualRelatedContent1 {
                image {
                  sourceUrl
                }
                heading
                content
                link
              }
              individualRelatedContent2 {
                image {
                  sourceUrl
                }
                heading
                content
                link
              }
              individualRelatedContent3 {
                image {
                  sourceUrl
                }
                heading
                content
                link
              }
            }
            cta {
              link
              text
            }
          }
        }
        disclaimers {
          disclaimer
        }
        calloutsCustomField {
          isActive
          callouts {
            callout1 {
              number
              tagline
              title
              description
              disclaimer
            }
            callout2 {
              number
              tagline
              title
              description
              disclaimer
            }
            callout3 {
              number
              tagline
              title
              description
              disclaimer
            }
          }
        }
      }
    }
  `);
  return data;
};