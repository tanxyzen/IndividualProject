function score() {
  // data for dqn scores
  var url = "https://z3n-t4n.github.io/IndividualProject/dqn_scores.json";

  var width = 1300, height = 550, spacing = 150;

  var scoreChart = d3
    .select("#scoreChart")
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
      .domain([0, d3.max(data, function(d){ return d.mean; }) + 76]);

    var xAxis = d3
      .axisBottom(xScale)
      // convert to scientific notation
      .tickFormat(d3.format(".3n"));

    var yAxis = d3
      .axisLeft(yScale);

    scoreChart.append("g")
      .attr("transform", "translate(0, "+ (height - spacing) +")")
      .call(xAxis);
    scoreChart.append("g")
      .call(yAxis);

    // title
    scoreChart.append("text")
      .attr("x", ((width - spacing) / 2))
      .attr("y", -30)
      .attr("text-anchor", "middle")
      .style("font-size", "24px")
      .style("font-weight", "bold")
      .text("Scores");

    // x-axis label
    scoreChart.append("text")
      .attr("x", ((width - spacing) / 2 - 15))
      .attr("y", 460)
      .text("Timestep");

    // y-axis label
    scoreChart.append("text")
      .attr("transform", "rotate(-90)")
      .attr("x", (-(height - spacing) / 2 - 15))
      .attr("y", -45)
      .text("Score");

    // legend
    scoreChart.append("circle")
      .attr("cx", 60)
      .attr("cy", 20)
      .attr("r", 3);
    scoreChart.append("text")
      .attr("x", 80)
      .attr("y", 20)
      .text("Mean Score of 10 Episodes")
      .attr("alignment-baseline","middle")
      .style("font-size", "15px");

    scoreChart.append("text")
      .attr("x", 57)
      .attr("y", 65)
      .text("|")
      .style("font-size", "30px")
      .style("fill", "blue");
    scoreChart.append("text")
      .attr("x", 80)
      .attr("y", 60)
      .text("Standard Deviation")
      .attr("alignment-baseline","middle")
      .style("font-size", "15px");

    // mean score
    var points = scoreChart.append("g")
      .selectAll("circle.point")
      .data(data);
    points.enter()
      .append("circle")
      .attr("cx", function(d){ return xScale(d.timestep); })
      .attr("cy", function(d){ return yScale(d.mean); })
      .attr("r", 3);

    // line path
    var path = d3.line()
      .x(function(d) { return xScale(d.timestep); })
      .y(function(d) { return yScale(d.mean); })
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
          .attr("x1", function(d){ return xScale(d.timestep); })
          .attr("x2", function(d){ return xScale(d.timestep); })
          .attr("y1", function(d){ return yScale(d.mean + d.std); })
          .attr("y2", function(d){ return yScale(d.mean - d.std); })
          .style("stroke", "blue")
          .style("opacity", 1)
  		} else {
        lineError.enter()
          .append("line")
          .attr("class", "error")
          .merge(lineError)
          .style("opacity", 0)
      }
    }
  });
}
score();

function reward() {
  // data for dqn rewards
  var url = "https://z3n-t4n.github.io/IndividualProject/dqn_rewards.json";

  var width = 1300, height = 550, spacing = 150;

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

    // title
    rewardChart.append("text")
      .attr("x", ((width - spacing) / 2))
      .attr("y", -30)
      .attr("text-anchor", "middle")
      .style("font-size", "24px")
      .style("font-weight", "bold")
      .text("Rewards");

    // x-axis label
    rewardChart.append("text")
      .attr("x", ((width - spacing) / 2 - 15))
      .attr("y", 460)
      .text("Timestep");

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
      .attr("r", 3);
    rewardChart.append("text")
      .attr("x", 80)
      .attr("y", 20)
      .text("Total Reward per Epoch (15,000 steps)")
      .attr("alignment-baseline","middle")
      .style("font-size", "15px");

    // reward
    var points = rewardChart.append("g")
      .selectAll("circle.point")
      .data(data);
    points.enter()
      .append("circle")
      .attr("cx", function(d){ return xScale(d.timestep); })
      .attr("cy", function(d){ return yScale(d.reward); })
      .attr("r", 3);

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
  });
}
reward();

