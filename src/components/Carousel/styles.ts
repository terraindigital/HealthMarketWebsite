import styled from "@emotion/styled"

export const Wrapper = styled.div`
  overflow-x: hidden;
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

  @media only screen and (max-width: 1920px) {
    &, & .swiper, & .swiper .swiper-wrapper {
      overflow: visible;
    } 
  }

  @media only screen and (max-width: 620px) {
    .swiper-slide {
      flex-shrink: 1;
    }
  }
`