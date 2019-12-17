import React from 'react';

import { RichText } from 'prismic-reactjs';

import './index.scss';

const Footer = ({ footerData }) => {
  let data;
  let title;
  let footerContent;
  let renderColumns;

  if (footerData.length > 0) {
    data = footerData[0].data;
    title = data.title[0].text;
    footerContent = data.footer_content;

    renderColumns = footerContent.map((t, i) => {
      return (
        <div className="column" key={t + i}>
          {RichText.render(t.text_column)}
        </div>
      )
    })
  }
  
  return (
    <div className="footer">
      <h2>{title}</h2>
      <div className="column-wrapper">
        {renderColumns}
      </div>
    </div>
  )
}

export default Footer;