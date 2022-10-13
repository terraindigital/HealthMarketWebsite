const React = require("react");
const ReactDOM = require("react-dom");
const createCache = require("@emotion/cache");
const { CacheProvider } = require('@emotion/react')
const {
    createHistory,
    LocationProvider
} = require("@reach/router")

module.exports = (App) => {
    let history = createHistory(window)
    const cache = createCache({ key: "healthmarkets" })
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(React.createElement(LocationProvider, {
        history,
        children:  React.createElement(
            CacheProvider,
            { value: cache, children: React.createElement(App, {}) }
        )
    }))
}
