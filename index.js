/* d3.json("world_countries.json", function(topology){

    d3.csv("codes.csv", function (codes){

        for (i =0; i<topology.features.length; i++){

            var countryID = topology.features[i].id;
            for (j = 0; j<codes.length; j++){

                if (codes[j].alpha3 == countryID){
                    var code = codes[j].alpha2;
                    topology.features[i].id = code;
                }
            }
        }

        //topology.features[176].id = "1";
        //console.log(topology.features);
        console.log(JSON.stringify(topology));

    });
});*/

/*d3.select(".Rhino").classed("imghidden",true);
d3.select(".Elephant").classed("imghidden",true);
d3.select(".Parrot").classed("imghidden",true);
*/

var format = d3.format(",");

// Set tooltips
var tip = d3.tip()
    .attr('class', 'd3-tip')
    .offset([-10, 0])
    .html(function(d) {

        if (isNaN(d.population)){
            return "<strong>Country: </strong><span class='details'>" + d.properties.name + "<br></span>"
        }
        else{
            return "<strong>Country: </strong><span class='details'>" + d.properties.name + "<br></span>" + "<strong>Ivory Products: </strong><span class='details'>" + format(Math.floor(d.population)) +"</span>";
        }

    });

// Setting tooltip directions for edge cases
tip.direction(function(d) {

    if (d.properties.name === 'Antarctica') return 'n';
    // Americas
    if (d.properties.name === 'Greenland') return 's';
    if (d.properties.name === 'Canada') return 'e';
    if (d.properties.name === 'USA') return 'e';
    if (d.properties.name === 'Mexico') return 'e';
    // Europe
    if (d.properties.name === 'Iceland') return 's';
    if (d.properties.name === 'Norway') return 's';
    if (d.properties.name === 'Sweden') return 's';
    if (d.properties.name === 'Finland') return 's';
    if (d.properties.name === 'Russia') return 'w';
    // Asia
    if (d.properties.name === 'China') return 'w';
    if (d.properties.name === 'Japan') return 's';
    // Oceania
    if (d.properties.name === 'Indonesia') return 'w';
    if (d.properties.name === 'Papua New Guinea') return 'w';
    if (d.properties.name === 'Australia') return 'w';
    if (d.properties.name === 'New Zealand') return 'w';
    // otherwise if not specified
    return 'n';
});

// Setting tooltip offsets for edge cases
tip.offset(function(d) { // [top, left]

    if (d.properties.name === 'Antarctica') return [0, 0];
    // Americas 
    if (d.properties.name === 'Greenland') return [10, -10];
    if (d.properties.name === 'Canada') return [24, -28];
    if (d.properties.name === 'USA') return [30, 8];
    if (d.properties.name === 'Mexico') return [12, 10];
    if (d.properties.name === 'Chile') return [0, -15];
    // Europe
    if (d.properties.name === 'Iceland') return [15, 0];
    if (d.properties.name === 'Norway') return [10, -28];
    if (d.properties.name === 'Sweden') return [10, -8];
    if (d.properties.name === 'Finland') return [10, 0];
    if (d.properties.name === 'France') return [-9, 66];
    if (d.properties.name === 'Italy') return [-8, -6];
    if (d.properties.name === 'Russia') return [-35, 350];
    // Africa
    if (d.properties.name === 'Madagascar') return [-10, 10];
    // Asia
    if (d.properties.name === 'China') return [-16, -8];
    if (d.properties.name === 'Mongolia') return [-5, 0];
    if (d.properties.name === 'Pakistan') return [-10, 13];
    if (d.properties.name === 'India') return [-11, -18];
    if (d.properties.name === 'Nepal') return [-8, 1];
    if (d.properties.name === 'Myanmar') return [-12, 0];
    if (d.properties.name === 'Laos') return [-12, -8];
    if (d.properties.name === 'Vietnam') return [-12, -4];
    if (d.properties.name === 'Japan') return [5, 5];

    // Oceania
    if (d.properties.name === 'Indonesia') return [0, -5];
    if (d.properties.name === 'Papua New Guinea') return [-5, -10];
    if (d.properties.name === 'Australia') return [-15, 0];
    if (d.properties.name === 'New Zealand') return [-15, 0];
    // otherwise if not specified

    return [-10, 0];
})

