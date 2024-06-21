import * as d3 from 'd3';
import letters from '../data/GloridotLetterLocations.json';
import { introTransition } from '../utils/global';

var margin = {top: 20, right: 30, bottom: 50, left: 90},
width = window.outerWidth - margin.left - margin.right,
height = window.outerHeight - margin.top - margin.bottom;

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

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

    d3.select("#Main")
        .style("visibility", "hidden")
        .style("z-index", -100)
        .style("opacity", 0);

    var svg = d3.select("#intro-animation")
            .style("position", "absolute")
            .style("top", 0)
            .style("left", 0)
            .style("z-index", 100)
            .style("visibility", "visible")
        .append("svg")
            .attr("width", width - margin.left)
            .attr("height", height - margin.top - margin.bottom)
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
        .attr("opacity", 1)
        .attr("fill", d => getRandomColor())
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
        .attr("fill", "#ea21ad")
        .transition()
        .duration(introTransition)
        .attr("r", 0)
        .attr("opacity", 0)
        .attr('z-index', -100)

        d3.select("#intro-animation")
            .transition()
            .delay(introTransition*2)
            .duration(introTransition)
            .style("visibility", "hidden")
            .style("z-index", -100)

        d3.select("#Main")
            .transition()
            .delay(introTransition*2)
            .duration(introTransition)
            .style("visibility", "visible")
            .style("z-index", 100)
            .style("opacity", 1);
}
