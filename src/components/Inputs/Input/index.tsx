import React, { FC } from "react"

// Styles
import { Wrapper, Label, InputField, HeroInputField } from "./styles"

// Components

// Images
import Pin from "../../../static/images/location.png"

interface Props extends Omit<React.HTMLProps<HTMLInputElement>, "as"> {
  id?: string,
  hero?: boolean,
  centered?: boolean,
  classes?: string,
  type: string,
  name: string,
  pattern?: string,
  placeholder: string,
  required?: boolean,
  value?: string
}

const Input: FC<Props> = ({
  id,
  hero,
  centered,
  classes,
  type,
  name,
  pattern = null,
  placeholder,
  required,
  value = null,
    ...props
}) => {
  placeholder = (required) ? placeholder + `*` : placeholder;

  if (!hero) {
    return (
      <InputField className={classes} id={id} type={type} name={name} pattern={pattern ? pattern : undefined} placeholder={placeholder} required={required} value={value ? value : undefined} {...props} />
    )
  } else {
    return (
      <Wrapper className={(centered) ? `centered` : ``}>
        <Label htmlFor={name}>
          <img src={Pin} alt="map pin icon" />
        </Label>
        <HeroInputField id={id} type={type} name={name} placeholder={placeholder} value={value ? value : undefined} {...props}  />
      </Wrapper>
    )
  }
}

export default Input
