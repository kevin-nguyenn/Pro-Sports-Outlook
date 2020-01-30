let data = [
  {
    cat: "ON",
    name: "Toronto",
    value: 228.6,
    icon: "img/raptors.png",
    desc: `Tech Employment Growth ('13-'18): <br> 54% <br> AVG APT Rent: <br> $1,363/mo`,
    link: 'Find Jobs Here',
    linkUrl: "https://www.glassdoor.ca/Job/toronto-software-engineer-jobs-SRCH_IL.0,7_IC2281069_KO8,25.htm"
  },
  {
    cat: "CA",
    name: "Los Angeles",
    value: 139.8,
    icon: "img/lakers.png",
    desc: `Tech Employment Growth ('13-'18): <br> 16.4% <br> AVG APT Rent: <br> $2,239/mo`,
    link: 'Find Jobs Here',
    linkUrl: "https://www.glassdoor.com/Job/los-angeles-software-engineer-jobs-SRCH_IL.0,11_IC1146821_KO12,29.htm"
  },
  {
    cat: "CA",
    name: "San Jose",
    value: 353.8,
    icon: "img/san-jose.png",
    desc: `Tech Employment Growth ('13-'18): <br> 33.4% <br> AVG APT Rent: <br> $2,856/mo`,
    link: 'Find Jobs Here',
    linkUrl: "https://www.glassdoor.com/Job/san-jose-software-engineer-jobs-SRCH_IL.0,8_IC1147436_KO9,26.htm"
  },
  {
    cat: "CA",
    name: "San Francisco",
    value: 353.8,
    icon: "img/warriors.png",
    desc: `Tech Employment Growth ('13-'18): <br> 33.4% <br> AVG APT Rent: <br> $2,856/mo`,
    link: 'Find Jobs Here',
    linkUrl: "https://www.glassdoor.com/Job/san-francisco-software-engineer-jobs-SRCH_IL.0,13_IC1147401_KO14,31.htm"
  },
  {
    cat: "CO",
    name: "Denver",
    value: 107.2,
    icon: "img/denver-nuggets.svg",
    desc: `Tech Employment Growth ('13-'18): <br> 30.9% <br> AVG APT Rent: <br> $1,489/mo`,
    link: 'Find Jobs Here',
    linkUrl: "https://www.glassdoor.com/Job/denver-software-engineer-jobs-SRCH_IL.0,6_IC1148170_KO7,24.htm"
  },
  {
    cat: "D.C.",
    name: "Washington",
    value: 253.7,
    icon: "img/wizards.png",
    desc: `Tech Employment Growth ('13-'18): <br> 2.2% <br> AVG APT Rent: <br> $1,754/mo`,
    link: 'Find Jobs Here',
    linkUrl: "https://www.glassdoor.com/Job/washington-software-engineer-jobs-SRCH_IL.0,10_IC1138213_KO11,28.htm"
  },
  {
    cat: "FL",
    name: "Miami",
    value: 25.3,
    icon: 'img/heat-vice.png',
    desc: `Tech Employment Growth ('13-'18): <br> 35.4% <br> AVG APT Rent: <br> $1,630/mo`,
    link: 'Find Jobs Here',
    linkUrl: "https://www.glassdoor.com/Job/miami-software-engineer-jobs-SRCH_IL.0,5_IC1154170_KO6,23.htm"
  },
  {
    cat: "GA",
    name: "Atlanta",
    value: 141.6,
    icon: 'img/atlanta.png',
    desc: `Tech Employment Growth ('13-'18): <br> 29.1% <br> AVG APT Rent: <br> $1,223/mo`,
    link: 'Find Jobs Here',
    linkUrl: "asdf"
  },
  {
    cat: "IL",
    name: "Chicago",
    value: 166.7,
    icon: "img/bulls.png",
    desc: `Tech Employment Growth ('13-'18): <br> 10.5% <br> AVG APT Rent: <br> $1,505/mo`,
    link: 'Find Jobs Here',
    linkUrl: "https://www.glassdoor.com/Job/atlanta-software-engineer-jobs-SRCH_IL.0,7_IC1155583_KO8,25.htm"
  },
  {
    cat: "MI",
    name: "Detroit",
    value: 86,
    icon: "img/michigan.png",
    desc: `Tech Employment Growth ('13-'18): <br> 18.4% <br> AVG APT Rent: <br> $989/mo`,
    link: 'Find Jobs Here',
    linkUrl: "https://www.glassdoor.com/Job/detroit-software-engineer-jobs-SRCH_IL.0,7_IC1134644_KO8,25.htm"
  },
  {
    cat: "MA",
    name: "Boston",
    value: 160.1,
    icon: "img/new.svg",
    desc: `Tech Employment Growth ('13-'18): <br> 2.4% <br> AVG APT Rent: <br> $2,164/mo`,
    link: 'Find Jobs Here',
    linkUrl: "https://www.glassdoor.com/Job/boston-software-engineer-jobs-SRCH_IL.0,6_IC1154532_KO7,24.htm"
  },
  {
    cat: "MN",
    name: "Minneapolis",
    value: 92.8,
    icon: "img/vikings.png",
    desc: `Tech Employment Growth ('13-'18): <br> 13.2% <br> AVG APT Rent: <br> $1,306/mo`,
    link: 'Find Jobs Here',
    linkUrl: "https://www.glassdoor.com/Job/minneapolis-software-engineer-jobs-SRCH_IL.0,11_IC1142551_KO12,29.htm"
  },
  {
    cat: "MO",
    name: "St. Louis",
    value: 54,
    icon: "img/cardinals.png",
    desc: `Tech Employment Growth ('13-'18): <br> 6.5% <br> AVG APT Rent: <br> $899/mo`,
    link: 'Find Jobs Here',
    linkUrl: "https://www.glassdoor.com/Job/saint-louis-software-engineer-jobs-SRCH_IL.0,11_IC1131270_KO12,29.htm"
  },
  {
    cat: "NC",
    name: "Charlotte",
    value: 55.4,
    icon: "img/charlotte-1.svg",
    desc: `Tech Employment Growth ('13-'18): <br> 48.4% <br> AVG APT Rent: <br> $1,116/mo`,
    link: 'Find Jobs Here',
    linkUrl: "https://www.glassdoor.com/Job/charlotte-software-engineer-jobs-SRCH_IL.0,9_IC1138644_KO10,27.htm"
  },
  {
    cat: "NY",
    name: "New York",
    value: 264.3,
    icon: "img/knicks.png",
    desc: `Tech Employment Growth ('13-'18): <br> 20.5% <br> AVG APT Rent: <br> $4,120/mo`,
    link: 'Find Jobs Here',
    linkUrl: "https://www.glassdoor.com/Job/new-york-software-engineer-jobs-SRCH_IL.0,8_IC1132348_KO9,26.htm"
  },
  {
    cat: "OR",
    name: "Portland",
    value: 59.6,
    icon: "img/portland.png",
    desc: `Tech Employment Growth ('13-'18): <br> 35.3% <br> AVG APT Rent: <br> $1,364/mo`,
    link: 'Find Jobs Here',
    linkUrl: "https://www.glassdoor.com/Job/portland-software-engineer-jobs-SRCH_IL.0,8_IC1151614_KO9,26.htm"
  },
  {
    cat: "TX",
    name: "Austin",
    value: 72.4,
    icon: "img/longhorns.png",
    desc: `Tech Employment Growth ('13-'18): <br> 12.6% <br> AVG APT Rent: <br> $1,257/mo`,
    link: 'Find Jobs Here',
    linkUrl: "https://www.glassdoor.com/Job/austin-software-engineer-jobs-SRCH_IL.0,6_IC1139761_KO7,24.htm"
  },
  {
    cat: "UT",
    name: "Salt Lake City",
    value: 47.8,
    icon: "img/jazz-2.png",
    desc: `Tech Employment Growth ('13-'18): <br> 38.6% <br> AVG APT Rent: <br> $1,129/mo`,
    link: 'Find Jobs Here',
    linkUrl: "https://www.glassdoor.com/Job/salt-lake-city-software-engineer-jobs-SRCH_IL.0,14_IC1128289_KO15,32.htm"
  },
  {
    cat: "WA",
    name: "Seattle",
    value: 156.8,
    icon: "img/seattle.png",
    desc: `Tech Employment Growth ('13-'18): <br> 24.3% <br> AVG APT Rent: <br> $1,694/mo`,
    link: 'Find Jobs Here',
    linkUrl: "https://www.glassdoor.com/Job/seattle-software-engineer-jobs-SRCH_IL.0,7_IC1150505_KO8,25.htm"
  },
  {
    cat: "WI",
    name: "Madison",
    value: 23.5,
    icon: "img/wisconsin-badgers.png",
    desc: `Tech Employment Growth ('13-'18): <br> 47% <br> AVG APT Rent: <br> $1,150/mo`,
    link: 'Find Jobs Here',
    linkUrl: "https://www.glassdoor.com/Job/madison-software-developer-jobs-SRCH_IL.0,7_IC1133470_KO8,26.htm"
  },
  {
    cat: "MD",
    name: "Baltimore",
    value: 75.2,
    icon: "img/ravens.png",
    desc: `Tech Employment Growth ('13-'18): <br> 11.9% <br> AVG APT Rent: <br> $1,319/mo`,
    link: 'Find Jobs Here',
    linkUrl: "https://www.glassdoor.com/Job/baltimore-software-engineer-jobs-SRCH_IL.0,9_IC1153527_KO10,27.htm"
  }
];

