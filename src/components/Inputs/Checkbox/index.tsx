import React, { FC } from "react";

// Styles
import { Wrapper, Input, Label } from "./styles"

interface Props {
  id: String,
  name: String,
  label: String,
  location?: String,
  required?: boolean
}

const Checkbox: FC<Props> = ({ id, name, label, location, required=false }) => {
  return (
    <Wrapper>
      <Input id={id} type="checkbox" name={name} required={required} />
      <Label for={id}>{(id === 'medicare' && location === 'contact') ? label + `*` : label}</Label>
    </Wrapper>
  )
}

export default Checkbox