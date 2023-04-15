function score() {
  // data for a2c scores
  var url = "https://tanxyzen.github.io/IndividualProject/a2c/scores.json";

  var width = 1400, height = 550, spacing = 150;

  var scoreChart = d3
    .select("#scoreChart")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate("+ spacing / 2 + "," + spacing / 2 +")");

  d3.json(url).then( data => {
    var xScale0 =  d3
      .scaleLinear()
      .range([0, width - spacing])
      .domain([0, d3.max(data, function(d){ return d.timestep; })]);

    var xScale1 =  d3
      .scaleBand()
      .range([0, width - spacing])
      .padding(0.2)
      .domain(data.map(function(d) { return d.timestep; }));

    var yScale0 = d3
      .scaleLinear()
      .range([height - spacing, 0])
      .domain([0, d3.max(data, function(d){ return d.mean; }) + 95]);

    var yScale1 = d3
      .scaleLinear()
      .range([height - spacing, 0])
      .domain([0, d3.max(data, function(d){ return d.length; }) + 600]);

    var xAxis = d3
      .axisBottom(xScale0)
      // convert to scientific notation
      .tickFormat(d3.format(".3n"));

    var yAxisLeft = d3
      .axisLeft(yScale0);

    var yAxisRight = d3
      .axisRight(yScale1);

    scoreChart.append("g")
      .attr("transform", "translate(0, " + (height - spacing) + ")")
      .call(xAxis);
    scoreChart.append("g")
      .call(yAxisLeft);
    scoreChart.append("g")
      .attr("transform", "translate(" + (width - spacing) + ")")
      .call(yAxisRight);

    // x-axis label
    scoreChart.append("text")
      .attr("x", ((width - spacing) / 2 - 60))
      .attr("y", 460)
      .text("Training Timesteps");

    // y-axis left label
    scoreChart.append("text")
      .attr("transform", "rotate(-90)")
      .attr("x", (-(height - spacing) / 2 - 5))
      .attr("y", -45)
      .text("Score");
    // y-axis right label
    scoreChart.append("text")
      .attr("transform", "rotate(90)")
      .attr("x", (height - spacing) / 2 - 65)
      .attr("y", -(width - spacing) - 45)
      .text("Simulation Length");

    // legend
    scoreChart.append("circle")
      .attr("cx", 60)
      .attr("cy", 20)
      .attr("r", 4);
    scoreChart.append("text")
      .attr("x", 80)
      .attr("y", 20)
      .text("Mean Score of 10 Simulations")
      .attr("alignment-baseline","middle")
      .style("font-size", "15px");
    scoreChart.append("text")
      .attr("x", 57)
      .attr("y", 55)
      .text("|")
      .style("font-size", "30px")
      .style("fill", "blue");
    scoreChart.append("text")
      .attr("x", 80)
      .attr("y", 48)
      .text("Standard Deviation")
      .attr("alignment-baseline","middle")
      .style("font-size", "15px");
    scoreChart.append("rect")
      .attr("x", 55)
      .attr("y", 70)
      .attr("width", 10)
      .attr("height", 10)
      .style("fill", "#fdb750")
      .style("opacity", "0.8");
    scoreChart.append("text")
      .attr("x", 80)
      .attr("y", 75)
      .text("Mean Length of 10 Simulations")
      .attr("alignment-baseline","middle")
      .style("font-size", "15px");

    // length
    var bar = scoreChart.selectAll(".bar")
      .data(data);
    bar.enter()
      .append("rect")
      .attr("class", "bar")
      .attr("width", xScale1.bandwidth)
      .attr("height", function(d){ return (height - spacing) - yScale1(d.length); })
      .attr("x", function(d){ return xScale1(d.timestep); })
      .attr("y", function(d){ return yScale1(d.length); })
      .style("fill", "#fdb750")
      .style("opacity", "0.5");

    // line path
    var path = d3.line()
      .x(function(d) { return xScale0(d.timestep); })
      .y(function(d) { return yScale0(d.mean); })
      .curve(d3.curveMonotoneX);
    scoreChart.append("path")
      .datum(data)
      .attr("d", path)
      .style("fill", "none")
      .style("stroke", "black");

    // standard deviation
    d3.select("#std").on("change",std);
    std();

    function std() {
      var lineError = scoreChart.selectAll("line.error")
        .data(data);

      if(d3.select("#std").property("checked")){
        lineError.enter()
          .append("line")
          .attr("class", "error")
          .merge(lineError)
          .attr("x1", function(d){ return xScale0(d.timestep); })
          .attr("x2", function(d){ return xScale0(d.timestep); })
          .attr("y1", function(d){ return yScale0(d.mean + d.std); })
          .attr("y2", function(d){ return yScale0(d.mean - d.std); })
          .style("stroke", "blue")
          .style("opacity", 1);
    	} else {
        lineError.enter()
          .append("line")
          .attr("class", "error")
          .merge(lineError)
          .style("opacity", 0);
      }
    }

    // tooltip
    var tooltip = d3.select("body")
      .append("div")
      .attr("class", "tooltip")
      .style("opacity", 0)
      .style("position", "absolute")
      .style("background-color", "lightsteelblue")
      .style("pointer-events", "none");

    // mean score
    var points = scoreChart.selectAll("circle.mean")
      .data(data);
    points.enter()
      .append("circle")
      .attr("class", "mean")
      .attr("cx", function(d){ return xScale0(d.timestep); })
      .attr("cy", function(d){ return yScale0(d.mean); })
      .attr("r", 4)
      .on("mouseover", function(event, d) {
        tooltip.transition()
          .style("opacity", 1)
        tooltip.html("Score: " + d.mean + "<br/>" + "SD: " + d.std + "<br/>" + "Length: " + d.length + "<br/>" + "Timestep: " + d.timestep)
          .style("left", (event.pageX + 3) + "px")
          .style("top", (event.pageY - 75) + "px");
      })
      .on("mouseout", function(d) {
        tooltip.transition()
          .duration(1000)
          .style("opacity", 0);
      });
  });
}
score();

