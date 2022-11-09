"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const algoliasearch_1 = __importDefault(require("algoliasearch"));
const getAlgoliaIndex = (indexName) => {
    const client = (0, algoliasearch_1.default)(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_BROWSE_OBJECTS_API_KEY);
    return client.initIndex(indexName);
};
exports.default = getAlgoliaIndex;
//# sourceMappingURL=get-algolia-index.js.map