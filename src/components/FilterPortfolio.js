export default function FilterPortfolio() {

    return(
        <div className="Button-Container">
            <h3 className="filter-title">Filter items</h3>
            <button className="btn active" onClick="filterSelection('all')">All</button>
            <button className="btn" onClick="filterSelection('adobe-illustrator')">#adobe-illustrator</button>
            <button className="btn" onClick="filterSelection('ceramics')">#ceramics</button>
            <button className="btn" onClick="filterSelection('d3-js')">#d3-js</button>
            <button className="btn" onClick="filterSelection('data-art')">#data-art</button>
            <button className="btn" onClick="filterSelection('data-visualization')">#data-visualization</button>
            <button className="btn" onClick="filterSelection('data-physicalization')">#data-physicalization</button>
            <button className="btn" onClick="filterSelection('drawing')">#drawing</button>
            <button className="btn" onClick="filterSelection('figma')">#figma</button>
            <button className="btn" onClick="filterSelection('information-design')">#information-design</button>
            <button className="btn" onClick="filterSelection('interaction-design')">#interaction-design</button>
            <button className="btn" onClick="filterSelection('graphic-design')">#graphic-design</button>
            <button className="btn" onClick="filterSelection('map')">#map</button>
            <button className="btn" onClick="filterSelection('public-policy')">#public-policy</button>
            <button className="btn" onClick="filterSelection('python')">#python</button>
            <button className="btn" onClick="filterSelection('r')">#r</button>
            <button className="btn" onClick="filterSelection('system-design')">#system-design</button>
        </div>
    )
}
