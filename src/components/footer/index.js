import React, { useRef, useEffect } from 'react';

import { RichText } from 'prismic-reactjs';

import './index.scss';

const Footer = ({ footerData }) => {
  let data;
  let title;
  let footerContent;
  let renderColumns;
  let backgroundColor;
  let textColor;
  let mediumLink;
  let twitterLink;
  let linkedinLink;
  const footerRef = useRef(null);

  if (footerData.length > 0) {
    data = footerData[0].data;
    title = data.title[0].text;
    footerContent = data.footer_content;
    backgroundColor = data.background_color;
    textColor = data.text_color;
    twitterLink = data.footer_links[0].link_item;
    mediumLink = data.footer_links[1].link_item;
    linkedinLink = data.footer_links[2].link_item;

    renderColumns = footerContent.map((t, i) => {
      return (
        <div className="column" key={t + i} style={{ color: textColor }}>
          {RichText.render(t.text_column)}
        </div>
      )
    })
  }

  useEffect(() => {
    let elems = footerRef.current.querySelectorAll('a');

    if (elems) {
      for (var i = 0; i < elems.length; i++) {
        elems[i].style.color = textColor;
      }
    }

  }, [footerData])
  
  return (
    <div className="footer" style={{ color: textColor, background: backgroundColor }} ref={footerRef}>
      <h2>{title}</h2>
      <div className="column-wrapper">
        {renderColumns}
        <div className="column">
          {/* <p>Connect</p> */}
          <p>
            <a href={twitterLink} target="_blank" rel="noopener noreferrer" style={{ color: textColor }}>Twitter</a>
          </p>
          <p>
            <a href={mediumLink} target="_blank" rel="noopener noreferrer" style={{ color: textColor }}>Medium</a>
          </p>
          <p>
            <a href={linkedinLink} target="_blank" rel="noopener noreferrer" style={{ color: textColor }}>LinkedIn</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer;