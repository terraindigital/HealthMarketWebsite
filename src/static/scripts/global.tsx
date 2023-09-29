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

export const isValidZip = (zip: string) => {
  return /^[0-9]{5}(?:-[0-9]{4})?$/.test(zip);
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
  const plans = "https://shop.healthmarkets.com/en/about-me/info";
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
  }
  // toggle second button state
  parent.firstChild.nextSibling.classList.toggle('accented')
  if (parent.firstChild.nextSibling.classList.contains('accented')) {
    parent.firstChild.nextSibling.querySelector('input[type=radio]').checked = true
    parent.firstChild.nextSibling.closest('form').action = agents
    document.querySelector('input#zipCode')?.setAttribute('name', 'query')
  }
}

export const populateZipCode = (suggestion) => {
  const zipField = document.querySelector('#zipCodeField #zipCode');
  if (suggestion.postalcode !== undefined) {
    zipField?.setAttribute('value', suggestion.postalcode);
  } else {
    const localityString = suggestion.locality + ", " + suggestion.region;
    zipField?.setAttribute('value', localityString);
  }
}

export const maybeSetCounty = (suggestion) => {
  const countyField = document.querySelector('#zipCodeField #county');
  let countyString = '';
  if (suggestion.county !== undefined) {
    countyString = suggestion.county;

    if (countyString.includes('Parish')) {
      countyString = countyString.replace('Parish', '').trim();
    }

    if (countyString.includes('County')) {
      countyString = countyString.replace('County', '').trim();
    }

    countyField?.setAttribute('value', countyString);
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

export const getRandomPhotos = (obj) => {
  let arr = Array();

  Object.keys(obj).map(i => {
    arr.push(obj[i]);
  });

  for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
  }

  return arr;
}

const getWhitelist = () => {
  return [
    "_hm_cp",
    "lob",
    "gclid",
    "fbclid",
    "msclkid",
    "MarketingRefCode",
    "utm_campaign",
    "utm_source",
    "utm_medium"
  ];
}

const getExpiry = () => {
  let expiry = new Date();
  expiry = expiry.setDate(expiry.getDate() + 30);
  expiry = new Date(expiry);
  return expiry.toUTCString();
}

export const getUrlData = () => {
  const whitelist = getWhitelist();
  let uri = '';
  let n = 0;
  let m = 0;

  try {
    // grab the data
    let cookie = document.cookie;

    // parse the data
    cookie = cookie.split(';');

    for (let i=0; i < cookie.length; i++) {
      var pair = cookie[i].split('=');

      whitelist.map(j => {
        let key = pair[0].trim();
        let content = pair[1].trim();
        let obj = false;
        if (key === j) {
          if (n > 0) { uri += '&'; }

          try {
            let str = '';
            obj = JSON.parse(content);
            Object.keys(obj).map(k => {
              if (m > 0) { uri += '&'; }
              const objK = k.trim();
              const objV = obj[k].trim();
              uri = uri + objK + '=' + objV;
              m++;
            });
          } catch (e) {
            uri = uri + key + '=' + content;
          }

          n++;
        }
      });
    }

    // return the data
    return uri;
  } catch (e) {
    return "";
  }
}

export const setUrlData = (url) => {
  // grab the pieces
  const uri = getUrlData();

  // append the pieces to the url
  const link = url + (!url.includes('?') ? '?' : '\&') + uri;

  // return the url
  return link;
}

export const hmAnalytics = () => {
  // set our variables
  const whitelist = getWhitelist();
  const expiry = getExpiry();
  let query = window.location.search;
  let track = getUrlData();
  let params = {};
  let cookie = '';

  // unpack query and add to params
  if (query) {
    query = query.replace('?','').split('&');
    Object.keys(query).map(i => {
      let pair = query[i];
      let obj = {};
      pair = pair.split('=');
      // only if what's passed is "_hm_cp"
      if (pair[0] === '_hm_cp') {
        pair[1] = pair[1].replaceAll('%22', '"');
        try {
          pair = JSON.parse(pair[1]);
          Object.assign(params, pair);
        } catch (e) {
          console.log(e);
        }
      }
      if (whitelist.includes(pair[0])) {
        obj[pair[0]] = pair[1];
        params = Object.assign(params, obj);
      }
    });
  }

  // unpack tracked data and add to params
  if (track) {
    track = track.split(';');
    Object.keys(track).map(i => {
      let qs = track[i];
      let obj = {};
      qs = qs.split('&');
      qs.map(pair => {
        pair = pair.split('=');
        // only if what's passed is "_hm_cp"
        if (pair[0] === '_hm_cp') {
          pair[1] = pair[1].replaceAll('%22', '"');
          try {
            pair = JSON.parse(pair[1]);
            Object.assign(params, pair);
          } catch (e) {
            console.log(e);
          }
        }
        if (whitelist.includes(pair[0])) {
          obj[pair[0]] = pair[1];
          if (!Object.hasOwn(params, pair[0])) {
            params[pair[0]] = pair[1];
          }
        }
      });
    });
  }

  // store params in _hm_cp
  params = JSON.stringify(params);
  cookie = "_hm_cp=" + params + "; expires=" + expiry + "; path=/";
  // console.log(cookie);
  document.cookie = cookie;
}
/**
 * @deprecated apparently this function is no longer needed.
 */
export const sendForm = (e) => {
  // prevent the form from submitting before we add our pieces
  e.preventDefault();
  const form = e.target;
  const target = form.getAttribute('target');
  let action = form.action;
  let queryBits = '';

  // get the zip code value
  const zipField = form.querySelector('#zipCode');
  const countyField = form.querySelector('#county');

  // setup the data
  if (zipField.getAttribute('name') === 'query') {
    queryBits = 'query=' + zipField.defaultValue + '/#agents-top';
  } else {
    queryBits = 'zip=' + zipField.defaultValue +
                '&county=' + countyField.defaultValue;
  }

  // build the first part of our new url
  form.action = setUrlData(action)

  // figure out if we need an extra character to join these together
  if (form.action.slice(-1) === "?" || form.action.slice(-1) === "&") {
    queryBits = queryBits;
  } else {
    queryBits = '&' + queryBits;
  }

  // join the action and the query bits
  form.action = form.action + queryBits;

  // send the form
  if (!target) {
    window.location.assign(form.action);
  } else {
    window.open(form.action, target);
  }
  
  // reset the form
  form.reset();
  if (action.slice(-1) === "?" || action.slice(-1) === '&') {
    action = action.substring(0, -1);
  }
  form.action = setUrlData(action);
  console.log(form.action);
}

export const routeLink = (e) => {
  // prevent the link from navigating
  e.preventDefault();

  // get the tagname
  const tagname = e.target.localName;

  // if it's not 'a' find 'a'
  const element = (tagname !== 'A') ? getParent(e.target) : e.target;

  if (element) {
    // get the target url
    const url = setUrlData(element.href);

    // send the user to that url
    window.location.assign(url);
  }
}

const getParent = (el) => {
  let parent = el;
  let num = 0;

  while(parent.tagName !== 'A' && num < 5) {
    parent = parent.parentElement;
    num++
  }

  return parent;
}

export const initLinks = () => {
  const links = document.querySelectorAll(`[data-cta="true"]`);

  links.forEach(link => {
    link.addEventListener("click", (e) => { routeLink(e); });
  });
}

export const modal = () => {
  let modal = document.querySelectorAll('.is-modal');

  modal.forEach(mdl => {
    let modalClose = mdl.querySelectorAll('.modal-close');

    modalClose?.forEach(closeBtn => {
      closeBtn?.addEventListener("click", (e) => {
        mdl.classList.remove('is-active');
      })
    });
  });
}

export const acaGTM = () => {
  const s = document.createElement('script');
  s.type = "text/javascript";
  const sCode = (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-5D4VMW');

  const t = document.createElement('script');
  t.type = "text/javascript";
  t.src = "https://www.googletagmanager.com/gtag/js?id=DC-9943996"
  t.async = true;

  const u = document.createElement('script');
  u.type = "text/javascript";
  u.onload = function() {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);};
    gtag('js', new Date());
    gtag('config', 'DC-9943996');
  };

  const bodyScript = document.createElement('noscript');
  const noScript = document.createElement('iframe');
  noScript.src="https://www.googletagmanager.com/ns.html?id=GTM-5D4VMW";
  noScript.height="0";
  noScript.width="0";
  noScript.style="display:none;visibility:hidden";
  bodyScript.append(noScript);

  const gatsbyWrapper = document.getElementById('___gatsby');

  try {
    s.appendChild(document.createTextNode(sCode));
  } catch (e) {
    s.text = sCode;
  }
  document.head.appendChild(s);
  document.body.insertBefore(bodyScript, gatsbyWrapper);
  document.head.appendChild(t);
  document.head.appendChild(u);
}