let svg = d3.select("svg");
let width = document.body.clientWidth; // get width in pixels
let height = +svg.attr("height");
let centerX = width * 0.5;
let centerY = height * 0.5;
let strength = 0.05;
let focusedNode;

let format = d3.format(",d");

let scaleColor = d3.scaleOrdinal(d3.schemeCategory20);

// use pack to calculate radius of the circle
let pack = d3
    .pack()
    .size([width, height])
    .padding(1.5);

let forceCollide = d3.forceCollide(d => d.r + 1);

// force
let simulation = d3
    .forceSimulation()
    // .force('link', d3.forceLink().id(d => d.id))
    .force("charge", d3.forceManyBody())
    .force("collide", forceCollide)
    // .force('center', d3.forceCenter(centerX, centerY))
    .force("x", d3.forceX(centerX).strength(strength))
    .force("y", d3.forceY(centerY).strength(strength));

// for mobile
    if (
        "matchMedia" in window &&
        window.matchMedia("(max-device-width: 767px)").matches
    ) {
        data = data.filter(el => {
        return el.value >= 50;
    });
}

let root = d3.hierarchy({ children: data }).sum(d => d.value);

let nodes = pack(root)
    .leaves()
    .map(node => {
    console.log("node:", node.x, (node.x - centerX) * 2);
    const data = node.data;
    return {
        x: centerX + (node.x - centerX) * 3, // magnify start position to have transition to center movement
        y: centerY + (node.y - centerY) * 3,
        r: 0, // for tweening
        radius: node.r, //original radius
        id: data.cat + "." + data.name.replace(/\s/g, "-"),
        cat: data.cat,
        name: data.name,
        value: data.value,
        icon: data.icon,
        desc: data.desc,
        link: data.link,
        linkUrl: data.linkUrl
    };
    });
