import {useMainMenuQuery} from "../../hooks/useMainMenuQuery";
import React, {FC} from "react";
import LayoutComponent, {LayoutProps} from "./component";

const Layout: FC<Omit<LayoutProps, "headerData">> = (props) => {
    const { wpcontent: { menu } } = useMainMenuQuery();
    return (
       <LayoutComponent {...props} headerData={menu} />
    )
};

export default Layout
