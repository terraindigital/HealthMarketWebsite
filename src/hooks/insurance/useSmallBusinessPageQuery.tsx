import { useStaticQuery, graphql } from "gatsby";

export const useSmallBusinessPageQuery = () => {
  const data = useStaticQuery(graphql`
    query SBPageQuery {
      page: wpGastbyPage(databaseId: {eq: 1431}) {
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
          gpSmallBusinessContent {
            gpSbEntryCards {
              gpSbEntryCard1 {
                icon {
                  sourceUrl
                }
                content
              }
              gpSbEntryCard2 {
                icon {
                  sourceUrl
                }
                content
              }
              gpSbEntryCard3 {
                icon {
                  sourceUrl
                }
                content
              }
              gpSbEntryCardsTitle
            }
            gpSbMutedSection {
              image {
                sourceUrl
              }
              title
              content
            }
            gpSbStoryCta {
              image {
                sourceUrl
              }
              title
              quote
              author
              link
              linkText
            }
            gpSbShopCta {
              gpSbShopCtaHeadline
              gpSbShopCtaSubheadline
              gpSbShopCtaIcon {
                sourceUrl
              }
              gpSbShopCtaExcerpt
            }
            gpSbResources {
              gpSbResource1 {
                image {
                  sourceUrl
                }
                title
                content
                url
              }
              gpSbResource2 {
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