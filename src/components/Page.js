// Components
import { DesignStage, CollectionExample } from "./Carousel"
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
    const activeNavItemPos = 135;

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

// let navData = [{name: "Summary", active: true, key: 'summary'}, 
//             //    {name: "User Research", active: false}, 
//                {name: "Sketching", active: false}, 
//                {name: "Prototyping", active: false}, 
//                {name: "Development", active: false}, 
//                {name: "Testing", active: false}];

function PageNavigation({data}) {

    useEffect(() => {

        let activeIndex = 0;

        updateRotation(activeIndex, data.length);

        // Update active nav item and rotate it to the top
        d3.selectAll('#nav .item').on('click', function() {
            activeIndex = +d3.select(this).property('id');
            console.log(activeIndex);

            d3.select('#nav .active').classed("active", false); // remove active from previous active selection
            d3.select(this).classed('active', true); // add active to new active selection

            updateRotation(activeIndex, data.length);

            // Bring appropriate content into view
            d3.selectAll('#main-content .item').classed("active", false);
            d3.select(`#main-content .item.item-${activeIndex}`).classed("active", true);
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
            <div id="main-content">	
                <div className="Page-Header">
                    <h2 className="Project-Title">{pageData.title}</h2>
                    <SideBarRight d={pageData}/>
                </div>

                {designProcess.map((datum, i) => {
                    return(
                        <div className={datum.active ? `item item-${i} active`: `item item-${i}`} id={i} key={i + "-content"}>			
                            <h3>{datum.name}</h3>

                            {datum.descr.map((p) => {
                                return(<p>{p}</p>)
                            })
                            }
                        </div>
                    )
                    })
                }
            </div>

            {/* <div className="Project-Main">
                <div className="Page-Header">
                    <h2 className="Project-Title">{d.title}</h2>
                    <SideBarRight d={d}/>
                </div> */}
                {/* <div className="Project-Information"> */}
                    {/* <div className="Project-Text "> */}
                    
                        {/* {
                        d.summary  ? 
                        <div className="Project-Summary">
                            <h3>summary</h3>
                            {
                                d.summary.map((datum, i) => {
                                    return <p key={i}>{datum}</p>
                                })
                            }
                        </div>: <></>
                        }                        */}
                        {/* {d.data  ? 
                            <div className="Project-Data">
                            <h3>data</h3>
                                {
                                    d.data.map((datum, i) => {
                                        return <p key={i}>{datum}</p>
                                    })
                                }
                            </div>: <></>
                        } */}
                        {/* {d.methodology ? 
                            <div className="Project-Methodology">
                                <h3>methodology</h3>
                                {
                                    d.methodology.map((datum, i) => {
                                        return <p key={i}>{datum}</p>
                                    })
                                }
                            </div>: <></>
                        } */}
                        {/* {
                        d.artistStatement  ? 
                        <div className="Project-Artist-Statement">
                                <h3>artist statement</h3>
                                {
                                    d.artistStatement.map((datum, i) => {
                                        return <p key={i}>{datum}</p>
                                    })
                                }
                            </div>: <></>
                        } */}
                    {/* </div> */}
                    {/* {d.designProcess ? 
                        <div className="Project-Design-Process">
                            <h3>design process</h3>

                            {
                            d.designProcess.descr  ? 
                            <div className="Project-Description">
                                <div className="Main-Image">
                                    <img src={d.mainImage.url} alt={d.mainImage.alt}></img>
                                </div>
                                <div>
                                    {
                                        d.designProcess.descr.map((datum, i) => {
                                            return <p key={i}>{datum}</p>
                                        })
                                    }
                                </div>
                                
                            </div>: <></>
                            }
                            <DesignStage descr="design research" stage={d.designProcess.research} />
                            <DesignStage descr="initial sketches" stage={d.designProcess.sketches} />
                            <DesignStage descr="prototype" stage={d.designProcess.prototype} />
                            <DesignStage descr="final design" stage={d.designProcess.final} />
                        </div> : 
                        <div className="Project-Collection">
                            {
                                d.collection.map((datum, i) => {
                                    return <CollectionExample collection={datum} key={i}/>
                                })
                            }    
                        </div>} */}
                {/* </div>                */}
            {/* </div> */}
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

