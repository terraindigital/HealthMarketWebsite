// Library
import React from "react"
import {graphql} from "gatsby";
// Component
import Template, {PageInfo} from "../../../components/pages/plans-by-state/Template";



const StatePage = ({data}: { data: PageInfo }) => {

    return (
        <Template
            data={data}
            pageType="dentalInsurance"
        />
    )
}

export default StatePage

export const pageQuery = graphql`
query($slug: String!)
    {
        page: wpPlansByState(slug
    :
        {
            eq: $slug
        }
    )
        {
            id
            slug
            title
            pageData
            {
                dentalInsurance
                {
                    cityList
                    proof1
                    {
                        content
                        title
                        name
                        location
                    }
                    proof2
                    {
                        content
                        fieldGroupName
                        location
                        name
                        title
                    }
                    proof3
                    {
                        content
                        fieldGroupName
                        location
                        name
                        title
                    }
                    isActive
                    hero
                    {
                        fieldGroupName
                        subtitle
                        title
                        image
                        {
                            mediaItemUrl
                            localFile
                            {
                                childImageSharp
                                {
                                    gatsbyImageData(quality
                                :
                                    100
                                )
                                }
                            }
                        }
                    }
                }
            }
            disclaimers {
                disclaimer
            }
        }
    }
`
