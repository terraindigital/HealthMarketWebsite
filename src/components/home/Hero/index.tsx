import React, {FC} from "react"
import {getImage} from "gatsby-plugin-image"
import {useHeroQuery} from "../../../hooks/useHeroQuery"
import {StyledImg, Wrapper, HeaderWrapper} from "./styles";
import {IGatsbyImageData} from "gatsby-plugin-image/dist/src/components/gatsby-image.browser";

const Hero: FC = () => {
    const {
        wpPage: {ACF_HomePage: data},
    } = useHeroQuery()

    const imageData = getImage(data.heroImage.localFile)

    return (
        <Wrapper>
            <StyledImg image={imageData as IGatsbyImageData} alt="Hero Image"/>
            <HeaderWrapper>
                <h1>{data.heroText}</h1>
            </HeaderWrapper>
            <p>{data.updateTime}</p>
        </Wrapper>
    )
}

export default Hero
