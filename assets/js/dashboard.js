
//////////*** CODE FOR MAPS MENU ***//////////

// THIS NEEDS TO BE UPDATED

var click1 = d3.select('#click1');
click1.on("click", function(){

// to clear space in html   
d3.select("#myDiv").html("");

// To create the header
d3.select("#myDiv").append("h1").text("Mexico Mining Map")
d3.select("#myDiv").append("hr")
// Creating myMap Div
d3.select("#myDiv").append("div").attr("id", "map")

let mymap = L.map('map').setView([23.507173012505426, -103.01796971980406], 5); //Set to Zacatecas and zoom of 5

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiaXZpbGNoaXMiLCJhIjoiY2trN2twaDhqMDJmbzJybXVhMzcxNHY3NSJ9.5qG9lj6HT5aXnvZvne4dSg'
}).addTo(mymap);

let myStyle = {
  "color": "#ff7800",
  "weight": 1,
  "opacity": 1,
  "fillOpacity": 0
};

d3.json("./assets/data/mexico_ent.geojson", function(data){

  // Creating a variable for the map styles
  
  L.geoJson(data,{
    style: myStyle
  }).addTo(mymap)
})


// d3.select("#myDiv").append("hr")


});//end of event listener .on "click"

//////////*** CODE FOR TABLES MENU ***//////////

// WORK IN PROGRESS

var click2 = d3.select('#click2');
click2.on("click", function(){
   
  // to clear space in html 
  d3.select("#myDiv").html("");

})  // end of event listener click


//////////*** CODE FOR BAR CHARTS MENU ***//////////

