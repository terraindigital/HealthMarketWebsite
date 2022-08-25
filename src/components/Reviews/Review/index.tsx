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
        </Figcaption>
      </Figure>
      <div style={{ marginBottom: "2.1rem" }}>
        <a href="https://www.healthmarkets.com/">See all reviews</a>
      </div>
    </Wrapper>
  )
}

export default Review