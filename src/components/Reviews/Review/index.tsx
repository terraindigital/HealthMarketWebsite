import React, { FC } from 'react';

// Styles
import { Wrapper } from "./styles";

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
      <figure>
        <blockquote>{quote}</blockquote>
        <figcaption>
          <div>{author}</div>
          <Button background="accent" border="accent" color="light">See all reviews</Button>
        </figcaption>
      </figure>
    </Wrapper>
  )
}

export default Review