function frequency315() {
  var url = "https://z3n-t4n.github.io/IndividualProject/dqn_scores_frequency_3150000.json";

  var width = 700, height = 550, spacing = 150;

  var frequencyChart = d3
    .select("#frequencyChart315")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate("+ spacing / 2 + "," + spacing / 2 +")");

  d3.json(url).then( data => {
    var xScale =  d3
      .scaleBand()
      .range([0, width - spacing])
      .padding(0.65)
      .domain(data.map(function(d){ return d.score; }));

    var yScale = d3
      .scaleLinear()
      .range([height - spacing, 0])
      .domain([0, d3.max(data, function(d){ return d.frequency; }) + 5]);

    var xAxis = d3
      .axisBottom(xScale);

    var yAxis = d3
      .axisLeft(yScale);

    frequencyChart.append("g")
      .attr("transform", "translate(0, "+ (height - spacing) +")")
      .call(xAxis);
    frequencyChart.append("g")
      .call(yAxis);

    // title
    frequencyChart.append("text")
      .attr("x", ((width - spacing) / 2))
      .attr("y", -30)
      .attr("text-anchor", "middle")
      .style("font-size", "24px")
      .style("font-weight", "bold")
      .text("Timestep 3.15e+06");

    // x-axis label
    frequencyChart.append("text")
      .attr("x", ((width - spacing) / 2 - 15))
      .attr("y", 460)
      .text("Score");

    // y-axis label
    frequencyChart.append("text")
      .attr("transform", "rotate(-90)")
      .attr("x", (-(height - spacing) / 2 - 15))
      .attr("y", -45)
      .text("Frequency");

    // legend
    frequencyChart.append("rect")
      .attr("x", 60)
      .attr("y", 20)
      .attr("width", 10)
      .attr("height", 10)
      .style("fill", "steelblue");
    frequencyChart.append("text")
      .attr("x", 80)
      .attr("y", 25)
      .text("Score Frequency of 50 Episodes")
      .attr("alignment-baseline","middle")
      .style("font-size", "15px");

    // score frequency
    var bar = frequencyChart.append("g")
      .selectAll(".bar")
      .data(data);
    bar.enter()
      .append("rect")
      .attr("class", "bar")
      .attr("width", xScale.bandwidth)
      .attr("height", function(d){ return (height - spacing) - yScale(d.frequency); })
      .attr("x", function(d){ return xScale(d.score); })
      .attr("y", function(d){ return yScale(d.frequency); });
  });
}
frequency315();

function frequency385() {
  var url = "https://z3n-t4n.github.io/IndividualProject/dqn_scores_frequency_3850000.json";

  var width = 700, height = 550, spacing = 150;

  var frequencyChart = d3
    .select("#frequencyChart385")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate("+ spacing / 2 + "," + spacing / 2 +")");

  d3.json(url).then( data => {
    var xScale =  d3
      .scaleBand()
      .range([0, width - spacing])
      .padding(0.65)
      .domain(data.map(function(d){ return d.score; }));

    var yScale = d3
      .scaleLinear()
      .range([height - spacing, 0])
      .domain([0, d3.max(data, function(d){ return d.frequency; }) + 5]);

    var xAxis = d3
      .axisBottom(xScale);

    var yAxis = d3
      .axisLeft(yScale);

    frequencyChart.append("g")
      .attr("transform", "translate(0, "+ (height - spacing) +")")
      .call(xAxis);
    frequencyChart.append("g")
      .call(yAxis);

    // title
    frequencyChart.append("text")
      .attr("x", ((width - spacing) / 2))
      .attr("y", -30)
      .attr("text-anchor", "middle")
      .style("font-size", "24px")
      .style("font-weight", "bold")
      .text("Timestep 3.85e+06");

    // x-axis label
    frequencyChart.append("text")
      .attr("x", ((width - spacing) / 2 - 15))
      .attr("y", 460)
      .text("Score");

    // y-axis label
    frequencyChart.append("text")
      .attr("transform", "rotate(-90)")
      .attr("x", (-(height - spacing) / 2 - 15))
      .attr("y", -45)
      .text("Frequency");

    // legend
    frequencyChart.append("rect")
      .attr("x", 60)
      .attr("y", 20)
      .attr("width", 10)
      .attr("height", 10)
      .style("fill", "steelblue");
    frequencyChart.append("text")
      .attr("x", 80)
      .attr("y", 25)
      .text("Score Frequency of 50 Episodes")
      .attr("alignment-baseline","middle")
      .style("font-size", "15px");

    // score frequency
    var bar = frequencyChart.append("g")
      .selectAll(".bar")
      .data(data);
    bar.enter()
      .append("rect")
      .attr("class", "bar")
      .attr("width", xScale.bandwidth)
      .attr("height", function(d){ return (height - spacing) - yScale(d.frequency); })
      .attr("x", function(d){ return xScale(d.score); })
      .attr("y", function(d){ return yScale(d.frequency); });
  });
}
frequency385();

