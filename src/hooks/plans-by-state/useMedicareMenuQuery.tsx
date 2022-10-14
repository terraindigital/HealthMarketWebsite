import {graphql, useStaticQuery} from "gatsby";

export const useMedicareMenuQuery = () => {
    const data = useStaticQuery(graphql`
        query medicareQuery {
            wpcontent {
                allPlansByState(first: 100, where: {status: PUBLISH}) {
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