// Setting annotations for body parts

const annotations = [
{
  type: d3.annotationCalloutCircle,
  note: {
    label: "Your Bones would be used in Traditional Medicine in countries like China and India.",
    title: "BONES",
    wrap: 100
  },
  //settings for the subject, in this case the circle radius
  subject: {
    radius: 5
  },
  x: 250,
  y: 305,
  dy: 30,
  dx: 40
},
{
  type: d3.annotationCalloutCircle,
  note: {
    label: "Description for feet.",
    title: "FEET",
    wrap: 100
  },
  //settings for the subject, in this case the circle radius
  subject: {
    radius: 5
  },
  x: 252,
  y: 375,
  dy: -20,
  dx: 50
},
{
  type: d3.annotationCalloutCircle,
  note: {
    label: "Description for Gall Bladder.",
    title: "GALL BLADDER",
    wrap: 100
  },
  //settings for the subject, in this case the circle radius
  subject: {
    radius: 3
  },
  x: 233,
  y: 222,
  dy: 40,
  dx: 40
},
{
  type: d3.annotationCalloutCircle,
  note: {
    label: "Description for Heart.",
    title: "HEART",
    wrap: 100
  },
  //settings for the subject, in this case the circle radius
  subject: {
    radius: 3
  },
  x: 233,
  y: 195,
  dy: -40,
  dx: 40
},
{
  type: d3.annotationCalloutCircle,
  note: {
    label: "Description for Teeth.",
    title: "TEETH",
    wrap: 100
  },
  //settings for the subject, in this case the circle radius
  subject: {
    radius: 3
  },
  x: 237,
  y: 135,
  dy: 15,
  dx: 60
},
{
  type: d3.annotationCalloutCircle,
  note: {
    label: "Description for Hair.",
    title: "HAIR",
    wrap: 100
  },
  //settings for the subject, in this case the circle radius
  subject: {
    radius: 3
  },
  x: 233,
  y: 75,
  dy: -10,
  dx: 50
},
{
  type: d3.annotationCalloutCircle,
  note: {
    label: "Description for Liver.",
    title: "LIVER",
    wrap: 100
  },
  //settings for the subject, in this case the circle radius
  subject: {
    radius: 3
  },
  x: 213,
  y: 222,
  dy: 30,
  dx: -30
},
{
  type: d3.annotationCalloutCircle,
  note: {
    label: "Description for Nails. Description for Nails.",
    title: "NAILS",
    wrap: 100
  },
  //settings for the subject, in this case the circle radius
  subject: {
    radius: 3
  },
  x: 105,
  y: 223,
  dy: 30,
  dx: -5
},
{
  type: d3.annotationCalloutCircle,
  note: {
    label: "Description for Skin.",
    title: "SKIN",
    wrap: 100
  },
  //settings for the subject, in this case the circle radius
  subject: {
    radius: 5
  },
  x: 195,
  y: 162,
  dy: -30,
  dx: -30
},
{
  type: d3.annotationCalloutCircle,
  note: {
    label: "Description for Blood.",
    title: "BLOOD",
    wrap: 100
  },
  //settings for the subject, in this case the circle radius
  subject: {
    radius: 5
  },
  x: 200,
  y: 359,
  dy: -30,
  dx: -30
},
{
  type: d3.annotationCalloutCircle,
  note: {
    label: "Description for Ears.",
    title: "EARS",
    wrap: 100
  },
  //settings for the subject, in this case the circle radius
  subject: {
    radius: 3
  },
  x: 190,
  y: 110,
  dy: -30,
  dx: -30
},
].map(function(d){ d.color = "#D81E05"; return d});

