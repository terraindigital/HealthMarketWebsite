import styled from "@emotion/styled"

export const Nav = styled.nav`
  background-color: var(--color-primary);
  display: block;
  left: 0px;
  min-width: 100%;
  min-width: 100vw;
  opacity: 0;
  overflow-y: scroll;
  padding: 14rem 3.4rem 3.4rem;
  position: fixed;
  top: -9999px;
  transition: opacity 0.22s linear;
  z-index: -5;

  &.active {
    bottom: 0;
    opacity: 1;
    top: 0px;
  }

  @media only screen and (max-width: 620px) {
    padding: 8.9rem 2.1rem 2.1rem;
  }
`

export const Menu = styled.ul`
  list-style-type: none;
  margin: 0;
  text-align: center;

  &.submenu {
    .item a {
      font-family: var(--font-body);
      font-size: 2.4rem;
      font-weight: bold;

      @media only screen and (max-width: 620px) {
        font-size: 1.6rem;
      }
    }
  }
`

export const MenuItem = styled.li`
  margin: 0;
  padding: 0.8rem 1.3rem;

  a {
    color: var(--color-light);
    font-family: var(--font-heading);
    font-size: 4.4rem;
    font-weight: bold;
    text-decoration: none;
  }

  &.has-submenu > a {
    position: relative;
  }

  &.has-submenu > a:after {
    border-right: 2px solid var(--color-light);
    border-top: 2px solid var(--color-light);
    content: '';
    height: 14px;
    position: absolute;
    right: -4rem;
    top: 50%;
    transform: rotateZ(135deg) translate(-50%, 0);
    transition: transform 0.2s linear;
    width: 14px;
  }

  & > .submenu {
    height: 0;
    opacity: 0;
    position: relative;
    top: -9999px;
    transition: opacity 0.24s linear;
  }

  &.is-open > a:after {
    transform: rotateZ(-45deg) translate(10%, 40%);
  }

  &.is-open > .submenu {
    height: 100%;
    opacity: 1;
    top: 0;
  }

  @media only screen and (max-width: 620px) {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    
    a {
      font-size: 3.2rem;
      line-height: 100%;
    }
  }
`
