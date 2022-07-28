import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  flext-direction: row;

  .full-background > .review > & {
    align-items: center;
    justify-content: center;
  }

  .half-background > .review > & {
    align-items: flex-start;
    justify-content: flex-start;
  }

  margin-bottom: 2.1rem;

  .gatsby-image-wrapper {
    margin-right: 1rem;

    &:last-child {
      margin-right: 0;
    }
  }
`