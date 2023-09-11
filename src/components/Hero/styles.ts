import styled from "@emotion/styled"

export const Wrapper = styled.div`
  background-color: ${props => `${props.background}`};
  display: flex;
  min-height: 600px;
  min-height: 100%;
  min-height: 100vh;
  overflow: hidden;
  position: relative;
  padding-bottom: 10.4rem;
  padding-top: 21rem;
  padding-left: 8.9rem;
  padding-right: 8.9rem;
  &.centered {
    align-items: center;
    justify-content: center;
    vertical-align: middle;
  }
  &.half {
    align-items: stretch;
    justify-content: flex-end;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 120px;
    &.half > div > h1 {
      color: var(--color-primary);
      text-shadow: none;
    }
    &.half > div > h4 {
      font-size: 24px;
      font-weight: 500;
    }
  }
  &.open {
    @media only screen and (min-width: 1025px) {
      &.form-open {
        min-height: 1101px;
      }
    }
    @media only screen and (max-width: 1024px) {
      min-height: auto;
      padding-left: 0;
      padding-right: 0;
      padding-bottom: 0;
    }
    @media only screen and (max-width: 480px) {
      padding-top: 148px;
    }
  }
  @media screen and (min-width: 1921px) {
    padding-left: 40rem;
    padding-right: 40rem;
    min-height: 65%;
    min-height: 65vh;
  }
  
  @media screen and (min-width: 1281px) {
    margin-top: 120px;
    padding-top: 0;
  }

  @media screen and (max-width: 1280px) {
    padding-left: 5.5rem;
    padding-right: 5.5rem;
    padding-top: 5.5rem;
  }
  @media screen and (max-width: 920px) {
    padding-left: 2.1rem;
    padding-right: 2.1rem;
  }
  @media only screen and (max-width: 788px) {
    padding-top: 3.4rem;
    padding-bottom: 22rem;
    &.centered {
      display: block;
      min-height: auto;
    }
  }
`

export const Img = styled.img`
  left: 0;
  height: 100%;
  object-fit: cover;
  object-position: top;
  max-height: 100%;
  min-width: 100%;
  position: absolute;
  top: 0;
  width: auto;
  z-index: 0;
  .half & {
    object-position: center 120px;
    min-width: 50%;
    width: 50%;
    @media only screen and (max-width: 1440px) {
      object-position: center 120px;
    }
    @media only screen and (max-width: 1200px) {
      object-fit: contain;
      object-position: center 91px;
      min-width: 100%;
      width: auto;
    }
    @media only screen and (max-width: 900px) {
      object-fit: cover;
      object-position: center 91px;
      max-height: 50vh;
    }
  }
  .open & {
    object-position: center 0;
    @media only screen and (max-width: 1440px) {
      object-position: center 0;
    }
    @media only screen and (max-width: 1024px) {
      object-fit: contain;
      object-position: center 0;
      min-width: 100%;
      width: auto;
    }
    @media only screen and (max-width: 900px) {
      object-fit: cover;
      object-position: center 0;
      max-height: 50vh;
    }
    @media only screen and (max-width: 600px) {
      max-height: 148px;
    }
  }
`

export const Inner = styled.div`
  margin: 0;
  max-width: 144rem;
  position: relative;
  width: 100%;
  z-index: 12;
  &.half {
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    width: 72%;

    @media only screen and (max-width: 1024px) {
      text-align: center;
    }
  }
  .open &.half {
    flex-basis: 48%;
    width: 48%;

    @media only screen and (max-width: 1024px) {
      flex-basis: 100%;
      width: 100%;
      text-align: center;
    }
  }
  &.left {
    padding-bottom: 11rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media only screen and (max-width: 620px) {
      padding-top: 4rem;
      padding-bottom: 31rem;
      align-items: center;
      width: 100%;
    }
  }
  .boxed & {
    margin: 3.4rem 14.4rem;
    padding: 6rem 12rem;
    @media only screen and (max-width: 788px) {
      margin: 0 auto;
      padding: 4rem 8rem;
    }
    @media only screen and (max-width: 620px) {
      margin: 0 auto;
      padding: 0;
    }
  }
  .boxed.primary & {
    background-color: var(--color-primary);
    @media only screen and (max-width: 620px) {
      background-color: transparent;
    }
  }
  .boxed.accent & {
    background-color: var(--color-accent);
    @media only screen and (max-width: 620px) {
      background-color: transparent;
    }
  }
  .half & {
    flex-basis: 50%;
    width: 50%;
    background-color: var(--color-light);
    justify-content: flex-start;
    padding: 65px 77px 55px;
    padding-right: 89px;
    @media only screen and (max-width: 1200px) {
      flex-basis: 100%;
      width: 100%;
      margin-top: 360px;
      padding: 65px 55px 55px;
    }
    @media only screen and (max-width: 620px) {
      padding: 65px 21px 55px;
    }
  }
  .open & {
    @media only screen and (max-width: 1024px) {
      background-color: var(--color-light);
      display: block;
      margin-top: 360px;
      padding: 65px 55px 55px;
    }
    @media only screen and (max-width: 768px) {
      margin-top: 124px;
      padding: 16px 21px 55px;
    }
    @media only screen and (max-width: 480px) {
      margin-top: 0;
      padding: 16px 21px 55px;
    }
  }
  @media only screen and (max-width: 340px) {
    width: 100%;
  }

  .open &.form-open {
    @media only screen and (max-width: 1024px) {
      padding: 0;

      .inner-contain {
        display: none;
      }
    }
  }

  /**
   * LPO 1.2 Rollout - Mobile Heading Sizes
   **/
  @media only screen and (max-width: 620px) {
    & > h1 { 
      font-size: 42px;
      color: #4D4D4D;
    }
    & > h1 + h4 { 
      font-size: 18px;
      color: #4D4D4D;
      font-weight: 400;
     }
  }
`