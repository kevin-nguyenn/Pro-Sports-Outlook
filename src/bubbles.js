// (function() {
//     const width = 500;
//     const height = 500;

//     let svg = d3.select('#chart')
//         .append('svg')
//         .attr('height', height)
//         .attr('width', width)
//         .append('g')
//         .attr('transform', 'translate(0,0)')

//     d3.queue()
//         .defer(d3.csv, 'tech_cities.csv')
//         .await(ready)

//     function ready (error, datapoints) {
//         let circles = svg.selectAll('.name')
//             .data(datapoints)
//             .enter().append('circle')
//             .attr('class', 'name')
//             .attr('r', 10)
//             attr('fill', 'red')
//     }
// })();

const json = {
  children: [
    { name: "Apples", value: 70 },
    { name: "Oranges", value: 44 },
    { name: "Kiwis", value: 65 },
    { name: "Bananas", value: 39 },
    { name: "Pears", value: 10 },
    { name: "Satsumas", value: 25 },
    { name: "Pineapples", value: 30 }
  ]
};

const diameter = 600,
  color = d3.scaleOrdinal(d3.schemeCategory20c);

const colorScale = d3
  .scaleLinear()
  .domain([
    0,
    d3.max(json.children, function(d) {
      return d.value;
    })
  ])
  .range(["rgb(46, 73, 123)", "rgb(71, 187, 94)"]);

const bubble = d3
  .pack()
  .size([diameter, diameter])
  .padding(5);

const margin = {
  left: 0,
  right: 100,
  top: 0,
  bottom: 0
};

const svg = d3
  .select("#chart")
  .append("svg")
  .attr("viewBox", "0 0 " + (diameter + margin.right) + " " + diameter)
  .attr("width", diameter + margin.right)
  .attr("height", diameter)
  .attr("class", "chart-svg");

const root = d3
  .hierarchy(json)
  .sum(function(d) {
    return d.value;
  })
  .sort(function(a, b) {
    return b.value - a.value;
  });

bubble(root);

const node = svg
  .selectAll(".node")
  .data(root.children)
  .enter()
  .append("g")
  .attr("class", "node")
  .attr("transform", function(d) {
    return "translate(" + d.x + " " + d.y + ")";
  })
  .append("g")
  .attr("class", "graph");

node
  .append("circle")
  .attr("r", function(d) {
    return d.r;
  })
  .style("fill", function(d) {
    return color(d.data.name);
  });

node
  .append("text")
  .attr("dy", ".3em")
  .style("text-anchor", "middle")
  .text(function(d) {
    return d.data.value;
  })
  .style("fill", "#ffffff");

svg
  .append("g")
  .attr("class", "legendOrdinal")
  .attr("transform", "translate(600,40)");

const legendOrdinal = d3
  .legendColor()
  .shape(
    "path",
    d3
      .symbol()
      .type(d3.symbolSquare)
      .size(150)()
  )
  .shapePadding(10)
  .scale(color);

svg.select(".legendOrdinal").call(legendOrdinal);