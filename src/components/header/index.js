import React from 'react';

import './index.scss';

const Header = ({ headerData }) => {
  let data;
  let logo = '';

  if (headerData.length > 0) {
    data = headerData[0].data;
    logo = data.logo.url;
  }
  
  return (
    <div className="header">
      <img className="logo" src={logo} alt="logo" />
    </div>
  )
}

export default Header;
