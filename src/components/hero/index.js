import React from 'react';

import { RichText } from 'prismic-reactjs';

import './index.scss';

const Hero = ({ heroData }) => {
  let data;
  let text = [];
  let video = '';
  let contact = [];
  let textColor;
  let contactPhone;
  let contactMail;

  if (heroData.length > 0) {
    data = heroData[0].data;
    text = data.hero_text;
    video = data.background_video.url;
    contact = data.contact;
    textColor = data.text_color;
    contactPhone = data.contact[0].info;
    contactMail = data.contact[1].info;
  }

  return (
    <div className="hero">
      <video src={video} autoPlay muted playsInline loop />
      <div className="text-wrapper">
        <div className="text" style={{ color: textColor }}>
          {RichText.render(text)}
        </div>
        <div className="contact">
          <p className="contact-item" style={{ color: textColor }}>{contactPhone}</p>
          <a className="contact-item" href={`mailto:${contactMail}`} style={{ color: textColor }}><p>{contactMail}</p></a>
        </div>
      </div>
    </div>
  )
}

export default Hero;