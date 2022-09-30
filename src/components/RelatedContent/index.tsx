import React, { useEffect } from "react";
import { Global } from "@emotion/react";

// Styles
import {
  Wrapper,
  ComponentStyles
} from "./styles"

// Scripts

// Components

const RelatedContent = () => {

  useEffect(() => {
    let delay = setInterval(()=>{
      const container = document.querySelector('.be-related-link-container');
      const links = document.querySelectorAll('.be-related-link');

      let doesExist = (container !== undefined) ? true : false;

      if (doesExist) {
        container?.classList.add('cards');

        Object.keys(links).map((i) => {
          const link = links[i];
          const heading = link.querySelector('.headline');
          const image = link.querySelector('.image')

          if (!document.body.contains(image)) {
            const newImage = document.createElement('img');
            newImage.src = "https://via.placeholder.com/384x294";
            newImage.classList.add('.image');
            link.insertBefore(newImage, heading);
          }

          link.classList.add('card');
          clearInterval(delay);
        })
      }
    }, 50);
  }, [])

  return (
    <Wrapper>
      <Global styles={ComponentStyles} />
      <div id="relatedContent" className="be-ix-link-block related-content" />
    </Wrapper>
  )
}

export default RelatedContent;
