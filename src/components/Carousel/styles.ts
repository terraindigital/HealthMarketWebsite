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

  &:after,
  &:before {
    bottom: 0;
    content: '';
    position: absolute;
    top: 0;
    width: 3.4rem;
    z-index: 2;
  }

  &:before {
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 80%);
    left: 0;
  }

  &:after {
    background: linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 80%);
    right: 0;
  }

  .tile {
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

  .carousel-nav {
    margin-top: 5.5rem;

    @media only screen and (max-width: 620px) {
      margin-top: 0rem;
    }
  }

  @media only screen and (max-width: 920px) {
    padding: 5.5rem 2.1rem;
  }

  @media only screen and (max-width: 620px) {
    padding: 0rem;
  }
`

export const CarouselNavWrapper = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  &.carousel-pagination div {
    background-color: var(--color-muted);
    border-radius: 50%;
    display: block;
    height: 1.6rem;
    margin-right: 0.8rem;
    position: relative;
    width: 1.6rem;
    cursor: pointer;

    &.swiper-pagination-bullet-active {
      background-color: var(--color-dark);
    }

    &:last-child {
      margin-right: 0;
    }
  }
`

export const Prev = styled.div`
  height: 15px;
  margin-right: 1.3rem;
  position: relative;
  width: 6px;
  cursor: pointer;

  &:before,
  &:after {
    background-color: var(--color-muted);
    content: "";
    display: block;
    height: 8px;
    position: absolute;
    width: 2px;
  }

  &:hover:before,
  &:hover:after {
    background-color: var(--color-dark);
  }

  &:before {
    transform: rotateZ(32deg);
    top: 0;
  }

  &:after {
    transform: rotateZ(-32deg);
    top: calc(50% - 1px);
  }
`

export const Next = styled.div`
  height: 15px;
  margin-right: 0;
  margin-left: 1.3rem;
  position: relative;
  width: 6px;
  cursor: pointer;

  &:before,
  &:after {
    background-color: var(--color-muted);
    content: "";
    display: block;
    height: 8px;
    position: absolute;
    width: 2px;
  }

  &:hover:before,
  &:hover:after {
    background-color: var(--color-dark);
  }

  &:before {
    transform: rotateZ(-32deg);
    top: 0;
  }

  &:after {
    transform: rotateZ(32deg);
    top: calc(50% - 1px);
  }
`


export const Dot = styled.div`
  background-color: var(--color-muted);
  border-radius: 50%;
  height: 1.6rem;
  margin-right: 0.8rem;
  position: relative;
  width: 1.6rem;
  cursor: pointer;

  &.active {
    background-color: var(--color-dark);
  }

  &:last-child {
    margin-right: 0;
  }
`