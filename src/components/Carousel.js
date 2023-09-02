// Libraries
import React from 'react';
import { Slide } from 'react-slideshow-image';
import { NavLink } from "react-router-dom";

// Styles
import 'react-slideshow-image/dist/styles.css';

// const spanStyle = {
//     padding: '20px',
//     background: '#efefef',
//     color: '#000000'
// }

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '65vh'
}

export function Slideshow({data, showCase = false}) {
  return (
    <div className="slideContainer">
      <Slide>
       {data.map((d, index)=> (
          showCase ?    
          <NavLink key={index} to={"/portfolio/"+d.page}>
            <div className="Slide" style={{ ...divStyle, 'backgroundImage': `url(${d.url})` }}>
              {/* <span style={spanStyle}>{d.caption}</span> */}
            </div>
          </NavLink>:
        <div key={index}>
            <div className="Slide" style={{ ...divStyle, 'backgroundImage': `url(${d.url})` }}>
              {/* <span style={spanStyle}>{d.caption}</span> */}
            </div>
          </div>
        ))} 
      </Slide>
    </div>
  )
}
