
import React from 'react';
import Project from './Project';
//5 projects
//import '../styles/Main.css';
//import profile from '../images/profilePhoto.jpg'

import recipididaImg from '../images/RecipidiaScreenshot.png';
import nrkImg from '../images/NRKgame.png';
import techblogImg from '../images/tech-blog.png';
import weatherdashImg from '../images/weatherDashSnap.png';
import workouttrackerImg from '../images/workout-tracker.png';
import budgettrackerImg from '../images/budgetTracker.png';
const ProjectList =[
  {
    id:0,
    title:'Recipidia',
    tech:'jQuery/HTML',
    img:recipididaImg,
    url:'https://roberty157.github.io/Recipidia/'
  },
  {
    id:1,
    title: 'NRK Game',
    tech:'PhaserJS',
    img:nrkImg,
    url:'https://project2nrk.herokuapp.com/'
  },
  {
    id:2,
    title: 'Tech Blog',
    tech:'NodeJS',
    img:techblogImg,
    url:'https://sheltered-badlands-81371.herokuapp.com/'
  },
  {
    id:3,
    title:'Weather Dashboard',
    tech:'jQuery',
    img:weatherdashImg,
    url:'https://roberty157.github.io/weather-dashboard/'
  },
  {
    id:4,
    title:'Workout Tracker',
    tech:'MongoDB',
    img:workouttrackerImg,
    url:'https://hidden-brook-12496.herokuapp.com/?id=60f5f67f24786d00152cc2a1'
  },
  {
    id:5,
    title:'Budget Tracker',
    tech:'PWA/mongoose',
    img:budgettrackerImg,
    url: 'https://sleepy-dawn-20460.herokuapp.com/'
  },
]

const styles ={
  portfolioStyle:{
    display:'flex',
    flexWrap:'wrap'
  }
}
function Portfolio(){
    return (
        <div style={styles.portfolioStyle}>
          {
            ProjectList.map((project)=>(
              <Project key={project.id} title={project.title} description={project.tech} img={project.img} url={project.url}/>
            ))
          }
          
            
        </div>
        
    );
}
export default Portfolio
/*
<Project title={'NRK Game'}/>
<Project title={'Recipidia'}/>
<Project title={'Tech Blog'}/>
<Project title={'Weather Dashboard'}/>
<Project title={'Workout Tracker'}/>
<Project title={'Budget Tracker'}/>
*/