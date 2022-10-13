import React from 'react';
import ReactDOM from 'react-dom';
import {createHistory, LocationProvider} from "@reach/router";
import createCache from "@emotion/cache";
import App from "./app";
import {CacheProvider} from "@emotion/react";

window.process = {
}
window.process.env = {
}
window.process.env.HEADER_DATA = {
    menuItems: {
        nodes: []
    }
}

window.process.env.GATSBY_SITE_BASE_URL = "https://dev.healthmarkets.com"

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
