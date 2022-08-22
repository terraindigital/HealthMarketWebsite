import { useStaticQuery, graphql } from "gatsby";

export const useWellnessPageQuery = () => {
  const data = useStaticQuery(graphql`
    query WellnessQuery {
      page: wpGastbyPage(databaseId: {eq: 1571}) {
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
          gpWellnessContent {
            gpWellnessMainContent
            gpWellnessResources {
              gpWellnessResource1 {
                image {
                  sourceUrl
                }
                title
                content
                url
              }
              gpWellnessResource2 {
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
        disclaimers {
          disclaimer
        }
      }
    }
  `)

  return data
}