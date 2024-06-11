// Components
import Navigation from "./Navigation";
import Footer from "./Footer";
import SideBarRight from "./SideBarRight";
import * as d3 from 'd3';

import { useEffect } from "react";

// Update current placement of all navigation items based on current active item
// TODO: persistent rotational direction

// Modified from https://codepen.io/freyrh/pen/WXzGGj
function updateRotation(activeIndex, nItem) {

    // TODO: programmatically decide increment value
    const rotaIncrement = 360/nItem;

    // console.log(rotaIncrement);
    // Control where on the wheel active nav item is displayed
    const activeNavItemPos = 90;

    let rotaVal = 0, rotaValInverse = 0, currIndex;

    // Find the offset value for all items based on active nav item
    var rotaOffset = activeIndex * rotaIncrement;

    // Iterate through all nav items and update their position/rotation
    d3.selectAll('#nav .item').each(function(d, i) {

        currIndex = +d3.select(this).property("id");
        // calculate current rotational value of item
        rotaVal = rotaIncrement*currIndex-rotaOffset+activeNavItemPos;

        // Inverse rotaVal to counter-rotate text/image in relation to nav item parent
        rotaValInverse = (rotaIncrement*currIndex-rotaOffset+activeNavItemPos)*(-1);
    
        d3.select(this).style('transform', 'rotate('+rotaVal+'deg)');
        d3.select(this).select('.sub').style('transform', 'rotate('+rotaValInverse+'deg)');
    });
}


function PageNavigation({data}) {

    useEffect(() => {

        let activeIndex = 0;

        updateRotation(activeIndex, data.length);

        // Update active nav item and rotate it to the top
        d3.selectAll('#nav .item').on('click', function() {
            activeIndex = +d3.select(this).property('id');

            d3.select('#nav .active').classed("active", false); // remove active from previous active selection
            d3.select(this).classed('active', true); // add active to new active selection

            updateRotation(activeIndex, data.length);

            // Bring appropriate content into view
            d3.selectAll('#Main-Content .item').classed("active", false);
            d3.select(`#Main-Content .item.item-${activeIndex}`).classed("active", true);
        })

    }, []);

    return (
        <div id="nav">
            <div id="nav-bg"><div className="inner"></div></div>
            <div id="nav-inside">
                {data.map((datum, i) => {
                    return(
                        <div className={datum.active ? `item item-${i} active`: `item item-${i}`} id={i} key={i + "-design-phase"}>
                            <div className="sub">				
                                <h3>{datum.name}</h3>
                            </div>
                        </div>
                    )
                    })
                }
            </div>
        </div>
    )
}

export function Page({pageData}) {

    let designProcess = pageData.designProcess.map((d, i) => {d.id = i; return(d)})
    .map((d, i) => {i === 0 ? d.active = true : d.active = false; return(d)});

    return(
        <div className="Page">
            <PageNavigation data={designProcess}/>
            <div id="Main-Content">	
                <div className="Page-Header">
                    <h2 className="Project-Title">{pageData.title}</h2>
                    <SideBarRight d={pageData}/>
                </div>

                {designProcess.map((datum, i) => {
                    return(
                        <div className={datum.active ? `item item-${i} active`: `item item-${i}`} id={i} key={i + "-content"}>			
                            <h3>{datum.name}</h3>
                            <div className="Content">
                                <div className="Visual-Content">
                                    {datum.images ? 
                                        <div>
                                            <img src={datum.images[0].url} alt={datum.images[0].alt}/>
                                            <h5 className="Item-Caption">{datum.images[0].alt}</h5>
                                        </div>: 
                                        <video playsInline autoPlay muted loop controls src={datum.videos[0].url} type="video/mp4"/> }
                                </div>
                                <div className="Written-Content">
                                    {datum.descr.map((p, i) => {
                                        return(<p key={i + "-paragraph"}>{p}</p>)
                                    })
                                    }
                                </div>
                            </div>
                        </div>
                    )
                    })
                }
            </div>
        </div>
    )
}

export function PortfolioPage({d}) {

    return(
        <div className="Main">
            <Navigation />
            <Page pageData={d}/>
            <Footer/>
        </div>
    )
}

