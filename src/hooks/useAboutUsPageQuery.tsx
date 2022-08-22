import { useStaticQuery, graphql } from "gatsby";

export const useAboutUsPageQuery = () => {
  const data = useStaticQuery(graphql`
    query AboutUsQuery {
      page: wpGastbyPage(databaseId: {eq: 1578}) {
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
          gpAboutContent
        }
        disclaimers {
          disclaimer
        }
      }
    }
  `)

  return data
}