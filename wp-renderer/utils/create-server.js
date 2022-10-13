const React = require("react");
const preRender = require("./pre-render");
const { CacheProvider } = require('@emotion/react')
const { ServerLocation } = require("@reach/router")

module.exports = (App) => () => {

    const inline = (cache) => React.createElement(
        ServerLocation
        , {
            url: "",
            children: React.createElement(
                CacheProvider,
                {
                    value: cache,
                    children: React.createElement(App, {})
                }
            )
        }
    )

    return preRender(inline)
}
