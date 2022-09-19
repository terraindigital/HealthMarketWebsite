import styled from "@emotion/styled"

export const Wrapper = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  flex-wrap: wrap;

  .centered.section & {
    justify-content: center;
  }
`