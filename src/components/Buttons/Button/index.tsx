import React, {FC, ReactNode} from 'react';

// Styles
import { Btn } from "./styles"

interface Props {
  background: String,
  border: String,
  color: String,
  children: ReactNode,
  style?: Object
}

const Button: FC<Props> = ({ style, background, border, color, children }) => (
  <Btn style={style} background={background} border={border} color={color}>{children}</Btn>
)

export default Button