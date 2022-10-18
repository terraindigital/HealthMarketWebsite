import React, {FC, ReactNode} from 'react';
import {Global} from "@emotion/react";
import {GlobalStyles, Wrapper} from "./styles";
import '../../static/css/typography.css'
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
        <Wrapper className={`healthmarkets22 ${pageClass ? pageClass : ""} page`}>
            <Global styles={GlobalStyles}/>
            <Header headerData={headerData} staticHeader={staticHeader} color={headerColor}/>
            {children}
        </Wrapper>
    )
};

export default LayoutComponent;
