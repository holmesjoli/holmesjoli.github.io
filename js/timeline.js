function showTimeline(id, nWeeks, fillWeek = 0, week = true) {

    let width = 50*(nWeeks -1) + 30;
    let height = 25;
    let yCoord;

    if (fillWeek === 0) {
        height = 70;
        yCoord = height - 55;

    } else {
        yCoord = 20;
    }

    const data = [];
    let fill;
    let stroke;
    for (var i = 1; i <= nWeeks; i++) {

        if (fillWeek === i) {
            fill = "#f85347";
            stroke = "#f85347";
        } else if(fillWeek > i) {
            fill = "#FFFFFF";
            stroke = "#f85347";
        } else {
            fill = "#FFFFFF";
            stroke = "#7d7d7d";
        }

        data.push({week: i, fill: fill, stroke: stroke});
    }

    let svg = d3.select(id)
        .append("svg")
        .attr("class", "timeline")
        .attr("height", height)
        .attr("width", width);

    svg.append("line")
        .attr("x1", 5)
        .attr("y1", yCoord)
        .attr("x2", 50*(data.length) - 45)
        .attr("y2", yCoord)
        .attr("stroke", "black");

    svg.selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", function(d, i) {return 50*i + 5;})
        .attr("cy", yCoord)
        .attr("r", 4)
        .attr("fill", function(d) {return d.fill;})
        .attr("stroke", function(d) {return d.stroke;});

    if (fillWeek === 0) {
        
        svg.selectAll("text")
            .data(data)
            .enter()
            .append("text")
            .attr("x", function(d, i) {return 50*i + 5;})
            .attr("y", height - 25)
            .attr("text-anchor", "middle")
            .text(function(d, i) {return i + 1;});

        let text;
        if (week) {
            text = "Weeks"
        } else {
            text = "Months"
        }

        svg.append("text")
            .attr("x", width/2)
            .attr("y", height - 5)
            .attr("text-anchor", "middle")
            .text(`# of ${text}`);
    }
}



