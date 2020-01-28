
const json = {
  children: [
    { name: "San Jose", value: 100 },
    { name: "San Francisco", value: 84 },
    { name: "Boulder", value: 65 },
    { name: "Denver", value: 39 },
    { name: "Fort Collins", value: 10 },
    { name: "Hartford", value: 25 },
    { name: "Washington", value: 30 },
    { name: "Miami", value: 35 },
    { name: "Atlanta", value: 31 },
    { name: "Boston", value: 40 },
    { name: "Ann Arbor", value: 33 },
    { name: "Minneapolis", value: 20 },
    { name: "St.Louis", value: 25 },
    { name: "Durham", value: 28 },
    { name: "Ithaca", value: 26 },
    { name: "New York", value: 27 },
    { name: "Salt Lake City", value: 22 },
    { name: "Charlottesville", value: 23 },
    { name: "Seattle", value: 38 },
    { name: "Madison", value: 10 }
  ]
};

const diameter = 850,
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
  .padding(1);

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
    return d.data.name;
  })
  .style("fill", "#ffffff");

svg
  .append("g")
  .attr("class", "legendOrdinal")
  .attr("transform", "translate(600,40)");

// const legendOrdinal = d3
//   .legendColor()
//   .shape(
//     "path",
//     d3
//       .symbol()
//       .type(d3.symbolSquare)
//       .size(150)()
//   )
//   .shapePadding(10)
//   .scale(color);

// svg.select(".legendOrdinal").call(legendOrdinal);