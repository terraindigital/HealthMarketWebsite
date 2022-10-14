import * as React from "react";
import { renderToString } from "react-dom/server";
const createEmotionServer = require('@emotion/server/create-instance')
const createEmotionCache = require('../../wp-renderer/utils/create-emotion-cache')

export const replaceRenderer = ({
                                    replaceBodyHTMLString,
                                    bodyComponent,
                                    setHeadComponents,
                                }) => {


    const cache = createEmotionCache("healthmarkets22")
    const { extractCriticalToChunks, constructStyleTagsFromChunks } = createEmotionServer.default(cache)

    const html = renderToString(React.createElement(
        CacheProvider,
        {
            value: cache,
            children: bodyComponent
        }
    ))

    const chunks = extractCriticalToChunks(html)
    const styles = constructStyleTagsFromChunks(chunks)


    setHeadComponents([
        <style
            key="emotion"
            data-emotion={`css ${ids.join(" ")}`}
            dangerouslySetInnerHTML={{
                __html: styles,
            }}
        />,
    ]);
    replaceBodyHTMLString(html);
};
