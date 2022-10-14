const createCache = require("@emotion/cache");
const createExtraScopePlugin = require("../utils/stylus-plugin");
const convertUnitsPlugin = require("../utils/stylus-plugin-convert");
const revertUnitsPlugin = require("../utils/stylus-plugin-revert");
module.exports = (uniqueId) => createCache.default({
    key: "healthmarkets",
    stylisPlugins: [
        convertUnitsPlugin(),
        revertUnitsPlugin(),
        createExtraScopePlugin(`#${uniqueId}`),
    ]
})
