import React, {FC, ReactNode} from 'react';
import {Global} from "@emotion/react";
import {GlobalStyles, Wrapper} from "./styles";

// Components
import Header from "../Example/Header"
import Footer from "../Example/Footer"

interface Props {
    children: ReactNode
}

const Layout: FC<Props> = ({children}) => {
    return (
        <Wrapper>
            <Global styles={GlobalStyles}/>
            <Header />
            {children}
            <Footer />
        </Wrapper>
    )
};

export default Layout;
