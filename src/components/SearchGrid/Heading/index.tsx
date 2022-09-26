import React from 'react'
import { Container, Text } from "./styles";

interface HeadingProps {
    children: string
}

const Heading = ({ children }: HeadingProps) => {

    return (
        <Container>
            <Text>{children}</Text>
        </Container>
    )
}

export default Heading
