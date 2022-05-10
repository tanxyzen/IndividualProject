var width = 1400, height = 550, spacing = 150;

var scoreList = [{"timestep": 50000, "score1": 9}, {"timestep": 100000, "score1": 9}, {"timestep": 150000, "score1": 3}, {"timestep": 200000, "score1": 19, "score2": 11}, {"timestep": 250000, "score1": 16, "score2": 14, "score3": 12}, {"timestep": 300000, "score1": 25, "score2": 24, "score3": 14, "score4": 11}, {"timestep": 350000, "score1": 24, "score2": 23, "score3": 17}, {"timestep": 400000, "score1": 25, "score2": 18, "score3": 16}, {"timestep": 450000, "score1": 25, "score2": 23, "score3": 16}, {"timestep": 500000, "score1": 30, "score2": 27, "score3": 26, "score4": 23}, {"timestep": 550000, "score1": 48, "score2": 27, "score3": 22}, {"timestep": 600000, "score1": 35, "score2": 32, "score3": 27}, {"timestep": 650000, "score1": 49, "score2": 42, "score3": 35, "score4": 31}, {"timestep": 700000, "score1": 44, "score2": 42, "score3": 41, "score4": 40}, {"timestep": 750000, "score1": 62, "score2": 50, "score3": 49, "score4": 39}, {"timestep": 800000, "score1": 69, "score2": 56, "score3": 24, "score4": 20}, {"timestep": 850000, "score1": 62, "score2": 60, "score3": 57, "score4": 40}, {"timestep": 900000, "score1": 81, "score2": 78, "score3": 76, "score4": 57}, {"timestep": 950000, "score1": 95, "score2": 92, "score3": 84, "score4": 63}, {"timestep": 1000000, "score1": 97, "score2": 78, "score3": 62, "score4": 60}, {"timestep": 1050000, "score1": 97, "score2": 85, "score3": 80, "score4": 76}, {"timestep": 1100000, "score1": 110, "score2": 101, "score3": 80}, {"timestep": 1150000, "score1": 112, "score2": 87, "score3": 72, "score4": 39}, {"timestep": 1200000, "score1": 111, "score2": 106, "score3": 84, "score4": 79}, {"timestep": 1250000, "score1": 145, "score2": 91, "score3": 89, "score4": 77}, {"timestep": 1300000, "score1": 310, "score2": 177, "score3": 126, "score4": 111, "score5": 108}, {"timestep": 1350000, "score1": 162, "score2": 132, "score3": 107, "score4": 79}, {"timestep": 1400000, "score1": 300, "score2": 225, "score3": 111, "score4": 106}, {"timestep": 1450000, "score1": 323, "score2": 153, "score3": 145, "score4": 115}, {"timestep": 1500000, "score1": 259, "score2": 241, "score3": 132, "score4": 125}, {"timestep": 1550000, "score1": 246, "score2": 177, "score3": 155, "score4": 114}, {"timestep": 1600000, "score1": 205, "score2": 166, "score3": 149, "score4": 118}, {"timestep": 1650000, "score1": 201, "score2": 110, "score3": 102, "score4": 83}, {"timestep": 1700000, "score1": 256, "score2": 206, "score3": 144, "score4": 111, "score5": 31}, {"timestep": 1750000, "score1": 226, "score2": 199, "score3": 177, "score4": 126}, {"timestep": 1800000, "score1": 300, "score2": 239, "score3": 125, "score4": 80}, {"timestep": 1850000, "score1": 267, "score2": 150, "score3": 86, "score4": 48}, {"timestep": 1900000, "score1": 243, "score2": 238, "score3": 192, "score4": 159}, {"timestep": 1950000, "score1": 337, "score2": 306, "score3": 302, "score4": 223}, {"timestep": 2000000, "score1": 208, "score2": 188, "score3": 162, "score4": 73}, {"timestep": 2050000, "score1": 307, "score2": 272, "score3": 210, "score4": 104}, {"timestep": 2100000, "score1": 230, "score2": 225, "score3": 217, "score4": 172}, {"timestep": 2150000, "score1": 314, "score2": 240, "score3": 158, "score4": 133}, {"timestep": 2200000, "score1": 231, "score2": 224, "score3": 198, "score4": 63}, {"timestep": 2250000, "score1": 339, "score2": 261, "score3": 238, "score4": 174}, {"timestep": 2300000, "score1": 237, "score2": 155, "score3": 94, "score4": 74, "score5": 54}, {"timestep": 2350000, "score1": 324, "score2": 298, "score3": 245}, {"timestep": 2400000, "score1": 266, "score2": 219, "score3": 217, "score4": 177}, {"timestep": 2450000, "score1": 289, "score2": 272, "score3": 247, "score4": 241}, {"timestep": 2500000, "score1": 371, "score2": 299, "score3": 268, "score4": 265}, {"timestep": 2550000, "score1": 347, "score2": 225, "score3": 219, "score4": 101}, {"timestep": 2600000, "score1": 343, "score2": 322, "score3": 270, "score4": 229}, {"timestep": 2650000, "score1": 326, "score2": 315, "score3": 268, "score4": 158}, {"timestep": 2700000, "score1": 272, "score2": 255, "score3": 220, "score4": 213}, {"timestep": 2750000, "score1": 289, "score2": 287, "score3": 289, "score4": 156, "score5": 39}, {"timestep": 2800000, "score1": 351, "score2": 257, "score3": 230, "score4": 188}, {"timestep": 2850000, "score1": 221, "score2": 215, "score3": 204, "score4": 114}, {"timestep": 2900000, "score1": 325, "score2": 313, "score3": 269, "score4": 215}, {"timestep": 2950000, "score1": 293, "score2": 247, "score3": 79, "score4": 31}, {"timestep": 3000000, "score1": 290, "score2": 255, "score3": 242, "score4": 229}, {"timestep": 3050000, "score1": 322, "score2": 244, "score3": 191, "score4": 154}, {"timestep": 3100000, "score1": 267, "score2": 211, "score3": 155, "score4": 103}, {"timestep": 3150000, "score1": 299, "score2": 279, "score3": 265, "score4": 243}, {"timestep": 3200000, "score1": 276, "score2": 235, "score3": 234, "score4": 1}, {"timestep": 3250000, "score1": 305, "score2": 284, "score3": 248, "score4": 221}, {"timestep": 3300000, "score1": 290, "score2": 285, "score3": 276, "score4": 201}, {"timestep": 3350000, "score1": 385, "score2": 222, "score3": 215, "score4": 206}, {"timestep": 3400000, "score1": 250, "score2": 197, "score3": 195, "score4": 187}, {"timestep": 3450000, "score1": 366, "score2": 361, "score3": 355, "score4": 258, "score5": 106}, {"timestep": 3500000, "score1": 319, "score2": 317, "score3": 246, "score4": 233}, {"timestep": 3550000, "score1": 332, "score2": 330, "score3": 189, "score4": 147}, {"timestep": 3600000, "score1": 352, "score2": 255, "score3": 223, "score4": 127}, {"timestep": 3650000, "score1": 280, "score2": 260, "score3": 221}, {"timestep": 3700000, "score1": 340, "score2": 210, "score3": 170, "score4": 114}, {"timestep": 3750000, "score1": 318, "score2": 253, "score3": 227, "score4": 211}, {"timestep": 3800000, "score1": 306, "score2": 236, "score3": 219, "score4": 214}, {"timestep": 3850000, "score1": 413, "score2": 206, "score3": 167, "score4": 151}, {"timestep": 3900000, "score1": 333, "score2": 325, "score3": 272, "score4": 259}, {"timestep": 3950000, "score1": 324, "score2": 301, "score3": 262, "score4": 180}, {"timestep": 4000000, "score1": 318, "score2": 259, "score3": 246, "score4": 199}, {"timestep": 4050000, "score1": 308, "score2": 293, "score3": 202, "score4": 159}, {"timestep": 4100000, "score1": 268, "score2": 265, "score3": 253, "score4": 198}, {"timestep": 4150000, "score1": 327, "score2": 288, "score3": 253, "score4": 245}, {"timestep": 4200000, "score1": 339, "score2": 273, "score3": 215, "score4": 162}, {"timestep": 4250000, "score1": 310, "score2": 259, "score3": 220, "score4": 177}, {"timestep": 4300000, "score1": 395, "score2": 346, "score3": 332, "score4": 292, "score5": 283}, {"timestep": 4350000, "score1": 306, "score2": 301, "score3": 248, "score4": 238}, {"timestep": 4400000, "score1": 368, "score2": 295, "score3": 284}, {"timestep": 4450000, "score1": 342, "score2": 301, "score3": 289, "score4": 204, "score5": 68}, {"timestep": 4500000, "score1": 345, "score2": 293, "score3": 277, "score4": 123}, {"timestep": 4550000, "score1": 324, "score2": 297, "score3": 274, "score4": 270}, {"timestep": 4600000, "score1": 337, "score2": 257, "score3": 222, "score4": 184}, {"timestep": 4650000, "score1": 303, "score2": 271, "score3": 241, "score4": 229}, {"timestep": 4700000, "score1": 375, "score2": 328, "score3": 315, "score4": 232}, {"timestep": 4750000, "score1": 313, "score2": 279, "score3": 194, "score4": 89}, {"timestep": 4800000, "score1": 301, "score2": 293, "score3": 273, "score4": 234}, {"timestep": 4850000, "score1": 345, "score2": 269, "score3": 191}, {"timestep": 4900000, "score1": 275, "score2": 253, "score3": 247, "score4": 190, "score5": 68}, {"timestep": 4950000, "score1": 354, "score2": 279, "score3": 228, "score4": 213}, {"timestep": 5000000, "score1": 252, "score2": 247, "score3": 230, "score4": 228}];

