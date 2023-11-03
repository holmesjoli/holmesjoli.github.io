// Libraries
import React from 'react';
import { Slide } from 'react-slideshow-image';
import { NavLink } from "react-router-dom";

// Styles
import 'react-slideshow-image/dist/styles.css';

export function MainImage({data}) {

  return (
       data.map((d, index)=> (
        <div className="Main-Image" key={index}>
          <iframe src={d.url} width='100%' height='400px' frameBorder="0"/>
          <h5 className="Item-Caption">{d.alt}</h5>
          {d.link ? <a href={d.link}>Link to application</a>: <></>}
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
              <h2 className="Item-Title No-Hover">{d.title}</h2>
              <h3 className="Item-Year">{d.year}</h3>
              <img className="Item-Image" src={d.mainImage.url} alt={d.mainImage.alt} />
            </div>
          </NavLink>:
            <div key={index} className="Slide">
              // <img className="Item-Image" src={d.url} alt={d.alt} />
              // <h5 className="Item-Caption">{d.alt}</h5>
              // {d.link ? <a href={d.link}>Link to application</a>: <></>}
            </div>
        ))} 
      </Slide>
    </div>
  )
}

export function DesignStage({title, stage, showCase}) {

  return(
    stage ? 
      <div className={"Project-"+{title}+" SlideShow"}>
          <h4>{title}</h4>
          {
          stage.images.filter(e => e.size === "small").length > 0? 
          <Slideshow data={stage.images.filter(e => e.size === "small")}/>: <></>
          }
          {
          stage.images.filter(e => e.size === "big").length > 0? 
          <MainImage data={stage.images.filter(e => e.size === "big")}/>: <></>
          }
      </div>: <></>
  )
}
