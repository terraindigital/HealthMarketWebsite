import React, { FC } from "react";
import { StaticImage } from "gatsby-plugin-image";

// Styles
import { Wrapper } from "./styles"

interface Props {
  count: number
}

const Stars: FC<Props> = ({ count }) => {
  const displayStars = (num) => {
    const row = []
    for (var i=0; i < num; i++) {
      row.push(
        <StaticImage
          src="../../../images/star.png"
          placeholder="BLURRED"
          width={34}
          height={34}
          alt="review star"/>
      )
    }
    return row
  }

  return (
    <Wrapper>
      {displayStars(count)}
    </Wrapper>
  )
}

export default Stars