var timestepVar;

function score() {
  // data for dqn scores
  var url = "https://z3n-t4n.github.io/IndividualProject/dqn/scores.json";

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
    scoreChart.append("circle")
      .attr("cx", 60)
      .attr("cy", 100)
      .attr("fill", "red")
      .attr("r", 6);
    scoreChart.append("text")
      .attr("x", 80)
      .attr("y", 100)
      .text("Agent of Interest")
      .attr("alignment-baseline","middle")
      .style("font-size", "15px");

    // length
    var bar = scoreChart.selectAll(".length")
      .data(data);
    bar.enter()
      .append("rect")
      .attr("class", "length")
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
      .style("fill", "black")
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
      })
      .on("click", function(event, d) {
        // reset selected
        d3.selectAll("circle.mean")
          .style("fill", "black")
          .attr("r", 4);
        d3.selectAll("circle.filter")
          .style("fill", "green");
        d3.selectAll("circle.reward")
          .style("fill", "black")
          .attr("r", 4);
        d3.selectAll("rect.barNoop")
          .style("fill", "#63aac0");
        d3.selectAll("rect.barFire")
          .style("fill", "#fb475e");
        d3.selectAll("rect.barRight")
          .style("fill", "#b6d084");
        d3.selectAll("rect.barLeft")
          .style("fill", "#fdb750");
        // set selected color and size
        d3.select(this)
          .style("fill", "red")
          .attr("r", 6);
        d3.select("h3#agentSelected")
          .text("Agent @ Timestep " + d.timestep);
        d3.select("#parallelCoordImg")
          .attr("src", "./img/dqn/parallel_coord/parallel_coord_" + d.timestep + "_steps.png");
        d3.select("#rewardFreqImg")
          .attr("src", "./img/dqn/reward_freq/reward_freq_template.png");
        d3.select("#gif")
          .attr("src", "./img/dqn/simulation/gif_" + d.timestep + ".gif");
        d3.select("p#gifScore")
          .text("Playback Score " + d.score);
        for (let i = 0; i < scoreList.length; i++) {
          if (scoreList[i].timestep == d.timestep){
            d3.select("#score1")
              .text(scoreList[i].score1)
            d3.select("#score2")
              .text(scoreList[i].score2)
            d3.select("#score3")
              .text(scoreList[i].score3)
            d3.select("#score4")
              .text(scoreList[i].score4)
            d3.select("#score5")
              .text(scoreList[i].score5)
          }
        }
        timestepVar = d.timestep;
      });
  });

  // data for filter scores
  var url2 = "https://z3n-t4n.github.io/IndividualProject/dqn/filter/scores.json";

  // legend
  scoreChart.append("circle")
    .attr("cx", 60)
    .attr("cy", 125)
    .attr("fill", "green")
    .attr("r", 6);
  scoreChart.append("text")
    .attr("x", 80)
    .attr("y", 125)
    .text("Filter")
    .attr("alignment-baseline","middle")
    .style("font-size", "15px");

  d3.json(url2).then( data => {
    var xScale =  d3
      .scaleLinear()
      .range([0, width - spacing])
      .domain([0, d3.max(data, function(d){ return d.timestep; }) + 700000]);

    var yScale = d3
      .scaleLinear()
      .range([height - spacing, 0])
      .domain([0, d3.max(data, function(d){ return d.mean; }) + 95]);

    // tooltip
    var tooltip = d3.select("body")
      .append("div")
      .attr("class", "tooltip")
      .style("opacity", 0)
      .style("position", "absolute")
      .style("background-color", "lightsteelblue")
      .style("pointer-events", "none");

    // filter
    d3.select("#filterScores").on("change",filterScores);
    filterScores();

    function filterScores() {
      var filter = scoreChart.selectAll("circle.filter")
        .data(data);

      if(d3.select("#filterScores").property("checked")){
        filter.enter()
          .append("circle")
          .attr("class", "filter")
          .merge(filter)
          .attr("cx", function(d){ return xScale(d.timestep); })
          .attr("cy", function(d){ return yScale(d.mean); })
          .attr("r", 6)
          .attr("fill", "green")
          .on("mouseover", function(event, d) {
            if (d.timestep == 1300000){
              tooltip.transition()
                .style("opacity", 1)
              tooltip.html("Filtered by the first increase in mean score of 50 or more" + "<br/>" + "Score: " + d.mean + "<br/>" + "SD: " + d.std + "<br/>" + "Length: " + d.length + "<br/>" + "Timestep: " + d.timestep)
                .style("left", (event.pageX + 6) + "px")
                .style("top", (event.pageY - 90) + "px");
          	} else {
              tooltip.transition()
                .style("opacity", 1)
              tooltip.html("Filtered by the highest mean score achieved" + "<br/>" + "Score: " + d.mean + "<br/>" + "SD: " + d.std + "<br/>" + "Length: " + d.length + "<br/>" + "Timestep: " + d.timestep)
                .style("left", (event.pageX + 3) + "px")
                .style("top", (event.pageY - 75) + "px");
              }
          })
          .on("mouseout", function(d) {
            tooltip.transition()
              .duration(1000)
              .style("opacity", 0);
          })
          .on("click", function(event, d) {
            // reset selected
            d3.selectAll("circle.mean")
              .style("fill", "black")
              .attr("r", 4);
            d3.selectAll("circle.filter")
              .style("fill", "green");
            d3.selectAll("circle.reward")
              .style("fill", "black")
              .attr("r", 4);
            d3.selectAll("rect.barNoop")
              .style("fill", "#63aac0");
            d3.selectAll("rect.barFire")
              .style("fill", "#fb475e");
            d3.selectAll("rect.barRight")
              .style("fill", "#b6d084");
            d3.selectAll("rect.barLeft")
              .style("fill", "#fdb750");
            // set selected color and size
            d3.select(this)
              .style("fill", "red")
              .attr("r", 6);
            d3.select("h3#agentSelected")
              .text("Agent @ Timestep " + d.timestep);
            d3.select("#parallelCoordImg")
              .attr("src", "./img/dqn/parallel_coord/parallel_coord_" + d.timestep + "_steps.png");
            d3.select("#rewardFreqImg")
              .attr("src", "./img/dqn/reward_freq/reward_freq_template.png");
            d3.select("#gif")
              .attr("src", "./img/dqn/simulation/gif_" + d.timestep + ".gif");
            d3.select("p#gifScore")
              .text("Playback Score " + d.score);
            for (let i = 0; i < scoreList.length; i++) {
              if (scoreList[i].timestep == d.timestep){
                d3.select("#score1")
                  .text(scoreList[i].score1)
                d3.select("#score2")
                  .text(scoreList[i].score2)
                d3.select("#score3")
                  .text(scoreList[i].score3)
                d3.select("#score4")
                  .text(scoreList[i].score4)
                d3.select("#score5")
                  .text(scoreList[i].score5)
              }
            }
            timestepVar = d.timestep;
          })
          .style("opacity", 1);
    	} else {
        filter.enter()
          .append("circle")
          .attr("class", "filter")
          .merge(filter)
          .style("opacity", 0);
      }
    }
  });
}
score();

