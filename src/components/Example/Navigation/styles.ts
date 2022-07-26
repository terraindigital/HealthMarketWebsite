import {css} from "@emotion/react"
import styled from "@emotion/styled"

export const Nav = styled.nav`
  background-color: var(--color-primary);
  display: block;
  left: 0px;
  min-width: 100%;
  min-width: 100vw;
  opacity: 0;
  padding: 8.9rem 3.4rem 3.4rem;
  position: fixed;
  top: -9999px;
  transition: opacity 0.22s linear;
  z-index: -5;

  &.active {
    bottom: 0;
    opacity: 1;
    top: 0px;
  }
`

export const Menu = styled.ul`
  list-style-type: none;
  margin: 0;
  text-align: center;

  &.submenu {
    .item a {
      font-family: 'Open Sans';
      font-size: 2.4rem;
      font-weight: bold;
    }
  }
`

export const MenuItem = styled.li`
  margin: 0;
  padding: 0.8rem 1.3rem;

  a {
    color: var(--color-light);
    font-family: 'Playfair Display';
    font-size: 4.4rem;
    font-weight: bold;
    text-decoration: none;
  }
`
