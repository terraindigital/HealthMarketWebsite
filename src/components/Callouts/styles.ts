import styled from "@emotion/styled";

export const Wrapper = styled.div`
  align-items: stretch;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .callout {
    flex-basis: calc((100% / 3) - (8.6rem * (2/3)));
    width: calc((100% / 3) - (8.6rem * (2/3)));
    margin-right: 8.6rem;
  
    &:last-of-type {
      margin-right: 0;
    }
  
    @media only screen and (max-width: 1650px) {
      flex-basis: calc((100% / 3) - (5.4rem * (2/3)));
      width: calc((100% / 3) - (5.4rem * (2/3)));
  
      margin-right: 5.4rem;
      
      &:last-of-type {
        margin-right: 0;
      }
    }
  
    @media only screen and (max-width: 1440px) {
      flex-basis: calc((100% /  2) - (3.4rem * (1/2)));
      width: calc((100% / 2) - (3.4rem * (1/2)));
  
      margin-bottom: 3.4rem;
      margin-right: 3.4rem;
  
      &:nth-of-type(2n) {
        margin-right: 0;
      }
    }
  
    @media only screen and (max-width: 768px) {
      flex-basis: 100%;
      width: 100%;
  
      margin-bottom: 3.4rem;
      margin-right: 0;
    }
  
    @media only screen and (max-width: 768px) {
      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }
`