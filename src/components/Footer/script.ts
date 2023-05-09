import React from 'react'
import {useLocation} from "@reach/router";

const Script = ({ body, src, id }: { body?: string, src?: string, id: string }) => {

    const {pathname} = useLocation()

    React.useEffect(() => {
        if (!document.querySelector(`script[data-id="${id}"]`)) {
            const scriptElm = document.createElement('script');
            scriptElm.setAttribute("data-id", id)
            if (src) {
                scriptElm.src = src
            }
            if (body) {
                const inlineCode = document.createTextNode(body);
                scriptElm.appendChild(inlineCode);
            }
            document.body.appendChild(scriptElm)
        }
        return () => {
            const instance = document.querySelector(`script[data-id="${id}"]`);
            if(instance) {
                instance.remove()
            }
        }
    }, [pathname])

    return null
}

export default Script
