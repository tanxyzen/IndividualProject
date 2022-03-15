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
      .domain([0, d3.max(data, function(d){return d.timestep;})]);

    var yScale = d3
      .scaleLinear()
      .range([height - spacing, 0])
      .domain([0, d3.max(data, function(d){return d.mean;}) + 56]);

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
      .attr("x", 575)
      .attr("y", 450)
      .text("Timestep");

    // y-axis label
    rewardChart.append("text")
      .attr("transform", "rotate(-90)")
      .attr("x", -200)
      .attr("y", -45)
      .text("Score");

    // legend
    rewardChart.append("circle")
      .attr("cx", 60)
      .attr("cy", 20)
      .attr("r", 3);

    rewardChart.append("text")
      .attr("x", 80)
      .attr("y", 20)
      .text("Mean Score for 10 Episodes")
      .attr("alignment-baseline","middle")
      .style("font-size", "15px");

    rewardChart.append("text")
      .attr("x", 57)
      .attr("y", 65)
      .text("|")
      .style("font-size", "30px")
      .style("fill", "blue");

    rewardChart.append("text")
      .attr("x", 80)
      .attr("y", 60)
      .text("Standard Deviation")
      .attr("alignment-baseline","middle")
      .style("font-size", "15px");

    // mean reward
    var points = rewardChart.append("g")
      .selectAll("circle.point")
      .data(data);

    points.enter()
      .append("circle")
      .attr("cx", function(d){return xScale(d.timestep);})
      .attr("cy", function(d){return yScale(d.mean);})
      .attr("r", 3);

    // line path
    var path = d3.line()
      .x(function(d) { return xScale(d.timestep); })
      .y(function(d) { return yScale(d.mean); })
      .curve(d3.curveMonotoneX);

    rewardChart.append("path")
      .datum(data)
      .attr("d", path)
      .style("fill", "none")
      .style("stroke", "black");

    // standard deviation
    d3.select("#std").on("change",std);
    std();

    function std() {
      var lineError = rewardChart.selectAll("line.error")
        .data(data);

      if(d3.select("#std").property("checked")){
        lineError.enter()
          .append("line")
          .attr("class", "error")
          .merge(lineError)
          .attr("x1", function(d) {return xScale(d.timestep);})
          .attr("x2", function(d) {return xScale(d.timestep);})
          .attr("y1", function(d) {return yScale(d.mean + d.std);})
          .attr("y2", function(d) {return yScale(d.mean - d.std);})
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
reward();

function action() {
  // data for dqn actions
  var url = "https://z3n-t4n.github.io/IndividualProject/dqn_actions.json";

  var data = [{"timestep": 50000, "noop": 0.0, "fire": 0.0, "right": 1.0, "left": 0.0}, {"timestep": 100000, "noop": 0.0, "fire": 0.0, "right": 1.0, "left": 0.0}, {"timestep": 150000, "noop": 0.009066666666666667, "fire": 0.14326666666666665, "right": 0.7923333333333333, "left": 0.05533333333333333}, {"timestep": 200000, "noop": 0.0304, "fire": 0.105, "right": 0.4782, "left": 0.3864}, {"timestep": 250000, "noop": 0.15393333333333334, "fire": 0.1816, "right": 0.26266666666666666, "left": 0.4018}, {"timestep": 300000, "noop": 0.050666666666666665, "fire": 0.41833333333333333, "right": 0.21593333333333334, "left": 0.31506666666666666}, {"timestep": 350000, "noop": 0.11953333333333334, "fire": 0.28146666666666664, "right": 0.3041333333333333, "left": 0.29486666666666667}, {"timestep": 400000, "noop": 0.039266666666666665, "fire": 0.1238, "right": 0.3947333333333333, "left": 0.4422}, {"timestep": 450000, "noop": 0.056266666666666666, "fire": 0.2158, "right": 0.40386666666666665, "left": 0.32406666666666667}, {"timestep": 500000, "noop": 0.0024, "fire": 0.6554666666666666, "right": 0.13813333333333333, "left": 0.204}, {"timestep": 550000, "noop": 0.469, "fire": 0.09353333333333333, "right": 0.20186666666666667, "left": 0.2356}, {"timestep": 600000, "noop": 0.6314, "fire": 0.04526666666666666, "right": 0.15473333333333333, "left": 0.1686}, {"timestep": 650000, "noop": 0.24526666666666666, "fire": 0.3794666666666667, "right": 0.18026666666666666, "left": 0.195}, {"timestep": 700000, "noop": 0.4109333333333333, "fire": 0.022733333333333335, "right": 0.2802, "left": 0.28613333333333335}, {"timestep": 750000, "noop": 0.39586666666666664, "fire": 0.003266666666666667, "right": 0.3028666666666667, "left": 0.298}, {"timestep": 800000, "noop": 0.26693333333333336, "fire": 0.10613333333333333, "right": 0.34546666666666664, "left": 0.28146666666666664}, {"timestep": 850000, "noop": 0.04593333333333333, "fire": 0.45913333333333334, "right": 0.242, "left": 0.25293333333333334}, {"timestep": 900000, "noop": 0.06373333333333334, "fire": 0.2561333333333333, "right": 0.33853333333333335, "left": 0.3416}, {"timestep": 950000, "noop": 0.3682666666666667, "fire": 0.062066666666666666, "right": 0.23726666666666665, "left": 0.3324}, {"timestep": 1000000, "noop": 0.545, "fire": 0.07606666666666667, "right": 0.17413333333333333, "left": 0.2048}];

  var width = 1300, height = 550, spacing = 150;

  var svg = d3
    .select("#actionChart")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate("+ spacing / 2 + "," + spacing / 2 +")");

  // Transpose the data into layers
  var dataset = d3.stack()(["noop", "fire", "right", "left"].map(function(action) {
    return data.map(function(d) {
      return {x: (d.timestep), y: +d[action]};
    });
  }));
}
action();
