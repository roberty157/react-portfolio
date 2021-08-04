import React from 'react';
import '../styles/Main.css';

import AboutMe from './AboutMe';
import Resume from './Resume';
import Contact from './Contact';
import Portfolio from './Portfolio';

function Main({page}){

    if(page ==='About Me'){
        return (
            <div>
                <h1>About Me</h1>
                <AboutMe />
            </div>
        
        );
    }
    else if(page === 'Portfolio'){
        return(
            <div>
                <h1>Portfolio</h1>
                <Portfolio />
            </div>
            
        );
    }
    else if(page==='Contact'){
        return(
            <div>
                <h1>Contact</h1>
                <Contact />
            </div>
            
        );
    }
    else{
        return (
            <div>
                <h1>Resume</h1>
                <Resume/>
            </div>
            
        );
    }
    
}
export default Main