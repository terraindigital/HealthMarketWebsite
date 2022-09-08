import styled from "@emotion/styled"

export const Wrapper = styled.div`
  overflow-x: hidden;
  padding: 5.5rem 0;
  position: relative;

  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  
  &::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }

  .carousel-nav {
    margin-top: 5.5rem;

    @media only screen and (max-width: 620px) {
      margin-top: 0rem;
    }
  }

  &, & .swiper, & .swiper .swiper-wrapper {
    overflow: visible;
  }

  @media only screen and (max-width: 920px) {
    padding: 5.5rem 2.1rem;
  }

  @media only screen and (max-width: 788px) {
    .swiper-slide {
      flex-shrink: 1;
    }
  }

  @media only screen and (max-width: 620px) {
    padding: 0rem;
  }
`