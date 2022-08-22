import React, {FC, ReactNode} from 'react';
import {Global} from "@emotion/react";
import {GlobalStyles, Wrapper} from "./styles";

// Components
import Header from "../Header"
import Footer from "../Footer"

interface Props {
    pageClass?: String,
    staticHeader?: boolean,
    headerColor?: String,
    children: ReactNode
}

const Layout: FC<Props> = ({ pageClass, staticHeader, headerColor, children }) => {
    return (
        <Wrapper className={pageClass}>
            <Global styles={GlobalStyles}/>
            <Header staticHeader={staticHeader} color={headerColor}/>
            {children}
        </Wrapper>
    )
};

export default Layout;
