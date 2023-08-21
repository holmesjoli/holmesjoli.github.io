export default function FilterPortfolio() {

    return(
        <div className="Button-Container">
            <h3 className="filter-title">Filter items</h3>
            <button className="btn active" onclick="filterSelection('all')">All</button>
            <button className="btn" onclick="filterSelection('adobe-illustrator')">#adobe-illustratror</button>
            <button className="btn" onclick="filterSelection('adobe-XD')">#adobe-XD</button>
            <button className="btn" onclick="filterSelection('ceramics')">#ceramics</button>
            <button className="btn" onclick="filterSelection('d3-js')">#d3-js</button>
            <button className="btn" onclick="filterSelection('data-art')">#data-art</button>
            <button className="btn" onclick="filterSelection('data-visualization')">#data-visualization</button>
            <button className="btn" onclick="filterSelection('data-physicalization')">#data-physicalization</button>
            <button className="btn" onclick="filterSelection('drawing')">#drawing</button>
            <button className="btn" onclick="filterSelection('figma')">#figma</button>
            <button className="btn" onclick="filterSelection('information-design')">#information-design</button>
            <button className="btn" onclick="filterSelection('interaction-design')">#interaction-design</button>
            <button className="btn" onclick="filterSelection('graphic-design')">#graphic-design</button>
            <button className="btn" onclick="filterSelection('public-policy')">#public-policy</button>
            <button className="btn" onclick="filterSelection('python')">#python</button>
            <button className="btn" onclick="filterSelection('r')">#r</button>
            <button className="btn" onclick="filterSelection('system-design')">#system-design</button>
        </div>
    )
}