function reward() {
  // data for a2c rewards
  var url = "https://tanxyzen.github.io/IndividualProject/a2c/rewards.json";

  var width = 1400, height = 550, spacing = 150;

  var rewardChart = d3
    .select("#rewardChart")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate("+ spacing / 2 + "," + spacing / 2 +")");

  d3.json(url).then( data => {
    var xScale =  d3
      .scaleLinear()
      .range([0, width - spacing])
      .domain([0, d3.max(data, function(d){ return d.timestep; })]);

    var yScale = d3
      .scaleLinear()
      .range([height - spacing, 0])
      .domain([0, d3.max(data, function(d){ return d.reward; }) + 76]);

    var xAxis = d3
      .axisBottom(xScale)
      // convert to scientific notation
      .tickFormat(d3.format(".3n"));

    var yAxis = d3
      .axisLeft(yScale);

    rewardChart.append("g")
      .attr("transform", "translate(0, "+ (height - spacing) +")")
      .call(xAxis);
    rewardChart.append("g")
      .call(yAxis);

    // x-axis label
    rewardChart.append("text")
      .attr("x", ((width - spacing) / 2 - 60))
      .attr("y", 460)
      .text("Training Timesteps");

    // y-axis label
    rewardChart.append("text")
      .attr("transform", "rotate(-90)")
      .attr("x", (-(height - spacing) / 2 - 15))
      .attr("y", -45)
      .text("Reward");

    // legend
    rewardChart.append("circle")
      .attr("cx", 60)
      .attr("cy", 20)
      .attr("r", 4);
    rewardChart.append("text")
      .attr("x", 80)
      .attr("y", 20)
      .text("Total Reward per Epoch (15,000 iterations)")
      .attr("alignment-baseline","middle")
      .style("font-size", "15px");

    // tooltip
    var tooltip = d3.select("body")
      .append("div")
      .attr("class", "tooltip")
      .style("opacity", 0)
      .style("position", "absolute")
      .style("background-color", "lightsteelblue")
      .style("pointer-events", "none");

    // line path
    var path = d3.line()
      .x(function(d){ return xScale(d.timestep); })
      .y(function(d){ return yScale(d.reward); })
      .curve(d3.curveMonotoneX);
    rewardChart.append("path")
      .datum(data)
      .attr("d", path)
      .style("fill", "none")
      .style("stroke", "black");

    // reward
    var points = rewardChart.selectAll(".dot")
      .data(data);
    points.enter()
      .append("circle")
      .attr("class", "dot")
      .attr("cx", function(d){ return xScale(d.timestep); })
      .attr("cy", function(d){ return yScale(d.reward); })
      .attr("r", 4)
      .on("mouseover", function(event, d) {
        tooltip.transition()
          .style("opacity", 1)
        tooltip.html("Reward: " + d.reward + "<br/>" + "Timestep: " + d.timestep)
        .style("left", (event.pageX + 3) + "px")
        .style("top", (event.pageY - 40) + "px");
      })
      .on("mouseout", function(d) {
        tooltip.transition()
          .duration(1000)
          .style("opacity", 0);
      });
  });
}
reward();

function action() {
  // data for a2c actions
  var url = "https://tanxyzen.github.io/IndividualProject/a2c/actions.json";

  var width = 1400, height = 550, spacing = 150;

  var actionChart = d3
    .select("#actionChart")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate("+ spacing / 2 + "," + spacing / 2 +")");

    var yScale = d3
      .scaleLinear()
      .range([height - spacing, 0])
      .domain([0, 1]);

    var yAxis = d3
      .axisLeft(yScale);
    actionChart.append("g")
      .call(yAxis);

    // x-axis label
    actionChart.append("text")
      .attr("x", ((width - spacing) / 2 - 60))
      .attr("y", 460)
      .text("Training Timesteps");

    // y-axis label
    actionChart.append("text")
      .attr("transform", "rotate(-90)")
      .attr("x", (-(height - spacing) / 2 - 15))
      .attr("y", -45)
      .text("Probability");

    // legend
    actionChart.append("rect")
      .attr("x", 1270)
      .attr("y", 20)
      .attr("width", 10)
      .attr("height", 10)
      .style("fill", "#63aac0");
    actionChart.append("text")
      .attr("x", 1290)
      .attr("y", 25)
      .text("Noop")
      .attr("alignment-baseline","middle")
      .style("font-size", "15px");
    actionChart.append("rect")
      .attr("x", 1270)
      .attr("y", 40)
      .attr("width", 10)
      .attr("height", 10)
      .style("fill", "#fb475e");
    actionChart.append("text")
      .attr("x", 1290)
      .attr("y", 45)
      .text("Fire")
      .attr("alignment-baseline","middle")
      .style("font-size", "15px");
    actionChart.append("rect")
      .attr("x", 1270)
      .attr("y", 60)
      .attr("width", 10)
      .attr("height", 10)
      .style("fill", "#b6d084");
    actionChart.append("text")
      .attr("x", 1290)
      .attr("y", 65)
      .text("Right")
      .attr("alignment-baseline","middle")
      .style("font-size", "15px");
    actionChart.append("rect")
      .attr("x", 1270)
      .attr("y", 80)
      .attr("width", 10)
      .attr("height", 10)
      .style("fill", "#fdb750");
    actionChart.append("text")
      .attr("x", 1290)
      .attr("y", 85)
      .text("Left")
      .attr("alignment-baseline","middle")
      .style("font-size", "15px");

  d3.json(url).then( data => {
    var xScale =  d3
      .scaleBand()
      .range([0, width - spacing])
      .padding(0.3)
      .domain(data.map(function(d) { return d.timestep; }));

    var xAxis = d3
      .axisBottom(xScale)
      // convert to scientific notation
      .tickFormat(d3.format(".3n"));

    actionChart.append("g")
      .attr("transform", "translate(0, " + (height - spacing) + ")")
      .call(xAxis)
      .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", ".15em")
      .attr("transform", "rotate(-65)" );

    // tooltip
    var tooltip = d3.select("body")
      .append("div")
      .attr("class", "tooltip")
      .style("opacity", 0)
      .style("position", "absolute")
      .style("background-color", "lightsteelblue")
      .style("pointer-events", "none");

    // get reference to button
    var btn = document.getElementById("stacked");
    // add event listener for the button, for action "click"
    btn.addEventListener("click", stacked);
    function stacked() {
      actionChart.selectAll(".bar").remove();
      var stack = d3.stack().keys(["noop", "fire", "right", "left"]);
      var stackedData = stack(data);

      // actions probability
      var area = d3.area()
        .x(function(d){ return xScale(d.data.timestep); })
        .y0(function(d){ return yScale(d[0]); })
        .y1(function(d){ return yScale(d[1]); });

      var colors = ["#63aac0", "#fb475e", "#b6d084", "#fdb750"];
      var series = actionChart.selectAll(".series")
        .data(stackedData);
      series.enter()
        .append("path")
        .attr("class", "series")
        .attr("d", function(d){ return area(d); })
        .style("fill", function(d, i){ return colors[i]; });
    }

    // get reference to button
    var btn = document.getElementById("noop");
    // add event listener for the button, for action "click"
    btn.addEventListener("click", noop);
    function noop(){
      actionChart.selectAll(".bar").remove();
      actionChart.selectAll(".series").remove();
      var bar = actionChart.selectAll(".bar")
        .data(data);
      bar.enter()
        .append("rect")
        .attr("class", "bar")
        .attr("width", xScale.bandwidth)
        .attr("height", function(d){ return (height - spacing) - yScale(d.noop); })
        .attr("x", function(d){ return xScale(d.timestep); })
        .attr("y", function(d){ return yScale(d.noop); })
        .style("fill", "#63aac0")
        .on("mouseover", function(event, d) {
          tooltip.transition()
            .style("opacity", 1)
          tooltip.html("Probability: " + d.noop + "<br/>" + "Timestep: " + d.timestep)
            .style("left", (event.pageX + 3) + "px")
            .style("top", (event.pageY - 40) + "px");
        })
        .on("mouseout", function(d) {
          tooltip.transition()
            .duration(1000)
            .style("opacity", 0);
        });
    }
    noop();

    // get reference to button
    var btn = document.getElementById("fire");
    // add event listener for the button, for action "click"
    btn.addEventListener("click", fire);
    function fire(){
      actionChart.selectAll(".bar").remove();
      actionChart.selectAll(".series").remove();
      var bar = actionChart.selectAll(".bar")
        .data(data);
      bar.enter()
        .append("rect")
        .attr("class", "bar")
        .attr("width", xScale.bandwidth)
        .attr("height", function(d){ return (height - spacing) - yScale(d.fire); })
        .attr("x", function(d){ return xScale(d.timestep); })
        .attr("y", function(d){ return yScale(d.fire); })
        .style("fill", "#fb475e")
        .on("mouseover", function(event, d) {
          tooltip.transition()
            .style("opacity", 1)
          tooltip.html("Probability: " + d.fire + "<br/>" + "Timestep: " + d.timestep)
            .style("left", (event.pageX + 3) + "px")
            .style("top", (event.pageY - 40) + "px");
        })
        .on("mouseout", function(d) {
          tooltip.transition()
            .duration(1000)
            .style("opacity", 0);
        });
    }

    // get reference to button
    var btn = document.getElementById("right");
    // add event listener for the button, for action "click"
    btn.addEventListener("click", right);
    function right(){
      actionChart.selectAll(".bar").remove();
      actionChart.selectAll(".series").remove();
      var bar = actionChart.selectAll(".bar")
        .data(data);
      bar.enter()
        .append("rect")
        .attr("class", "bar")
        .attr("width", xScale.bandwidth)
        .attr("height", function(d){ return (height - spacing) - yScale(d.right); })
        .attr("x", function(d){ return xScale(d.timestep); })
        .attr("y", function(d){ return yScale(d.right); })
        .style("fill", "#b6d084")
        .on("mouseover", function(event, d) {
          tooltip.transition()
            .style("opacity", 1)
          tooltip.html("Probability: " + d.right + "<br/>" + "Timestep: " + d.timestep)
            .style("left", (event.pageX + 3) + "px")
            .style("top", (event.pageY - 40) + "px");
        })
        .on("mouseout", function(d) {
          tooltip.transition()
            .duration(1000)
            .style("opacity", 0);
        });
    }

    // get reference to button
    var btn = document.getElementById("left");
    // add event listener for the button, for action "click"
    btn.addEventListener("click", left);
    function left(){
      actionChart.selectAll(".bar").remove();
      actionChart.selectAll(".series").remove();
      var bar = actionChart.selectAll(".bar")
        .data(data);
      bar.enter()
        .append("rect")
        .attr("class", "bar")
        .attr("width", xScale.bandwidth)
        .attr("height", function(d){ return (height - spacing) - yScale(d.left); })
        .attr("x", function(d){ return xScale(d.timestep); })
        .attr("y", function(d){ return yScale(d.left); })
        .style("fill", "#fdb750")
        .on("mouseover", function(event, d) {
          tooltip.transition()
            .style("opacity", 1)
          tooltip.html("Probability: " + d.left + "<br/>" + "Timestep: " + d.timestep)
            .style("left", (event.pageX + 3) + "px")
            .style("top", (event.pageY - 40) + "px");
        })
        .on("mouseout", function(d) {
          tooltip.transition()
            .duration(1000)
            .style("opacity", 0);
        });
    }
  });
}
action();

function overview(evt, overview) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("overviewTabContent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("overviewTabLinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(overview).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("defaultOverview").click();

// function aoi(evt, aoi) {
//   var i, tabcontent, tablinks;
//   tabcontent = document.getElementsByClassName("aoiTabContent");
//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].style.display = "none";
//   }
//   tablinks = document.getElementsByClassName("aoiTabLinks");
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].className = tablinks[i].className.replace(" active", "");
//   }
//   document.getElementById(aoi).style.display = "block";
//   evt.currentTarget.className += " active";
//   // Get the element with id="defaultOpen" and click on it
// }
// document.getElementById("defaultAoi").click();