const makeAnnotations = d3.annotation()
    .type(d3.annotationLabel)
    .annotations(annotations)
    .on('subjectover', function (annotation) {
        annotation.type.a.selectAll("g.annotation-connector, g.annotation-note").classed("hidden", false);
    })
    .on('subjectout', function (annotation) {
        annotation.type.a.selectAll("g.annotation-connector, g.annotation-note").classed("hidden", true);
    });

/*d3.select("svg")
  .append("g")
  .attr("class", "annotation-group")
  .call(makeAnnotations);

d3.select(".annotation-group").selectAll("g.annotation-connector, g.annotation-note").classed("hidden", true);
*/

// Only defined for projection, not used anywhere else
var margin = {top: 0, right: 0, bottom: 0, left: 0},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var svg = d3.select(".Map-Container")
    .append('g')
    .attr('class', 'map');

var g = svg.select("g");
//console.log(svg);


// Manipulating colours
var colors = d3.scaleThreshold()
    .domain([1,5,182,280,371,507])
    .range(["#fee5d9","#fcbba1","#fc9272","#fb6a4a","#de2d26","#D81E05"]);

function color (d){

    if (isNaN(d)==false) {
        return colors(d);
    }
    else {
        //return "rgb(247,251,255)"
        return "lightgrey";
    }
}

/*var projection = d3.geoVanDerGrinten()//d3.geoCylindricalStereographic()
    .scale(100)
    .translate([width / 2, height / 2]);*/

var projection = d3.geoKavrayskiy7()//d3.geoCylindricalStereographic()
    .scale(140)
    .translate([width / 2, height / 2.3]);


/*var projection = d3.geoMercator()//d3.geoCylindricalStereographic()
    .scale(110)
    .translate([width / 2, height / 1.5]);
*/
var path = d3.geoPath().projection(projection);

svg.call(tip);


// Make the default map: Tiger Origin 2016
queue()
   .defer(d3.json, "world_map.json")
   .defer(d3.csv, "csvFiles/Animals/origin/tiger_origin_2016.csv")
   .await(ready);

function ready(error, data, population) {
    var populationById = {};

    population.forEach(function(d) { populationById[d.id] = +d.population; });
    data.features.forEach(function(d) { d.population = populationById[d.id] });

    svg.append("g")
        .attr("class", "countries")
        .selectAll("path")
        .data(data.features)
            .enter().append("path")
            .attr("d", path)
            .style("fill", function(d) {
                //console.log(populationById[d.id])
                return color(populationById[d.id]);
            })
            .style('stroke', 'darkgrey')
            .style('stroke-width', 1.5)
            .style("opacity",0.8)
            // tooltips
            .style("stroke","white")
            .style('stroke-width', 0.3)
            .on('mouseover',function(d){
              tip.show(d);

              d3.select(this)
                .style("opacity", 1)
                .style("stroke","white")
                .style("stroke-width",2);
            })
            .on('mouseout', function(d){
              tip.hide(d);

              d3.select(this)
                .style("opacity", 0.8)
                .style("stroke","white")
                .style("stroke-width",0.3);
            });

    /*svg.append("path")
        .datum(topojson.mesh(data.features, function(a, b) { return a.id !== b.id; }))
        // .datum(topojson.mesh(data.features, function(a, b) { return a !== b; }))
        .attr("class", "names")
        .attr("d", path);
    */
}

var zoom_handler = d3.zoom()
    .scaleExtent([1, 4])
    .on("zoom", zoom_actions)

svg.call(zoom_handler);

function zoom_actions(){
    svg.selectAll(".countries")
        .attr("transform", d3.event.transform)
        .attr("translate", d3.event.translate)
        .attr("scale", d3.event.scale)
}

//Setting up buttons

// Variable to be used to toggle between origin and importer for a particular animal
var togTiger = true;
var togElephant = false;
var togRhino = false;
var togParrot = false;

