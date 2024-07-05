import * as d3 from 'd3';
import letters from '../data/GloridotLetterLocations.json';
import { introTransition } from '../utils/global';

var r, o, width, height, margin;

if (window.outerWidth < 480) {
    r = 2;
    margin = {top: 10, right: 10, bottom: 10, left: 20};
} else {
    r = 5;
    margin = {top: 20, right: 20, bottom: 20, left: 20};
}

width = window.innerWidth - margin.left - margin.right;
height = window.innerHeight - margin.top - margin.bottom;

if (width > height) {
    o = height/35;
} else {
    o = width/65;
}

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

    d3.select("#Main")
        .style("visibility", "hidden")
        .style("z-index", -100)
        .style("opacity", 0);

    var svg = d3.select("#Data-Animation")
            .style("position", "absolute")
            .style("top", 0)
            .style("left", 0)
            .style("z-index", 100)
            .style("visibility", "visible")
            .style("overflow", "hidden")
            // .attr("width", window.innerWidth)
            // .attr("height", window.innerHeight)
        .append("svg")
            .attr("width", window.innerWidth)
            .attr("height", window.innerHeight - 7)
            .style("overflow", "hidden")
        .append("g");

    let dots = svg.selectAll("circle")
        .data(letters)
        .enter()
        .append("circle")
        .attr('cx', d => getRandomInt(window.innerWidth))
        .attr("cy", d => getRandomInt(window.innerHeight))
        .attr("r", r)
        .attr("opacity", 1)
        .attr("fill", d => getRandomColor())
        .attr("stroke", d => getRandomColor())
        .attr('z-index', 100);

        let xScale = d3.scaleLinear()
        .domain(d3.extent(letters, d => d.X))
        .range([margin.left, width - margin.right]);

    let yScale = d3.scaleLinear()
        .domain(d3.extent(letters, d => d.Y))
        .range([height - margin.top, margin.bottom]);

    d3.forceSimulation(letters)
        .force('charge', d3.forceManyBody().strength(-17))
        .force('collide', d3.forceCollide().strength(2).radius(r))
        .force('x', d3.forceX().x(d => xScale(d.X)).strength(.05))
        .force('y', d3.forceY().y(d => yScale(d.Y)).strength(.05))
        // .on('tick', ticked);

        function ticked() {
            dots
                .attr('cx', function (d) {
                    return d.x
                })
                .attr('cy', function (d) {
                    return d.y
                });
        };

    dots.transition()
        .duration(introTransition)
        .delay(40000)
        .attr('cx', function (d) {
            let x = letters.filter(e => e.LetterPosition < d.LetterPosition && e.Line === d.Line);
            let startingValue = d3.rollup(x, v => d3.max(v, d => d.X), d => d.Letter).values().reduce((a, b) => a + b, 0);
            let padding = d3.rollup(x, v => d3.max(v, d => 1), d => d.Letter).values().reduce((a, b) => a + b, 0);
            return o*(d.X + startingValue + padding) + margin.left;
        })
        .attr("cy", d => (height/2 - 16*o) + o*(d.Y + (d.Line - 1)*17))
        .attr("fill", "#ea21ad")
        .attr("stroke", "#ea21ad")
        .transition()
        .duration(introTransition)
        .ease(d3.easeCircleOut)
        .attr("r", 0)
        .attr("opacity", 0)
        .attr('z-index', -100);

        d3.select("#intro-animation")
            .transition()
            .delay(47000)
            .duration(introTransition)
            .style("visibility", "hidden")
            .style("z-index", -100);

        d3.select("#Main")
            .transition()
            .delay(47000)
            .duration(introTransition)
            .ease(d3.easeCircleIn)
            .style("visibility", "visible")
            .style("z-index", 100)
            .style("opacity", 1);
}
