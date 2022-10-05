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

      let doesExist = (container !== undefined) ? true : false;

      if (doesExist) {
        container?.classList.add('cards');

        Object.keys(links).map((i) => {
          const link = links[i];
          const heading = link.querySelector('.headline');
          const image = link.querySelector('.image')

          if (!document.body.contains(image)) {
            const newImage = document.createElement('img');
            newImage.src = photos[i].featuredImage.node.sourceUrl;

            // filter through images and find three randoms

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
