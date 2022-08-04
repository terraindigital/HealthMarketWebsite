import { useStaticQuery, graphql } from "gatsby";

export const useLifeInsurancePageQuery = () => {
  const data = useStaticQuery(graphql`
    query LifePageQuery {
      page: wpGastbyPage(databaseId: {eq: 1565}) {
        id
        gatsbyCustomFields {
          gpSeoTitle
          gpHero {
            gpHeroFocusImage {
              sourceUrl
            }
            gpHeroBgImage {
              sourceUrl
            }
            gpHeroHeadline
            gpHeroSubheadline
            gpHeroCta
          }
          gpBanner {
            gpBannerColor
            gpBannerIcon {
              sourceUrl
            }
            gpBannerHeadline
            gpBannerSubheadline
          }
          gpLifeInsuranceContent {
            gpLifeEntryContent {
              image {
                sourceUrl
              }
              content
            }
            gpLifeTypes {
              gpLifeType1 {
                icon {
                  sourceUrl
                }
                title
                excerpt
                url
              }
              gpLifeType2 {
                icon {
                  sourceUrl
                }
                title
                excerpt
                url
              }
              gpLifeType3 {
                icon {
                  sourceUrl
                }
                title
                excerpt
                url
              }
              gpLifeType4 {
                icon {
                  sourceUrl
                }
                title
                excerpt
                url
              }
              excerpt
            }
            gpLifeCtaBanner {
              ctaBannerIcon {
                sourceUrl
              }
              ctaBannerHeadline
              ctaBannerSubheadline
              cta1 {
                icon {
                  sourceUrl
                }
                excerpt
                link
                linkText
              }
              cta2 {
                icon {
                  sourceUrl
                }
                excerpt
                link
                linkText
              }
            }
            gpLifeResources {
              gpLifeResource1 {
                image {
                  sourceUrl
                }
                title
                content
                url
              }
              gpLifeResource2 {
                image {
                  sourceUrl
                }
                title
                content
                url
              }
            }
          }
        }
      }
    }
  `)

  return data
}