import React from 'react';

function Navbar() {
  return (
    <>
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark">
          <div class="container">
            <a class="navbar-brand" href="#">
              IyadRozan
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <a class="nav-link" aria-current="page" href="#">
                  Home
                </a>
                <a class="nav-link" href="#">
                  About Me
                </a>
                <a class="nav-link" href="#">
                  Experience & Education
                </a>
                <a class="nav-link" href="#">
                  Portfolio
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
