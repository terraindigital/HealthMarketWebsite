import React, { FC } from "react";

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
        <svg xmlns="http://www.w3.org/2000/svg" width={34} height={34} viewBox="0 0 69 65" className="star" key={"star" + i}>
        <path d="M34.5 0L42.4702 24.5299H68.2625L47.3961 39.6902L55.3664 64.2201L34.5 49.0598L13.6336 64.2201L21.6039 39.6902L0.737495 24.5299H26.5298L34.5 0Z" fill="#69BE28"/>
        </svg>
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