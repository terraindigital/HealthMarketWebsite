import {useStaticQuery, graphql} from "gatsby";

export const useLifeInsuranceMenuQuery = () => {
    const data = useStaticQuery(graphql`
        query lifeInsuranceQuery {
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
