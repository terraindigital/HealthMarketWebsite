import styled from "@emotion/styled"

export const FooterWrapper = styled.footer`
  background-color: var(--color-dark);

  padding-bottom: 8.9rem;
  padding-left: 8.9rem;
  padding-right: 8.9rem;
  padding-top: 5.5rem;

  @media screen and (min-width: 1921px) {
    padding-left: 40rem;
    padding-right: 40rem;
  }

  @media screen and (max-width: 1044px) {
    padding-left: 5.5rem;
    padding-right: 5.5rem;
  }

  @media screen and (max-width: 788px) {
    padding-left: 4.8rem;
    padding-right: 4.8rem;
  }

  @media screen and (max-width: 620px) {
    padding-top: 3.4rem;
    padding-left: 2.1rem;
    padding-right: 2.1rem;
  }
`

export const WidgetAreaOne = styled.div`
  border-bottom: 1px solid var(--color-light);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 2.1rem;

  @media only screen and (max-width: 620px) {
    flex-direction: column-reverse;
  }
`

export const FooterLogo = styled.div`
  flex-basis: 33%;
  width: 33%;

  img {
    filter: brightness(0) invert(1);
    max-width: 128px;
  }

  @media only screen and (max-width: 620px) {
    flex-basis: 100%;
    width: 100%;
    text-align: center;
    margin-top: 2.1rem;

    img { margin: 0 auto; }
  }
`

export const SocialWidget = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  align-items: center;
  justify-content: center;
  flex-basis: 33%;
  width: 33%;

  @media only screen and (max-width: 620px) {
    flex-basis: 100%;
    width: 100%;
  }
`

export const SocialIcon = styled.div`
  margin-right: 1.3rem;

  &:last-child {
    margin-right: 0;
  }

  img {
    filter: brightness(0) invert(1);
    max-width: 40px;
  }

  @media only screen and (max-width: 620px) {
    margin-right: 2.1rem;

    &:last-child {
      margin-right: 0;
    }
  }
`

export const BBBSeal = styled.div`
  flex-basis: 33%;
  width: 33%;

  text-align: right;

  img {
    display: inline;
    max-width: 250px;
  }

  @media only screen and (max-width: 620px) {
    display: none;
  }
`

export const WidgetAreaTwo = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  padding-top: 3.4rem;

  @media only screen and (max-width: 620px) {
    flex-direction: column;
  }
`

export const WidgetWrapper = styled.div`
  flex-basis: 64%;
  width: 64%;

  @media only screen and (max-width: 788px) {
    flex-basis: 50%;
    width: 50%;
  }

  @media only screen and (max-width: 620px) {
    flex-basis: 100%;
    width: 100%;
  }
`

export const FooterMenuWrapper = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;

  @media only screen and (max-width: 788px) {
    flex-wrap: wrap;
    gap: 2.4rem 0;
  }

  @media only screen and (max-width: 620px) {
    flex-direction: column;
  }
`

export const Disclaimer = styled.div`
  color: var(--color-light);
  margin-top: 2.1rem;

  p {
    font-size: 1.6rem;
    margin-top: 0.8rem;
  }

  a {
    color: var(--color-primary);
    font-weight: 600;
    text-decoration: underline;
  }

  @media only screen and (max-width: 620px) {
    margin-top: 3.4rem;
  }
`

export const PlansByStateLinks = styled.div`
  color: var(--color-light);
  flex-basis: calc(36% - 3.4rem);
  width: calc(36% - 3.4rem);
  margin-left: 3.4rem;

  h6 {
    font-weight: normal;
    margin-top: 2.1rem;
    margin-bottom: 0.3rem;

    &:first-of-type {
      margin-top: 0px;
    }
  }

  div {
    display: flex;
    flex-wrap: wrap;
  }

  a,
  a:hover,
  a:active,
  a:visited,
  a:visited:hover {
    color: var(--color-light);
  }

  a {
    margin-right: 0.3rem;
    position: relative;
    word-wrap: normal;

    &:after {
      content: ",";
    }

    &:last-of-type:after {
      content: none;
    }

    &:hover {
      text-decoration: underline;
    }
  }

  @media only screen and (max-width: 788px) {
    flex-basis: 50%;
    width: 50%;
  }

  @media only screen and (max-width: 620px) {
    flex-basis: 100%;
    width: 100%;
    margin-left: 0;
    margin-top: 2.1rem;
  }
`