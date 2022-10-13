const React = require("react")
const { renderToString } = require('react-dom/server')
const createEmotionServer = require('@emotion/server/create-instance')
const createCache = require('@emotion/cache')

const preRender = (App) => {

    const key = 'healthmarkets'
    const cache = createCache.default({ key })
    const { extractCriticalToChunks, constructStyleTagsFromChunks } = createEmotionServer.default(cache)

    const html = renderToString(App(cache))

    const chunks = extractCriticalToChunks(html)
    const styles = constructStyleTagsFromChunks(chunks)

    return styles + html
}

module.exports = preRender
