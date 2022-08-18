import {graphql, useStaticQuery} from "gatsby";

export const useHealthInsuranceMenuQuery = () => {
    const data = useStaticQuery(graphql`
        query healthInsuranceQuery {
            healthInsurance: allWpPlansByState(
                filter: {pageData: {healthInsurance: {isActive: {eq: true}}}}    
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
