import styled from "@emotion/styled"

// TODO: Alignment issues with icons; to be discussed with design

export const Wrapper = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  flex-wrap: wrap;

  .centered.section & {
    justify-content: center;
  }
`