import styled from "@emotion/styled"

export const Wrapper = styled.ul`
  list-style-type: none;
  margin-bottom: 4.8rem;
  margin-left: 0;

  .section & {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0rem 15rem;
    padding-left: 6rem;
    padding-right: 2.1rem;
  }

  .section & > li {
    margin-bottom: none;
  }

  @media only screen and (max-width: 788px) {
    margin-left: 6.6rem;
    text-align: left;

    .section & {
      display: block;
      padding-left: 0;
      padding-right: 0;
    }
  }

  @media only screen and (max-width: 620px) {
    margin-left: 3.4rem;
    margin-bottom: 3.2rem;

    .section & {
      columns: 1;
      column-gap: 0;
      padding-left: 0;
      padding-right: 0;
    }
  }
`
