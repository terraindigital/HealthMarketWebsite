import React, {FC, ReactNode} from 'react';
import {Global} from "@emotion/react";
import {GlobalStyles, Wrapper} from "./styles";

// Components
import Header from "../Header"

export interface LayoutProps {
    headerData?: any
    pageClass?: String,
    staticHeader?: boolean,
    headerColor?: String,
    children: ReactNode
}

const LayoutComponent: FC<LayoutProps> = ({ headerData, pageClass, staticHeader, headerColor, children }) => {
    return (
        <Wrapper className={pageClass}>
            <Global styles={GlobalStyles}/>
            <Header headerData={headerData} staticHeader={staticHeader} color={headerColor}/>
            {children}
        </Wrapper>
    )
};

export default LayoutComponent;
