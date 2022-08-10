import {css} from "@emotion/react";
import styled from "@emotion/styled";

export const GlobalStyles = css`
  html {
    font-size: 62.5%; /* 10px browser default */ 
    font-family: 'arial', sans-serif;
    /* -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%; */

    --font-heading: 'Playfair Display', Arial, Helvetica, sans-serif;
    --font-body: 'Open Sans', Arial, Helvetica, sans-serif;

    --color-light: #FFFFFF;
    --color-muted: #D6D6D6;
    --color-dark: #4D4D4D;
    --color-primary: #009FDA;
    --color-primary-light: #F3FAFD;
    --color-accent: #69BE28;
    --color-accent-light: #F1FBEA;
  }

  body {
    font-size: 1.6rem;
    margin: 0;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .nav-active {
    overflow-y: hidden;
  }

  .whiteText {
    color: #fff;
  }

  h2,
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  main,
  menu,
  nav,
  section,
  summary {
    display: block;
  }

  audio,
  canvas,
  progress,
  video {
    display: inline-block;
  }

  audio:not([controls]) {
    display: none;
    height: 0;
  }

  progress {
    vertical-align: baseline;
  }

  [hidden],
  template {
    display: none;
  }

  a {
    background-color: transparent;
    color: var(--color-accent);
    
    -webkit-text-decoration-skip: objects;
  }

  a:active,
  a:hover {
    outline-width: 0;
  }

  abbr[title] {
    border-bottom: none;
    text-decoration: underline dotted;
  }

  b,
  strong {
    font-weight: bolder;
  }

  dfn {
    font-style: italic;
  }

  h1 {
    font-family: var(--font-heading);
    font-weight: 700;
    font-size: 2em;
    margin: 0.67em 0;
  }

  mark {
    background-color: #ff0;
    color: #000;
  }

  small {
    font-size: 80%;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  img {
    border-style: none;
  }

  svg:not(:root) {
    overflow: hidden;
  }

  code,
  kbd,
  pre,
  samp {
    font-family: monospace, monospace;
    font-size: 1em;
  }

  figure {
    margin: 1em 40px;
  }

  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font: inherit;
    margin: 0;
  }

  input:focus,
  textarea:focus,
  select:focus {
    outline: 2px solid var(--color-accent);
  }

  optgroup {
    font-weight: 700;
  }

  button,
  input {
    overflow: visible;
  }

  button,
  select {
    text-transform: none;
  }

  [type='reset'],
  [type='submit'],
  button,
  html [type='button'] {
    -webkit-appearance: button;
  }

  [type='button']::-moz-focus-inner,
  [type='reset']::-moz-focus-inner,
  [type='submit']::-moz-focus-inner,
  button::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  [type='button']:-moz-focusring,
  [type='reset']:-moz-focusring,
  [type='submit']:-moz-focusring,
  button:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  fieldset {
    border: 1px solid silver;
    margin: 0 2px;
    padding: 0.35em 0.625em 0.75em;
  }

  legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal;
  }

  textarea {
    overflow: auto;
  }

  [type='checkbox'],
  [type='radio'] {
    box-sizing: border-box;
    padding: 0;
  }

  [type='number']::-webkit-inner-spin-button,
  [type='number']::-webkit-outer-spin-button {
    height: auto;
  }

  [type='search'] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }

  [type='search']::-webkit-search-cancel-button,
  [type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-input-placeholder {
    color: inherit;
    opacity: 0.54;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }

  html {
    box-sizing: border-box;
    overflow-y: scroll;
  }

  * {
    box-sizing: inherit;
  }

  *:before {
    box-sizing: inherit;
  }

  *:after {
    box-sizing: inherit;
  }

  body {
    color: hsla(0, 0%, 0%, 0.8);
    font-family: var(--font-body);
    font-weight: normal;
    word-wrap: break-word;
    font-kerning: normal;
    -moz-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    -ms-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    -webkit-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    font-feature-settings: 'kern', 'liga', 'clig', 'calt';
  }

  img {
    max-width: 100%;
    padding: 0;
    margin: 0 0 1.45rem;
  }

  p {
    font-family: var(--font-body);
    font-size: 1.6rem;
    line-height: 2.8rem;
  }
  
  h1, h2, h3,
  h4, h5, h6 {
    font-weight: 700;
    margin-top: 0px;
  }
  
  h1, h2, h3 {
    font-family: var(--font-heading);
  }
  
  h4, h5, h6 {
    font-family: var(--font-body);
  }

  h1 { font-size: 4.4rem; }
  h2 { font-size: 3.0rem; }
  h3 { font-size: 2.4rem; }
  h4 { font-size: 2.0rem; }
  h5 { font-size: 1.8rem; }
  h6 { font-size: 1.6rem; }

  .font-heading {
    font-family: var(--font-heading);
  }

  .font-body {
    font-family: var(--font-body);
  }

  hgroup {
    padding: 0;
    margin: 0 0 1.45rem;
  }

  ul {
    padding: 0;
    margin: 0 0 1.45rem 1.45rem;
    list-style-position: outside;
    list-style-image: none;
  }

  ol {
    padding: 0;
    margin: 0 0 1.45rem 1.45rem;
    list-style-position: outside;
    list-style-image: none;
  }

  dl {
    padding: 0;
    margin: 0 0 1.45rem;
  }

  dd {
    padding: 0;
    margin: 0 0 1.45rem;
  }

  p {
    padding: 0;
    margin: 0 0 1.45rem;
  }

  figure {
    padding: 0;
    margin: 0 0 1.45rem;
  }

  pre {
    margin: 0 0 1.45rem;
    font-size: 0.85rem;
    line-height: 1.42;
    background: hsla(0, 0%, 0%, 0.04);
    border-radius: 3px;
    overflow: auto;
    word-wrap: normal;
    padding: 1.45rem;
  }

  table {
    padding: 0;
    margin: 0 0 1.45rem;
    font-size: 1rem;
    line-height: 1.45rem;
    border-collapse: collapse;
    width: 100%;
  }

  fieldset {
    padding: 0;
    margin: 0 0 1.45rem;
  }

  blockquote {
    padding: 0;
    margin: 0 1.45rem 1.45rem;
  }

  form {
    padding: 0;
    margin: 0 0 1.45rem;
  }

  noscript {
    padding: 0;
    margin: 0 0 1.45rem;
  }

  iframe {
    padding: 0;
    margin: 0 0 1.45rem;
  }

  hr {
    padding: 0;
    margin: 0 0 calc(1.45rem - 1px);
    background: hsla(0, 0%, 0%, 0.2);
    border: none;
    height: 1px;
  }

  address {
    padding: 0;
    margin: 0 0 1.45rem;
  }

  b {
    font-weight: bold;
  }

  strong {
    font-weight: bold;
  }

  dt {
    font-weight: bold;
  }

  th {
    font-weight: bold;
  }

  li {
    margin-bottom: calc(1.45rem / 2);
  }

  ol li {
    padding-left: 0;
  }

  ul li {
    padding-left: 0;
  }

  li > ol {
    margin-left: 1.45rem;
    margin-bottom: calc(1.45rem / 2);
    margin-top: calc(1.45rem / 2);
  }

  li > ul {
    margin-left: 1.45rem;
    margin-bottom: calc(1.45rem / 2);
    margin-top: calc(1.45rem / 2);
  }

  blockquote *:last-child {
    margin-bottom: 0;
  }

  li *:last-child {
    margin-bottom: 0;
  }

  p *:last-child {
    margin-bottom: 0;
  }

  li > p {
    margin-bottom: calc(1.45rem / 2);
  }

  code {
    font-size: 0.85rem;
    line-height: 1.45rem;
  }

  kbd {
    font-size: 0.85rem;
    line-height: 1.45rem;
  }

  samp {
    font-size: 0.85rem;
    line-height: 1.45rem;
  }

  abbr {
    border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
    cursor: help;
  }

  acronym {
    border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
    cursor: help;
  }

  abbr[title] {
    border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
    cursor: help;
    text-decoration: none;
  }

  thead {
    text-align: left;
  }

  td,
  th {
    text-align: left;
    border-bottom: 1px solid hsla(0, 0%, 0%, 0.12);
    font-feature-settings: 'tnum';
    -moz-font-feature-settings: 'tnum';
    -ms-font-feature-settings: 'tnum';
    -webkit-font-feature-settings: 'tnum';
    padding: 0.725rem 0.96667rem calc(0.725rem - 1px);
  }

  th:first-child,
  td:first-child {
    padding-left: 0;
  }

  th:last-child,
  td:last-child {
    padding-right: 0;
  }

  tt,
  code {
    background-color: hsla(0, 0%, 0%, 0.04);
    border-radius: 3px;
    font-family: 'SFMono-Regular', Consolas, 'Roboto Mono', 'Droid Sans Mono',
    'Liberation Mono', Menlo, Courier, monospace;
    padding: 0.2em 0;
  }

  pre code {
    background: none;
    line-height: 1.42;
  }

  code:before,
  code:after,
  tt:before,
  tt:after {
    letter-spacing: -0.2em;
    content: ' ';
  }

  pre code:before,
  pre code:after,
  pre tt:before,
  pre tt:after {
    content: '';
  }

/**
 * Media Queries
 */

  .show-at-mobile {
    display: none !important;
  }

  @media only screen and (max-width: 620px) {
    .hide-at-mobile {
      display: none !important;
    }
    .show-at-mobile {
      display: block !important;
    }
  }
`;

export const Wrapper = styled.div`
  padding: 0px;
`
