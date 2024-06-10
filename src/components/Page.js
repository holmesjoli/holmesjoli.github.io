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

    // Bring appropriate content into view
    d3.select('#main-content .active').classed("active", false);
    d3.select('#main-content .item:nth-child('+activeIndex+')').classed("active", true);

    // Iterate through all nav items and update their position/rotation
    d3.selectAll('#nav .item').each(function(d, i) {

        currIndex = +d3.select(this).property("id") + 1;
        // calculate current rotational value of item
        rotaVal = rotaIncrement*currIndex-rotaOffset+activeNavItemPos;

        // Inverse rotaVal to counter-rotate text/image in relation to nav item parent
        rotaValInverse = (rotaIncrement*currIndex-rotaOffset+activeNavItemPos)*(-1);
    
        d3.select(this).style('transform', 'rotate('+rotaVal+'deg)');
        d3.select(this).select('.sub').style('transform', 'rotate('+rotaValInverse+'deg)');
    });
}

let navData = [{name: "Summary", active: true}, 
               {name: "User Research", active: false}, 
               {name: "Sketching", active: false}, 
            //    {name: "Prototyping", active: false}, 
            //    {name: "Development", active: false}, 
               { name: "Testing", active: false}];

console.log(navData);

navData.map((d, i) => {d.id = i; return(d)});

