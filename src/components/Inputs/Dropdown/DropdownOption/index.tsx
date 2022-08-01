import React, { FC, ReactNode } from "react"

// Styles
import { Option } from "./styles"

// Components

// Images


interface Props {
  selected?: boolean,
  value: string,
  text: string
}

const DropdownOption: FC<Props> = ({ selected, value, text }) => {
  return (
    <Option value={value} selected={selected}>{text}</Option>
  )
}

export default DropdownOption