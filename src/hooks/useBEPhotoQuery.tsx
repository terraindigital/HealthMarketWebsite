import { useStaticQuery, graphql } from "gatsby";

export const useBEPhotoQuery = () => {
  const data = useStaticQuery(graphql`
    query {
      photos: allWpBrightEdgePhoto {
        nodes {
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  `)

  return data;
}