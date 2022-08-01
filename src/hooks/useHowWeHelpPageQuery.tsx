import { useStaticQuery, graphql } from "gatsby";

export const useHowWeHelpPageQuery = () => {
  const data = useStaticQuery(graphql`
    query hwhPageQuery {
      hwh: wpPage(databaseId: {eq: 395}) {
        id
        featuredImage {
          node {
            sourceUrl
          }
        }
        pageHeroHeadlines {
          headline
          subheadline
        }
        howWeHelpCustomFields {
          listItem1 {
            heading
            content
          }
          listItem2 {
            heading
            content
          }
          listItem3 {
            heading
            content
          }
          listItem4 {
            heading
            content
          }
          listItem5 {
            heading
            content
          }
          listItem6 {
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