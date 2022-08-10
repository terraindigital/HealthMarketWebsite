import React, { FC } from "react"

// Styles
import { Wrapper, Logo } from "./styles"

// Components
import HeaderRight from "./HeaderRight"

// Images
import headerLogo from "../../images/HMIA_logo2.png"
import { Link } from "gatsby"

interface Props {
  staticHeader?: boolean,
  color?: String
}

const Header: FC<Props> = ({staticHeader=false, color}) => {
  const headerColor = (color) ? color : "dark";
  const staticClass = (staticHeader) ? "static" : "";

  const stickyHeader = () => {
    const header = document.getElementsByClassName('site-header')[0]
    const offset = header.offsetHeight / 2

    if (window.pageYOffset > offset) {
      header.classList.add('stuck')
    } else {
      header.classList.remove('stuck')
    }
  }
  
  window.onscroll = () => { stickyHeader() }

  return (
    <Wrapper className={`site-header ` + headerColor + ` ` + staticClass}>
      <Link to="/">
        <Logo className="site-logo" src={headerLogo} />
      </Link>
      <HeaderRight />
    </Wrapper>
  )
}

export default Header