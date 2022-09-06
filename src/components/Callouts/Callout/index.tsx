import React, {FC, ReactNode} from 'react';

// Styles
import {
  Wrapper,
  Heading,
  Number,
  Tagline,
  Bottom,
  Body,
  Title,
  Description,
  Disclaimer
} from "./styles"

interface Props {
  number: String,
  tagline: String,
  title: String,
  description: String,
  disclaimer: ReactNode
}

const Callout: FC<Props> = ({ number, tagline, title, description, disclaimer }) => {

  return (
    <Wrapper>
      <Heading>
        <Number>{number}</Number>
        <Tagline>{tagline}</Tagline>
      </Heading>
      <Bottom>
        <Body>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Body>
        <Disclaimer dangerouslySetInnerHTML={{ __html: disclaimer }} />
      </Bottom>
    </Wrapper>
  );
}

export default Callout;