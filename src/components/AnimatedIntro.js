import * as d3 from 'd3';
import letters from '../data/GloridotLetterLocations.json';

var margin = {top: 20, right: 30, bottom: 50, left: 90},
width = window.outerWidth - margin.left - margin.right,
height = window.outerHeight - margin.top - margin.bottom;

var padding = 4;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export default function introAnimation () {

    var svg = d3.select("#intro-animation")
        .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
        .append("g")
            .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")");

    var xScale = d3.scaleLinear()
    .domain([1, 9])
    .range([1, 90]);

    var yScale = d3.scaleLinear()
    .domain([1, 16])
    .range([1, 160]);

    let dots = svg.selectAll("circle")
        .data(letters)
        .enter()
        .append("circle")
        .attr('cx', d => getRandomInt(100))
        .attr("cy", d => getRandomInt(100))
        .attr("r", 4)
        .attr("fill", "#ea21ad");

    dots.transition()
        .duration(3000)
        .attr('cx', function (d, i) {
            let x = letters.filter(e => e.LetterPosition < d.LetterPosition);
            let startingValue = d3.rollup(x, v => d3.max(v, d => d.X), d => d.Letter).values().reduce((a, b) => a + b, 0);
            let padding = d3.rollup(x, v => d3.max(v, d => 1), d => d.Letter).values().reduce((a, b) => a + b, 0)*2;
            return xScale(d.X + startingValue + padding);
        })
        .attr("cy", d => yScale(d.Y + d.Line*17))
}