import React from 'react';

export const onRenderBody = ({ setHeadComponents }) => {
    setHeadComponents([
        React.createElement(
            'script',
            {
                key: 'flicker-fix',
                type: 'application/javascript',
                dangerouslySetInnerHTML: {
                    __html: `
                        (function(g,b,d,f){(function(a,c,d){if(a){var e=b.createElement("style");e.id=c;e.innerHTML=d;a.appendChild(e)}})(b.getElementsByTagName("head")[0],"at-body-style",d);setTimeout(function(){var a=b.getElementsByTagName("head")[0];if(a){var c=b.getElementById("at-body-style");c&&a.removeChild(c)}},f)})(window,document,"body {opacity: 0 !important}",3E3);
                    `,
                },
            },
        ),
    ]);
};
