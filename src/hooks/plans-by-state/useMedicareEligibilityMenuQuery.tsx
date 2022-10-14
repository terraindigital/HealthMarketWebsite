import {graphql, useStaticQuery} from "gatsby";

export const useMedicareEligibilityMenuQuery = () => {
    const data = useStaticQuery(graphql`
        query medicareEligibilityMenuQuery {
            wpcontent {
                allMedicareEligibility(first: 100) {
                    nodes {
                        title
                        slug
                    }
                }
            }
        }
    `)
    return data
}
