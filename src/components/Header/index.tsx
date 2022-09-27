import React, { FC } from "react"
import { Link } from "gatsby"

// Styles
import { Wrapper, Logo } from "./styles"

// Components
import HeaderRight from "./HeaderRight"

// Images
import headerLogo from "../../static/images/HMIA_logo2.png"

interface Props {
  staticHeader?: boolean,
  color?: String
}

const Header: FC<Props> = ({staticHeader=false, color}) => {
  const headerColor = (color) ? color : "dark";
  const staticClass = (staticHeader) ? "is-static" : "";

  const stickyHeader = () => {
    const header = document.getElementsByClassName('site-header')[0]
    const offset = header.offsetHeight / 2

    if (window.pageYOffset > offset) {
      header.classList.add('is-stuck')
    } else {
      header.classList.remove('is-stuck')
    }
  }
  
  if (typeof window !== "undefined") {
    window.onscroll = () => { stickyHeader() }
  }

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