import React from 'react';

import './index.scss';

const Case = ({ caseData }) => {
  const data = caseData.data;
  const title = data.case_title[0].text;
  const media = data.media.url;
  const link = data.link;

  console.log(data);

  console.log(data.media.name.endsWith('mp4'));

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="case">
      <div className="media-wrapper">
        {data.media.name.endsWith('mp4') ? (
          <video src={media} autoPlay muted playsInline loop />
          ) : (
          <img src={media} alt="case" />
        )}
      </div>      
      <h3>{title}</h3>
    </a>
  )
}

export default Case;