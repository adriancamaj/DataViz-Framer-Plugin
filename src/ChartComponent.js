// src/ChartComponent.js

import * as React from "react";
import { useEffect, useRef } from "react";
import { addPropertyControls, ControlType } from "framer";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export default function ChartComponent(props) {
  const { chartType, chartData, chartOptions } = props;
  const canvasRef = useRef(null);

  useEffect(() => {
    let chartInstance;

    if (canvasRef.current) {
      try {
        const ctx = canvasRef.current.getContext("2d");

        const data = JSON.parse(chartData);
        const options = JSON.parse(chartOptions);

        chartInstance = new Chart(ctx, {
          type: chartType,
          data: data,
          options: options,
        });
      } catch (error) {
        console.error("Error parsing data/options:", error);
      }
    }

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [chartType, chartData, chartOptions]);

  return <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />;
}

addPropertyControls(ChartComponent, {
  chartType: {
    type: ControlType.Enum,
    title: "Chart Type",
    options: ["bar", "line", "pie", "doughnut", "radar", "polarArea"],
    optionTitles: ["Bar", "Line", "Pie", "Doughnut", "Radar", "Polar Area"],
    defaultValue: "bar",
  },
  chartData: {
    type: ControlType.String,
    title: "Chart Data",
    defaultValue: `{
  "labels": ["Red", "Blue", "Yellow"],
  "datasets": [{
    "label": "Dataset",
    "data": [12, 19, 3],
    "backgroundColor": ["rgba(255,99,132,0.2)", "rgba(54,162,235,0.2)", "rgba(255,206,86,0.2)"],
    "borderColor": ["rgba(255,99,132,1)", "rgba(54,162,235,1)", "rgba(255,206,86,1)"],
    "borderWidth": 1
  }]
}`,
  },
  chartOptions: {
    type: ControlType.String,
    title: "Chart Options",
    defaultValue: `{}`,
  },
});
