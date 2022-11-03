

exports.createPages = async ({ graphql, actions }) => {
    const { createRedirect } = actions

    const agentData = await graphql(
     `   {
            allAgents {
                nodes {
                    slug
                }
            }
        }`
    )

    agentData.data.allAgents.nodes.forEach(({ slug }) => {
        createRedirect({ fromPath: `/${slug}`, toPath: `https://www.healthmarkets.com/local-health-insurance-agent/${slug}`, isPermanent: true, statusCode: 200, redirectInBrowser: true })
    })
}
