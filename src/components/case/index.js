import React from 'react';

import { RichText } from 'prismic-reactjs';

import './index.scss';

const Case = ({ caseData, textColor }) => {
  const data = caseData.data;
  const title = data.case_title[0].text;
  const media = data.media.url;
  const link = data.link;
  const description = data.case_text;

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="case" >
      <div className="media-wrapper">
        {data.media.name.endsWith('mp4') ? (
          <video src={media} autoPlay muted playsInline loop />
          ) : (
          <img src={media} alt="case" />
        )}
      </div>
      <div className="description" style={{ color: textColor }}>
        {RichText.render(description)} 
      </div>
    </a>
  )
}

export default Case;