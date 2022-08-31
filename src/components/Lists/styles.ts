import styled from "@emotion/styled"

export const Wrapper = styled.ul`
  list-style-type: none;
  margin-bottom: 4.8rem;
  margin-left: 0;

  .centered.section & {
    columns: 2;
    column-gap: 15rem;
    padding-left: 2.1rem;
    padding-right: 2.1rem;
    text-align: left;
  }

  @media only screen and (max-width: 620px) {
    margin-left: 3.4rem;

    .centered.section & {
      columns: 1;
      column-gap: 0;
      padding-left: 0;
      padding-right: 0;
    }
  }
`