function reward() {
  // data for rewards
  var url = "https://z3n-t4n.github.io/IndividualProject/dqn/rewards.json";

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
    rewardChart.append("circle")
      .attr("cx", 60)
      .attr("cy", 50)
      .attr("fill", "red")
      .attr("r", 6);
    rewardChart.append("text")
      .attr("x", 80)
      .attr("y", 50)
      .text("Agent of Interest")
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
    var points = rewardChart.selectAll(".reward")
      .data(data);
    points.enter()
      .append("circle")
      .attr("class", "reward")
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
      })
      .on("click", function(event, d) {
        // reset selected
        d3.selectAll("circle.reward")
          .style("fill", "black")
          .attr("r", 4);
        d3.selectAll("circle.filter")
          .style("fill", "green");
        d3.selectAll("circle.mean")
          .style("fill", "black")
          .attr("r", 4);
        d3.selectAll("rect.barNoop")
          .style("fill", "#63aac0");
        d3.selectAll("rect.barFire")
          .style("fill", "#fb475e");
        d3.selectAll("rect.barRight")
          .style("fill", "#b6d084");
        d3.selectAll("rect.barLeft")
          .style("fill", "#fdb750");
        // set selected color and size
        d3.select(this)
          .style("fill", "red")
          .attr("r", 6);
        d3.select("h3#agentSelected")
          .text("Agent @ Timestep " + d.timestep);
        d3.select("#parallelCoordImg")
          .attr("src", "./img/dqn/parallel_coord/parallel_coord_" + d.timestep + "_steps.png");
        d3.select("#rewardFreqImg")
          .attr("src", "./img/dqn/reward_freq/reward_freq_template.png");
        d3.select("#gif")
          .attr("src", "./img/dqn/simulation/gif_" + d.timestep + ".gif");
        d3.select("p#gifScore")
          .text("Playback Score " + d.score);
        for (let i = 0; i < scoreList.length; i++) {
          if (scoreList[i].timestep == d.timestep){
            d3.select("#score1")
              .text(scoreList[i].score1)
            d3.select("#score2")
              .text(scoreList[i].score2)
            d3.select("#score3")
              .text(scoreList[i].score3)
            d3.select("#score4")
              .text(scoreList[i].score4)
            d3.select("#score5")
              .text(scoreList[i].score5)
          }
        }
        timestepVar = d.timestep;
      });
  });

  // data for filter rewards
  var url2 = "https://z3n-t4n.github.io/IndividualProject/dqn/filter/rewards.json";

  // legend
  rewardChart.append("circle")
    .attr("cx", 60)
    .attr("cy", 80)
    .attr("fill", "green")
    .attr("r", 6);
  rewardChart.append("text")
    .attr("x", 80)
    .attr("y", 80)
    .text("Filter")
    .attr("alignment-baseline","middle")
    .style("font-size", "15px");

  d3.json(url2).then( data => {
    var xScale =  d3
      .scaleLinear()
      .range([0, width - spacing])
      .domain([0, d3.max(data, function(d){ return d.timestep; }) + 150000]);

    var yScale = d3
      .scaleLinear()
      .range([height - spacing, 0])
      .domain([0, d3.max(data, function(d){ return d.reward; }) + 500]);

    // tooltip
    var tooltip = d3.select("body")
      .append("div")
      .attr("class", "tooltip")
      .style("opacity", 0)
      .style("position", "absolute")
      .style("background-color", "lightsteelblue")
      .style("pointer-events", "none");

    // points of interest
    d3.select("#filterRewards").on("change",filterRewards);
    filterRewards();

    function filterRewards() {
      var filter = rewardChart.selectAll("circle.filter")
        .data(data);

      if(d3.select("#filterRewards").property("checked")){
        filter.enter()
          .append("circle")
          .attr("class", "filter")
          .merge(filter)
          .attr("cx", function(d){ return xScale(d.timestep); })
          .attr("cy", function(d){ return yScale(d.reward); })
          .attr("r", 6)
          .attr("fill", "green")
          .on("mouseover", function(event, d) {
            if (d.timestep == 3450000 || d.timestep == 4850000){
              tooltip.transition()
                .style("opacity", 1)
              tooltip.html("Filtered by a drop in rewards of 300 or more" + "<br/>" + "Reward: " + d.reward + "<br/>" + "Timestep: " + d.timestep)
              .style("left", (event.pageX + 5) + "px")
              .style("top", (event.pageY - 60) + "px");
          	}
          })
          .on("mouseout", function(d) {
            tooltip.transition()
              .duration(1000)
              .style("opacity", 0);
          })
          .on("click", function(event, d) {
            // reset selected
            d3.selectAll("circle.mean")
              .style("fill", "black")
              .attr("r", 4);
            d3.selectAll("circle.filter")
              .style("fill", "green");
            d3.selectAll("circle.reward")
              .style("fill", "black")
              .attr("r", 4);
            d3.selectAll("rect.barNoop")
              .style("fill", "#63aac0");
            d3.selectAll("rect.barFire")
              .style("fill", "#fb475e");
            d3.selectAll("rect.barRight")
              .style("fill", "#b6d084");
            d3.selectAll("rect.barLeft")
              .style("fill", "#fdb750");
            // set selected color and size
            d3.select(this)
              .style("fill", "red")
              .attr("r", 6);
            d3.select("h3#agentSelected")
              .text("Agent @ Timestep " + d.timestep);
            d3.select("#parallelCoordImg")
              .attr("src", "./img/dqn/parallel_coord/parallel_coord_" + d.timestep + "_steps.png");
            d3.select("#rewardFreqImg")
              .attr("src", "./img/dqn/reward_freq/reward_freq_template.png");
            d3.select("#gif")
              .attr("src", "./img/dqn/simulation/gif_" + d.timestep + ".gif");
            d3.select("p#gifScore")
              .text("Playback Score " + d.score);
            for (let i = 0; i < scoreList.length; i++) {
              if (scoreList[i].timestep == d.timestep){
                d3.select("#score1")
                  .text(scoreList[i].score1)
                d3.select("#score2")
                  .text(scoreList[i].score2)
                d3.select("#score3")
                  .text(scoreList[i].score3)
                d3.select("#score4")
                  .text(scoreList[i].score4)
                d3.select("#score5")
                  .text(scoreList[i].score5)
              }
            }
            timestepVar = d.timestep;
          })
          .style("opacity", 1);
    	} else {
        filter.enter()
          .append("circle")
          .attr("class", "filter")
          .merge(filter)
          .style("opacity", 0);
      }
    }
  });
}
reward();

