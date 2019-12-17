import React from 'react';

import './index.scss';

const Case = ({ caseData }) => {
  const data = caseData.data;
  const title = data.case_title[0].text;
  const image = data.media.url;

  return (
    <div className="case">
      <img src={image} alt="case" />
      <h3>{title}</h3>
    </div>
  )
}

export default Case;