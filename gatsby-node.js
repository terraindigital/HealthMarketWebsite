const articleRedirects = require("./redirects/article-redirects.json")

exports.createPages = async ({ graphql, actions }) => {
    const { createRedirect } = actions

    const agentData = await graphql(
     `   {
            allAgents {
                nodes {
                    slug
                    permalink
                }
            }
        }`
    )

    agentData.data.allAgents.nodes.forEach(({ slug, permalink }) => {
        createRedirect({ fromPath: `/${slug}`, toPath: `https://www.healthmarkets.com/local-health-insurance-agent/${slug.replace(/\./g, '')}`, isPermanent: true, statusCode: 301, redirectInBrowser: true })
        createRedirect({ fromPath: `/${slug.replace(/\./g, '')}`, toPath: `https://www.healthmarkets.com/local-health-insurance-agent/${slug.replace(/\./g, '')}`, isPermanent: true, statusCode: 301, redirectInBrowser: true })


        if (permalink) {
            const stripped = permalink.replace("https://www.healthmarkets.com", "").replace("http://www.healthmarkets.com", "").replace("https://healthmarkets.com", "").replace("http://healthmarkets.com", "").replace("/local-health-insurance-agent", "")
            if (stripped) {
                createRedirect({ fromPath: stripped, toPath: `https://www.healthmarkets.com/local-health-insurance-agent/${slug.replace(/\./g, '')}`, isPermanent: true, statusCode: 301, redirectInBrowser: true })
            }
        }
    })

    articleRedirects.forEach(({ source, destination, status }) => {
        createRedirect({ fromPath: source, toPath: destination, statusCode: status, redirectInBrowser: true })
    })
}
