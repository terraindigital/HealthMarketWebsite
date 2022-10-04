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

export const isSearchBoxOpen = () => {
  const searchBox = document.querySelector('.search-box')
  const header = document.querySelector('.site-header')
  if (!searchBox || !header) return
  return (searchBox.classList.contains('active') && header.classList.contains('active') && document.documentElement.classList.contains('takeover-active'))
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
  // set the urls to change the form action to
  const plans = "https://shop.healthmarkets.com/en/about-me/plans-found";
  const agents = "/local-health-insurance-agent/search/";
  // set the parent form
  const parent = el.target.parentElement
  // if not already active...
  if (el.target.classList.contains('accented')) return
  // toggle first button state
  parent.firstChild.classList.toggle('accented')
  if (parent.firstChild.classList.contains('accented')) {
    parent.firstChild.querySelector('input[type=radio]').checked = true
    parent.firstChild.closest('form').action = plans
    document.querySelector('input#zipCode')?.setAttribute('name', 'zip')

    const healthShortTermEnrollOnline = document.createElement('input')
    healthShortTermEnrollOnline.type = "hidden"
    healthShortTermEnrollOnline.name = "healthShortTermEnrollOnline"
    healthShortTermEnrollOnline.value = "yes"

    const medicareMAenrollonline = document.createElement('input')
    medicareMAenrollonline.type = "hidden"
    medicareMAenrollonline.name = "medicareMAenrollonline"
    medicareMAenrollonline.value = "yes"

    const medicarePDPenrollonline = document.createElement('input')
    medicarePDPenrollonline.type = "hidden"
    medicarePDPenrollonline.name = "medicarePDPenrollonline"
    medicarePDPenrollonline.value = "yes"

    const medicareSuppenrollonline = document.createElement('input')
    medicareSuppenrollonline.type = "hidden"
    medicareSuppenrollonline.name = "medicareSuppenrollonline"
    medicareSuppenrollonline.value = "yes"

    const visionenrollonline = document.createElement('input')
    visionenrollonline.type = "hidden"
    visionenrollonline.name = "visionenrollonline"
    visionenrollonline.value = "yes"

    const dentalenrollonline = document.createElement('input')
    dentalenrollonline.type = "hidden"
    dentalenrollonline.name = "dentalenrollonline"
    dentalenrollonline.value = "yes"

    document.querySelector('#zipCodeField').append(
      healthShortTermEnrollOnline,
      medicareMAenrollonline,
      medicarePDPenrollonline,
      medicareSuppenrollonline,
      visionenrollonline,
      dentalenrollonline
    )
  }
  // toggle second button state
  parent.firstChild.nextSibling.classList.toggle('accented')
  if (parent.firstChild.nextSibling.classList.contains('accented')) {
    parent.firstChild.nextSibling.querySelector('input[type=radio]').checked = true
    parent.firstChild.nextSibling.closest('form').action = agents
    document.querySelector('input#zipCode')?.setAttribute('name', 'query')

    const healthShortTermEnrollOnline = document.querySelector('input[name=healthShortTermEnrollOnline]')
    const medicareMAenrollonline = document.querySelector('input[name=medicareMAenrollonline]')
    const medicarePDPenrollonline = document.querySelector('input[name=medicarePDPenrollonline]')
    const medicareSuppenrollonline = document.querySelector('input[name=medicareSuppenrollonline]')
    const visionenrollonline = document.querySelector('input[name=visionenrollonline]')
    const dentalenrollonline = document.querySelector('input[name=dentalenrollonline]')

    document.querySelector('#zipCodeField').removeChild(healthShortTermEnrollOnline)
    document.querySelector('#zipCodeField').removeChild(medicareMAenrollonline)
    document.querySelector('#zipCodeField').removeChild(medicarePDPenrollonline)
    document.querySelector('#zipCodeField').removeChild(medicareSuppenrollonline)
    document.querySelector('#zipCodeField').removeChild(visionenrollonline)
    document.querySelector('#zipCodeField').removeChild(dentalenrollonline)
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

export const handleFormSubmit = (e) => {
  e.preventDefault();
  // set form variable for data extraction
  const formData = e.target;
  // set up our data variable
  let data = {};
  // set a line of business array
  let lob = Array();
  // loop through and snag each piece of data
  Object.keys(formData).map((i) => {
    const input = formData[i];
    // if input is not a checkbox continue
    if (input.type !== "checkbox") {
      data[input.name] = input.value;
    } else {
      (input.checked) ? lob.push(input.name) : null;
    }
  });
  // add the line of business array to the data
  data['lob'] = lob;
  // run the data through the email script
  sendFormData(data);
}

export const sendFormData = (data) => {
  console.log(data.fName);
  console.log(data.lName);
  console.log(data.email);
  console.log(data.phNumber);
  console.log(data.zipCode);
  Object.keys(data.lob).map((i) => {
    console.log("lob: " + data.lob[i]);
  });
  console.log(data.tellUsMore);
}