function action() {
  // data for dqn actions
  var url = "https://z3n-t4n.github.io/IndividualProject/dqn_actions.json";

  var width = 1300, height = 550, spacing = 150;

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

    // title
    actionChart.append("text")
      .attr("x", ((width - spacing) / 2))
      .attr("y", -30)
      .attr("text-anchor", "middle")
      .style("font-size", "24px")
      .style("font-weight", "bold")
      .text("Actions");

    // x-axis label
    actionChart.append("text")
      .attr("x", ((width - spacing) / 2 - 15))
      .attr("y", 460)
      .text("Timestep");

    // y-axis label
    actionChart.append("text")
      .attr("transform", "rotate(-90)")
      .attr("x", (-(height - spacing) / 2 - 15))
      .attr("y", -45)
      .text("Probability");

    // legend
    actionChart.append("rect")
      .attr("x", 1170)
      .attr("y", 20)
      .attr("width", 10)
      .attr("height", 10)
      .style("fill", "#63aac0");
    actionChart.append("text")
      .attr("x", 1190)
      .attr("y", 25)
      .text("Noop")
      .attr("alignment-baseline","middle")
      .style("font-size", "15px");
    actionChart.append("rect")
      .attr("x", 1170)
      .attr("y", 40)
      .attr("width", 10)
      .attr("height", 10)
      .style("fill", "#fb475e");
    actionChart.append("text")
      .attr("x", 1190)
      .attr("y", 45)
      .text("Fire")
      .attr("alignment-baseline","middle")
      .style("font-size", "15px");
    actionChart.append("rect")
      .attr("x", 1170)
      .attr("y", 60)
      .attr("width", 10)
      .attr("height", 10)
      .style("fill", "#b6d084");
    actionChart.append("text")
      .attr("x", 1190)
      .attr("y", 65)
      .text("Right")
      .attr("alignment-baseline","middle")
      .style("font-size", "15px");
    actionChart.append("rect")
      .attr("x", 1170)
      .attr("y", 80)
      .attr("width", 10)
      .attr("height", 10)
      .style("fill", "#fdb750");
    actionChart.append("text")
      .attr("x", 1190)
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
      .attr("transform", "translate(0, "+ (height - spacing) +")")
      .call(xAxis)
      .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", ".15em")
      .attr("transform", "rotate(-65)" );

    // get reference to button
    var btn = document.getElementById("stacked");
    // add event listener for the button, for action "click"
    btn.addEventListener("click", stacked);
    function stacked() {
      actionChart.selectAll(".bar").remove();
      actionChart.selectAll(".series").remove();
      var stack = d3.stack().keys(["noop", "fire", "right", "left"]);
      var stackedData = stack(data);

      // actions probability
      var area = d3.area()
        .x(function(d){ return xScale(d.data.timestep); })
        .y0(function(d){ return yScale(d[0]); })
        .y1(function(d){ return yScale(d[1]); });

      var colors = ["#63aac0", "#fb475e", "#b6d084", "#fdb750"];
      var series = actionChart.append("g")
        .selectAll("series")
        .data(stackedData);
      series.enter()
        .append("path")
        .attr("class", "series")
        .attr("d", function(d){ return area(d); })
        .style("fill", function(d, i){ return colors[i]; });
    }
    stacked();

    // get reference to button
    var btn = document.getElementById("noop");
    // add event listener for the button, for action "click"
    btn.addEventListener("click", noop);
    function noop(){
      actionChart.selectAll(".bar").remove();
      actionChart.selectAll(".series").remove();
      var bar = actionChart.append("g")
        .selectAll(".bar")
        .data(data);
      bar.enter()
        .append("rect")
        .attr("class", "bar")
        .attr("width", xScale.bandwidth)
        .attr("height", function(d){ return (height - spacing) - yScale(d.noop); })
        .attr("x", function(d){ return xScale(d.timestep); })
        .attr("y", function(d){ return yScale(d.noop); })
        .style("fill", "#63aac0");
    }

    // get reference to button
    var btn = document.getElementById("fire");
    // add event listener for the button, for action "click"
    btn.addEventListener("click", fire);
    function fire(){
      actionChart.selectAll(".bar").remove();
      actionChart.selectAll(".series").remove();
      var bar = actionChart.append("g")
        .selectAll(".bar")
        .data(data);
      bar.enter()
        .append("rect")
        .attr("class", "bar")
        .attr("width", xScale.bandwidth)
        .attr("height", function(d){ return (height - spacing) - yScale(d.fire); })
        .attr("x", function(d){ return xScale(d.timestep); })
        .attr("y", function(d){ return yScale(d.fire); })
        .style("fill", "#fb475e");
    }

    // get reference to button
    var btn = document.getElementById("right");
    // add event listener for the button, for action "click"
    btn.addEventListener("click", right);
    function right(){
      actionChart.selectAll(".bar").remove();
      actionChart.selectAll(".series").remove();
      var bar = actionChart.append("g")
        .selectAll(".bar")
        .data(data);
      bar.enter()
        .append("rect")
        .attr("class", "bar")
        .attr("width", xScale.bandwidth)
        .attr("height", function(d){ return (height - spacing) - yScale(d.right); })
        .attr("x", function(d){ return xScale(d.timestep); })
        .attr("y", function(d){ return yScale(d.right); })
        .style("fill", "#b6d084");
    }

    // get reference to button
    var btn = document.getElementById("left");
    // add event listener for the button, for action "click"
    btn.addEventListener("click", left);
    function left(){
      actionChart.selectAll(".bar").remove();
      actionChart.selectAll(".series").remove();
      var bar = actionChart.append("g")
        .selectAll(".bar")
        .data(data);
      bar.enter()
        .append("rect")
        .attr("class", "bar")
        .attr("width", xScale.bandwidth)
        .attr("height", function(d){ return (height - spacing) - yScale(d.left); })
        .attr("x", function(d){ return xScale(d.timestep); })
        .attr("y", function(d){ return yScale(d.left); })
        .style("fill", "#fdb750");
    }
  });
}
action();
