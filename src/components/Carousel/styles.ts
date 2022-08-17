import styled from "@emotion/styled"

export const Wrapper = styled.div`
  padding: 5.5rem;
  position: relative;

  &:before {
    content: '';
    background-color: var(--color-accent-light);
    height: 100%;
    left: 0px;
    position: absolute;
    top: 0px;
    z-index: 0;
  }

  &.tiles {
    & > [class*=Wrapper] {
      overflow-x: hidden;

      -ms-overflow-style: none; /* for Internet Explorer, Edge */
      scrollbar-width: none; /* for Firefox */
      
      &::-webkit-scrollbar {
        display: none; /* for Chrome, Safari, and Opera */
      }
    }

    .swiper-slide.swiper-slide-active + .swiper-slide {

      @media only screen and (min-width: 1200px) {
        width: calc(25% + 1.05rem)!important;
        transform: translateY(-30px);

        & .tile {
          img {
            height: 460px;
          }
        }
      }
    }

    & .tile {
      box-shadow: none!important;
    }

    .carousel-nav {
      margin-top: 5.5rem;

      @media only screen and (max-width: 620px) {
        margin-top: 0rem;
      }
    }
  }

  &.full-background {
    &:before {
      width: 100%;
    }

    .inner {
      text-align: center;
    }
  }

  &.half-background {
    &:before {
      width: 50%;
    }

    .inner {
      margin-left: 8.9rem;
      text-align: left;
    }

    .carousel-nav {
      margin-left: 0.25rem;
    }

    @media only screen and (max-width: 620px) {
      &:before {
        right: 0;
      }
    }
  }

  @media only screen and (max-width: 920px) {
    padding: 5.5rem 2.1rem;
  }

  @media only screen and (max-width: 620px) {
    padding: 0rem;
  }
`