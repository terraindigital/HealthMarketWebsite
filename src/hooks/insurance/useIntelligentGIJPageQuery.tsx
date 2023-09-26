import { useStaticQuery, graphql } from "gatsby";

export const useIntelligentGIJPageQuery = () => {
    const data = useStaticQuery(graphql`
    query IntelligentGIJQuery {
      page: wpPage(databaseId: { eq: 10482 }) {
        id
        slug
        seo {
          fullHead
          title
          metaDesc
        }
        pageHeroFields {
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
          headline
          subheadline
        }
        intelligentInsuranceGIJPageCustomField {
          intelligentGijSection1 {
            heading
            color
            intelligentSectionSubheading
            options {
              intelligentOption1 {
                title
                description
                link {
                    text
                    link
                }
              }
              intelligentOption2 {
                title
                description
                link {
                    text
                    link
                }
              }
              intelligentOption3 {
                title
                description
                link {
                    text
                    link
                }
              }
              intelligentOption4 {
                title
                description
                link {
                    text
                    link
                }
              }
              intelligentOption5 {
                title
                description
                link {
                    text
                    link
                }
              }
            }
          }
          intelligentGijSection2 {
            color
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
          intelligentGijSection3 {
            sectionHeading
            sectionColor
            intelligentCards {
              intelligentCard1 {
                icon {
                    sourceUrl
                }
                mobileIcon {
                    sourceUrl
                }
                underlineColor
                title
                content
                underlineColorTwo
                link {
                    text
                    link
                }
              }
              intelligentCard2 {
                icon {
                    sourceUrl
                }
                mobileIcon {
                    sourceUrl
                }
                underlineColor
                title
                content
                underlineColorTwo
                link {
                    text
                    link
                }
              }
              intelligentCard3 {
                icon {
                    sourceUrl
                }
                mobileIcon {
                    sourceUrl
                }
                underlineColor
                title
                content
                underlineColorTwo
                link {
                    text
                    link
                }
              }
            }
          }
          intelligentGijSection4 {
            color
            sectionHeading
            intelligentListItems {
              intelligentListItem1 {
                heading
                content
              }
              intelligentListItem2 {
                heading
                content
              }
              intelligentListItem3 {
                heading
                content
              }
            }
            sectionCta {
              link
              text
            }
          }
          intelligentGijSection5 {
            sectionHeading
            color
            intelligentRelatedContent {
              intelligentRelatedContent1 {
                image {
                    sourceUrl
                }
                heading
                content
                link
              }
              intelligentRelatedContent2 {
                image {
                    sourceUrl
                }
                heading
                content
                link
              }
              intelligentRelatedContent3 {
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