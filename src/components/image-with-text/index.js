import React from 'react';

import { RichText } from 'prismic-reactjs';

import './index.scss';

const ImageWithText = ({ imageWithTextData }) => {
  const data = imageWithTextData.data;
  const bgColor = data.background_color;
  const textColor = data.text_color;
  const image = data.image.url;
  const title = data.title[0].text;
  const description = data.description_text;

  console.log(textColor);
  
  return (
    <div className="image-with-text" style={{ background: bgColor, color: textColor }}>
      <img src={image} alt="showcase image" />
      <div className="headline-wrapper">
        <h2>{title}</h2>
        {RichText.render(description)}
      </div>
    </div>
  )
}

export default ImageWithText;