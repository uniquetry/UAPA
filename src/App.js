// STEP 1 - Include Dependencies
// Include react
import React from "react";
import ReactDOM from "react-dom";

// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import Column2D from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

// STEP 2 - Chart Data
const chartData = [
  {
    label: "Habilitacion Docente",
    value: "290"
  },
  {
    label: "Admi Tiempo",
    value: "260"
  },
  {
    label: "Microsoft Excel",
    value: "180"
  },
  {
    label: "Oratoria",
    value: "140"
  },
  {
    label: "Microsoft Power point",
    value: "115"
  },
  {
    label: "Ingles",
    value: "100"
  },
  {
    label: "Microsoft planner",
    value: "30"
  },
  {
    label: "Teams",
    value: "30"
  }
];

// STEP 3 - Creating the JSON object to store the chart configurations
const chartConfigs = {
  type: "column2d", // The chart type
  width: "700", // Width of the chart
  height: "400", // Height of the chart
  dataFormat: "json", // Data type
  dataSource: {
    // Chart Configuration
    chart: {
      //Set the chart caption
      caption: "Capacitaciones UAPA",
      //Set the chart subcaption
      subCaption: "Periodo 2022-2023",
      //Set the x-axis name
      xAxisName: "Capacitaciones",
      //Set the y-axis name
      yAxisName: "Completadas",
      numberSuffix: "",
      //Set the theme for your chart
      theme: "fusion"
    },
    // Chart Data
    data: chartData
  }
};

// Adding the chart and theme as dependency to the core fusioncharts
//ReactFC.fcRoot(FusionCharts, Widgets, FusionTheme);

//STEP 2 - Defining the dataset for the angular gauge along with the color configuration
const colorRange = {
  "color": [{
    "minValue": "0",
    "maxValue": "50",
    "code": "#e44a00"
  }, {
    "minValue": "50",
    "maxValue": "75",
    "code": "#f8bd19"
  }, {
    "minValue": "75",
    "maxValue": "100",
    "code": "#6baa01"
  }]
};

const dials = {
  "dial": [{
    "value": "67"
  }]
};

// STEP 3 - Creating the JSON object to store the chart configurations
const chartConfigs1 = {
    type: 'angulargauge',// The chart type
    width: '700', // Width of the chart
    height: '400', // Height of the chart
    dataFormat: 'json', // Data type
    dataSource: {
        "chart": {
          "caption": "Customer Satisfaction Score",
          "subcaption": "Last week",
          "lowerLimit": "0",
          "upperLimit": "100",
          "theme": "fusion"
        },
        "colorRange": colorRange,
        "dials": dials
    }
}


// STEP 3 - Creating the DOM element to pass the react-fusioncharts component


// STEP 4 - Creating the DOM element to pass the react-fusioncharts component
class App extends React.Component {
  render() {
    return (<ReactFC {...chartConfigs} />);
  }
}

export default App;