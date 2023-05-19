import React, { useEffect } from "react";
import { Global } from "@emotion/react";
import { graphql } from "gatsby";

// Query
import { useBEPhotoQuery } from "../../hooks/useBEPhotoQuery"

// Styles
import {
  Wrapper,
  ComponentStyles
} from "./styles"

// Scripts
import { getRandomPhotos } from "../../static/scripts/global"

// Components

const RelatedContent = () => {
  // define the photos from the query
  let { photos } = useBEPhotoQuery();

  // randomize the photo array
  photos = getRandomPhotos(photos.nodes);

  useEffect(() => {
    let delay = setInterval(()=>{
      const container = document.querySelector('.be-related-link-container');
      const links = document.querySelectorAll('.be-related-link');

      let doesExist = (container) ? true : false;

      if (doesExist) {
        container?.classList.add('cards, related-content');

        Object.keys(links).map((i) => {
          const link = links[i];
          const heading = link.querySelector('.headline');

          let images = link.querySelectorAll('.image');
          images = Object.keys(images);

          if (images.length > 0) {
            for (let i=0; i > images.length; i++) {
              const image = images[i];
              image.parentNode.removeChild(image);
            }
          } else {
            const newImage = document.createElement('img');
            newImage.src = photos[i].featuredImage.node.sourceUrl;

            newImage.classList.add('image');
            link.insertBefore(newImage, heading);
          }

          link.classList.add('card');
        });
      }
    }, 5);
  }, [])

  return (
    <Wrapper>
      <Global styles={ComponentStyles} />
      <div id="relatedContent" className="be-ix-link-block related-content" />
    </Wrapper>
  )
}

export default RelatedContent;
