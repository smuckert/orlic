import React from 'react';

import { RichText } from 'prismic-reactjs';

import './index.scss';

const Footer = ({ footerData }) => {
  let data;
  let title;
  let footerContent;
  let renderColumns;
  let backgroundColor;
  let textColor;

  if (footerData.length > 0) {
    data = footerData[0].data;
    title = data.title[0].text;
    footerContent = data.footer_content;
    backgroundColor = data.background_color;
    textColor = data.text_color;

    renderColumns = footerContent.map((t, i) => {
      return (
        <div className="column" key={t + i}>
          {RichText.render(t.text_column)}
        </div>
      )
    })
  }
  
  return (
    <div className="footer" style={{ color: textColor, background: backgroundColor }}>
      <h2>{title}</h2>
      <div className="column-wrapper">
        {renderColumns}
        <div className="column">
          <p>Connect</p>
          <p>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: textColor }}>Twitter</a>
          </p>
          <p>
            <a href="https://www.medium.com" target="_blank" rel="noopener noreferrer" style={{ color: textColor }}>Medium</a>
          </p>
          <p>
            <a href="https://www.LinkedIn.com" target="_blank" rel="noopener noreferrer" style={{ color: textColor }}>LinkedIn</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer;