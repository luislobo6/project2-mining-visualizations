
//////////*** CODE FOR MAPS MENU ***//////////

// THIS NEEDS TO BE UPDATED

var click1 = d3.select('#click1');
click1.on("click", function(){

d3.select("#myDiv").html("");

let months = CapEx2020.map(d=>d.month);
let actuals = CapEx2020.map(d=>d.actual);
let budgets = CapEx2020.map(d=>d.budget);
let actual_ytd = CapEx2020.map(d=>d.actual_ytd);
let budget_ytd = CapEx2020.map(d=>d.budget_ytd);

let actuals_trailer = CapEx2020.map(d=>d.actual_Trailer);
let budgets_trailer = CapEx2020.map(d=>d.budget_Trailer);
let actual_ytd_trailer = CapEx2020.map(d=>d.actual_ytd_Trailer);
let budget_ytd_trailer = CapEx2020.map(d=>d.budget_ytd_Trailer);

let actuals_auto = CapEx2020.map(d=>d.actual_Auto);
let budgets_auto = CapEx2020.map(d=>d.budget_Auto);
let actual_ytd_auto = CapEx2020.map(d=>d.actual_ytd_Auto);
let budget_ytd_auto = CapEx2020.map(d=>d.budget_ytd_Auto);

console.log(budget_ytd_auto)

    var trace1 = {
        x: months,
        y: actuals,
        name: 'Actuals',
        type: 'bar'
      };
      
      var trace2 = {
        x: months,
        y: budgets,
        name: 'Budget',
        type: 'bar'
      };
      
      var trace3 = {
        x: months,
        y: actual_ytd,
        name: 'actual (ytd)',
        type: 'scatter'
      };

      var trace4 = {
        x: months,
        y: budget_ytd,
        name: 'bugdet (ytd)',
        type: 'scatter'
      };

      var data = [trace1, trace2, trace3, trace4];
      var layout = {barmode: 'group', title: "CapEx Consolidado"};
      Plotly.newPlot('myDiv', data, layout);

var newSelect = document.createElement("select");
newSelect.setAttribute("id", "selDataset");

var newOption1 = document.createElement("option");
var node1 = document.createTextNode("Consolidated"); 
newOption1.appendChild(node1);
newOption1.setAttribute("value", "consol");

var newOption2 = document.createElement("option");
var node2 = document.createTextNode("TIP Trailer"); 
newOption2.appendChild(node2);
newOption2.setAttribute("value", "trailer");

var newOption3 = document.createElement("option");
var node3 = document.createTextNode("TIP Auto"); 
newOption3.appendChild(node3);
newOption3.setAttribute("value", "auto");

newSelect.append(newOption1, newOption2, newOption3)
var element = document.getElementById("myDiv");
element.append(newSelect);

  d3.select('#selDataset').on("change", getData);
  function getData(){
    var dropdownMenu = d3.select("#selDataset");
    var dataset = dropdownMenu.property("value");
    var data = [];
    if (dataset == 'consol'){
      var trace1 = {
        x: months,
        y: actuals,
        name: 'Actuals',
        type: 'bar'
      };
      
      var trace2 = {
        x: months,
        y: budgets,
        name: 'Budget',
        type: 'bar'
      };
      
      var trace3 = {
        x: months,
        y: actual_ytd,
        name: 'actual (ytd)',
        type: 'scatter'
      };

      var trace4 = {
        x: months,
        y: budget_ytd,
        name: 'bugdet (ytd)',
        type: 'scatter'
      };
      var data = [trace1, trace2, trace3, trace4];
      var layout = {barmode: 'group', title: "CapEx Consolidado"};
      Plotly.newPlot('myDiv', data, layout);
    } else if (dataset == 'trailer'){
      var trace1 = {
        x: months,
        y: actuals_trailer,
        name: 'Actuals Trailer',
        type: 'bar'
      };
      
      var trace2 = {
        x: months,
        y: budgets_trailer,
        name: 'Budget Trailer',
        type: 'bar'
      };
      
      var trace3 = {
        x: months,
        y: actual_ytd_trailer,
        name: 'actual Trailer (ytd)',
        type: 'scatter'
      };

      var trace4 = {
        x: months,
        y: budget_ytd_trailer,
        name: 'bugdet Trailer (ytd)',
        type: 'scatter'
      };
      var data = [trace1, trace2, trace3, trace4];
      var layout = {barmode: 'group', title: "CapEx Trailer"};
      Plotly.newPlot('myDiv', data, layout);
    } else if (dataset == 'auto'){
      var trace1 = {
        x: months,
        y: actuals_auto,
        name: 'Actuals Auto',
        type: 'bar'
      };
      
      var trace2 = {
        x: months,
        y: budgets_auto,
        name: 'Budget Auto',
        type: 'bar'
      };
      
      var trace3 = {
        x: months,
        y: actual_ytd_auto,
        name: 'actual Auto (ytd)',
        type: 'scatter'
      };

      var trace4 = {
        x: months,
        y: budget_ytd_auto,
        name: 'bugdet Auto (ytd)',
        type: 'scatter'
      };
      var data = [trace1, trace2, trace3, trace4];
      var layout = {barmode: 'group', title: "CapEx Auto"};
      Plotly.newPlot('myDiv', data, layout);
    }
    // updatePlotly(data)
  }

  
});

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
  
  // chart keys defined the properties and button ids
  const charts = [
    {key: "oro", title: "Gold", color: "orange"},
    {key: "plata", title: "Silver", color: "blue"},
    {key: "cobre", title: "Copper", color: "red"},
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
  var colorScale = d3.scaleLinear().range([0,1]);
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
        cobre: +obj.cobre
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
    // console.log(chart.current.key)
    dataMineria.sort((a, b) => d3.descending(a[chart.current.key], b[chart.current.key]))
    var dataMinParsed = dataMineria.filter( d => "d." + chart.current.key > 0)
    console.log(`dataMineria.${chart.current.key}`)
    console.log("d." + chart.current.key) 
    console.log(dataMineria)
    console.log(dataMinParsed) //***REVISIT***

    // update scale domain with data from current selection
    const maxValue = d3.max(dataMineria, d => d[chart.current.key]);
    barScale.domain([0,maxValue]);
    colorScale.domain([0, maxValue]);
      
  } // end of setupView function

  // This function runs once
  function init () {
    // Setup svg viewport
    chart.height = dataMineria.length * 13 // we did not need to adjust * 3
    svg.attr("width", chart.width)
      .attr("height", chart.height);

    setupView();
    
    // bind the data and draw the firts chart
    svg.selectAll("g")
      .data(dataMineria)
      .enter().append("g").attr("class", "entry")
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
          .attr("x", barScale(d[chart.current.key] + 800)) // ***REVISIT***
          .text(format(d[chart.current.key]) + " tons");

      }) // end .each
     
  } // end function init()

  function draw() {
    setupView();

    svg.selectAll("g.entry").data(dataMineria)
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
            .attr("x", barScale(d[chart.current.key]) + 160) //+800 ***REVISIT***
            .text(format(d[chart.current.key]) + " tons");
      }) // end .each()

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