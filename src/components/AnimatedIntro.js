import * as d3 from 'd3';
import letters from '../data/GloridotLetterLocations.json';

var margin = {top: 20, right: 30, bottom: 50, left: 90},
width = window.outerWidth - margin.left - margin.right,
height = window.outerHeight - margin.top - margin.bottom;

export default function introAnimation () {

    var svg = d3.select("#intro-animation")
        .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
        .append("g")
            .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")");

    var x = d3.scaleLinear()
    .domain([1, 6])
    .range([ 1, 60]);

    var y = d3.scaleLinear()
    .domain([1, 16])
    .range([ 1, 160]);
    

    let bars = svg.selectAll("rect")
        .data(letters)
        .enter()
        .append("circle")
        .attr("cx", d => x(d.X))
        .attr("cy", d => y(d.Y))
        .attr("r", 4)
        .attr("fill", "#ea21ad");
}