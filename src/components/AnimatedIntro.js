import * as d3 from 'd3';
import letters from '../data/GloridotLetterLocations.json';
import { introTransition } from '../utils/global';

var margin = {top: 20, right: 30, bottom: 50, left: 90},
width = window.outerWidth - margin.left - margin.right,
height = window.outerHeight - margin.top - margin.bottom;

var padding = 4;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export default function introAnimation () {

    var xScale = d3.scaleLinear()
        .domain([1, 9])
        .range([1, 90]);

    var yScale = d3.scaleLinear()
        .domain([1, 16])
        .range([1, 160]);

    var svg = d3.select("#intro-animation")
            .style("position", "absolute")
            .style("top", 0)
            .style("left", 0)
        .append("svg")
            .attr("width", width)
            .attr("height", height)
        .append("g")
            .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")");

    let dots = svg.selectAll("circle")
        .data(letters)
        .enter()
        .append("circle")
        .attr('cx', d => getRandomInt(width))
        .attr("cy", d => getRandomInt(height))
        .attr("r", 4)
        .attr("fill", "#ea21ad")
        .attr('z-index', 100);

    dots.transition()
        .duration(introTransition)
        .attr('cx', function (d, i) {
            let x = letters.filter(e => e.LetterPosition < d.LetterPosition && e.Line === d.Line);
            let startingValue = d3.rollup(x, v => d3.max(v, d => d.X), d => d.Letter).values().reduce((a, b) => a + b, 0);
            let padding = d3.rollup(x, v => d3.max(v, d => 1), d => d.Letter).values().reduce((a, b) => a + b, 0)*2;
            return xScale(d.X + startingValue + padding);
        })
        .attr("cy", d => yScale(d.Y + d.Line*17))
        .attr('z-index', -100)
}