simulation.nodes(nodes).on("tick", ticked);

svg.style("background-color", "#eee");
let node = svg
    .selectAll(".node")
    .data(nodes)
    .enter()
    .append("g")
    .attr("class", "node")
    .call(
    d3
        .drag()
        .on("start", d => {
        if (!d3.event.active) simulation.alphaTarget(0.2).restart();
        d.fx = d.x;
        d.fy = d.y;
        })
        .on("drag", d => {
        d.fx = d3.event.x;
        d.fy = d3.event.y;
        })
        .on("end", d => {
        if (!d3.event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
        })
    );

node
    .append("circle")
    .attr("id", d => d.id)
    .attr("r", 0)
    .style("fill", d => scaleColor(d.cat))
    .transition()
    .duration(2000)
    .ease(d3.easeElasticOut)
    .tween("circleIn", d => {
    let i = d3.interpolateNumber(0, d.radius);
    return t => {
        d.r = i(t);
        simulation.force("collide", forceCollide);
    };
    });

node
    .append("clipPath")
    .attr("id", d => `clip-${d.id}`)
    .append("use")
    .attr("xlink:href", d => `#${d.id}`);

// display text as circle icon
node
    .filter(d => !String(d.icon).includes("img/"))
    .append("text")
    .classed("node-icon", true)
    .attr("clip-path", d => `url(#clip-${d.id})`)
    .selectAll("tspan")
    // .data(d => d.icon.split(";"))
    .enter()
    .append("tspan")
    .attr("x", 0)
    .attr("y", (d, i, nodes) => 13 + (i - nodes.length / 2 - 0.5) * 10)
    .text(name => name);

// display image as circle icon
node
    .filter(d => String(d.icon).includes("img/"))
    .append("image")
    .classed("node-icon", true)
    .attr("clip-path", d => `url(#clip-${d.id})`)
    .attr("xlink:href", d => d.icon)
    .attr("x", d => -d.radius * 0.7)
    .attr("y", d => -d.radius * 0.7)
    .attr("height", d => d.radius * 2 * 0.7)
    .attr("width", d => d.radius * 2 * 0.7);

node
    .append("title")
    .text(d => d.cat + "::" + d.name + "\n" + format(d.value));

let legendOrdinal = d3
    .legendColor()
    .scale(scaleColor)
    .shape("circle");

let legend = svg
    .append("g")
    .classed("legend-color", true)
    .attr("text-anchor", "start")
    .attr("transform", "translate(20,30)")
    .style("font-size", "12px")
    .call(legendOrdinal);

let sizeScale = d3
    .scaleOrdinal()
    .domain(["less tech jobs", "more tech jobs"])
    .range([5, 10]);

let legendSize = d3
    .legendSize()
    .scale(sizeScale)
    .shape("circle")
    .shapePadding(10)
    .labelAlign("end");

let legend2 = svg
    .append("g")
    .classed("legend-size", true)
    .attr("text-anchor", "start")
    .attr("transform", "translate(150, 25)")
    .style("font-size", "12px")
    .call(legendSize);

let infoBox = node
    .append("foreignObject")
    .classed("circle-overlay hidden", true)
    .attr("x", -350 * 0.5 * 0.8)
    .attr("y", -350 * 0.5 * 0.8)
    .attr("height", 350 * 0.8)
    .attr("width", 350 * 0.8)
    .append("xhtml:div")
    .classed("circle-overlay__inner", true);

infoBox
    .append("h2")
    .classed("circle-overlay__title", true)
    .text(d => d.name);

infoBox
    .append("h3")
    .classed("circle-overlay__title", true)
    .text(d => d.value + "K Tech Positions");

infoBox
    .append("p")
    .classed("circle-overlay__body", true)
    .html(d => d.desc);

infoBox
    .append("a")
    .attr('href', d => d.linkUrl)
    .classed("circle-overlay__body", true)
    .html(d => d.link);

node.on("click", currentNode => {
    d3.event.stopPropagation();
    console.log("currentNode", currentNode);
    let currentTarget = d3.event.currentTarget; // the <g> el

    if (currentNode === focusedNode) {
    // no focusedNode or same focused node is clicked
    return;
    }
    let lastNode = focusedNode;
    focusedNode = currentNode;

    simulation.alphaTarget(0.2).restart();
    // hide all circle-overlay
    d3.selectAll(".circle-overlay").classed("hidden", true);
    d3.selectAll(".node-icon").classed("node-icon--faded", false);

    // don't fix last node to center anymore
    if (lastNode) {
    lastNode.fx = null;
    lastNode.fy = null;
    node
        .filter((d, i) => i === lastNode.index)
        .transition()
        .duration(2000)
        .ease(d3.easePolyOut)
        .tween("circleOut", () => {
        let irl = d3.interpolateNumber(lastNode.r, lastNode.radius);
        return t => {
            lastNode.r = irl(t);
        };
        })
        .on("interrupt", () => {
        lastNode.r = lastNode.radius;
        });
    }

    // if (!d3.event.active) simulation.alphaTarget(0.5).restart();

    d3.transition()
    .duration(2000)
    .ease(d3.easePolyOut)
    .tween("moveIn", () => {
        console.log("tweenMoveIn", currentNode);
        let ix = d3.interpolateNumber(currentNode.x, centerX);
        let iy = d3.interpolateNumber(currentNode.y, centerY);
        let ir = d3.interpolateNumber(currentNode.r, centerY * 0.5);
        return function(t) {
        // console.log('i', ix(t), iy(t));
        currentNode.fx = ix(t);
        currentNode.fy = iy(t);
        currentNode.r = ir(t);
        simulation.force("collide", forceCollide);
        };
    })
    .on("end", () => {
        simulation.alphaTarget(0);
        let $currentGroup = d3.select(currentTarget);
        $currentGroup.select(".circle-overlay").classed("hidden", false);
        $currentGroup.select(".node-icon").classed("node-icon--faded", true);
    })
    .on("interrupt", () => {
        console.log("move interrupt", currentNode);
        currentNode.fx = null;
        currentNode.fy = null;
        simulation.alphaTarget(0);
    });
});

// blur
d3.select(document).on("click", () => {
    let target = d3.event.target;
    // check if click on document but not on the circle overlay
    if (!target.closest("#circle-overlay") && focusedNode) {
    focusedNode.fx = null;
    focusedNode.fy = null;
    simulation.alphaTarget(0.2).restart();
    d3.transition()
        .duration(2000)
        .ease(d3.easePolyOut)
        .tween("moveOut", function() {
        console.log("tweenMoveOut", focusedNode);
        let ir = d3.interpolateNumber(focusedNode.r, focusedNode.radius);
        return function(t) {
            focusedNode.r = ir(t);
            simulation.force("collide", forceCollide);
        };
        })
        .on("end", () => {
        focusedNode = null;
        simulation.alphaTarget(0);
        })
        .on("interrupt", () => {
        simulation.alphaTarget(0);
        });

    // hide all circle-overlay
    d3.selectAll(".circle-overlay").classed("hidden", true);
    d3.selectAll(".node-icon").classed("node-icon--faded", false);
    }
});

function ticked() {
    node
    .attr("transform", d => `translate(${d.x},${d.y})`)
    .select("circle")
    .attr("r", d => d.r);
}