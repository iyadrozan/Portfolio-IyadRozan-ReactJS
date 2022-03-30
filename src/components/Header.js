import React from 'react';
import logo from '../Asset/Self confidence-bro.png';
import Typed from 'react-typed';

function Header() {
  return (
    <>
      <div class="header g-2">
        <div class="container">
          <div class="row">
            <div class="col-6">
              <h1>Hi. I am</h1>
              <h1>IyadRozan</h1>
              <Typed strings={['Web Developer', 'Web Design']} typeSpeed={100} backSpeed={60} loop />
              <br />
              <br />
              <button>Contact Me</button>
            </div>
            <div class="col-6">
              <img src={logo} alt="Ilustration" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
