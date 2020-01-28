(function() {
    const width = 500;
    const height = 500;

    let svg = d3.select('#chart')
        .append('svg')
        .attr('height', height)
        .attr('width', width)
        .append('g')
        .attr('transform', 'translate(0,0)')

    d3.queue()
        .defer(d3.csv, 'tech_cities.csv')
        .await(ready)

    function ready (error, datapoints) {
        let circles = svg.selectAll('.name')
            .data(datapoints)
            .enter().append('circle')
            .attr('class', 'name')
            .attr('r', 10)
            attr('fill', 'red')
    }
})();