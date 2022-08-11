import { useStaticQuery, graphql } from "gatsby";

export const useHowWeHelpPageQuery = () => {
  const data = useStaticQuery(graphql`
    query hwhPageQuery {
      hwh: wpPage(databaseId: {eq: 395}) {
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
        howWeHelpCustomFields {
          hwhListItem1 {
            heading
            content
          }
          hwhListItem2 {
            heading
            content
          }
          hwhListItem3 {
            heading
            content
          }
          block1 {
            image {
              sourceUrl
            }
            heading
            content
            button {
              text
              link
            }
          }
          block2 {
            image {
              sourceUrl
            }
            heading
            content
            button {
              text
              link
            }
          }
          block3 {
            image {
              sourceUrl
            }
            heading
            content
            button {
              text
              link
            }
          }
          accordionField1 {
            heading
            content
          }
          accordionField2 {
            heading
            content
          }
          accordionField3 {
            heading
            content
          }
          accordionField4 {
            heading
            content
          }
          iconCard1 {
            icon {
              sourceUrl
            }
            heading
            content
          }
          iconCard2 {
            icon {
              sourceUrl
            }
            heading
            content
          }
          iconCard3 {
            icon {
              sourceUrl
            }
            heading
            content
          }
        }
      }
    }
  `)
  
  return data
}