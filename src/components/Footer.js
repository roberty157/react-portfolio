import React from 'react';
//import '../styles/Header.css';

import LinkedinIcon from '../images/Linkedin.png';
import GithubIcon from '../images/GitHubIcon.png';
const styles ={
    footerStyles:{
        display:'flex',
        justifyContent:'center',
        backgroundColor:'#536162'
    },
    imgStyles:{
        color:'black',
        padding:'10px',
        height:'40px',
    }
}
function Footer() {
    return (
      <footer style={styles.footerStyles}>
          <a href="https://www.linkedin.com/in/robert-yeam/" target="_blank"><img style={styles.imgStyles} alt='Linkedin' src={LinkedinIcon}></img></a>
          <a href="https://github.com/roberty157" target="_blank"><img style={styles.imgStyles} alt='GitHub' src={GithubIcon}></img></a>
      </footer>
    );
  }
  
  export default Footer;