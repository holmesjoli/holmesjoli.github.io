function showTimeline(id, nWeeks, fillWeek = 0) {

    let width = 50*(nWeeks -1) + 30;
    let height = 70;

    const data = [];
    let fill;
    let stroke;
    for (var i = 1; i <= nWeeks; i++) {

        if (fillWeek === i) {
            fill = "#FF4081";
            stroke = "#FF4081";
        } else if(fillWeek > i) {
            fill = "#FFFFFF";
            stroke = "#FF4081";
        } else {
            fill = "#FFFFFF";
            stroke = "#000000";
        }

        data.push({week: i, fill: fill, stroke: stroke});
    }

    let svg = d3.select(id)
        .append("svg")
        .attr("height", height)
        .attr("width", width);

    svg.append("line")
        .attr("x1", 25)
        .attr("y1", height - 55)
        .attr("x2", 50*(data.length -1) + 5)
        .attr("y2", height - 55)
        .attr("stroke", "black")

    svg.selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", function(d, i) {return 50*i + 15;})
        .attr("cy", height - 55)
        .attr("r", 12)
        .attr("fill", function(d) {return d.fill;})
        .attr("stroke", function(d) {return d.stroke;})

    svg.selectAll("text")
        .data(data)
        .enter()
        .append("text")
        .attr("x", function(d, i) {return 50*i + 15;})
        .attr("y", height - 25)
        .attr("text-anchor", "middle")
        .text(function(d, i) {return i + 1;})

    svg.append("text")
        .attr("x", width/2)
        .attr("y", height - 5)
        .attr("text-anchor", "middle")
        .text("# of Weeks")
}



