import React, { FC, ReactNode } from "react"

// Styles
import { Option } from "./styles"

// Components

// Images


interface Props {
  value: string,
  text: string
}

const DropdownOption: FC<Props> = ({ value, text }) => {
  return (
    <Option value={value}>{text}</Option>
  )
}

export default DropdownOption