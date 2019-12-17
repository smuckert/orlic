import React from 'react';

import './index.scss';

const ImageWithText = ({ imageWithTextData }) => {
  const data = imageWithTextData.data;
  const bgColor = data.background_color;
  const image = data.image.url;
  const title = data.title[0].text

  return (
    <div className="image-with-text" style={{ background: bgColor }}>
      <img src={image} alt="showcase image" />
      <div className="headline-wrapper">
        <h2>{title}</h2>
      </div>
    </div>
  )
}

export default ImageWithText;