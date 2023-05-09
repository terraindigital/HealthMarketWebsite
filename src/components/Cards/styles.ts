import styled from "@emotion/styled"

export const Wrapper = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  flex-wrap: wrap;

  &.related-content {
    margin-bottom: 56px;
  }

  @media only screen and (max-width: 788px) {
    justify-content: center;
  }
`