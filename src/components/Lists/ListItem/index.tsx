import React, { FC, ReactNode, useEffect } from "react"

// Styles
import {
  Wrapper,
  Check,
  Heading
} from "./styles"

// Scripts
import { fadeIn } from "../../../static/scripts/global"

// Components

// Images
import checkImg from "../../../static/images/list-check.png"

interface Props {
  heading?: string,
  children?: ReactNode,
}

const ListItem: FC<Props> = ({ heading, children }) => {
  useEffect(() => {
    fadeIn('.list-item')
  }, []);

  return (
    <Wrapper className="list-item">
      <Check>
        <img src={checkImg} alt="list checkmark" />
      </Check>
      <Heading dangerouslySetInnerHTML={{ __html: heading || '' }} />
      {children}
    </Wrapper>
  )
}

export default ListItem
