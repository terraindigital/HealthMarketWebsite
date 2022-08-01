import styled from "@emotion/styled"

export const FooterWrapper = styled.footer`
  background-color: var(--color-dark);

  padding-bottom: 8.9rem;
  padding-left: 8.9rem;
  padding-right: 8.9rem;
  padding-top: 5.5rem;

  @media screen and (max-width: 1044px) {
    padding-left: 5.5rem;
    padding-right: 5.5rem;
  }

  @media screen and (max-width: 920px) {
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
`

export const FooterLogo = styled.div`
  flex-basis: 33%;
  width: 33%;

  img {
    filter: brightness(0) invert(1);
    max-width: 128px;
  }
`

export const SocialWidget = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  align-items: center;
  justify-content: center;
  flex-basis: 33%;
  width: 33%;
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
`

export const BBBSeal = styled.div`
  flex-basis: 33%;
  width: 33%;

  text-align: right;

  img {
    max-width: 250px;
  }
`

export const WidgetAreaTwo = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  padding-top: 3.4rem;
`

export const WidgetWrapper = styled.div`
  flex-basis: 64%;
  width: 64%;
`

export const FooterMenuWrapper = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
`

export const FooterMenu = styled.div`
  margin-left: 3.4rem;
  padding: 0.5rem 0px;

  &:first-of-type {
    margin-left: 0px;
  }

  h6 {
    border-bottom: 1px dotted var(--color-light);
    color: var(--color-light);
    margin: 0px 0px 0.8rem 0px;
    padding-bottom: 0.8rem;
  }

  ul {
    list-style-type: none;
    margin: 0;
  }

  li {
    color: var(--color-light);
    cursor: pointer;
    padding: 0.5rem 0px;

    &:hover {
      text-decoration: underline;
    }
  }
`

export const Disclaimer = styled.div`
  color: var(--color-light);
  margin-top: 2.1rem;

  p {
    font-size: 1.2rem;
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
`