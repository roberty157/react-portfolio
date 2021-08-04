import React from 'react';
import '../styles/Header.css';


function Header({setPage}) {
    return (
      <header>
          <div id="name">
              <h1>Robert Yeam</h1>
          </div>
          <nav>
              <a href="#aboutMe" onClick={() => setPage('About Me')}>About Me</a>
              <a href="#portfolio" onClick={() => setPage('Portfolio')}>Portfolio</a>
              <a href="#contact" onClick={() => setPage('Contact')}>Contact</a>
              <a href="#resume" onClick={() => setPage('Resume')}>Resume</a>
          </nav>
          
      </header>
    );
  }
  
  export default Header;