import React, { FC } from 'react';
import { Link } from 'gatsby';

// Styles
import { Wrapper } from "./styles";

// Components
import Stars from "./Stars";

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
          <Link to="/#reviews">See all reviews</Link>
        </figcaption>
      </figure>
    </Wrapper>
  )
}

export default Review