var click3 = d3.select('#click3');
click3.on("click", function(){
   
  // to clear space in html 
  d3.select("#myDiv").html("");
  // To create the header
  d3.select("#myDiv").append("h1").text("Production in tons: ").insert("span").attr("id", "chart").text("Gold")
  d3.select("#myDiv").append("hr")
  // Creating an SVG
  d3.select("#myDiv").append("svg").attr("class", "bar-chart")
  d3.select("#myDiv").append("hr")
  // To create a form
  d3.select("#myDiv").append("form")
  // to append three buttons under the form
  d3.select("form").append("button").attr("type", "button").attr("id", "oro").text("*** Gold ***")
  d3.select("form").append("button").attr("type", "button").attr("id", "plata").text("*** Silver ***")
  d3.select("form").append("button").attr("type", "button").attr("id", "cobre").text("*** Copper ***")
  d3.select("form").append("button").attr("type", "button").attr("id", "plomo").text("*** Lead ***")
  d3.select("form").append("button").attr("type", "button").attr("id", "zinc").text("*** Zinc ***")
  d3.select("form").append("button").attr("type", "button").attr("id", "coque").text("*** Coke ***")
  d3.select("form").append("button").attr("type", "button").attr("id", "fierro").text("*** Iron ***")
  d3.select("form").append("button").attr("type", "button").attr("id", "azufre").text("*** Sulfur ***")
  d3.select("form").append("button").attr("type", "button").attr("id", "barita").text("*** Baryta ***")
  d3.select("form").append("button").attr("type", "button").attr("id", "fluorita").text("*** Fluorite ***")
  
  // chart keys defined the properties and button ids
  const charts = [
    {key: "oro", title: "Gold", color: "orange"}, 
    {key: "plata", title: "Silver", color: "silver"}, 
    {key: "cobre", title: "Copper", color: "red"},
    {key: "plomo", title: "Lead", color: "blue"}, 
    {key: "zinc", title: "Zinc", color: "green"},
    {key: "coque", title: "Coke", color: "yellow"},
    {key: "fierro", title: "Iron", color: "brown"},
    {key: "azufre", title: "Sulfur", color: "gray"},
    {key: "barita", title: "Baryta", color: "purple"},
    {key: "fluorita", title: "Fluorite", color: "pink"},
  ];

  // data used for each chart
  var chart = {
    width : 1200,
    height: 0,         // the height is set after data is loaded
    current: charts[0] // [0] represents chart to display first
  }

  // defining a variable that will hold the data
  var dataMineria = [];

  // Setting scale functions for y axis and colors, and format 2 digits 
  var barScale = d3.scaleLinear().range([0, 600]); //Validate 600
  var colorScale = d3.scaleLinear().range([0, 1]);
  const format = d3.format(",.0f");

  const svg = d3.select("svg.bar-chart");

  d3.selectAll("button").on("click", function(){
    chart.current = charts.filter(d=> d.key == this.id)[0]; //getting button id
    draw (); //change this to draw() function
    
  }); //end of selectAll("button")

  // Load the data from csv
  d3.csv("assets/data/data.csv", function(data) {
    console.log(data);
    data.forEach(function(obj) {
      dataMineria.push({
        name: obj.entidad,
        oro: +obj.oro,
        plata: +obj.plata,
        cobre: +obj.cobre,
        plomo: +obj.plomo,
        zinc: +obj.zinc,
        coque: +obj.coque,
        fierro: +obj.fierro,
        azufre: +obj.azufre,
        barita: +obj.barita,
        fluorita: +obj.fluorita,  
      });
      
    });
    // setupView()
    init();
    // console.log(dataMineria)
  });

  function setupView(){
    // Disable all buttons
    d3.selectAll("button").property("disabled", false);
    // enable only buttons not currently selected
    d3.select("#" + chart.current.key).property("disabled", true);
    // update page title
    d3.select("#chart").text(chart.current.title);
    
    // sorting the production data
    console.log(chart.current.key)
    dataMineria.sort((a, b) => d3.descending(a[chart.current.key], b[chart.current.key]))
    // var dataMinParsed = dataMineria.filter( d => d.oro != 0 || d.plata != 0 || d.cobre != 0 || d.plomo != 0 || d.zinc != 0 || d.coque != 0 || d.fierro != 0 || d.azufre != 0 || d.barita != 0 || d.fluorita != 0)  
    
    if (chart.current.key === "oro"){
      var dataMinParsed = dataMineria.filter( d => d.oro)
    } else if(chart.current.key === "plata"){
      var dataMinParsed = dataMineria.filter( d => d.plata)
    } else if(chart.current.key === "cobre"){
      var dataMinParsed = dataMineria.filter( d => d.cobre)
    } else if(chart.current.key === "plomo"){
      var dataMinParsed = dataMineria.filter( d => d.plomo)
    } else if(chart.current.key === "zinc"){
      var dataMinParsed = dataMineria.filter( d => d.zinc)
    } else if(chart.current.key === "coque"){
      var dataMinParsed = dataMineria.filter( d => d.coque)
    } else if(chart.current.key === "fierro"){
      var dataMinParsed = dataMineria.filter( d => d.fierro)
    } else if(chart.current.key === "azufre"){
      var dataMinParsed = dataMineria.filter( d => d.azufre)
    } else if(chart.current.key === "barita"){
      var dataMinParsed = dataMineria.filter( d => d.barita)
    } else if(chart.current.key === "fluorita"){
      var dataMinParsed = dataMineria.filter( d => d.fluorita)
    } 
        
    console.log(`dataMineria.${chart.current.key}`)
    console.log("d." + chart.current.key) 
    console.log(dataMineria)
    console.log(dataMinParsed) //***REVISITED***

    // update scale domain with data from current selection
    const maxValue = d3.max(dataMinParsed, d => d[chart.current.key]);
    barScale.domain([0,maxValue]);
    colorScale.domain([0, maxValue]);
    
    return (dataMinParsed)
    
  } // end of setupView function

  // This function runs once
  function init () {
    // Setup svg viewport
    dataMinParsed = setupView();
    
    chart.height = dataMinParsed.length * 30 // adjust accordingly
    svg.attr("width", chart.width)
      .attr("height", chart.height);

    // bind the data and draw the firts chart
    
    svg.selectAll("g")
      .data(dataMinParsed)
      .enter().append("g")
      .attr("class", "entry")
      .attr("transform", (d,i) => `translate(0, ${i * 30})`)
      .each (function(d) {
        var entry = d3.select(this); // the current entry

        entry.append("text").attr("class", "label category")
          .attr("y", 15)
          .attr("x", 0)
          .text(d.name);

        entry.append("rect").attr("class", "bar")
          .attr("x", 150)
          .attr("height", 20)
          .attr("width", barScale(d[chart.current.key]))
          .style("fill", 
            d3.color(chart.current.color).darker(colorScale(d[chart.current.key])))

        entry.append("text").attr("class", "label value")
          .attr("y", 15)
          .attr("x", barScale(d[chart.current.key] + 800)) // ***REVISITED***
          .text(format(d[chart.current.key]) + " tons");

      }) // end .each
          
  } // end function init()

  function draw() {
    
    init();

    dataMinParsed = setupView();
    
    svg.selectAll("g.entry").data(dataMinParsed)
      .each(function (d,i){
        d3.select(this).select(".label.category")
          .text(d.name); // order may have change
        
        d3.select(this).select(".bar")
          .transition().duration(1000).delay(50 * i)
            .attr("width", barScale(d[chart.current.key]))
            .style("fill", d3.color(chart.current.color)
                            .darker(colorScale(d[chart.current.key])));
        
        d3.select(this).select(".label.value")
          .transition().duration(1000).delay(50 * i)
            .attr("x", barScale(d[chart.current.key]) + 160) //+800 ***REVISITED***
            .text(format(d[chart.current.key]) + " tons");
      }) // end .each()
      .exit().remove()  //This line could be commented if we want to keep the height fixed

  } // end function draw()
    
}); //end of event listener .on "click"

 
//////////*** CODE FOR CONCLUSIONS MENU ***//////////

