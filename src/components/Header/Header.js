// @flow
import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header>
      <h1>
        <span className="secondary">Cathleen</span> Ghenne
      </h1>
      <h2>
        <span className="secondary">Front-End</span> Engineer
      </h2>
    </header>
  );
};

Header.displayName = 'Header';

export default Header;