function action() {
  // data for actions
  var url = "https://z3n-t4n.github.io/IndividualProject/dqn/actions.json";

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
      actionChart.selectAll(".barFire").remove();
      actionChart.selectAll(".barRight").remove();
      actionChart.selectAll(".barLeft").remove();
      actionChart.selectAll(".series").remove();
      var bar = actionChart.selectAll(".barNoop")
        .data(data);
      bar.enter()
        .append("rect")
        .attr("class", "barNoop")
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
        })
        .on("click", function(event, d) {
          // reset selected
          d3.selectAll("rect.barNoop")
            .style("fill", "#63aac0");
          d3.selectAll("circle.filter")
            .style("fill", "green");
          d3.selectAll("circle.mean")
            .style("fill", "black")
            .attr("r", 4);
          d3.selectAll("circle.reward")
            .style("fill", "black")
            .attr("r", 4);
          // set selected color
          d3.select(this)
            .style("fill", "black");
          d3.select("h3#agentSelected")
            .text("Agent @ Timestep " + d.timestep);
          d3.select("#parallelCoordImg")
            .attr("src", "./img/dqn/parallel_coord/parallel_coord_" + d.timestep + "_steps.png");
          d3.select("#rewardFreqImg")
            .attr("src", "./img/dqn/reward_freq/reward_freq_template.png");
          d3.select("#gif")
            .attr("src", "./img/dqn/simulation/gif_" + d.timestep + ".gif");
          d3.select("p#gifScore")
            .text("Playback Score " + d.score);
          for (let i = 0; i < scoreList.length; i++) {
            if (scoreList[i].timestep == d.timestep){
              d3.select("#score1")
                .text(scoreList[i].score1)
              d3.select("#score2")
                .text(scoreList[i].score2)
              d3.select("#score3")
                .text(scoreList[i].score3)
              d3.select("#score4")
                .text(scoreList[i].score4)
              d3.select("#score5")
                .text(scoreList[i].score5)
            }
          }
          timestepVar = d.timestep;
        });
    }
    noop();

    // get reference to button
    var btn = document.getElementById("fire");
    // add event listener for the button, for action "click"
    btn.addEventListener("click", fire);
    function fire(){
      actionChart.selectAll(".barNoop").remove();
      actionChart.selectAll(".barRight").remove();
      actionChart.selectAll(".barLeft").remove();
      actionChart.selectAll(".series").remove();
      var bar = actionChart.selectAll(".barFire")
        .data(data);
      bar.enter()
        .append("rect")
        .attr("class", "barFire")
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
        })
        .on("click", function(event, d) {
          // reset selected
          d3.selectAll("rect.barFire")
            .style("fill", "#fb475e");
          d3.selectAll("circle.filter")
            .style("fill", "green");
          d3.selectAll("circle.mean")
            .style("fill", "black")
            .attr("r", 4);
          d3.selectAll("circle.reward")
            .style("fill", "black")
            .attr("r", 4);
          // set selected color
          d3.select(this)
            .style("fill", "black");
          d3.select("h3#agentSelected")
            .text("Agent @ Timestep " + d.timestep);
          d3.select("#parallelCoordImg")
            .attr("src", "./img/dqn/parallel_coord/parallel_coord_" + d.timestep + "_steps.png");
          d3.select("#rewardFreqImg")
            .attr("src", "./img/dqn/reward_freq/reward_freq_template.png");
          d3.select("#gif")
            .attr("src", "./img/dqn/simulation/gif_" + d.timestep + ".gif");
          d3.select("p#gifScore")
            .text("Playback Score " + d.score);
          for (let i = 0; i < scoreList.length; i++) {
            if (scoreList[i].timestep == d.timestep){
              d3.select("#score1")
                .text(scoreList[i].score1)
              d3.select("#score2")
                .text(scoreList[i].score2)
              d3.select("#score3")
                .text(scoreList[i].score3)
              d3.select("#score4")
                .text(scoreList[i].score4)
              d3.select("#score5")
                .text(scoreList[i].score5)
            }
          }
          timestepVar = d.timestep;
        });
    }

    // get reference to button
    var btn = document.getElementById("right");
    // add event listener for the button, for action "click"
    btn.addEventListener("click", right);
    function right(){
      actionChart.selectAll(".barNoop").remove();
      actionChart.selectAll(".barFire").remove();
      actionChart.selectAll(".barLeft").remove();
      actionChart.selectAll(".series").remove();
      var bar = actionChart.selectAll(".barRight")
        .data(data);
      bar.enter()
        .append("rect")
        .attr("class", "barRight")
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
        })
        .on("click", function(event, d) {
          // reset selected
          d3.selectAll("rect.barRight")
            .style("fill", "#b6d084");
          d3.selectAll("circle.filter")
            .style("fill", "green");
          d3.selectAll("circle.mean")
            .style("fill", "black")
            .attr("r", 4);
          d3.selectAll("circle.reward")
            .style("fill", "black")
            .attr("r", 4);
          // set selected color
          d3.select(this)
            .style("fill", "black");
          d3.select("h3#agentSelected")
            .text("Agent @ Timestep " + d.timestep);
          d3.select("#parallelCoordImg")
            .attr("src", "./img/dqn/parallel_coord/parallel_coord_" + d.timestep + "_steps.png");
          d3.select("#rewardFreqImg")
            .attr("src", "./img/dqn/reward_freq/reward_freq_template.png");
          d3.select("#gif")
            .attr("src", "./img/dqn/simulation/gif_" + d.timestep + ".gif");
          d3.select("p#gifScore")
            .text("Playback Score " + d.score);
          for (let i = 0; i < scoreList.length; i++) {
            if (scoreList[i].timestep == d.timestep){
              d3.select("#score1")
                .text(scoreList[i].score1)
              d3.select("#score2")
                .text(scoreList[i].score2)
              d3.select("#score3")
                .text(scoreList[i].score3)
              d3.select("#score4")
                .text(scoreList[i].score4)
              d3.select("#score5")
                .text(scoreList[i].score5)
            }
          }
          timestepVar = d.timestep;
        });
    }

    // get reference to button
    var btn = document.getElementById("left");
    // add event listener for the button, for action "click"
    btn.addEventListener("click", left);
    function left(){
      actionChart.selectAll(".barNoop").remove();
      actionChart.selectAll(".barFire").remove();
      actionChart.selectAll(".barRight").remove();
      actionChart.selectAll(".series").remove();
      var bar = actionChart.selectAll(".barLeft")
        .data(data);
      bar.enter()
        .append("rect")
        .attr("class", "barLeft")
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
        })
        .on("click", function(event, d) {
          // reset selected
          d3.selectAll("rect.barLeft")
            .style("fill", "#fdb750");
          d3.selectAll("circle.filter")
            .style("fill", "green");
          d3.selectAll("circle.mean")
            .style("fill", "black")
            .attr("r", 4);
          d3.selectAll("circle.reward")
            .style("fill", "black")
            .attr("r", 4);
          // set selected color
          d3.select(this)
            .style("fill", "black");
          d3.select("h3#agentSelected")
            .text("Agent @ Timestep " + d.timestep);
          d3.select("#parallelCoordImg")
            .attr("src", "./img/dqn/parallel_coord/parallel_coord_" + d.timestep + "_steps.png");
          d3.select("#rewardFreqImg")
            .attr("src", "./img/dqn/reward_freq/reward_freq_template.png");
          d3.select("#gif")
            .attr("src", "./img/dqn/simulation/gif_" + d.timestep + ".gif");
          d3.select("p#gifScore")
            .text("Playback Score " + d.score);
          for (let i = 0; i < scoreList.length; i++) {
            if (scoreList[i].timestep == d.timestep){
              d3.select("#score1")
                .text(scoreList[i].score1)
              d3.select("#score2")
                .text(scoreList[i].score2)
              d3.select("#score3")
                .text(scoreList[i].score3)
              d3.select("#score4")
                .text(scoreList[i].score4)
              d3.select("#score5")
                .text(scoreList[i].score5)
            }
          }
          timestepVar = d.timestep;
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

function aoi(evt, aoi) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("aoiTabContent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("aoiTabLinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(aoi).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("defaultAoi").click();

d3.select("#score1").on("click", function(event) {
  d3.select("#rewardFreqImg")
    .attr("src", "./img/dqn/reward_freq/timestep_" + timestepVar + "/reward_freq_A.png");
});
d3.select("#score2").on("click", function(event) {
  d3.select("#rewardFreqImg")
    .attr("src", "./img/dqn/reward_freq/timestep_" + timestepVar + "/reward_freq_B.png");
});
d3.select("#score3").on("click", function(event) {
  d3.select("#rewardFreqImg")
    .attr("src", "./img/dqn/reward_freq/timestep_" + timestepVar + "/reward_freq_C.png");
});
d3.select("#score4").on("click", function(event) {
  d3.select("#rewardFreqImg")
    .attr("src", "./img/dqn/reward_freq/timestep_" + timestepVar + "/reward_freq_D.png");
});
d3.select("#score5").on("click", function(event) {
  d3.select("#rewardFreqImg")
    .attr("src", "./img/dqn/reward_freq/timestep_" + timestepVar + "/reward_freq_E.png");
});
