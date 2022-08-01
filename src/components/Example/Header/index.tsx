import React from "react"

// Styles
import { Wrapper, Logo } from "./styles"

// Components
import HeaderRight from "./HeaderRight"

// Images
import headerLogo from "../../../images/HMIA_logo2.png"

const Header = () => {
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
    <Wrapper className="site-header">
      <Logo src={headerLogo} />
      <HeaderRight />
    </Wrapper>
  )
}

export default Header