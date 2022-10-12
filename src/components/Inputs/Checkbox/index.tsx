import React, { FC } from "react";

// Styles
import { Wrapper, Input, Label } from "./styles"

interface Props {
  id: String,
  name: String,
  label: String
  required?: boolean
}

const Checkbox: FC<Props> = ({ id, name, label, required=false }) => {
  return (
    <Wrapper>
      <Input id={id} type="checkbox" name={name} required={required} />
      <Label for={id}>{(id === 'medicare') ? label + `*` : label}</Label>
    </Wrapper>
  )
}

export default Checkbox