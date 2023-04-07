import {css} from "@emotion/react";
import styled from "@emotion/styled";
import React, {FC, ReactNode, useEffect} from "react";
import {Content, Wrapper} from "../../Accordions/styles";
import {fadeIn} from "../../../static/scripts/global";
import {Wrapper as MedialWrapper} from "../../Medials/styles";

export const PageStyles = css`
  .button-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-width: 320px;
  }

  .button-container a:first-of-type {
    margin-bottom: 2.1rem;
  }

  .button-container button {
    max-width: 45rem;
    width: 100%;
  }
  
  .hero-disclaimer {
    color: var(--color-light);
    font-size: 2rem;
    font-weight: 400;
  }

  .card-disclaimer {
    font-size: 2rem;
    font-weight: 400;
    margin: 6.4rem auto 0;
    max-width: 106.8rem;
    text-align: center;
  }

  .card-link > p:first-of-type {
    margin-bottom: 23px;
  }

  .flexed.section.primary {
    padding-bottom: 0;
  }

  .hero .half {
    flex-basis: 50% !important;
    width: 50% !important;
  }

  @media only screen and (max-width: 788px) {
    .hero .half {
      display: block;
      flex-basis: 100%;
      text-align: center;
      width: 100%;
    }

    .hero + .section {
      padding-top: 4rem;
    }

    .button-container button {
      max-width: 38.6rem;
    }
  
    .card-disclaimer {
      font-size: 1.6rem;
      margin-top: 2.7rem;
    }
  }

  @media only screen and (max-width: 620px) {
    .button-container {
      min-width: 100%;
    }

    .hero .half .light a,
    .hero .half .light p {
      color: var(--color-dark);
    }

    .hero .half .light img {
      filter: none;
    }
    
    .hero > img {
      bottom: -8rem;
      top: auto;
    }

    .hero-disclaimer {
      color: var(--color-dark);
    }

    .card-header .icon {
      margin-left: 24px;
    }
  }
`

export const HeroHeading = styled.h1`
  color: var(--color-light);
  margin-bottom: 2.4rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.15);

  @media only screen and (max-width: 1280px) {
      font-size: 50px;
      line-height: 115%;
  }

  @media only screen and (max-width: 620px) {
    color: var(--color-dark);
  }
`

export const HeroSubheading = styled.h4`
  color: var(--color-light);
  font-family: var(--font-body);
  margin-bottom: 4rem;
  line-height: 120%;

  @media only screen and (max-width: 620px) {
    color: var(--color-dark);
  }
`

export const GuideCTA = styled.div`
  background-color: var(--color-primary-light);
  text-align: center;
  padding-left: 8.9rem;
  padding-right: 8.9rem;

  @media screen and (min-width: 1921px) {
    padding-left: 40rem;
    padding-right: 40rem;
  }

  @media screen and (max-width: 1044px) {
    padding-left: 5.5rem;
    padding-right: 5.5rem;
  }

  @media screen and (max-width: 788px) {
    padding-left: 4.8rem;
    padding-right: 4.8rem;
  }

  @media screen and (max-width: 620px) {
    padding-left: 2.1rem;
    padding-right: 2.1rem;
    text-align: left;
  }

  & > div {
    padding-bottom: 2rem;
    font-size: 2rem;
  }
`

export const PostAccordionText = styled.div`
  margin-top: 104px;
  
  a {
    text-decoration: none;
  }

  p {
    font-size: 32px;
  }

  @media only screen and (max-width: 620px) {
    margin-top: 40px;

    p {
      font-size: 16px;
      text-align: left;
    }
  }
`

const MedicareAccordionTitle = styled.div`
  border-bottom: 1px solid var(--color-dark);
  margin-bottom: 0;
  padding: 2.2rem 0 2.4rem;

  h2 {
    color: var(--color-primary);
    font-size: 3.6rem;
    margin: 0px;
  }

  @media only screen and (max-width: 788px) {
    padding: 1.6rem 0;
  }

  @media only screen and (max-width: 620px) {
    margin-bottom: 0px;
    
    h2 {
      font-family: var(--font-body);
      font-size: 2rem;
      font-weight: 600;
      max-width: 225px;
    }
  }
`

interface AccordionProps {
    title: string,
    content: string,
    html?: boolean
}

export const MedicareAccordion: FC<AccordionProps> = ({title, content, html = false}) => {
    const toggleAccordion = el => el.target.closest('.accordion').classList.toggle('active');
    return (
        <Wrapper className="accordion">
            <MedicareAccordionTitle className="title" onClick={toggleAccordion}>
                <h2>{title}</h2>
            </MedicareAccordionTitle>
            <Content className="content">
                {(!html) ? (
                    <p>{content}</p>
                ) : (
                    <p dangerouslySetInnerHTML={{__html: content}}/>
                )}
            </Content>
        </Wrapper>
    )
};

export const MedicareCardText = styled.p`
  p {
    font-weight: 400;
    line-height: 140%;
  }
`;

export const MedicareCtaTitle = styled.div`
  font-family: 'Open Sans', Arial, Helvetica, sans-serif;
  font-weight: 600;
  font-size: 32px!important;
  line-height: 140%;
  color: #4D4D4D;
`;

interface MedicareMedialProps {
    color: string
    children: ReactNode
}

export const MedicareMedial: FC<MedicareMedialProps> = ({ color, children }) => {
    const columnCount = (children?.length > 2) ? 'three-columns' : 'two-columns';
    useEffect(() => {
        fadeIn('.medial')
    }, []);
    return (
        <MedialWrapper className={`medial ` + color + ` ` + columnCount}>
            <MedicareInner>
                {children}
            </MedicareInner>
        </MedialWrapper>
    )
}

const MedicareInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0 2.1rem;

  background-color: var(--color-light);
  border-radius: 4px;
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.1);

  opacity: 0;
  transform: translateY(100%);
  transition: all 0.56s linear;

  .animate & {
    opacity: 1;
    transform: translateY(0);
  }

  .two-columns & {
    padding: 8.3rem 12.0rem 8.3rem 12.0rem;

    @media only screen and (max-width: 1460px) {
      padding: 5.5rem 12.8rem 5.5rem 10.3rem;
    }

    @media only screen and (max-width: 788px) {
      padding: 4rem 2.1rem;
    }
  }

  .three-columns & {
    padding: 4rem 9.6rem;

    @media only screen and (max-width: 1280px) {
      padding: 4rem 2.1rem;
    }
  }

  h3 {
    color: var(--color-primary);
    line-height: 110%;
    margin: 0px;
    letter-spacing: 0.02em;

    &:last-of-type {
      margin-bottom: 2.4rem;
    }
  }

  @media only screen and (max-width: 1024px) {
    display: block;
    padding: 2.1rem 1.3rem;
    text-align: center;

    p {
      margin-bottom: 1.3rem;
      margin-top: 1.3rem;
    }
  }
`
