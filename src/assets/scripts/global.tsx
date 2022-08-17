export const changeTextSize = (el) => {
  const html = document.getElementsByTagName('html')[0]
  const textSize = el.target.classList[0]
  const fontSize = parseFloat(window.getComputedStyle(html, null).fontSize)
  if (textSize === "increase") {
    html.style.fontSize = (fontSize + 1) + "px"
  } else if (textSize === "decrease") {
    html.style.fontSize = (fontSize - 1) + "px"
  }
}

export const toggleMobileSearch = () => {
  const searchBox = document.querySelector('.search-box-mobile')
  const header = document.querySelector('.site-header')
  if (!searchBox || !header) return
  searchBox.classList.toggle('active')
  header.classList.toggle('search-active')
  document.body.classList.toggle('search-active')
  document.documentElement.classList.toggle('search-active')
}

export const toggleSearch = () => {
  const searchBtn = document.querySelector('.search-button')
  const searchBox = document.querySelector('.search-box-wrap')
  const header = document.querySelector('.site-header')
  if (!searchBtn || !searchBox || !header) return
  searchBtn.classList.toggle('search-active')
  searchBox.classList.toggle('active')
}

export const toggleNav = () => {
  const navBtn = document.querySelector('button.menu-button')
  const navMenu = document.querySelector('nav.menu.wrapper')
  const header = document.querySelector('.site-header')
  if (!navBtn || !navMenu || !header) return
  navBtn.classList.toggle('nav-active')
  navMenu.classList.toggle('active')
  header.classList.toggle('nav-active')
  document.body.classList.toggle('nav-active')
  document.documentElement.classList.toggle('nav-active')
}