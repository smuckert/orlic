import React from 'react';

import { RichText } from 'prismic-reactjs';

import './index.scss';

const Hero = ({ heroData }) => {
  let data;
  let text = [];
  let video = '';
  let contact = [];
  let contactPhone;
  let contactMail;

  if (heroData.length > 0) {
    data = heroData[0].data;
    text = data.hero_text;
    video = data.background_video.url;
    contact = data.contact;
    contactPhone = data.contact[0].info;
    contactMail = data.contact[1].info;
  }

  console.log(data, contact);
  return (
    <div className="hero">
      <video src={video}  autoPlay muted playsInline loop />
      <div className="text-wrapper">
        <div className="text">
          {RichText.render(text)}
        </div>
        <div className="contact">
          <p className="contact-item">{contactPhone}</p>
          <a className="contact-item" href={`mailto:${contactMail}`}><p>{contactMail}</p></a>
        </div>
      </div>
    </div>
  )
}

export default Hero;