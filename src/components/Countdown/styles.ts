import styled from "@emotion/styled"

export const Wrapper = styled.div`

.flip-clock {
    --fcc-flip-duration: 0.5s; /* transition duration when flip card */
    --fcc-digit-block-height: 16.388rem; /* height of digit card, highly recommend in even number */
    --fcc-digit-block-width: 11.638rem; /* height of digit card, highly recommend in even number */
    --fcc-digit-font-size: 10.45rem; /* font size of digit */
    --fcc-digit-color: #009FDA; /* color of digit */
    --fcc-label-font-size: 1rem; /* font size of label */
    --fcc-label-color: #ffffff; /* color of label */
    --fcc-background: white; /* background of digit card */
    --fcc-divider-color: #82BBCF; /* color of divider */
    --fcc-divider-height: 5px; /* height of divider */
    --fcc-label-font-size: 43px; /* font size of label */
    margin-top: 2rem;
  }

  .flip-clock div {
    box-shadow: none;
    margin-right: 1rem;
    font-family: Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;
  }

  .flip-clock div div:not(:last-child) {
    margin-right: -2rem;
  }

  @media only screen and (max-width: 1440px) {
    margin: auto;
    
    .flip-clock {
        margin: auto;
        --fcc-digit-block-height: 13.8rem; /* height of digit card, highly recommend in even number */
        --fcc-digit-block-width: 9.8rem; /* height of digit card, highly recommend in even number */
        --fcc-digit-font-size: 8.8rem; /* font size of digit */
        --fcc-divider-height: 3px; /* height of divider */
        --fcc-label-font-size: 23px; /* font size of label */
        margin-top: 2rem;
      }

      .flip-clock div div:not(:last-child) {
        margin-right: -2rem;
      }

  }

  @media only screen and (max-width: 1070px) {
    margin: auto;
    
    .flip-clock {
        margin: auto;
        --fcc-digit-block-height: 12.25rem; /* height of digit card, highly recommend in even number */
        --fcc-digit-block-width: 7.25rem; /* height of digit card, highly recommend in even number */
        --fcc-digit-font-size: 7rem; /* font size of digit */
        --fcc-divider-height: 3px; /* height of divider */
        --fcc-label-font-size: 23px; /* font size of label */
        margin-top: 2rem;
      }

      .flip-clock div div:not(:last-child) {
        margin-right: -2rem;
      }

  }

  @media only screen and (max-width: 680px) {

.flip-clock {
    margin: auto;
    --fcc-digit-block-height: 6.25rem; /* height of digit card, highly recommend in even number */
    --fcc-digit-block-width: 4.25rem; /* height of digit card, highly recommend in even number */
    --fcc-digit-font-size: 4rem; /* font size of digit */
    --fcc-label-font-size: 18px; /* font size of label */
    --fcc-label-color: #4D4D4D; /* color of label */
    margin-top: 2rem;
  }

  .flip-clock div {
    box-shadow: none;
    margin-right: 0rem;
  }

  .flip-clock div div:not(:last-child) {
    margin-right: -1rem;
  }
  }

  @media only screen and (max-width: 360px) {
    .flip-clock {
      margin: auto;
      --fcc-digit-block-height: 4.688rem; /* height of digit card, highly recommend in even number */
      --fcc-digit-block-width: 3.188rem; /* height of digit card, highly recommend in even number */
      --fcc-digit-font-size: 3rem; /* font size of digit */
      --fcc-label-font-size: 16px; /* font size of label */
      --fcc-label-color: #4D4D4D; /* color of label */
      margin-top: 2rem;
    }
  }

`