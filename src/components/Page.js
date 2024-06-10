// Components
import { DesignStage, CollectionExample } from "./Carousel"
import Navigation from "./Navigation";
import Footer from "./Footer";
import SideBarRight from "./SideBarRight";
import * as d3 from 'd3';

import { useEffect } from "react";

// Update current placement of all navigation items based on current active item
// TODO: persistent rotational direction
function updateRotation(activeIndex) {

    // TODO: programmatically decide increment value
    const rotaIncrement = 60;
    // Control where on the wheel active nav item is displayed
    const activeNavItemPos = 135;

    let rotaVal = 0, rotaValInverse = 0, currIndex;

    // Find the offset value for all items based on active nav item
    var rotaOffset = activeIndex * rotaIncrement;

    // Bring appropriate content into view
    d3.select('.active').classed("active", false);
    d3.select('.item:nth-child('+activeIndex+')').classed("active", true);

    // Iterate through all nav items and update their position/rotation
    d3.selectAll('.item').each(function() {
        // console.log(this);

        currIndex = +d3.select(this).property('id') + 1;
        // calculate current rotational value of item
        rotaVal = rotaIncrement*currIndex-rotaOffset+activeNavItemPos;
        // Inverse rotaVal to counter-rotate text/image in relation to nav item parent
        rotaValInverse = (rotaIncrement*currIndex-rotaOffset+activeNavItemPos)*(-1);

        // d3.select(this).data('rotaVal', rotaVal);

        d3.select(this).style('transform', 'rotate('+rotaVal+'deg)');
        d3.select(this).select('.sub').style('transform', 'rotate('+rotaValInverse+'deg)');
    });
}

function PageNavigation() {

    useEffect(() => {

        var initActiveIndex = +d3.select('.item.active').property('id') + 1;
        d3.select('.item:nth-child('+initActiveIndex+')');
        updateRotation(initActiveIndex);

        // Update active nav item and rotate it to the top
        d3.selectAll('.item').on('click', function() {
            var activeIndex = +d3.select(this).property('id') + 1;
            // var lastActiveIndex = d3.select('.active').property('id') + 1;
            d3.select('.active').classed("active", false);
            d3.select(this).classed('active', true);

            updateRotation(activeIndex);
        })

    }, []);

    return (
        <div id="nav">
            <div id="nav-bg"><div className="inner"></div></div>
            <div id="nav-inside">
                <div className="item active" id="0">
                    <div className="sub">
                        <p>1</p>
                    </div>
                </div>
                <div className="item" id="1">
                    <div className="sub">				
                        <p>2</p>
                    </div>
                </div>
                <div className="item" id="2">
                    <div className="sub">
                        <p>3</p>
                    </div>
                </div>
                <div className="item" id="3">			
                    <div className="sub">				
                        <p>4</p>
                    </div>
                </div>
                <div className="item" id="4">
                    <div className="sub">
                        <p>5</p>
                    </div>
                </div>
                <div className="item" id="5">			
                    <div className="sub">				
                        <p>6</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function Page({d}) {

    return(
        <div className="Page">
            <PageNavigation />
            <div className="Project-Main">
                <div className="Page-Header">
                    <h2 className="Project-Title">{d.title}</h2>
                    <SideBarRight d={d}/>
                </div>
                <div className="Project-Information">
                    <div className="Project-Text ">
                        {
                            d.brief  ? 
                            <div className="Project-Brief">
                                    <h3>brief</h3>
                                    {
                                        d.brief.map((datum, i) => {
                                            return <p key={i}>{datum}</p>
                                        })
                                    }
                                </div>: <></>
                        }
                        {
                        d.summary  ? 
                        <div className="Project-Summary">
                            <h3>summary</h3>
                            {
                                d.summary.map((datum, i) => {
                                    return <p key={i}>{datum}</p>
                                })
                            }
                        </div>: <></>
                        }                       
                        {d.data  ? 
                            <div className="Project-Data">
                            <h3>data</h3>
                                {
                                    d.data.map((datum, i) => {
                                        return <p key={i}>{datum}</p>
                                    })
                                }
                            </div>: <></>
                        }
                        {d.methodology ? 
                            <div className="Project-Methodology">
                                <h3>methodology</h3>
                                {
                                    d.methodology.map((datum, i) => {
                                        return <p key={i}>{datum}</p>
                                    })
                                }
                            </div>: <></>
                        }
                        {
                        d.artistStatement  ? 
                        <div className="Project-Artist-Statement">
                                <h3>artist statement</h3>
                                {
                                    d.artistStatement.map((datum, i) => {
                                        return <p key={i}>{datum}</p>
                                    })
                                }
                            </div>: <></>
                        }
                    </div>
                    {d.designProcess ? 
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
                        </div> : <div className="Project-Collection">
                            {
                                d.collection.map((datum, i) => {
                                    return <CollectionExample collection={datum} key={i}/>
                                })
                            }    
                        </div>}
                </div>               
            </div>
        </div>
    )
}

export function PortfolioPage({d}) {

    return(
        <div className="Main">
            <Navigation />
            <Page d={d}/>
            <Footer/>
        </div>
    )
}

