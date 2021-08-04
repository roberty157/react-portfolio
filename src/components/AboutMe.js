import React from 'react';

//import '../styles/Main.css';
import profile from '../images/profilePhoto.jpg'
const styles ={
    AboutMeStyle: {
      paddingTop:'20px',
      color:'#F3F4ED',
      lineHeight: '2'
      
    },
    profilePhotoStyle:{
        width:'33.5vw'
    }
  }
  
function AboutMe(){
    return (
        <div>
            <img style={styles.profilePhotoStyle} alt="profile" src={profile}></img>
            <div style={styles.AboutMeStyle}>
                        Full Stack web developer leveraging an economics background to build web applications. Graduate of UCI Division of Continuing Education, earning a certificate in full stack web development and learned skills in JavaScript,HTML, and MongoDB. My goal is to use my expertise to provide an elevated user experience when using the internet. A persistent problem solver who enjoys the challenges of development as well as an effective communicator.
            I worked recently on developing a platformer game with a team of three that registered users and collected high scores to form a leaderboard. I’m looking forward to applying my skills to enable the web to improve people’s lives. 

                    </div>
        </div>
        
    );
}
export default AboutMe