
//--------------linear------------------------
//create scale with domain and range
var linear = d3.scaleLinear()
  .domain([0,10])
  .range(["rgb(46, 73, 123)", "rgb(71, 187, 94)"]);

var svg = d3.select("svg");

svg.append("g")
  .attr("class", "legendLinear")
  .attr("transform", "translate(30,20)");

//create legend variable with properties
var legendLinear = d3.legendColor()
  .shape("circle")
  .shapePadding(20)
  .shapeWidth(30)
  .orient('horizontal')
  .scale(linear);

//call legend var
svg.select(".legendLinear")
  .call(legendLinear);


//-------------linear long--------------------
var linearLong = d3.scaleLinear()
  .domain([0,10])
  .range(["rgb(46, 73, 123)", "rgb(71, 187, 94)"]);

//var svg = d3.select("svg");

svg.append("g")
  .attr("class", "legendLinearLong")
  .attr("transform", "translate(20,80)");

var legendLinear = d3.legendColor()
  .shapeWidth(30)
  .cells(10)
  .orient('horizontal')
  .scale(linearLong);

svg.select(".legendLinearLong")
  .call(legendLinear);

//-----------sequential---------------------------

var sequentialScale = d3.scaleSequential(d3.interpolateRainbow)
  .domain([0,10]);

//var svg = d3.select("svg");

svg.append("g")
  .attr("class", "legendSequential")
  .attr("transform", "translate(20,140)");

var legendSequential = d3.legendColor()
    .shapeWidth(30)
    .cells(10)
    .orient("horizontal")
    .scale(sequentialScale) 

svg.select(".legendSequential")
  .call(legendSequential);


//------------------log------------------------------------
var log = d3.scaleLog()
    .domain([ 0.1, 100, 1000 ])
    .range(["rgb(46, 73, 123)", "rgb(71, 187, 94)"]);

//var svg = d3.select("svg");

svg.append("g")
  .attr("class", "legendLog")
  .attr("transform", "translate(400,30)");

var logLegend = d3.legendColor()
    .cells([0.1, 5, 10, 50, 100, 500, 1000])
    .scale(log);

svg.select(".legendLog")
  .call(logLegend);

//---------------custom shapes-----------------------------
var ordinal = d3.scaleOrdinal()
  .domain(["a", "b", "c", "d", "e"])
  .range([ "rgb(153, 107, 195)", "rgb(56, 106, 197)", "rgb(93, 199, 76)", "rgb(223, 199, 31)", "rgb(234, 118, 47)"]);

//var svg = d3.select("svg");

svg.append("g")
  .attr("class", "legendOrdinal")
  .attr("transform", "translate(500,40)");

var legendOrdinal = d3.legendColor()
  //d3 symbol creates a path-string, for example
  .shape("path", d3.symbol().type(d3.symbolTriangle).size(150)())
  .shapePadding(20)
  //use cellFilter to hide the "e" cell
  //.cellFilter(function(d){ return d.label !== "e" })
  .scale(ordinal);

svg.select(".legendOrdinal")
  .call(legendOrdinal);

//----------------size circles--------------------------------
var linearSize = d3.scaleLinear().domain([0,10]).range([10, 30]);

//var svg = d3.select("svg");

svg.append("g")
  .attr("class", "legendSize")
  .attr("transform", "translate(20, 300)");

var legendSize = d3.legendSize()
  .scale(linearSize)
  .shape('circle')
  .shapePadding(15)
  .labelOffset(20)
  .orient('horizontal');

svg.select(".legendSize")
  .call(legendSize);

//---------------size log-----------------------------------------
/*var lineSizelog = d3.scaleLinear().domain([0,10]).range([2, 10]);

//var svg = d3.select("svg");

svg.append("g")
  .attr("class", "legendSizeLine")
  .attr("transform", "translate(300, 500)");

var legendSizeLine = d3.legendSize()
      .scale(lineSizelog)
      .shape("line")
      .orient("horizontal")
      //otherwise labels would have displayed:
      // 0, 2.5, 5, 10
      .labels(["tiny testing at the beginning", "small", "medium", "large", "grand, all the way long label"])
      .labelWrap(30)
      .shapeWidth(40)
      .labelAlign("start")
      .shapePadding(10);

svg.select(".legendSizeLine")
  .call(legendSizeLine);*/

//------------symbols-----------------------------------------------
var triangleU = d3.symbol().type(d3.symbolTriangle)(),
  circle = d3.symbol().type(d3.symbolCircle)(),
  cross = d3.symbol().type(d3.symbolCross)(),
  diamond = d3.symbol().type(d3.symbolDiamond)(),
  start = d3.symbol().type(d3.symbolStar)();

//example output of d3.svg.symbol().type('circle')();
//"M0,4.51351666838205A4.51351666838205,4.51351666838205 0 1,1 0,
//-4.51351666838205A4.51351666838205,4.51351666838205 0 1,1 0,4.51351666838205Z"

var symbolScale =  d3.scaleOrdinal()
  .domain(['a','b','c', 'd', 'e'])
  .range([ triangleU, circle, cross, diamond, start] );

//var svg = d3.select("svg");

svg.append("g")
  .attr("class", "legendSymbol")
  .attr("transform", "translate(300, 300)");

var colorScale = d3.scaleOrdinal()
  .range(["red"]);

var legendPath = d3.legendSymbol()
  .scale(symbolScale)
  .labelWrap(30)
  .title("Symbol Legend Title")
  .on("cellclick", function(d){alert("clicked " + d);});

svg.select(".legendSymbol")
  .call(legendPath);

svg.selectAll(".cell path").each(function(d) {
  console.log(d);
  d3.select(this).style("fill", colorScale(d));
})