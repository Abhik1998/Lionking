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
        //console.log(d.bodies);
        if (isNaN(d.population)){
            return "<strong></strong><span class='details-country' style='text-align: center'>" + d.properties.name + "<br></span>"
        }
        else{
            return "<strong></strong><span class='details-country'>" + d.properties.name + "<br></span>" + "<strong>Total: </strong><span class='details'>" + format(Math.floor(d.population)) +" specimens</span>";
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

const annotationsTiger = [
{
  type: d3.annotationCalloutCircle,
  note: {
    label: "Bones are used in Traditional Medicine in countries like China and India.",
    title: "BONES, CARVINGS",
    wrap: 100
  },
  //settings for the subject, in this case the circle radius
  subject: {
    radius: 7
  },
  x: 90,
  y: 355,
  dy: 30,
  dx: 40
},
{
  type: d3.annotationCalloutCircle,
  note: {
    label: "Claws are most often inlayed in gold to make pendants for necklaces.",
    title: "CLAWS",
    wrap: 100
  },
  //settings for the subject, in this case the circle radius
  subject: {
    radius: 7
  },
  x: 360,
  y: 300,
  dy: 50,
  dx: -50
},
{
  type: d3.annotationCalloutCircle,
  note: {
    label: "Teeth are used to make ornamental jewellery. They are also used to cure fever",
    title: "TEETH",
    wrap: 100
  },
  //settings for the subject, in this case the circle radius
  subject: {
    radius: 7
  },
  x: 360,
  y: 250,
  dy: 100,
  dx: -100
},
{
  type: d3.annotationCalloutCircle,
  note: {
    label: "Tiger Skin is used to make winter clothing and various other products",
    title: "SKIN",
    wrap: 100
  },
  //settings for the subject, in this case the circle radius
  subject: {
    radius: 7
  },
  x: 230,
  y: 230,
  dy: -100,
  dx: -100
},
{
  type: d3.annotationCalloutCircle,
  note: {
    label: "Live Tigers are used to keep as pets or as entertainment",
    title: "LIVE BODY",
    wrap: 100
  },
  //settings for the subject, in this case the circle radius
  subject: {
    radius: 7
  },
  x: 150,
  y: 250,
  dy: 100,
  dx: 100
}].map(function(d){ d.color = "#D81E05"; return d});

const annotationsElephant = [
{
  type: d3.annotationCalloutCircle,
  note: {
    label: "Tusks are used for ivory products, especially chess sets and piano keys",
    title: "TUSKS",
    wrap: 100
  },
  //settings for the subject, in this case the circle radius
  subject: {
    radius: 7
  },
  x: 300,
  y: 165,
  dy: -50,
  dx: 50
},
{
  type: d3.annotationCalloutCircle,
  note: {
    label: "Bones are used as trophies for various purposes",
    title: "BONES",
    wrap: 100
  },
  //settings for the subject, in this case the circle radius
  subject: {
    radius: 7
  },
  x: 150,
  y: 305,
  dy: 50,
  dx: -50
},
{
  type: d3.annotationCalloutCircle,
  note: {
    label: "Elephant trunk is used in traditional Chinese medicine",
    title: "TRUNK",
    wrap: 100
  },
  //settings for the subject, in this case the circle radius
  subject: {
    radius: 7
  },
  x: 320,
  y: 265,
  dy: 30,
  dx: 30
},
].map(function(d){ d.color = "#D81E05"; return d});

const annotationsRhino = [
{
  type: d3.annotationCalloutCircle,
  note: {
    label: "Horns are used extensively in Traditional Chinese Medicine",
    title: "HORNS",
    wrap: 100
  },
  //settings for the subject, in this case the circle radius
  subject: {
    radius: 7
  },
  x: 330,
  y: 240,
  dy: 40,
  dx: 40
},
{
  type: d3.annotationCalloutCircle,
  note: {
    label: "Bones are used as trophies by hunters and in traditional chinese medicine",
    title: "BONES",
    wrap: 100
  },
  //settings for the subject, in this case the circle radius
  subject: {
    radius: 7
  },
  x: 213,
  y: 155,
  dy: -10,
  dx: 30
},
{
  type: d3.annotationCalloutCircle,
  note: {
    label: "Rhino feet are used as trophies",
    title: "FEET",
    wrap: 100
  },
  //settings for the subject, in this case the circle radius
  subject: {
    radius: 7
  },
  x: 250,
  y: 420,
  dy: -20,
  dx: 20
},
{
  type: d3.annotationCalloutCircle,
  note: {
    label: "Rhino skin is used for various leather products like covers, wallets etc.",
    title: "RHINO SKIN",
    wrap: 100
  },
  //settings for the subject, in this case the circle radius
  subject: {
    radius: 7
  },
  x: 153,
  y: 190,
  dy: -30,
  dx: -30
},
].map(function(d){ d.color = "#D81E05"; return d});

const annotationsGreyParrot = [
{
  type: d3.annotationCalloutCircle,
  note: {
    label: "The live body of a Grey Parrot is trafficked to sell as pets. These birds are especially popular because they can speak like humans",
    title: "LIVE BODY",
    wrap: 100
  },
  //settings for the subject, in this case the circle radius
  subject: {
    radius: 7
  },
  x: 240,
  y: 240,
  dy: 50,
  dx: 50
},
{
  type: d3.annotationCalloutCircle,
  note: {
    label: "The feathers of a grey parrot are popular and sold primarily for their unique grey and orange colors.",
    title: "FEATHERS",
    wrap: 100
  },
  //settings for the subject, in this case the circle radius
  subject: {
    radius: 7
  },
  x: 200,
  y: 310,
  dy: -50,
  dx: -50
},
].map(function(d){ d.color = "#D81E05"; return d});

const makeAnnotationsTiger = d3.annotation()
    .type(d3.annotationLabel)
    .annotations(annotationsTiger)
    .on('subjectover', function (annotation) {
        annotation.type.a.selectAll("g.annotation-connector, g.annotation-note").classed("hidden", false);
    })
    .on('subjectout', function (annotation) {
        annotation.type.a.selectAll("g.annotation-connector, g.annotation-note").classed("hidden", true);
    });
d3.select("svg")
  .append("g")
  .attr("class", "annotationTiger")
  .call(makeAnnotationsTiger);

d3.select(".annotationTiger").selectAll("g.annotation-connector, g.annotation-note, g.annotations.callout.circle").classed("hidden", true);
d3.select("#imageText")
   .text("Siberian Tiger")
   .style("transform", "translate(10%, -1000%)")
   .style("font-weight", "bold")
   .style("color", "grey");
d3.select("#CostParts")
         .text("Cost of Tiger Bone is $2000 per kilo ")
         .style("transform", "translate(20%, -45%)")
         .style("color", "grey");
d3.select("#BiggestImporter")
         .text("Biggest Importers of Tiger parts is United States")
         .style("transform", "translate(20%, -45%)")
         .style("color", "grey");
d3.select("#CountryOrigin")
         .text("Country of Origin is Russia")
         .style("transform", "translate(20%, -45%)")
         .style("color", "grey");
d3.select("#BiggestExporter")
         .text("Biggest Exporter of products is South East Asia")
         .style("transform", "translate(20%, -45%)")
         .style("color", "grey");

const makeAnnotationsElephant = d3.annotation()
    .type(d3.annotationLabel)
    .annotations(annotationsElephant)
    .on('subjectover', function (annotation) {
        annotation.type.a.selectAll("g.annotation-connector, g.annotation-note").classed("hidden", false);
    })
    .on('subjectout', function (annotation) {
        annotation.type.a.selectAll("g.annotation-connector, g.annotation-note").classed("hidden", true);
    });

d3.select("svg")
  .append("g")
  .attr("class", "annotationElephant")
  .call(makeAnnotationsElephant);

d3.select(".annotationElephant").classed("hidden", true);


const makeAnnotationsRhino = d3.annotation()
    .type(d3.annotationLabel)
    .annotations(annotationsRhino)
    .on('subjectover', function (annotation) {
        annotation.type.a.selectAll("g.annotation-connector, g.annotation-note").classed("hidden", false);
    })
    .on('subjectout', function (annotation) {
        annotation.type.a.selectAll("g.annotation-connector, g.annotation-note").classed("hidden", true);
    });

d3.select("svg")
  .append("g")
  .attr("class", "annotationRhino")
  .call(makeAnnotationsRhino);

d3.select(".annotationRhino").classed("hidden", true);


const makeAnnotationsGreyParrot = d3.annotation()
    .type(d3.annotationLabel)
    .annotations(annotationsGreyParrot)
    .on('subjectover', function (annotation) {
        annotation.type.a.selectAll("g.annotation-connector, g.annotation-note").classed("hidden", false);
    })
    .on('subjectout', function (annotation) {
        annotation.type.a.selectAll("g.annotation-connector, g.annotation-note").classed("hidden", true);
    });

d3.select("svg")
  .append("g")
  .attr("class", "annotationGreyParrot")
  .call(makeAnnotationsGreyParrot);

d3.select(".annotationGreyParrot").classed("hidden", true);

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
var colors = d3.scaleQuantize()
    .domain([0,400])
    .range(["#fcbba1","#fb6a4a","#ef3b2c", "#cb181d","#67000d"]);

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
            .style('stroke-width', 1)
            .style("opacity",1)
            // tooltips
            .style("stroke","white")
            .style('stroke-width', 1)
            .on('mouseover',function(d){
              tip.show(d);

              d3.select(this)
                .style("opacity", 0.8)
                .style("stroke","white")
                .style("stroke-width",2);
            })
            .on('mouseout', function(d){
              tip.hide(d);

              d3.select(this)
                .style("opacity", 1)
                .style("stroke","white")
                .style("stroke-width",1);
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
    togTiger = true;
    togElephant = false;
    togRhino = false;
    togParrot = false;

    console.log("Tiger");
    d3.select("#animalimage").attr("src","images/tiger.png").style("opacity","0").transition().duration(800).style("opacity","0.6");
    // Change map header to correct one
    d3.select("#mapheader").text("Origin of Tiger Bone Products");
    // Changing scale
    colors.domain([0,400]);

    legend.title("Number of Tiger Bone Products")

    svgLegend.select(".legend")
    .call(legend);


    d3.select(".annotationTiger").classed("hidden", false);
    d3.select(".annotationGreyParrot").classed("hidden", true);
    d3.select(".annotationTiger").selectAll("g.annotation-connector, g.annotation-note").classed("hidden", true);
    d3.select(".annotationElephant").classed("hidden", true);
    d3.select(".annotationRhino").classed("hidden", true);
    d3.select("#animalimage").style("transform", "translate(10%,10%)");
    d3.select("#imageText")
       .text("Siberian Tiger")
       .style("transform", "translate(10%, -1000%)")
       .style("font-weight", "bold");
    d3.select("#CostParts")
          .text("Cost of Tiger Bone is $2000 per kilo ")
          .style("transform", "translate(20%, -45%)")
          .style("color", "grey");
    d3.select("#BiggestImporter")
          .text("Biggest Importers of Tiger parts is United States")
          .style("transform", "translate(20%, -45%)")
          .style("color", "grey");
    d3.select("#CountryOrigin")
          .text("Country of Origin is Russia")
          .style("transform", "translate(20%, -45%)")
          .style("color", "grey");
    d3.select("#BiggestExporter")
          .text("Biggest Exporter of products is South East Asia")
          .style("transform", "translate(20%, -45%)")
          .style("color", "grey");
    queue()
       .defer(d3.json, "world_map.json")
       .defer(d3.csv, "csvFiles/Animals/origin/tiger_origin_2016.csv")
       .await(update);


});

d3.select(".BElephant").on("click", function(){
    togTiger = false;
    togElephant = true;
    togRhino = false;
    togParrot = false;

    d3.select("#animalimage").attr("src","images/elephant.png").style("opacity","0").transition().duration(800).style("opacity","0.6");
    console.log("Elephant");

    // Change map header to correct one
    d3.select("#mapheader").text("Origin of Ivory Products");

    // Demo to change scale
    colors.domain([0,150]);
    legend.title("Number of Ivory Products")
    svgLegend.select(".legend")
    .call(legend);


    d3.select(".annotationTiger").classed("hidden", true);
    d3.select(".annotationRhino").classed("hidden", true);
    d3.select(".annotationGreyParrot").classed("hidden", true);
    d3.select(".annotationElephant").classed("hidden", false);
    d3.select(".annotationElephant").selectAll("g.annotation-connector, g.annotation-note").classed("hidden", true);
    d3.select("#animalimage").style("transform", "translate(20%,-5%)");
    d3.select("#imageText")
       .text("Elephant")
       .style("transform", "translate(10%, -1450%)")
       .style("font-weight", "bold")
       .style("color", "grey")
    d3.select("#CostParts")
       .text("Ivory cost of China is $2100 per kilo ")
       .style("transform", "translate(20%, -45%)")
       .style("color", "grey");
    d3.select("#BiggestImporter")
       .text("Biggest Importers of Ivory is United States")
       .style("transform", "translate(20%, -45%)")
       .style("color", "grey");
    d3.select("#CountryOrigin")
       .text("Country of Origin is Dem. Congo")
       .style("transform", "translate(20%, -45%)")
       .style("color", "grey");
    d3.select("#BiggestExporter")
       .text("UK is the largest seller of ivory products")
       .style("transform", "translate(20%, -45%)")
       .style("color", "grey");
    queue()
       .defer(d3.json, "world_map.json")
       .defer(d3.csv, "csvFiles/Animals/origin/elephant_origin_2016.csv")
       .await(update);

});

d3.select(".BRhino").on("click", function(){
    togTiger = false;
    togElephant = false;
    togRhino = true;
    togParrot = false;

    console.log("Rhino");
    d3.select("#animalimage").attr("src","images/rhino.png").style("opacity","0").transition().duration(800).style("opacity","0.6");
    d3.select("#mapheader").text("Origin of Rhino Horn Products");

    // Demo to change scale
    colors.domain([0,150]);
    legend.title("Number of Rhino Horn Products")
    svgLegend.select(".legend")
    .call(legend);

    d3.select(".annotationTiger").classed("hidden", true);
    d3.select(".annotationElephant").classed("hidden", true);
    d3.select(".annotationGreyParrot").classed("hidden", true);
    d3.select(".annotationRhino").classed("hidden", false);
    d3.select(".annotationRhino").selectAll("g.annotation-connector, g.annotation-note").classed("hidden", true);
    d3.select("#animalimage").style("transform", "translate(20%,10%)");
    d3.select("#imageText")
       .text("Northern White Rhino")
       .style("transform", "translate(10%, 75%)")
       .style("font-weight", "bold");
    d3.select("#imageText")
          .text("Rhino")
          .style("transform", "translate(10%, -1100%)")
          .style("font-weight", "bold")
          .style("color", "grey");
    d3.select("#CostParts")
                .text("Cost of Rhino Horn is $65000 per kilo ")
                .style("transform", "translate(20%, -45%)")
                .style("color", "grey");
    d3.select("#BiggestImporter")
                .text("Biggest Importers of Rhino parts is South Africa")
                .style("transform", "translate(20%, -45%)")
                .style("color", "grey");
    d3.select("#CountryOrigin")
                .text("Country of Origin is Kenya")
                .style("transform", "translate(20%, -45%)")
                .style("color", "grey");
    d3.select("#BiggestExporter")
                .text("Biggest Exporter of products is Namibia")
                .style("transform", "translate(20%, -45%)")
                .style("color", "grey");



    queue()
       .defer(d3.json, "world_map.json")
       .defer(d3.csv, "csvFiles/Animals/origin/rhino_origin_2016.csv")
       .await(update);
});

d3.select(".BParrot").on("click", function(){
    console.log("Grey Parrot");
    d3.select("#animalimage").attr("src","images/greyparrot.png").style("opacity","0").transition().duration(800).style("opacity","0.6");
    d3.select("#mapheader").text("Origin of Live Grey Parrots");
    // Changing Scales
    colors.domain([0,700]);
    legend.title("Number of Live Grey Parrots")
    svgLegend.select(".legend")
    .call(legend);

    togTiger = false;
    togElephant = false;
    togRhino = false;
    togParrot = true;

    d3.select(".Parrot").classed("imghidden",false);
    d3.select(".Rhino").classed("imghidden",true);
    d3.select(".Elephant").classed("imghidden",true);
    d3.select(".Tiger").classed("imghidden",true);
    d3.select(".annotationTiger").classed("hidden", true);
    d3.select(".annotationElephant").classed("hidden", true);
    d3.select(".annotationRhino").classed("hidden", true);
    d3.select(".annotationGreyParrot").classed("hidden", false);
    d3.select(".annotationGreyParrot").selectAll("g.annotation-connector, g.annotation-note").classed("hidden", true);
    d3.select("#animalimage").style("transform", "translate(50%,10%)");
    d3.select("#imageText")
       .text("African Grey Parrot")
       .style("transform", "translate(10%, -1000%)")
       .style("font-weight", "bold");
    d3.select("#CostParts")
                   .text("Cost of African Grey Parrot is $2000 per bird ")
                   .style("transform", "translate(20%, -45%)")
                   .style("color", "grey");
    d3.select("#BiggestImporter")
                   .text("Biggest Importers of Grey Parrot is South Africa")
                   .style("transform", "translate(20%, -45%)")
                   .style("color", "grey");
    d3.select("#CountryOrigin")
                   .text("Country of Origin is Dem. Republic of Congo")
                   .style("transform", "translate(20%, -45%)")
                   .style("color", "grey");
    d3.select("#BiggestExporter")
                   .text("Biggest Exporter of Grey Parrot is South Africa")
                   .style("transform", "translate(20%, -45%)")
                   .style("color", "grey");



    queue()
       .defer(d3.json, "world_map.json")
       .defer(d3.csv, "csvFiles/Animals/origin/grey_parrot_origin_2016.csv")
       .await(update);

});


d3.select(".Origin").on("click", function(){

    if(togTiger){

        d3.select("#mapheader").text("Origin of Tiger Bone Products");
        // Changing scale
        colors.domain([0,400]);

        legend.title("Number of Tiger Bone Products")

        svgLegend.select(".legend")
        .call(legend);

        console.log("Origin for Tiger");
        queue()
           .defer(d3.json, "world_map.json")
           .defer(d3.csv, "csvFiles/Animals/origin/tiger_origin_2016.csv")
           .await(update);

    }
    else if(togElephant){

        // Change map header to correct one
        d3.select("#mapheader").text("Origin of Ivory Products");

        // Demo to change scale
        colors.domain([0,150]);
        legend.title("Number of Ivory Products")
        svgLegend.select(".legend")
        .call(legend);

        console.log("Origin for Elephant");
        queue()
           .defer(d3.json, "world_map.json")
           .defer(d3.csv, "csvFiles/Animals/origin/elephant_origin_2016.csv")
           .await(update);

    }
    else if(togRhino){

        // Change map header to correct one
        d3.select("#mapheader").text("Origin of Rhino Horn Products");

        // Demo to change scale
        colors.domain([0,150]);
        legend.title("Number of Rhino Horn Products")
        svgLegend.select(".legend")
        .call(legend);

        console.log("Origin for Rhino");
        queue()
           .defer(d3.json, "world_map.json")
           .defer(d3.csv, "csvFiles/Animals/origin/rhino_origin_2016.csv")
           .await(update);

    }
    else{ //then togParrot is true

        d3.select("#mapheader").text("Origin of Live Grey Parrots");
        // Changing Scales
        colors.domain([0,700]);
        legend.title("Number of Live Grey Parrots")
        svgLegend.select(".legend")
        .call(legend);

        console.log("Origin for Parrot");
        queue()
           .defer(d3.json, "world_map.json")
           .defer(d3.csv, "csvFiles/Animals/origin/grey_parrot_origin_2016.csv")
           .await(update);
    }
})

d3.select(".Importers").on("click", function(){
    if(togTiger){

        d3.select("#mapheader").text("Importers of Tiger Bone Products");
        // Changing scale
        colors.domain([0,1750]);

        legend.title("Number of Tiger Bone Products")

        svgLegend.select(".legend")
        .call(legend);

        console.log("Origin for Tiger");
        queue()
           .defer(d3.json, "world_map.json")
           .defer(d3.csv, "csvFiles/Animals/demo/tiger_2016.csv")
           .await(update);

    }
    else if(togElephant){

        d3.select("#mapheader").text("Importers of Ivory Products");
        // Changing scale
        colors.domain([0,2700]);

        legend.title("Number of Ivory Products")

        svgLegend.select(".legend")
        .call(legend);

        console.log("Origin for Elephant");
        queue()
           .defer(d3.json, "world_map.json")
           .defer(d3.csv, "csvFiles/Animals/demo/elephant_2016.csv")
           .await(update);

    }
    else if(togRhino){

        d3.select("#mapheader").text("Importers of Rhino Horn Products");
        // Changing scale
        colors.domain([0,2000]);

        legend.title("Number of Rhino Horn Products")

        svgLegend.select(".legend")
        .call(legend);

        console.log("Origin for Rhino");
        queue()
           .defer(d3.json, "world_map.json")
           .defer(d3.csv, "csvFiles/Animals/demo/rhino_2016.csv")
           .await(update);

    }
    else{ //then togParrot is true

        d3.select("#mapheader").text("Importers of Live Grey Parrots");
        // Changing scale
        colors.domain([0,28350]);

        legend.title("Number of Live Grey Parrots")

        svgLegend.select(".legend")
        .call(legend);

        console.log("Origin for Parrot");
        queue()
           .defer(d3.json, "world_map.json")
           .defer(d3.csv, "csvFiles/Animals/demo/grey_parrot_2016.csv")
           .await(update);
    }
})

d3.select(".Exporters").on("click", function(){
    if(togTiger){

        d3.select("#mapheader").text("Exporters of Tiger Bone Products");
        // Changing scale
        colors.domain([0,550]);

        legend.title("Number of Tiger Bone Products")

        svgLegend.select(".legend")
        .call(legend);

        console.log("Origin for Tiger");
        queue()
           .defer(d3.json, "world_map.json")
           .defer(d3.csv, "csvFiles/Animals/demo/exports/tiger_2016.csv")
           .await(update);

    }
    else if(togElephant){

        d3.select("#mapheader").text("Exporters of Ivory Products");
        // Changing scale
        colors.domain([0,5000]);

        legend.title("Number of Ivory Products")

        svgLegend.select(".legend")
        .call(legend);

        console.log("Origin for Elephant");
        queue()
           .defer(d3.json, "world_map.json")
           .defer(d3.csv, "csvFiles/Animals/demo/exports/elephant_2016.csv")
           .await(update);

    }
    else if(togRhino){

        d3.select("#mapheader").text("Exporters of Rhino Horn Products");
        // Changing scale
        colors.domain([0,2000]);

        legend.title("Number of Rhino Horn Products")

        svgLegend.select(".legend")
        .call(legend);

        console.log("Origin for Rhino");
        queue()
           .defer(d3.json, "world_map.json")
           .defer(d3.csv, "csvFiles/Animals/demo/exports/rhino_2016.csv")
           .await(update);

    }
    else{ //then togParrot is true

        d3.select("#mapheader").text("Exporters of Live Grey Parrots");
        // Changing scale
        colors.domain([0,28350]);

        legend.title("Number of Live Grey Parrots")

        svgLegend.select(".legend")
        .call(legend);

        console.log("Origin for Parrot");
        queue()
           .defer(d3.json, "world_map.json")
           .defer(d3.csv, "csvFiles/Animals/Grey_Parrot/out_2015.csv")
           .await(update);
    }
});

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
            .style("opacity",1)
            // tooltips
            .style("stroke","white")
            .style('stroke-width', 1);

    /*svg.append("path")
        .datum(topojson.mesh(data.features, function(a, b) { return a.id !== b.id; }))
        // .datum(topojson.mesh(data.features, function(a, b) { return a !== b; }))
        .attr("class", "names")
        .attr("d", path);*/
    };

/*
// Appending Legend
var LegendScale = d3.scaleQuantize()
    .domain([1,507])
    .range(["#fee5d9","#fcbba1","#fc9272","#fb6a4a","#de2d26","#a50f15"]);
*/

var svgLegend = d3.select(".Map-Legend");

// Legend for Elephant
svgLegend.append("g")
    .attr("class", "legend")
    .attr("transform", "translate(250,30)")
    .append("text");

var legend = d3.legendColor()
    .title("Number of Tiger Bone Products")
    .shapeWidth(40).shapePadding(0)
    .orient('horizontal')
    .labelAlign("end")
    .labelFormat(d3.format(".0f"))
    //.labels(d3.legendHelpers.thresholdLabels)
    .scale(colors);

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
