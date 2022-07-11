import React from "react"
import styled from "@emotion/styled";
import {useCTAAreaQuery} from "../../../hooks/useCTAAreaQuery"
import Cta from "./CTA"

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  max-width: 1180px;
  margin: 20px auto 0;
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const CtaArea = () => {
    const {cta} = useCTAAreaQuery()

    return (
        <Wrapper>
            {new Array(4).fill("").map((element, i) => (
                <Cta
                    key={i}
                    image={cta.ACF_HomePage[`cta${i + 1}Image`].localFile.childImageSharp.gatsbyImageData}
                    link={cta.ACF_HomePage[`cta${i + 1}Link`]}
                    text={cta.ACF_HomePage[`cta${i + 1}Text`]}
                />
            ))}
        </Wrapper>
    )
}

export default CtaArea
