import React, {FC} from "react";
import LayoutComponent, {LayoutProps} from "./component";

const WordpressLayout: FC<Omit<LayoutProps, "headerData">> = (props) => {

    console.log("DATA", process?.env?.HEADER_DATA)

    return (
        <>
            <div className="static-sp" />
            <LayoutComponent {...props} headerData={(process?.env?.HEADER_DATA || {
                menuItems: {
                    nodes: []
                }
            })} />
        </>
    )
};

export default WordpressLayout