function PageNavigation() {

    useEffect(() => {

        var initActiveIndex = +d3.select('.item.active').property('id') + 1;
        // d3.select('#main-content .item:nth-child('+initActiveIndex+')');
        updateRotation(initActiveIndex, navData.length);

        // Update active nav item and rotate it to the top
        d3.selectAll('.item').on('click', function() {
            var activeIndex = +d3.select(this).property('id') + 1;
            // var lastActiveIndex = d3.select('.active').property('id') + 1;
            d3.select('.active').classed("active", false);
            d3.select(this).classed('active', true);

            updateRotation(activeIndex, navData.length);
        })

    }, []);

    return (
        <div id="nav">
            <div id="nav-bg"><div className="inner"></div></div>
            <div id="nav-inside">
                {navData.map((datum, i) => {
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

export function Page({d}) {

    return(
        <div className="Page">
            <PageNavigation />
            <div id="main-content">	
                <div className="Page-Header">
                    <h2 className="Project-Title">{d.title}</h2>
                    <SideBarRight d={d}/>
                </div>

                {navData.map((datum, i) => {
                    return(
                        <div className={ `item item-${i}`} id={i} key={i + "-content"}>			
                            <h3>{datum.name}</h3>
                            <p>Nunc at magna augue. Duis aliquam porta risus ut sodales. Vivamus lobortis placerat sem, sed pretium tellus efficitur sit amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce interdum mauris nec bibendum consequat. Fusce elementum vulputate enim eget congue. Praesent dui ante, rhoncus eget molestie ac, fringilla id lorem.</p>

                            <p>Aliquam mi risus, elementum et blandit sit amet, laoreet quis justo. Etiam sed justo nec est aliquet posuere gravida et diam. Aenean at tortor tortor. Sed vel leo lectus. Mauris sed tellus odio. Nam vel nibh egestas, pharetra nisl eget, pulvinar sem. In vitae commodo sem. In dolor risus, iaculis nec hendrerit eu, lacinia lacinia magna.</p>

                            <p>Sed viverra aliquam orci id suscipit. Vivamus ornare nisl sed magna cursus porttitor. Quisque id eros risus. Aenean non orci quam. Sed commodo bibendum ipsum at suscipit. Vivamus lobortis scelerisque orci, in euismod nulla eleifend quis. Aliquam posuere dui magna. Donec nec posuere massa, id aliquam urna. Curabitur sit amet porta nisl. Mauris aliquam viverra nulla eu pharetra. Nullam vulputate ac felis quis elementum.</p>

                            <p>Aenean ac pellentesque nulla, ut varius nisl. Duis pharetra tortor ornare mi gravida, quis consectetur est efficitur. Pellentesque eu odio ut lacus accumsan fermentum. Maecenas tincidunt leo ac lacus mollis vulputate. In consectetur odio vel dignissim scelerisque. Curabitur urna massa, posuere nec ultricies tempus, malesuada suscipit lacus. Morbi eu iaculis orci. Nam mollis vitae nunc ut tempus. Aliquam porta aliquet ipsum, ut feugiat lorem rutrum eget. Vestibulum egestas urna in ante molestie fermentum ac faucibus nibh. Integer eget tempus velit. Aliquam et interdum erat, ut blandit velit.</p>

                            <p>Vestibulum consequat, enim egestas porttitor efficitur, velit dolor venenatis orci, a posuere risus erat in ante. Integer nunc tellus, aliquet a odio et, consequat viverra turpis. Mauris ullamcorper, diam vitae feugiat ornare, erat augue tristique erat, eu consectetur libero diam et tellus. Phasellus vel odio ex. Vestibulum dignissim volutpat justo ut ultricies. Aliquam erat volutpat. Phasellus pharetra vulputate diam, sed euismod nisl. Nulla erat enim, feugiat ac diam ut, finibus sodales ante. Phasellus imperdiet vulputate nulla, quis vulputate nisi scelerisque vitae. Sed posuere aliquet risus a imperdiet. Fusce eget ex posuere magna eleifend laoreet eget non lacus.</p>
  
                        </div>
                    )
                    })
                }
{/* 
                <div className="item item-0">
                  
                    <p>Nunc at magna augue. Duis aliquam porta risus ut sodales. Vivamus lobortis placerat sem, sed pretium tellus efficitur sit amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce interdum mauris nec bibendum consequat. Fusce elementum vulputate enim eget congue. Praesent dui ante, rhoncus eget molestie ac, fringilla id lorem.</p>

                    <p>Aliquam mi risus, elementum et blandit sit amet, laoreet quis justo. Etiam sed justo nec est aliquet posuere gravida et diam. Aenean at tortor tortor. Sed vel leo lectus. Mauris sed tellus odio. Nam vel nibh egestas, pharetra nisl eget, pulvinar sem. In vitae commodo sem. In dolor risus, iaculis nec hendrerit eu, lacinia lacinia magna.</p>

                    <p>Sed viverra aliquam orci id suscipit. Vivamus ornare nisl sed magna cursus porttitor. Quisque id eros risus. Aenean non orci quam. Sed commodo bibendum ipsum at suscipit. Vivamus lobortis scelerisque orci, in euismod nulla eleifend quis. Aliquam posuere dui magna. Donec nec posuere massa, id aliquam urna. Curabitur sit amet porta nisl. Mauris aliquam viverra nulla eu pharetra. Nullam vulputate ac felis quis elementum.</p>

                    <p>Aenean ac pellentesque nulla, ut varius nisl. Duis pharetra tortor ornare mi gravida, quis consectetur est efficitur. Pellentesque eu odio ut lacus accumsan fermentum. Maecenas tincidunt leo ac lacus mollis vulputate. In consectetur odio vel dignissim scelerisque. Curabitur urna massa, posuere nec ultricies tempus, malesuada suscipit lacus. Morbi eu iaculis orci. Nam mollis vitae nunc ut tempus. Aliquam porta aliquet ipsum, ut feugiat lorem rutrum eget. Vestibulum egestas urna in ante molestie fermentum ac faucibus nibh. Integer eget tempus velit. Aliquam et interdum erat, ut blandit velit.</p>

                    <p>Vestibulum consequat, enim egestas porttitor efficitur, velit dolor venenatis orci, a posuere risus erat in ante. Integer nunc tellus, aliquet a odio et, consequat viverra turpis. Mauris ullamcorper, diam vitae feugiat ornare, erat augue tristique erat, eu consectetur libero diam et tellus. Phasellus vel odio ex. Vestibulum dignissim volutpat justo ut ultricies. Aliquam erat volutpat. Phasellus pharetra vulputate diam, sed euismod nisl. Nulla erat enim, feugiat ac diam ut, finibus sodales ante. Phasellus imperdiet vulputate nulla, quis vulputate nisi scelerisque vitae. Sed posuere aliquet risus a imperdiet. Fusce eget ex posuere magna eleifend laoreet eget non lacus.</p>
                </div>
                
                <div className="item item-1">
                    <p>Nunc at magna augue. Duis aliquam porta risus ut sodales. Vivamus lobortis placerat sem, sed pretium tellus efficitur sit amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce interdum mauris nec bibendum consequat. Fusce elementum vulputate enim eget congue. Praesent dui ante, rhoncus eget molestie ac, fringilla id lorem.</p>

                    <p>Aliquam mi risus, elementum et blandit sit amet, laoreet quis justo. Etiam sed justo nec est aliquet posuere gravida et diam. Aenean at tortor tortor. Sed vel leo lectus. Mauris sed tellus odio. Nam vel nibh egestas, pharetra nisl eget, pulvinar sem. In vitae commodo sem. In dolor risus, iaculis nec hendrerit eu, lacinia lacinia magna.</p>

                    <p>Sed viverra aliquam orci id suscipit. Vivamus ornare nisl sed magna cursus porttitor. Quisque id eros risus. Aenean non orci quam. Sed commodo bibendum ipsum at suscipit. Vivamus lobortis scelerisque orci, in euismod nulla eleifend quis. Aliquam posuere dui magna. Donec nec posuere massa, id aliquam urna. Curabitur sit amet porta nisl. Mauris aliquam viverra nulla eu pharetra. Nullam vulputate ac felis quis elementum.</p>

                    <p>Aenean ac pellentesque nulla, ut varius nisl. Duis pharetra tortor ornare mi gravida, quis consectetur est efficitur. Pellentesque eu odio ut lacus accumsan fermentum. Maecenas tincidunt leo ac lacus mollis vulputate. In consectetur odio vel dignissim scelerisque. Curabitur urna massa, posuere nec ultricies tempus, malesuada suscipit lacus. Morbi eu iaculis orci. Nam mollis vitae nunc ut tempus. Aliquam porta aliquet ipsum, ut feugiat lorem rutrum eget. Vestibulum egestas urna in ante molestie fermentum ac faucibus nibh. Integer eget tempus velit. Aliquam et interdum erat, ut blandit velit.</p>

                    <p>Vestibulum consequat, enim egestas porttitor efficitur, velit dolor venenatis orci, a posuere risus erat in ante. Integer nunc tellus, aliquet a odio et, consequat viverra turpis. Mauris ullamcorper, diam vitae feugiat ornare, erat augue tristique erat, eu consectetur libero diam et tellus. Phasellus vel odio ex. Vestibulum dignissim volutpat justo ut ultricies. Aliquam erat volutpat. Phasellus pharetra vulputate diam, sed euismod nisl. Nulla erat enim, feugiat ac diam ut, finibus sodales ante. Phasellus imperdiet vulputate nulla, quis vulputate nisi scelerisque vitae. Sed posuere aliquet risus a imperdiet. Fusce eget ex posuere magna eleifend laoreet eget non lacus.</p>
                </div>
                
                <div className="item item-2">
                    <p>Nunc at magna augue. Duis aliquam porta risus ut sodales. Vivamus lobortis placerat sem, sed pretium tellus efficitur sit amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce interdum mauris nec bibendum consequat. Fusce elementum vulputate enim eget congue. Praesent dui ante, rhoncus eget molestie ac, fringilla id lorem.</p>

                    <p>Aliquam mi risus, elementum et blandit sit amet, laoreet quis justo. Etiam sed justo nec est aliquet posuere gravida et diam. Aenean at tortor tortor. Sed vel leo lectus. Mauris sed tellus odio. Nam vel nibh egestas, pharetra nisl eget, pulvinar sem. In vitae commodo sem. In dolor risus, iaculis nec hendrerit eu, lacinia lacinia magna.</p>

                    <p>Sed viverra aliquam orci id suscipit. Vivamus ornare nisl sed magna cursus porttitor. Quisque id eros risus. Aenean non orci quam. Sed commodo bibendum ipsum at suscipit. Vivamus lobortis scelerisque orci, in euismod nulla eleifend quis. Aliquam posuere dui magna. Donec nec posuere massa, id aliquam urna. Curabitur sit amet porta nisl. Mauris aliquam viverra nulla eu pharetra. Nullam vulputate ac felis quis elementum.</p>

                    <p>Aenean ac pellentesque nulla, ut varius nisl. Duis pharetra tortor ornare mi gravida, quis consectetur est efficitur. Pellentesque eu odio ut lacus accumsan fermentum. Maecenas tincidunt leo ac lacus mollis vulputate. In consectetur odio vel dignissim scelerisque. Curabitur urna massa, posuere nec ultricies tempus, malesuada suscipit lacus. Morbi eu iaculis orci. Nam mollis vitae nunc ut tempus. Aliquam porta aliquet ipsum, ut feugiat lorem rutrum eget. Vestibulum egestas urna in ante molestie fermentum ac faucibus nibh. Integer eget tempus velit. Aliquam et interdum erat, ut blandit velit.</p>

                    <p>Vestibulum consequat, enim egestas porttitor efficitur, velit dolor venenatis orci, a posuere risus erat in ante. Integer nunc tellus, aliquet a odio et, consequat viverra turpis. Mauris ullamcorper, diam vitae feugiat ornare, erat augue tristique erat, eu consectetur libero diam et tellus. Phasellus vel odio ex. Vestibulum dignissim volutpat justo ut ultricies. Aliquam erat volutpat. Phasellus pharetra vulputate diam, sed euismod nisl. Nulla erat enim, feugiat ac diam ut, finibus sodales ante. Phasellus imperdiet vulputate nulla, quis vulputate nisi scelerisque vitae. Sed posuere aliquet risus a imperdiet. Fusce eget ex posuere magna eleifend laoreet eget non lacus.</p>
                </div>
                
                <div className="item item-3">
                    <p>Nunc at magna augue. Duis aliquam porta risus ut sodales. Vivamus lobortis placerat sem, sed pretium tellus efficitur sit amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce interdum mauris nec bibendum consequat. Fusce elementum vulputate enim eget congue. Praesent dui ante, rhoncus eget molestie ac, fringilla id lorem.</p>

                    <p>Aliquam mi risus, elementum et blandit sit amet, laoreet quis justo. Etiam sed justo nec est aliquet posuere gravida et diam. Aenean at tortor tortor. Sed vel leo lectus. Mauris sed tellus odio. Nam vel nibh egestas, pharetra nisl eget, pulvinar sem. In vitae commodo sem. In dolor risus, iaculis nec hendrerit eu, lacinia lacinia magna.</p>

                    <p>Sed viverra aliquam orci id suscipit. Vivamus ornare nisl sed magna cursus porttitor. Quisque id eros risus. Aenean non orci quam. Sed commodo bibendum ipsum at suscipit. Vivamus lobortis scelerisque orci, in euismod nulla eleifend quis. Aliquam posuere dui magna. Donec nec posuere massa, id aliquam urna. Curabitur sit amet porta nisl. Mauris aliquam viverra nulla eu pharetra. Nullam vulputate ac felis quis elementum.</p>

                    <p>Aenean ac pellentesque nulla, ut varius nisl. Duis pharetra tortor ornare mi gravida, quis consectetur est efficitur. Pellentesque eu odio ut lacus accumsan fermentum. Maecenas tincidunt leo ac lacus mollis vulputate. In consectetur odio vel dignissim scelerisque. Curabitur urna massa, posuere nec ultricies tempus, malesuada suscipit lacus. Morbi eu iaculis orci. Nam mollis vitae nunc ut tempus. Aliquam porta aliquet ipsum, ut feugiat lorem rutrum eget. Vestibulum egestas urna in ante molestie fermentum ac faucibus nibh. Integer eget tempus velit. Aliquam et interdum erat, ut blandit velit.</p>

                    <p>Vestibulum consequat, enim egestas porttitor efficitur, velit dolor venenatis orci, a posuere risus erat in ante. Integer nunc tellus, aliquet a odio et, consequat viverra turpis. Mauris ullamcorper, diam vitae feugiat ornare, erat augue tristique erat, eu consectetur libero diam et tellus. Phasellus vel odio ex. Vestibulum dignissim volutpat justo ut ultricies. Aliquam erat volutpat. Phasellus pharetra vulputate diam, sed euismod nisl. Nulla erat enim, feugiat ac diam ut, finibus sodales ante. Phasellus imperdiet vulputate nulla, quis vulputate nisi scelerisque vitae. Sed posuere aliquet risus a imperdiet. Fusce eget ex posuere magna eleifend laoreet eget non lacus.</p>
                </div>
                
                <div className="item item-4">
                    <p>Nunc at magna augue. Duis aliquam porta risus ut sodales. Vivamus lobortis placerat sem, sed pretium tellus efficitur sit amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce interdum mauris nec bibendum consequat. Fusce elementum vulputate enim eget congue. Praesent dui ante, rhoncus eget molestie ac, fringilla id lorem.</p>

                    <p>Aliquam mi risus, elementum et blandit sit amet, laoreet quis justo. Etiam sed justo nec est aliquet posuere gravida et diam. Aenean at tortor tortor. Sed vel leo lectus. Mauris sed tellus odio. Nam vel nibh egestas, pharetra nisl eget, pulvinar sem. In vitae commodo sem. In dolor risus, iaculis nec hendrerit eu, lacinia lacinia magna.</p>

                    <p>Sed viverra aliquam orci id suscipit. Vivamus ornare nisl sed magna cursus porttitor. Quisque id eros risus. Aenean non orci quam. Sed commodo bibendum ipsum at suscipit. Vivamus lobortis scelerisque orci, in euismod nulla eleifend quis. Aliquam posuere dui magna. Donec nec posuere massa, id aliquam urna. Curabitur sit amet porta nisl. Mauris aliquam viverra nulla eu pharetra. Nullam vulputate ac felis quis elementum.</p>

                    <p>Aenean ac pellentesque nulla, ut varius nisl. Duis pharetra tortor ornare mi gravida, quis consectetur est efficitur. Pellentesque eu odio ut lacus accumsan fermentum. Maecenas tincidunt leo ac lacus mollis vulputate. In consectetur odio vel dignissim scelerisque. Curabitur urna massa, posuere nec ultricies tempus, malesuada suscipit lacus. Morbi eu iaculis orci. Nam mollis vitae nunc ut tempus. Aliquam porta aliquet ipsum, ut feugiat lorem rutrum eget. Vestibulum egestas urna in ante molestie fermentum ac faucibus nibh. Integer eget tempus velit. Aliquam et interdum erat, ut blandit velit.</p>

                    <p>Vestibulum consequat, enim egestas porttitor efficitur, velit dolor venenatis orci, a posuere risus erat in ante. Integer nunc tellus, aliquet a odio et, consequat viverra turpis. Mauris ullamcorper, diam vitae feugiat ornare, erat augue tristique erat, eu consectetur libero diam et tellus. Phasellus vel odio ex. Vestibulum dignissim volutpat justo ut ultricies. Aliquam erat volutpat. Phasellus pharetra vulputate diam, sed euismod nisl. Nulla erat enim, feugiat ac diam ut, finibus sodales ante. Phasellus imperdiet vulputate nulla, quis vulputate nisi scelerisque vitae. Sed posuere aliquet risus a imperdiet. Fusce eget ex posuere magna eleifend laoreet eget non lacus.</p>
                </div>
                
                <div className="item item-5">
                    <p>Nunc at magna augue. Duis aliquam porta risus ut sodales. Vivamus lobortis placerat sem, sed pretium tellus efficitur sit amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce interdum mauris nec bibendum consequat. Fusce elementum vulputate enim eget congue. Praesent dui ante, rhoncus eget molestie ac, fringilla id lorem.</p>

                    <p>Aliquam mi risus, elementum et blandit sit amet, laoreet quis justo. Etiam sed justo nec est aliquet posuere gravida et diam. Aenean at tortor tortor. Sed vel leo lectus. Mauris sed tellus odio. Nam vel nibh egestas, pharetra nisl eget, pulvinar sem. In vitae commodo sem. In dolor risus, iaculis nec hendrerit eu, lacinia lacinia magna.</p>

                    <p>Sed viverra aliquam orci id suscipit. Vivamus ornare nisl sed magna cursus porttitor. Quisque id eros risus. Aenean non orci quam. Sed commodo bibendum ipsum at suscipit. Vivamus lobortis scelerisque orci, in euismod nulla eleifend quis. Aliquam posuere dui magna. Donec nec posuere massa, id aliquam urna. Curabitur sit amet porta nisl. Mauris aliquam viverra nulla eu pharetra. Nullam vulputate ac felis quis elementum.</p>

                    <p>Aenean ac pellentesque nulla, ut varius nisl. Duis pharetra tortor ornare mi gravida, quis consectetur est efficitur. Pellentesque eu odio ut lacus accumsan fermentum. Maecenas tincidunt leo ac lacus mollis vulputate. In consectetur odio vel dignissim scelerisque. Curabitur urna massa, posuere nec ultricies tempus, malesuada suscipit lacus. Morbi eu iaculis orci. Nam mollis vitae nunc ut tempus. Aliquam porta aliquet ipsum, ut feugiat lorem rutrum eget. Vestibulum egestas urna in ante molestie fermentum ac faucibus nibh. Integer eget tempus velit. Aliquam et interdum erat, ut blandit velit.</p>

                    <p>Vestibulum consequat, enim egestas porttitor efficitur, velit dolor venenatis orci, a posuere risus erat in ante. Integer nunc tellus, aliquet a odio et, consequat viverra turpis. Mauris ullamcorper, diam vitae feugiat ornare, erat augue tristique erat, eu consectetur libero diam et tellus. Phasellus vel odio ex. Vestibulum dignissim volutpat justo ut ultricies. Aliquam erat volutpat. Phasellus pharetra vulputate diam, sed euismod nisl. Nulla erat enim, feugiat ac diam ut, finibus sodales ante. Phasellus imperdiet vulputate nulla, quis vulputate nisi scelerisque vitae. Sed posuere aliquet risus a imperdiet. Fusce eget ex posuere magna eleifend laoreet eget non lacus.</p>
                </div> */}
            </div>

            {/* <div className="Project-Main">
                <div className="Page-Header">
                    <h2 className="Project-Title">{d.title}</h2>
                    <SideBarRight d={d}/>
                </div> */}
                {/* <div className="Project-Information"> */}
                    {/* <div className="Project-Text "> */}
                        {/* {
                            d.brief  ? 
                            <div className="Project-Brief">
                                    <h3>brief</h3>
                                    {
                                        d.brief.map((datum, i) => {
                                            return <p key={i}>{datum}</p>
                                        })
                                    }
                                </div>: <></>
                        } */}
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
            <Page d={d}/>
            <Footer/>
        </div>
    )
}

