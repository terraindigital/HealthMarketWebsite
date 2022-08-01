import React, {FC, ReactNode} from 'react';
import {Global} from "@emotion/react";
import {GlobalStyles, Wrapper} from "./styles";

// Components
import Header from "../Header"
import Footer from "../Footer"

interface Props {
    staticHeader?: boolean,
    headerColor?: String,
    children: ReactNode
}

const Layout: FC<Props> = ({ staticHeader, headerColor, children }) => {
    return (
        <Wrapper>
            <Global styles={GlobalStyles}/>
            <Header staticHeader={staticHeader} color={headerColor}/>
            {children}
            <Footer />
        </Wrapper>
    )
};

export default Layout;