// WORK IN PROGRESS

var click4 = d3.select('#click4');
click4.on("click", function(){
  
  function init() {
  // to clear space in html 
  d3.select("#myDiv").html("");
  // To create the header
  d3.select("#myDiv").append("h1").text("Conclusions") 
  d3.select("#myDiv").append("hr")
  // Creating a div class "list-group"
  d3.select("#myDiv").append("div").attr("class", "list-group")
  
  // To create a list of buttons class "list-group-item list-group-item-action"
  d3.select("div.list-group").append("button").attr("id", "one").attr("class", "list-group-item list-group-item-action").text(" ( 1 ) ")
  d3.select("div.list-group").append("button").attr("id", "two").attr("class", "list-group-item list-group-item-action").text(" ( 2 ) ")
  d3.select("div.list-group").append("button").attr("id", "three").attr("class", "list-group-item list-group-item-action").text(" ( 3 ) ")
  d3.select("div.list-group").append("button").attr("id", "four").attr("class", "list-group-item list-group-item-action").text(" ( 4 ) ")
  d3.select("div.list-group").append("button").attr("id", "five").attr("class", "list-group-item list-group-item-action").text(" ( 5 ) ")
    
  };  

  init()

  // Take Away #1
  d3.select("#one").on("click", function(){
    d3.selectAll("button").attr("class", "list-group-item list-group-item-action")
    d3.select("#one").text(" ( 1 ) Sonora is by far the greatest producer of Gold and Copper")
      .attr("class", "list-group-item list-group-item-action active")
  });

  // Take Away #2
  d3.select("#two").on("click", function(){
    d3.selectAll("button").attr("class", "list-group-item list-group-item-action")
    d3.select("#two").text(" ( 2 ) Zacatecas is the larger producer of Silver followed by Chihuahua and Durango")
    .attr("class", "list-group-item list-group-item-action active")
  })

  // Take Away #3
  d3.select("#three").on("click", function(){
    d3.selectAll("button").attr("class", "list-group-item list-group-item-action")
    d3.select("#three").text(" ( 3 ) Only a few states in Mexico are dedicated to the Mining Industry")
    .attr("class", "list-group-item list-group-item-action active")
  })

  // Take Away #4
  d3.select("#four").on("click", function(){
    d3.selectAll("button").attr("class", "list-group-item list-group-item-action")
    d3.select("#four").text(" ( 4 ) INEGI data can seem confusing but it is very well organized in comparisson with other governmental bodies")
    .attr("class", "list-group-item list-group-item-action active")
  })

  // Take Away #5
  d3.select("#five").on("click", function(){
    d3.selectAll("button").attr("class", "list-group-item list-group-item-action")
    d3.select("#five").text(" ( 5 ) The hardest part of the project was to connect the back and the front end")
    .attr("class", "list-group-item list-group-item-action active")
  })

})  // end of event listener click