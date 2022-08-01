import React, { FC } from 'react';

// Styles
import {
  Wrapper,
  Figure,
  Blockquote,
  Figcaption
} from "./styles";

// Components
import Stars from "../Stars";
import Button from "../../Buttons/Button";

interface Props {
  stars: number,
  quote: String,
  author: String
}

const Review: FC<Props> = ({ stars, quote, author }) => {
  return (
    <Wrapper className="review">
      <Stars count={stars} />
      <Figure>
        <Blockquote>{quote}</Blockquote>
        <Figcaption>
          <div>{author}</div>
          <Button background="accent" border="accent" color="light">See all reviews</Button>
        </Figcaption>
      </Figure>
    </Wrapper>
  )
}

export default Review