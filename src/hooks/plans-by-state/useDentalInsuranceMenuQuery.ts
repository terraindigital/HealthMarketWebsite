import {graphql, useStaticQuery} from "gatsby";

export const useDentalInsuranceMenuQuery = () => {
    const data = useStaticQuery(graphql`
        query dentalInsuranceQuery {
            dentalInsurance: allWpPlansByState(
                filter: {pageData: {dentalInsurance: {isActive: {eq: true}}}}    
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