d3.select(".BTiger").on("click", function(){
    console.log("Tiger");
    
    // Change map header to correct one
    d3.select("#mapheader").text("Tiger Origin, 2016");
    
    togTiger = true;
    togElephant = false;
    togRhino = false;
    togParrot = false;
    
    d3.select(".Tiger").classed("imghidden",false);
    d3.select(".Rhino").classed("imghidden",true);
    d3.select(".Elephant").classed("imghidden",true);
    d3.select(".Parrot").classed("imghidden",true);

    queue()
       .defer(d3.json, "world_map.json")
       .defer(d3.csv, "csvFiles/Animals/origin/tiger_origin_2016.csv")
       .await(update);


});

d3.select(".BElephant").on("click", function(){
    console.log("Elephant");

    // Change map header to correct one
    d3.select("#mapheader").text("Elephant Origin, 2016");
    
    togTiger = false;
    togElephant = true;
    togRhino = false;
    togParrot = false;
    
    d3.select(".Elephant").classed("imghidden",false);
    d3.select(".Rhino").classed("imghidden",true);
    d3.select(".Tiger").classed("imghidden",true);
    d3.select(".Parrot").classed("imghidden",true);

    queue()
       .defer(d3.json, "world_map.json")
       .defer(d3.csv, "csvFiles/Animals/origin/elephant_origin_2016.csv")
       .await(update);

});

d3.select(".BRhino").on("click", function(){
    console.log("Rhino");

    d3.select("#mapheader").text("Rhino Origin, 2016");
    
    togTiger = false;
    togElephant = false;
    togRhino = true;
    togParrot = false;
    
    d3.select(".Rhino").classed("imghidden",false);
    d3.select(".Tiger").classed("imghidden",true);
    d3.select(".Elephant").classed("imghidden",true);
    d3.select(".Parrot").classed("imghidden",true);

    queue()
       .defer(d3.json, "world_map.json")
       .defer(d3.csv, "csvFiles/Animals/origin/rhino_origin_2016.csv")
       .await(update);
});

d3.select(".BParrot").on("click", function(){
    console.log("Grey Parrot");

    d3.select("#mapheader").text("Grey Parrot Origin, 2016");
    
    togTiger = false;
    togElephant = false;
    togRhino = false;
    togParrot = true;
    
    d3.select(".Parrot").classed("imghidden",false);
    d3.select(".Rhino").classed("imghidden",true);
    d3.select(".Elephant").classed("imghidden",true);
    d3.select(".Tiger").classed("imghidden",true);

    queue()
       .defer(d3.json, "world_map.json")
       .defer(d3.csv, "csvFiles/Animals/origin/grey_parrot_origin_2016.csv")
       .await(update);

});


d3.select(".Origin").on("click", function(){

    if(togTiger){
        
        d3.select("#mapheader").text("Tiger Origin, 2016");
        
        console.log("Origin for Tiger");
        queue()
           .defer(d3.json, "world_map.json")
           .defer(d3.csv, "csvFiles/Animals/origin/tiger_origin_2016.csv")
           .await(update);
        
    }
    else if(togElephant){
        
        d3.select("#mapheader").text("Elephant Origin, 2016");
        
        console.log("Origin for Elephant");
        queue()
           .defer(d3.json, "world_map.json")
           .defer(d3.csv, "csvFiles/Animals/origin/elephant_origin_2016.csv")
           .await(update);
        
    }
    else if(togRhino){
        
        d3.select("#mapheader").text("Rhino Origin, 2016");
        
        console.log("Origin for Rhino");
        queue()
           .defer(d3.json, "world_map.json")
           .defer(d3.csv, "csvFiles/Animals/origin/rhino_origin_2016.csv")
           .await(update);
        
    }
    else{ //then togParrot is true
        
        d3.select("#mapheader").text("Grey Parrot Origin, 2016");
        
        console.log("Origin for Parrot");
        queue()
           .defer(d3.json, "world_map.json")
           .defer(d3.csv, "csvFiles/Animals/origin/grey_parrot_origin_2016.csv")
           .await(update);
    }
})

