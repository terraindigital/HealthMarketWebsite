import React from "react";
import { Global } from "@emotion/react";

// Styles
import {
  Wrapper,
  ComponentStyles
} from "./styles"

// Scripts
// const filterRelatedContent = (data) => {
//   let output = '';

//   Object.keys(data).map((i, el) => {
//     const content = data[i];

//     output += '<a target="_blank" href="';
//     output += content.url;
//     output += '" class="card">';
//     // output += '<div class="card-header">';
//     // output += '<img src="https://via.placeholder.com/384x294" placeholder="BLURRED" alt="" />';
//     // output += '</div>';
//     output += '<div class="card-content">';
//     output += '<h4>';
//     output += content.anchor_text;
//     output += '</h4>';
//     output += '<p>';
//     output += content.meta_desc;
//     output += '</p>';
//     output += '</div>';
//     output += '</a>';
//   });

//   return output;
// }

// Components
import Cards from "../Cards";

const RelatedContent = () => {
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

  return (
    <Wrapper>
      <Global styles={ComponentStyles} />
      <div id="relatedContent" className="be-ix-link-block related-content" />
    </Wrapper>
  )
}

export default RelatedContent;