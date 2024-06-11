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
                <div className="Text">
                    <h3>background</h3>
                    <p>My interest in data science and analytics started as an undergraduate at Wesleyan University. I never planned to fall in love with data, but working in Wesleyan University's Quantitative Analysis Center (QAC) changed everything. Wesleyan did not just teach me how to code and use statistical methods, but how to think critically and apply an interdisciplinary lens to all research projects.
                    </p>
                    <p>My first position was at Mathematica Policy Research. At Mathematica, I worked on traditional public policy evaluations, built web applications in R, and automated web testing in Python. My next position was at the Texas Policy Lab at Rice University. At the lab, I frequently developed web applications to help our government partners visualize trends in their data. 
                        Currently, I am a Data Visualization Designer at Northeastern University's Center for Design.</p>
                    <p>Originally, I'm from Bainbridge Island, Washington, but have lived in six states in the US and Melbourne, Australia. I identify as a member of the LGBTQ+ community and am very interested in data issues such as privacy and data collection that are particularly sensitive to this community.</p>
                    <p>In 2020, I adopted my adorable cat Beanie, who demands playtime during all waking hours. In my spare time I throw ceramics on the wheel, play ultimate frisbee, and try to get outside as much as possible.</p>
                </div>
                <div className="Resume-Brief">
                    <div className="Container">
                        <h3>experience</h3>
                        <ul>
                            <li><span className="Position">Data Visualization Designer</span> | <span className="Employeer">Northeastern University</span><span className="TimePeriod">Dec 2021 – Current</span></li>
                            <li><span className="Position">Data Scientist</span> | <span className="Employeer">Rice University</span><span className="TimePeriod">Jan 2019 – Aug 2021</span></li>
                            <li><span className="Position">Statistical Programmer</span> | <span className="Employeer">Mathematica Policy Research</span><span className="TimePeriod">Sept 2017 – Jan 2019</span></li>
                        </ul>
                        {/* <p><a className="active" href="resume.html">Link to resume</a></p> */}
                    </div>
                    <div className="Container">
                        <h3>education</h3>
                        <ul>
                            <li><span className="Position">MFA in Information Design and Data Visualization</span> | <span className="Employeer">Northeastern University</span><span className="TimePeriod">2023</span></li>
                            <li><span className="Position">BA in Economics</span> | <span className="Employeer">Wesleyan University</span><span className="TimePeriod">2017</span></li>
                        </ul>
                    </div>
                </div>
                <div className="Tools">
                    <h3>tools</h3>
                    <div id="visualization"></div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
