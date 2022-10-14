import * as React from "react";
import { CacheProvider } from "@emotion/react";
const createEmotionCache = require('../../wp-renderer/utils/create-emotion-cache')
const cache = createEmotionCache("healthmarkets22")
export const wrapRootElement = ({ element }) => (
    <CacheProvider value={cache}>{element}</CacheProvider>
);
