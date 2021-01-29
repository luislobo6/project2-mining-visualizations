
// Funnel

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

  // function updatePlotly(newData){
  //   Plotly.restyle('myDiv', [newData], layout)
  // }

});


/////////////////////////////////////////////////////////////

var click2 = d3.select('#click2');
click2.on("click", function(){
    console.log("testing")

    // $(document).ready(function(){

        // Activate Carousel
        $("#carouselExampleCaptions").carousel();

        // Enable Carousel Indicators
        // $(".item").click(function(){
        // $("#myCarousel").carousel(1);
        // });

        // Enable Carousel Controls
        // $(".left").click(function(){
        // $("#myCarousel").carousel("prev");
        // });

    // });

    
});

// var gd = document.getElementById('myDiv');
// var data = [{
//     type: 'funnel', 
//     y: ["Website visit", "Downloads", "Potential customers", "Invoice sent", "Closed delas"], 
//     x: [13873, 10533, 5443, 2703, 908], 
//     hoverinfo: 'x+percent previous+percent initial'}];

// var layout = {margin: {l: 150}, width:600, height: 500}

// Plotly.newPlot(gd, data, layout);

  /////////////////////////////////////////////////////////////

//   var gd1 = document.getElementById('myDiv1');
//   var data = [{type: 'funnelarea', scalegroup: "first", values: [500, 450, 340, 230, 220, 110],
//       textinfo: "value", title: {position: "top center", text: "Sales for Sale Person A in U.S."},
//       domain: {x: [0, 0.5], y: [0, 0.5]}},
//   {
//       type: 'funnelarea', scalegroup: "first", values: [600, 500, 400, 300, 200, 100], textinfo: "value",
//       title: {position: "top center", text: "Sales of Sale Person B in Canada"},
//       domain: {x: [0, 0.5], y: [0.55, 1]}},
//   {
//       type:'funnelarea', scalegroup: "second", values: [510, 480, 440, 330, 220, 100], textinfo: "value",
//       title: {position: "top left", text: "Sales of Sale Person A in Canada"},
//       domain: {x: [0.55, 1], y: [0, 0.5]}},
//   {
//     type: 'funnelarea', scalegroup: "second", values: [360, 250, 240, 130, 120, 60],
//     textinfo: "value", title: {position: "top left", text: "Sales of Sale Person B in U.S."},
//     domain: {x: [0.55, 1], y: [0.55, 1]}}];
  
//   var layout = {width: 600,shapes: [
//               {x0: 0, x1: 0.5, y0: 0, y1: 0.5},
//               {x0: 0, x1: 0.5, y0: 0.55, y1: 1},
//               {x0: 0.55, x1: 1, y0: 0, y1: 0.5},
//               {x0: 0.55, x1: 1, y0: 0.55, y1: 1}]}
  
//   Plotly.newPlot(gd1, data, layout);
  
  ////////////////////////////////////////////////////////////////