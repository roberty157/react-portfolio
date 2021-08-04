import React from 'react';

//href="../images/resume(2.0).pdf"
//onClick={window.open('../images/resume(2.0).pdf')}
import resume from '../images/resume.pdf';


const styles ={
    downloadStyle: {
      fontSize:'18px',
      color: '#F3F4ED'
      
    },
    
}
function Resume(){
    return (
        <div>
            <a  style={styles.downloadStyle} href={resume} target='_blank' rel="noreferrer">Download Resume</a>
            <figure>
                <figcaption>Front-End Skills</figcaption>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Bootstrap</li>
                    <li>React.js</li>
                    <li>jQuery</li>

                </ul>
            </figure>
            <figure>
                <figcaption>Back-End Skills</figcaption>
                <ul>
                    <li>Node.js</li>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                    <li>GraphQL</li>

                </ul>
            </figure>
        </div>
        
    );
}
export default Resume