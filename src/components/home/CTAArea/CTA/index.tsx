import React, {FC} from "react"
import {Link} from "gatsby"
import {IGatsbyImageData} from "gatsby-plugin-image/dist/src/components/gatsby-image.browser";
import { CTAImage, CTAImageText, CTAImageTextWrapper, StyledImg } from "./styles";

interface Props {
    image: IGatsbyImageData;
    link: string;
    text: string;
}

const CTA: FC<Props> = ({image, link, text}) => (
    <CTAImage>
        <StyledImg image={image} alt="CTA Image"/>
        <Link to={link}>
            <CTAImageTextWrapper>
                <CTAImageText>{text}</CTAImageText>
            </CTAImageTextWrapper>
        </Link>
    </CTAImage>
)

export default CTA
