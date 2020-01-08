import React, { useRef, useState } from 'react';

import './index.scss';

const ComingSoon = ({ setUsername, setPassword }) => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const [name, setName] = useState('');
  const [pw, setPw] = useState('');

  const onNameChange = () => {
    setName(usernameRef.current.value);
  }

  const onPwChange = () => {
    setPw(passwordRef.current.value);
  }

  const onLoginClick = () => {
    setUsername(name);
    setPassword(pw);
  }

  const onEnter = (e) => {
    if (e.key === 'Enter') {
      onLoginClick();
    }
  }
  
  return (
    <div className="coming-soon">
      <h1>David Orlic</h1>
      <div className="login">
        <input ref={usernameRef} onKeyPress={onEnter} onChange={onNameChange} placeholder="username"></input>
        <input ref={passwordRef} onKeyPress={onEnter} onChange={onPwChange} type="password" placeholder="password"></input>
        <div className="divider">
          <div className="button" onClick={onLoginClick}>Log In</div>
        </div>
      </div>
    </div>
  )
}

export default ComingSoon;