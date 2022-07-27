import { useStaticQuery, graphql } from "gatsby";

export const useHomePageQuery = () => {
  const data = useStaticQuery(graphql`
    query homepageQuery {
      home: wpPage(isFrontPage: {eq: true}) {
        id
        title
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
        homePageCustomFields {
          heroHeadline1
          heroHeadline2
          wwoDentalImage {
            sourceUrl
          }
          wwoHealthImage {
            sourceUrl
          }
          wwoMedicareImage {
            sourceUrl
          }
          wwoVisionImage {
            sourceUrl
          }
        }
      }
    }
  `)

  return data
}