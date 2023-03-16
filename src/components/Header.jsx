import React from 'react';
import { GiWorld } from 'react-icons/gi';

function Header() {
  return (
    <div className="world__info world__container">
      <GiWorld className="world-map" />
      <div>
        <h2 className="country__name">World</h2>
        <div className="country__facts">
          <p className="country__population">7.888 billion</p>
          <p className="country__continent">682,048,548</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
