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

    .swiper-slide {
      // TODO: width: 340px margin: 1.7rem;
      flex-basis: calc(340px + 3.4rem);
      min-width: 340px;
      margin-left: 1.7rem;
      margin-right: 1.7rem;

      // animation
      transition: transform 0.22s ease-in-out;

      &:hover {
        transform: scale(1.1, 1.1)
                   translate(1px, -5px);
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

    &.primary {
      &:before {
        background-color: var(--color-primary-light)
      }

      .star path {
        fill: var(--color-primary);
      }

      figure + div a {
        color: var(--color-primary);
      }
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