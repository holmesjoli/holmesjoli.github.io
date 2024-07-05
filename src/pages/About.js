import { useEffect } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import * as d3 from 'd3';

let data = [
    {tool: "R", year: 0, years: 7},
    {tool: "Python", year: 0, years: 3},
    {tool: "HTML", year: 0, years: 4},
    {tool: "CSS", year: 0, years: 3},
    {tool: "JS", year: 0, years: 3},
    {tool: "Git", year: 0, years: 5},
    {tool: "Illustrator", year: 0, years: 2},
    {tool: "XD", year: 0, years: 1}
];

data = data.sort((a, b) => a.years - b.years)

var margin = {top: 20, right: 30, bottom: 50, left: 90},
width = 430 - margin.left - margin.right,
height = 400 - margin.top - margin.bottom;

function barChart() {
    
    var svg = d3.select("#visualization")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

    var x = d3.scaleLinear()
        .domain([0, 7])
        .range([ 0, width]);

    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x).ticks(7))
        .style("color", "#919295")
        .selectAll("text")
        .attr("transform", "translate(-10,0)rotate(-45)")
        .style("text-anchor", "end");

    // Y axis
    var y = d3.scaleBand()
        .range([ 0, height ])
        .domain(data.map(function(d) { return d.tool; }))
        .padding(.1);

    svg.append("g")
        .call(d3.axisLeft(y))
        .style("color", "#919295");

    //Bars
    let bars = svg.selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", x(0))
        .attr("y", function(d) { return y(d.tool); })
        .attr("width", function(d) { return x(d.year); })
        .attr("height", y.bandwidth())
        .attr("stroke", "#ea21ad")
        .attr("fill", "#1c2022");

    bars.transition()
        .duration(3000)
        .attr("width", function(d) { return x(d.years);});

    svg.append("text")
        .attr("class","axisLabel")
        .attr("x", margin.left + (width-margin.left-margin.right)/2)
        .attr("y", height + 38)
        .attr("text-anchor","middle")
        .attr("fill", "white")
        .text("Years of Experience");

    // svg.append("text")
    //     .attr("class","axisLabel")
    //     .attr("x", -(height-margin.bottom)/2)
    //     .attr("y", margin.left - 158)
    //     .attr("text-anchor","middle")
    //     .attr("transform","rotate(-90)")
    //     .attr("fill", "white")
    //     .text("Tools");
}

export default function About() {

    useEffect(() => {
        barChart();
    }, []);

    return(
        <div className="Main">
            <Navigation />
            <div className="Body">
                <h2>I'm Joli Holmes!</h2>
                <h2>Most technology job applications want applicants to be able to check a box.</h2> 
                <h2>Define yourself as one of the following: </h2>
                <h2>UI designer</h2>
                <h2>data analyst</h2>
                <h2>developer</h2>
                <h2>UX researcher</h2>
                <h2>product designer</h2>
                <h2>data scientist</h2>
                <h2>Having worked mostly at start-ups, this has always been a confounding question.</h2>
                <h2>As a data visualization designer and developer I perform tasks that check boxes in each of those categories, leaving me to question</h2>
                <h2>So what I am?</h2>
                
                {/* <div class="type1">Web Developer</div>
                <div class="type2">Web Designer</div>
                <div class="type3">UI/UX Designer</div> */}
              
                {/* 
                <ul>
                    <li>UI designer</li>
                    <li>UX researcher</li>
                    <li>developer</li>
                    <li>product designer</li>
                    <li>data scientist</li>
                    <li>data analyst</li>
                </ul> 
                <p>Having worked mostly at start-ups, this has always been a confounding question. </p>
                <p>As a data visualization designer and developer I perform tasks that check boxes in each of those categories, leaving me to question, so what I am?</p> */}
            </div>
            <Footer />
        </div>
    );
}
