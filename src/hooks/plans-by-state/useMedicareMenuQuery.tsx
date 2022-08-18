import {graphql, useStaticQuery} from "gatsby";

export const useMedicareMenuQuery = () => {
    const data = useStaticQuery(graphql`
        query medicareQuery {
          medicare: allWpPlansByState(
                filter: {pageData: {medicare: {isActive: {eq: true}}}}    
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