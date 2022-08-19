import {useStaticQuery, graphql} from "gatsby";

export const useLifeInsuranceMenuQuery = () => {
    const data = useStaticQuery(graphql`
        query lifeInsuranceQuery {
          lifeInsurance: allWpPlansByState(
                filter: {pageData: {lifeInsurance: {isActive: {eq: true}}}}    
                sort: {fields: slug}
            ) {
            nodes {
              title
              slug
            }
          }
        }
      `)
    return data
}
