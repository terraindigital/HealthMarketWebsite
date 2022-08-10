import styled from "@emotion/styled"

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  flex-direction: row;
  align-items: stretch;
  justify-content: flex-start;
  margin-bottom: 3.4rem;
  padding: 5.5rem;
  position: relative;

  @media only screen and (max-width: 620px) {
    display: block;
    padding: 0;

    & + div > a {
      font-weight: bold;
      line-height: 1.5em;
      text-decoration: underline;
    }
  }
`