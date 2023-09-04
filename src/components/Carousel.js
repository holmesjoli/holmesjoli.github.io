// Libraries
import React from 'react';
import { Slide } from 'react-slideshow-image';
import { NavLink } from "react-router-dom";

// Styles
import 'react-slideshow-image/dist/styles.css';

export function MainImage({data}) {
  return (
       data.map((d, index)=> (
        <div key={index}>
          <img className="Item-Image" src={d.url} alt={d.alt} />
          <h5 className="Item-Caption">{d.alt}</h5>
        </div>
      )
    )
  )
}

export function Slideshow({data, showCase = false}) {
  return (
    <div className="slideContainer">
      <Slide>
       {data.map((d, index)=> (
          showCase ?
          <NavLink key={index} to={"/portfolio/"+d.page}>
            <div className="Slide">
              <h2 className="Item-Title">{d.title}</h2>
              <h3 className="Item-Year">{d.year}</h3>
              <img className="Item-Image" src={d.url} alt={d.alt} />
              <h5 className="Item-Caption">{d.alt}</h5>
            </div>
          </NavLink>:
            <div key={index} className="Slide">
              <img className="Item-Image" src={d.url} alt={d.alt} />
              <h5 className="Item-Caption">{d.alt}</h5>
            </div>
        ))} 
      </Slide>
    </div>
  )
}
