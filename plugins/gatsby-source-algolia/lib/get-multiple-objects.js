"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const get_algolia_index_1 = __importDefault(require("./get-algolia-index"));
const MAX_CONCURRENCY = 240;
const getMultipleObjects = ({ indexName, limitCount, limitFields = ["*"] }) => __awaiter(void 0, void 0, void 0, function* () {
    const index = (0, get_algolia_index_1.default)(indexName);
    if (limitCount) {
        return index.search("", {
            getRankingInfo: true,
            analytics: false,
            enableABTest: false,
            hitsPerPage: limitCount,
            attributesToRetrieve: limitFields,
            responseFields: ["*"],
            explain: ["*"],
            page: 0,
        });
    }
    let hits = [];
    yield index.browseObjects({
        query: '',
        filters: '',
        hitsPerPage: MAX_CONCURRENCY,
        attributesToRetrieve: limitFields,
        batch: batch => {
            hits = hits.concat(batch);
        }
    });
    return hits;
});
exports.default = getMultipleObjects;
//# sourceMappingURL=get-multiple-objects.js.map