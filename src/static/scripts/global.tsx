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

export const toggleSearch = () => {
  const searchBox = document.querySelector('.search-box')
  const header = document.querySelector('.site-header')
  if (!searchBox || !header) return
  searchBox.classList.toggle('active')
  header.classList.toggle('active')
  document.documentElement.classList.toggle('takeover-active')
}

export const toggleNav = (isActive) => {
  const navBtn = document.querySelector('button.menu-button')
  const navMenu = document.querySelector('nav.menu.wrapper')
  const header = document.querySelector('.site-header')

  // if we don't have a menu button, menu, or header, exit
  if (!navBtn || !navMenu || !header) return

  // if we're not open, remove the active classes
  if (!isActive) {
    navBtn.classList.remove('nav-active')
    navMenu.classList.remove('active')
    header.classList.remove('takeover-active')
    document.documentElement.classList.remove('takeover-active')
  } else {
    navBtn.classList.add('nav-active')
    navMenu.classList.add('active')
    header.classList.add('takeover-active')
    document.documentElement.classList.add('takeover-active')
  }
}

export const toggleSubnav = (el) => {
  const parent = el.target.parentElement
  parent.classList.toggle('is-open');
}

export const toggleForm = (el) => {
  const parent = el.target.parentElement
  // if not already active...
  if (el.target.classList.contains('accented')) return
  // toggle first button state
  parent.firstChild.classList.toggle('accented')
  if (parent.firstChild.classList.contains('accented')) {
    parent.firstChild.querySelector('input[type=radio]').checked = true
    parent.firstChild.closest('form').action = "/plans/" 
  }
  // toggle second button state
  parent.firstChild.nextSibling.classList.toggle('accented')
  if (parent.firstChild.nextSibling.classList.contains('accented')) {
    parent.firstChild.nextSibling.querySelector('input[type=radio]').checked = true
    parent.firstChild.nextSibling.closest('form').action = "/local-health-insurance-agent/search/" 
  }
}

export const fadeIn = (selector) => {
  const targets = document.querySelectorAll(selector)

  Object.keys(targets).map((i) => {
    window.addEventListener("scroll", () => {
      const scrollTop = window.pageYOffset
      const targetTop = targets[i].offsetTop

      if ((scrollTop + window.innerHeight) >= targetTop) {
        targets[i].classList.add('animate')
      }
    })
  });
}