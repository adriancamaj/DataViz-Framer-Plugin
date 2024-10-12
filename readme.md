# Data Visualization Plugin for Framer

## Introduction

This plugin allows you to add interactive and customizable charts to your Framer projects using Chart.js.

## Installation

1. Clone or download the plugin.
2. In Framer, go to **File > Import Module...** and select the plugin directory.

## Usage

1. Drag the `ChartComponent` onto your canvas.
2. Configure the chart using the properties panel.

## Properties

- **Chart Type**: Select the type of chart (e.g., Bar, Line, Pie).
- **Chart Data**: Input the chart data in JSON format.
- **Chart Options**: (Optional) Input chart configuration options in JSON format.

## Examples

**Chart Data Example**:

```
{
  "labels": ["Red", "Blue", "Yellow"],
  "datasets": [{
    "label": "Votes",
    "data": [12, 19, 3],
    "backgroundColor": ["#FF6384", "#36A2EB", "#FFCE56"]
  }]
}
```

**Chart Data Example**:
```
{
  "plugins": {
    "legend": {
      "display": true,
      "position": "right"
    }
  }
}
```