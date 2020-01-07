import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import './index.scss';

const Header = ({ headerData }) => {
  let data;
  let logo = '';
  let iconColor;

  if (headerData.length > 0) {
    data = headerData[0].data;
    logo = data.logo.url;
    iconColor = data.icon_color;

    console.log(iconColor);
  }
  
  return (
    <div className="header">
      <img className="logo" src={logo} alt="logo" />
      <div className="icons">
        <a href="https://www.whatsapp.com" rel="noopener noreferrer" target="_blank" >
          <FontAwesomeIcon color={iconColor} icon={faWhatsapp}></FontAwesomeIcon>
        </a>
        {/* <a href="https://www.twitter.com" rel="noopener noreferrer" target="_blank">
          <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
        </a> */}
        <a href="https://www.linkedin.com" rel="noopener noreferrer" target="_blank">
          <FontAwesomeIcon color={iconColor} icon={faLinkedin}></FontAwesomeIcon>
        </a>  
      </div>
    </div>
  )
}

export default Header;
