import {graphql, useStaticQuery} from "gatsby";

export const useHealthInsuranceMenuQuery = () => {
    const data = useStaticQuery(graphql`
        query healthInsuranceQuery {
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
