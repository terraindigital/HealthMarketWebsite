import React, { FC } from "react";

// Styles
import { Wrapper, Textarea } from "./styles"

interface Props {
  id: String,
  name: String,
  placeholder: String,
  required?: boolean
}

const TextArea: FC<Props> = ({ id, name, placeholder, required=false }) => {
  return (
    <Wrapper>
      <Textarea id={id} name={name} placeholder={placeholder} required={required} />
    </Wrapper>
  )
}

export default TextArea