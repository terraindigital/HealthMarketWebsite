import React, {FC, ReactNode} from 'react';
import {Global} from "@emotion/react";
import {GlobalStyles, Wrapper} from "./styles";

interface Props {
    children: ReactNode
}

const Layout: FC<Props> = ({children}) => {
    return (
        <Wrapper>
            <Global styles={GlobalStyles}/>
            {children}
        </Wrapper>
    )
};

export default Layout;
