function showTimeline(id, nWeeks) {

    let width = 50*nWeeks;
    let height = 70;

    const nArray = [];
    for (var i = 1; i <= nWeeks; i++) {
        nArray.push(i);
    }

    let svg = d3.select(id)
        .append("svg")
        .attr("height", height)
        .attr("width", width);

    svg.append("line")
        .attr("x1", 25)
        .attr("y1", height - 55)
        .attr("x2", 50*(nArray.length -1) + 15)
        .attr("y2", height - 55)
        .attr("stroke", "black")

    nArray.forEach(function(d, i) {

        svg.append("circle")
            .attr("cx", 50*i + 15)
            .attr("cy", height - 55)
            .attr("r", 12)
            .attr("fill", "white")
            .attr("stroke", "black")

        svg.append("text")
            .attr("x", 50*i + 15)
            .attr("y", height - 25)
            .attr("text-anchor", "middle")
            .text(i)
    });

    svg.append("text")
        .attr("x", width/2 - 10)
        .attr("y", height - 5)
        .attr("text-anchor", "middle")
        .text("Weeks")
}



