import React from 'react';


import '../styles/Project.css';

/*
const styles ={
    projectStyle:{
        border:'4px solid #424642',
        backgroundColor:'#F3F4ED',
        margin:'10px',
        width:'40%',
        position:'relative',
    },
    projectImgStyle:{
        width:'100%',
        opacity:'.2',
    },
    projectOverlayStyle:{
        position:'absolute',
        bottom:'5%',
        padding:'5px',
        backgroundColor:'#424642',
        color:'#C06014'
    }
}
*/
function Project(props){
    return (
        <div className='project' onClick={()=>{window.open(props.url);console.log(props.url)}}>
            <img className='projectImg' alt ={props.title} src={props.img}></img>
            <div className='projectOverlay'>
                <h2>{props.title}</h2>
            </div>
            
        </div>
    );
}
export default Project