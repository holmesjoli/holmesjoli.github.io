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

    letters.forEach(d => {
        d.x = window.innerWidth/2;
        d.y = window.innerHeight/2;
    });

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
        .append("svg")
            .attr("width", window.innerWidth)
            .attr("height", window.innerHeight - 7)
            .style("overflow", "hidden")
        .append("g");

    let dots = svg.selectAll("circle")
        .data(letters)
        .enter()
        .append("circle")
        .attr('cx', function() { return getRandomInt(window.innerWidth)})
        .attr("cy", function() { return getRandomInt(window.innerHeight)})
        .attr("r", r)
        .attr("opacity", 1)
        .attr("fill", d => getRandomColor())
        .attr("stroke", d => getRandomColor())
        .attr('z-index', 100);
    
    function ticked() {
        dots
            .attr('cx', function (d) {
                return d.x
            })
            .attr('cy', function (d) {
                return d.y
            });
    };

    let simulation = d3.forceSimulation(letters)
        // .force('charge', d3.forceManyBody().strength(-17))
        .force('collide', d3.forceCollide().strength(15).radius(r))
        .force('x', d3.forceX().x(function() { return getRandomInt(window.innerWidth)}).strength(.05))
        .force('y', d3.forceY().y(function() { return getRandomInt(window.innerHeight)}).strength(.05))
        .on('tick', ticked);
    
    setTimeout(function() {

        simulation
            .alpha(1)
            .restart()
            .force("collide", d3.forceCollide().radius(d => 1 + d.r))
            .force("x", d3.forceX(window.innerWidth/2).strength(0.1))
            .force("y", d3.forceY(window.innerHeight/2).strength(0.1));

    },1500);

    let xScale = d3.scaleBand()
        .domain([...new Set(letters.map(d => d.X))])
        .range([margin.left*2, width - margin.right*2]);

    let yScale = d3.scaleBand()
        .domain([...new Set(letters.map(d => d.Y))])
        .range([height - margin.top*2, margin.bottom*2]);

    setTimeout(function() {

        simulation
            .alpha(1)
            .restart()
            .force("collide", null)
            .force('x', d3.forceX().x(d => xScale(d.X) + margin.left*3).strength(1))
            .force('y', d3.forceY().y(d => yScale(d.Y) + margin.top*2).strength(1));
    }, 3500);

    setTimeout(function() {
        simulation
            .alpha(1)
            .restart()
            .force('charge', d3.forceManyBody().strength(-20))
            // .force('x', d3.forceX().x(d => xScale(d.X)).strength(.1))
            // .force('y', d3.forceY().y(d => yScale(d.Y)).strength(.1));
    }, 6500);

    setTimeout(function() {

        function xScale (d) {
            let x = letters.filter(e => e.LetterPosition < d.LetterPosition && e.Line === d.Line);
            let startingValue = d3.rollup(x, v => d3.max(v, d => d.X), d => d.Letter).values().reduce((a, b) => a + b, 0);
            let padding = d3.rollup(x, v => d3.max(v, d => 1), d => d.Letter).values().reduce((a, b) => a + b, 0);
            return o*(d.X + startingValue + padding) + margin.left;
        }

        function yScale (d) {
            return (height/2 - 16*o) + o*(d.Y + (d.Line - 1)*17);
        }

        simulation
            .alpha(1)
            .restart()
            .force("charge", null)
            .force("collide", null)
            .force('x', d3.forceX().x(d => xScale(d)).strength(1))
            .force('y', d3.forceY().y(d => yScale(d)).strength(1));
    }, 14500);

    let rScale = d3.scaleOrdinal()
        .domain([...new Set(letters.map(d => d.X))])
        .range([...new Set(letters.map(d => d.X))]);

    let yColorScale = d3.scaleOrdinal()
        .domain([...new Set(letters.map(d => d.Y))])
        .range(letters.map(d => getRandomColor()));

    dots
        .transition()
            .duration(1000)
            .delay(8500)
            .attr("r", d => rScale(d.X))
        .transition()
            .duration(1000)
            .delay(2000)
            .attr("fill", d => yColorScale(d.Y))
            .attr("stroke", d => yColorScale(d.Y))
        .transition()
            .duration(1000)
            // .delay(500)
            .attr("opacity", 0)
        .transition()
            // .delay(1000)
            .attr("fill", "#ea21ad")
            .attr("stroke", "#ea21ad")
            .attr("r", r)
        .transition()
            .duration(2000)
            .delay(1000)
            .attr("opacity", 1)
        .transition()
            .duration(2000)
            .delay(2000)
            .ease(d3.easeCircleOut)
            .attr("r", 0)
            .attr("opacity", 0)
            .attr('z-index', -100);

    d3.select("#Data-Animation")
        .transition()
        .delay(22000)
        .duration(introTransition)
        .style("visibility", "hidden")
        .style("z-index", -100);

    d3.select("#Main")
        .transition()
        .delay(22000)
        .duration(introTransition)
        .ease(d3.easeCircleIn)
        .style("visibility", "visible")
        .style("z-index", 100)
        .style("opacity", 1);
}
