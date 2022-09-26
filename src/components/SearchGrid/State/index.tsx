import React from 'react'
import { Container, StateImage, TextContainer, StateText, StateTitle } from "./styles";
import {GatsbyImage} from "gatsby-plugin-image";

interface StateProps {
    state: string
    text: string
    image: any
}

const State = ({ state, text, image }: StateProps) => {

    return (
        <Container>
            <StateImage>
                <GatsbyImage alt={state} image={image} />
            </StateImage>
            <TextContainer>
                <StateTitle>{state}</StateTitle>
                <StateText>{text}</StateText>
            </TextContainer>
        </Container>
    )
}

export default State
