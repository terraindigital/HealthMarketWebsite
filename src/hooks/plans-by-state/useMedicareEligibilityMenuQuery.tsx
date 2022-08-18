import {graphql, useStaticQuery} from "gatsby";

export const useMedicareEligibilityMenuQuery = () => {
    const data = useStaticQuery(graphql`
        query medicareEligibilityMenuQuery {
          medicareEligibility: allWpMedicareEligibility {
            nodes {
              title
              slug
            }
          }
        }
      `)
    return data
}