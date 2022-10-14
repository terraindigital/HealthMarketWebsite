import React from 'react'

const Script = ({ body, id }: { body: string, id: string }) => {

    React.useEffect(() => {
        if (!document.querySelector(`script[data-id="${id}"]`)) {
            const scriptElm = document.createElement('script');
            scriptElm.setAttribute("data-id", id)
            const inlineCode = document.createTextNode(body);
            scriptElm.appendChild(inlineCode);
            document.body.appendChild(scriptElm)
        }
    }, [])

    return null
}

export default Script
