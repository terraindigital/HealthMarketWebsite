import React, { FC } from "react"

// Styles
import { Wrapper, Label, InputField, HeroInputField } from "./styles"

// Components

// Images
import Pin from "../../../images/location.png"

interface Props {
  id?: String,
  hero?: boolean,
  centered?: boolean,
  type: String,
  name: String,
  pattern?: String,
  placeholder: String,
  required?: boolean,
  value?: String
}

const Input: FC<Props> = ({
  id,
  hero,
  centered,
  type,
  name,
  pattern = null,
  placeholder,
  required,
  value = null
}) => {
  placeholder = (required) ? placeholder + `*` : placeholder;

  if (!hero) {
    return (
      <InputField id={id} type={type} name={name} pattern={pattern} placeholder={placeholder} required={required} value={value} />
    )
  } else {
    return (
      <Wrapper className={(centered) ? `centered` : ``}>
        <Label for={name}>
          <img src={Pin} alt="map pin icon" />
        </Label>
        <HeroInputField icon={Pin} id={id} type={type} name={name} placeholder={placeholder} value={value} />
      </Wrapper>
    )
  }
}

export default Input