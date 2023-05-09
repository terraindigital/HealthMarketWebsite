import React, {FC, ReactNode, useEffect} from 'react';
import {Global} from "@emotion/react";

// Styles
import {GlobalStyles, Wrapper} from "./styles";
import '../../static/css/typography.css'

// Scripts
import {
    hmAnalytics,
    initLinks
} from '../../static/scripts/global';

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
    useEffect(() => {
        hmAnalytics();
        initLinks();
    }, [])

    return (
        <Wrapper className={`healthmarkets22 ${pageClass ? pageClass : ""} page`}>
            <Global styles={GlobalStyles}/>
            <Header headerData={headerData} staticHeader={staticHeader} color={headerColor} lp={(pageClass === 'aca-insurance-plans')}/>
            {children}
        </Wrapper>
    )
};

export default LayoutComponent;
