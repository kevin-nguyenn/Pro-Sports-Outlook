let data = [
  {
    cat: "CA",
    name: "Los Angeles Rams",
    value: 380,
    icon: "img/rams.png",
    desc: `Tech Employment Growth ('13-'18): <br> 54% <br> AVG APT Rent: <br> $1,363/mo`,
    link: 'Here',
    linkUrl: "https://www.therams.com/tickets/"
  },
  {
    cat: "CA",
    name: "Los Angeles Lakers",
    value: 440,
    icon: "img/lakers.png",
    desc: `Tech Employment Growth ('13-'18): <br> 16.4% <br> AVG APT Rent: <br> $2,239/mo`,
    link: 'Here',
    linkUrl: "https://www.nba.com/lakers/tickets"
  },
  {
    cat: "CA",
    name: "Golden State Warriors",
    value: 430,
    icon: "img/warriors.png",
    desc: `Tech Employment Growth ('13-'18): <br> 33.4% <br> AVG APT Rent: <br> $2,856/mo`,
    link: 'Here',
    linkUrl: "https://www.nba.com/warriors/tickets"
  },
  {
    cat: "CA",
    name: "San Francisco 49ers",
    value: 350,
    icon: "img/49ers.png",
    desc: `Tech Employment Growth ('13-'18): <br> 33.4% <br> AVG APT Rent: <br> $2,856/mo`,
    link: 'Here',
    linkUrl: "https://www.49ers.com/tickets/"
  },
  {
    cat: "CO",
    name: "Denver Nuggets",
    value: 160,
    icon: "img/denver-nuggets.svg",
    desc: `Tech Employment Growth ('13-'18): <br> 30.9% <br> AVG APT Rent: <br> $1,489/mo`,
    link: 'Here',
    linkUrl: "https://www.nba.com/nuggets/tickets"
  },
  {
    cat: "CO",
    name: "Denver Broncos",
    value: 300,
    icon: "img/broncos.png",
    desc: `Tech Employment Growth ('13-'18): <br> 30.9% <br> AVG APT Rent: <br> $1,489/mo`,
    link: 'Here',
    linkUrl: "https://www.denverbroncos.com/tickets/"
  },
  {
    cat: "D.C.",
    name: "Washington Wizards",
    value: 175,
    icon: "img/redskins.png",
    desc: `Tech Employment Growth ('13-'18): <br> 2.2% <br> AVG APT Rent: <br> $1,754/mo`,
    link: 'Here',
    linkUrl: "https://www.nba.com/wizards/tickets"
  },
  {
    cat: "D.C.",
    name: "Washington Redskins",
    value: 340,
    icon: "img/wizards.png",
    desc: `Tech Employment Growth ('13-'18): <br> 2.2% <br> AVG APT Rent: <br> $1,754/mo`,
    link: 'Here',
    linkUrl: "https://www.redskins.com/tickets/"
  },
  {
    cat: "FL",
    name: "Miami Heat",
    value: 195,
    icon: 'img/heat-vice.png',
    desc: `Tech Employment Growth ('13-'18): <br> 35.4% <br> AVG APT Rent: <br> $1,630/mo`,
    link: 'Here',
    linkUrl: "https://www.nba.com/heat/tickets/miami-heat-tickets"
  },
  {
    cat: "FL",
    name: "Miami Dolphins",
    value: 276,
    icon: 'img/dolphins.png',
    desc: `Tech Employment Growth ('13-'18): <br> 35.4% <br> AVG APT Rent: <br> $1,630/mo`,
    link: 'Here',
    linkUrl: "https://www.miamidolphins.com/tickets/"
  },
  {
    cat: "GA",
    name: "Atlanta Falcons",
    value: 275.5,
    icon: 'img/atlanta.png',
    desc: `Tech Employment Growth ('13-'18): <br> 29.1% <br> AVG APT Rent: <br> $1,223/mo`,
    link: 'Here',
    linkUrl: "https://www.atlantafalcons.com/tickets/"
  },
  {
    cat: "GA",
    name: "Atlanta Hawks",
    value: 152,
    icon: 'img/hawks.png',
    desc: `Tech Employment Growth ('13-'18): <br> 29.1% <br> AVG APT Rent: <br> $1,223/mo`,
    link: 'Here',
    linkUrl: "https://www.nba.com/hawks/tickets/"
  },
  {
    cat: "IL",
    name: "Chicago Bulls",
    value: 320,
    icon: "img/bulls.png",
    desc: `Tech Employment Growth ('13-'18): <br> 10.5% <br> AVG APT Rent: <br> $1,505/mo`,
    link: 'Here',
    linkUrl: "https://www.nba.com/bulls/tickets/"
  },
  {
    cat: "IL",
    name: "Chicago Bears",
    value: 345,
    icon: "img/bears.png",
    desc: `Tech Employment Growth ('13-'18): <br> 10.5% <br> AVG APT Rent: <br> $1,505/mo`,
    link: 'Here',
    linkUrl: "https://www.chicagobears.com/tickets/"
  },
  {
    cat: "MI",
    name: "Detroit Lions",
    value: 195,
    icon: "img/lions.png",
    desc: `Tech Employment Growth ('13-'18): <br> 18.4% <br> AVG APT Rent: <br> $989/mo`,
    link: 'Here',
    linkUrl: "https://www.detroitlions.com/tickets/"
  },
  {
    cat: "MI",
    name: "Detroit Pistons",
    value: 145,
    icon: "img/pistons.png",
    desc: `Tech Employment Growth ('13-'18): <br> 18.4% <br> AVG APT Rent: <br> $989/mo`,
    link: 'Here',
    linkUrl: "https://www.nba.com/pistons/tickets/"
  },
  {
    cat: "MA",
    name: "New England Patriots",
    value: 441,
    icon: "img/new.svg",
    desc: `Tech Employment Growth ('13-'18): <br> 2.4% <br> AVG APT Rent: <br> $2,164/mo`,
    link: 'Here',
    linkUrl: "https://www.patriots.com/tickets/"
  },
  {
    cat: "MA",
    name: "Boston Celtics",
    value: 310,
    icon: "img/celtics.png",
    desc: `Tech Employment Growth ('13-'18): <br> 2.4% <br> AVG APT Rent: <br> $2,164/mo`,
    link: 'Here',
    linkUrl: "https://www.nba.com/celtics/tickets/"
  },
  {
    cat: "MN",
    name: "Minnesota Vikings",
    value: 270,
    icon: "img/vikings.png",
    desc: `Tech Employment Growth ('13-'18): <br> 13.2% <br> AVG APT Rent: <br> $1,306/mo`,
    link: 'Here',
    linkUrl: "https://www.vikings.com/tickets/"
  },
  {
    cat: "MN",
    name: "Minnesota Timberwolves",
    value: 137.5,
    icon: "img/timberwolves.png",
    desc: `Tech Employment Growth ('13-'18): <br> 13.2% <br> AVG APT Rent: <br> $1,306/mo`,
    link: 'Here',
    linkUrl: "https://www.nba.com/timberwolves/tickets/"
  },
  {
    cat: "NC",
    name: "Carolina Panthers",
    value: 240,
    icon: "img/panthers.png",
    desc: `Tech Employment Growth ('13-'18): <br> 13.2% <br> AVG APT Rent: <br> $1,306/mo`,
    link: 'Here',
    linkUrl: "https://www.panthers.com/tickets/"
  },
  {
    cat: "NC",
    name: "Charlotte Hornets",
    value: 150,
    icon: "img/charlotte.svg",
    desc: `Tech Employment Growth ('13-'18): <br> 13.2% <br> AVG APT Rent: <br> $1,306/mo`,
    link: 'Here',
    linkUrl: "https://www.nba.com/hornets/tickets/"
  },
  {
    cat: "NY",
    name: "New York Knicks",
    value: 460,
    icon: "img/knicks.png",
    desc: `Tech Employment Growth ('13-'18): <br> 20.5% <br> AVG APT Rent: <br> $4,120/mo`,
    link: 'Here',
    linkUrl: "https://www.nba.com/knicks/ticket-central"
  },
  {
    cat: "NY",
    name: "New York Giants",
    value: 390,
    icon: "img/giants.png",
    desc: `Tech Employment Growth ('13-'18): <br> 20.5% <br> AVG APT Rent: <br> $4,120/mo`,
    link: 'Here',
    linkUrl: "https://www.giants.com/tickets/"
  },
  {
    cat: "OH",
    name: "Cleveland Browns",
    value: 217.5,
    icon: "img/browns.png",
    desc: `Tech Employment Growth ('13-'18): <br> 20.5% <br> AVG APT Rent: <br> $4,120/mo`,
    link: 'Here',
    linkUrl: "https://www.clevelandbrowns.com/tickets/"
  },
  {
    cat: "OH",
    name: "Cleveland Cavaliers",
    value: 151,
    icon: "img/cavs.png",
    desc: `Tech Employment Growth ('13-'18): <br> 20.5% <br> AVG APT Rent: <br> $4,120/mo`,
    link: 'Here',
    linkUrl: "https://www.nba.com/cavaliers/tickets"
  },
  {
    cat: "TX",
    name: "Houston Texans",
    value: 310,
    icon: "img/texans.png",
    desc: `Tech Employment Growth ('13-'18): <br> 20.5% <br> AVG APT Rent: <br> $4,120/mo`,
    link: 'Here',
    linkUrl: "https://www.houstontexans.com/tickets/"
  },
  {
    cat: "TX",
    name: "Houston Rockets",
    value: 247.5,
    icon: "img/rockets.png",
    desc: `Tech Employment Growth ('13-'18): <br> 20.5% <br> AVG APT Rent: <br> $4,120/mo`,
    link: 'Here',
    linkUrl: "https://www.nba.com/rockets/tickets"
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

    const data = node.data;
    return {
        x: centerX + (node.x - centerX) * 3, // magnify start position to have transition to center movement
        y: centerY + (node.y - centerY) * 3,
        r: 0, // for tweening
        radius: node.r, //original radius
        id: data.cat, // + "." + data.name.replace(/\s/g, "-"),
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

// svg.style("background-color", "#eee");
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
    .style("opacity", 0.6)
    .attr("r", 0)
    // .attr("id", d => d.cat)
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
    .attr("fill", d => `url(#clip-${d.id})`)
    .attr("xlink:href", d => d.icon)
    .attr("x", d => -d.radius * 0.7)
    .attr("y", d => -d.radius * 0.7)
    .attr("height", d => d.radius * 2 * 0.7)
    .attr("width", d => d.radius * 2 * 0.7);

node
    .append("title")
    .text(d => d.cat + "::" + d.name + "\n" + format(d.value));

// -------------------- LEGEND -----------------------

let legendOrdinal = d3
    .legendColor()
    .scale(scaleColor)
    .shape("circle");

let legend = svg
    .append("g")
    .classed("legend-color", true)
    .attr("text-anchor", "start")
    .attr("transform", "translate(20,30)")
    .style("font-size", "15px")
    .style("fill", "#41EAD4")
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
    .style("font-size", "15px")
    .style("fill", "#41EAD4")
    .call(legendSize);

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll(".legendCells > g").forEach((el, idx) => {
      el.setAttribute('id', el.textContent)
    });
});

document.addEventListener('DOMContentLoaded', () => {
  var clicked = false;

  document.querySelectorAll(".legendCells > g").forEach((el) => {
    el.onclick = function () {

      node.filter(function (d) {
        return d.id !== el.id
      }).style("opacity", 0.1)

      node.filter(function (d) {
        return d.id === el.id
      }).style("opacity", 1)

      clicked = true;
    }
  });
});

//------------------------------------------------------------
// ------------------------- INFO BOX ------------------------
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

// Link for info box
infoBox
    .append("a")
    .attr('href', d => d.linkUrl)
    .attr('target', "_blank")
    .classed("circle-overlay__body", true)
    .html(d => `Find ${d.name} Tickets <br>` + d.link);

// -------------------------------------------------------
// NODE INTERACTION

node.on("click", currentNode => {
    d3.event.stopPropagation();
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
    node.style("opacity", 1);

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
    .duration(1000)
    .ease(d3.easePolyOut)
    .tween("moveIn", () => {
        let ix = d3.interpolateNumber(currentNode.x, centerX);
        let iy = d3.interpolateNumber(currentNode.y, centerY);
        let ir = d3.interpolateNumber(currentNode.r, centerY * 0.5);

        return function(t) {
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
        .duration(1000)
        .ease(d3.easePolyOut)
        .tween("moveOut", function() {
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