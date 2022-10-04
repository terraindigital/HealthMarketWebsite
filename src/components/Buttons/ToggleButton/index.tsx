import React, {FC, ReactNode, useEffect, useState} from 'react';

// Styles
import { Btn } from "./styles"

interface Props {
  className: String,
  callback?: Function,
  children: ReactNode
}

const ToggleButton: FC<Props> = ({ className, callback, children }) => {
  const [isActive, setActive] = useState(true);

  useEffect(() => {
    callback(false)
  }, [callback])

  const toggle = () => {
    setActive((isActive) => !isActive)
    callback(isActive)
  }

  return (
    <Btn className={className} onClick={() => toggle()}>{children}</Btn>
  )
}

export default ToggleButton