d3.select(".Importers").on("click", function(){
    if(togTiger){
        
        d3.select("#mapheader").text("Tiger Importers, 2016");
        
        console.log("Origin for Tiger");
        queue()
           .defer(d3.json, "world_map.json")
           .defer(d3.csv, "csvFiles/Animals/demo/tiger_2016.csv")
           .await(update);
        
    }
    else if(togElephant){
        
        d3.select("#mapheader").text("Elephant Importers, 2016");
        
        console.log("Origin for Elephant");
        queue()
           .defer(d3.json, "world_map.json")
           .defer(d3.csv, "csvFiles/Animals/demo/elephant_2016.csv")
           .await(update);
        
    }
    else if(togRhino){
        
        d3.select("#mapheader").text("Rhino Importers, 2016");
        
        console.log("Origin for Rhino");
        queue()
           .defer(d3.json, "world_map.json")
           .defer(d3.csv, "csvFiles/Animals/demo/rhino_2016.csv")
           .await(update);
        
    }
    else{ //then togParrot is true
        
        d3.select("#mapheader").text("Grey Parrot Importers, 2016");
        
        console.log("Origin for Parrot");
        queue()
           .defer(d3.json, "world_map.json")
           .defer(d3.csv, "csvFiles/Animals/demo/grey_parrot_2016.csv")
           .await(update);
    }
})

function update(error, data, population){
    var populationById = {};

    population.forEach(function(d) { populationById[d.id] = +d.population; });
    data.features.forEach(function(d) { d.population = populationById[d.id] });

    svg.selectAll("path")
        .data(data.features).transition().duration(800)
            .style("fill", function(d) {
                //console.log(populationById[d.id])
                return color(populationById[d.id]);
            })
            .style('stroke', 'darkgrey')
            .style('stroke-width', 1.5)
            .style("opacity",0.8)
            // tooltips
            .style("stroke","white")
            .style('stroke-width', 0.3);

    /*svg.append("path")
        .datum(topojson.mesh(data.features, function(a, b) { return a.id !== b.id; }))
        // .datum(topojson.mesh(data.features, function(a, b) { return a !== b; }))
        .attr("class", "names")
        .attr("d", path);*/
    };

// Appending Legend     
var LegendScale = d3.scaleThreshold()
    .domain([5,182,280,371,507])
    .range(["#fee5d9","#fcbba1","#fc9272","#fb6a4a","#de2d26","#9e1301"]);

LegendScale.domain([5,182,280,371,507]);

var svgLegend = d3.select(".Map-Legend");

// Legend for Elephant
svgLegend.append("g")
    .attr("class", "legend")
    .attr("transform", "translate(250,30)")
    .append("text");

var legend = d3.legendColor()
    .title("Quantity Reported by Importer")
    .shapeWidth(40).shapePadding(0)
    .orient('horizontal')
    .labelAlign("end")
    .labelFormat(d3.format(".0f"))
    .labels(d3.legendHelpers.thresholdLabels)
    .scale(LegendScale);

svgLegend.select(".legend")
    .call(legend);

// Legend for Parrot

/*var LegendParrot = d3.scaleThreshold()
    .domain([1,5,182,280,371,507])
    .range(["#fee5d9","#fcbba1","#fc9272","#fb6a4a","#de2d26","#D81E05"]);

svgLegend.append("g")
      .attr("class", "legendParrot")
      .attr("transform", "translate(300,100)")
      .append("text");

var legendParrot = d3.legendColor()
      .title("Number of Live Parrot trafficked")
      .shapeWidth(30).shapePadding(0)
      .orient('horizontal')
      .labelFormat(d3.format(".0f"))
      .scale(LegendParrot);

svgLegend.select(".legendParrot")
      .call(legendParrot);
*/
/*svgLegend.select(".legend").call(legend);
*/