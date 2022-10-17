import {graphql, useStaticQuery} from "gatsby";

export const useDentalInsuranceMenuQuery = () => {
    const data = useStaticQuery(graphql`
        query dentalInsuranceQuery {
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
