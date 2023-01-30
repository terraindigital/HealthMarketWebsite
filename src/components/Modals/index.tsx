import React, { FC, useEffect } from "react"

// Styles
import {
  Wrapper,
  Backdrop,
  Inner,
  Close,
  Content,
  Heading,
  Subheading
} from "./styles"

// Scripts
import { modal } from "../../static/scripts/global"

interface Props {
  classes: String,
  heading: String,
  subheading: String
}

const Modal: FC<Props> = ({ classes, heading, subheading }) => {

  useEffect(() => {
    modal()
  }, []);
  
  return (
    <Wrapper className={ classes + ` is-modal` }>
      <Backdrop className="modal-close" />
      <Inner>
        <Close className="modal-close">&#x2715;</Close>
        <Content>
          <Heading>
            <h3>{ heading }</h3>
          </Heading>
          <Subheading>
            <p>{ subheading }</p>
          </Subheading>
        </Content>
      </Inner>
    </Wrapper>
  )
}

export default Modal
