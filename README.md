# **Interactive Data Visualization Plugin for Framer**

## **Overview**

The **Interactive Data Visualization Plugin** allows designers and developers to effortlessly integrate customizable and interactive charts into their Framer projects using Chart.js. Enhance your prototypes with dynamic data visualizations that can be tailored to fit any design aesthetic or user experience requirement.

 <!-- ![Plugin Preview](assets/plugin-preview.png) Add an image preview of your plugin here -->

## **Features**

- **Easy Integration**: Drag-and-drop functionality to add charts directly into your Framer designs.
- **Multiple Chart Types**: Support for Bar, Line, Pie, Doughnut, Radar, and Polar Area charts.
- **Customizable**: Change colors, labels, and data points to match your design.
- **Dynamic Data Handling**: Import data from external sources or input it manually.
- **Animation Support**: Smooth transitions and animations to bring your data to life.
- **Responsive Design**: Charts automatically adjust to different screen sizes and orientations.

## **Installation**

### **Prerequisites**

- Framer installed on your machine.
- Basic knowledge of Framer and React components.

### **Preview**

1. **Clone or Download the Repository**

   ```
   git clone https://github.com/adriancamaj/DataViz-Framer-Plugin.git
   ```
   
2. **Navigate to the Plugin Directory**

   ```
   cd DataViz-Framer-Plugin
   ```

3. **Install Dependencies**

   ```
   npm install
   ```

4. **Build the Plugin**

   ```
   npm run build
   ```

5. **Import the Plugin into Framer**

  - Open your Framer project.
  - Go to **File > Import Module...**
  - Select the `DataViz-Framer-Plugin` directory.

## **Usage**

### **Adding the Chart Component**
1. **Drag the `ChartComponent` onto your canvas** from the components panel.
2. **Resize the component** as needed to fit your design.

### **Configuring the Chart**

#### **Properties Panel**

- **Chart Type**
  - Select the type of chart you want to display:
    - Bar
    - Line
    - Pie
    - Doughnut
    - Radar
    - Polar Area
- **Chart Data**
  - Input your data in JSON format.
    - Example:
      ```
      {
        "labels": ["January", "February", "March"],
        "datasets": [
          {
            "label": "Sales",
            "data": [65, 59, 80],
            "backgroundColor": ["#FF6384", "#36A2EB", "#FFCE56"],
            "borderColor": ["#FF6384", "#36A2EB", "#FFCE56"],
            "borderWidth": 1
          }
        ]
      }
      ```
- **Chart Options** (Optional)
  - Customize chart options using Chart.js configuration.
    - Example:
      ```
      {
        "responsive": true,
        "plugins": {
          "legend": {
            "display": true,
            "position": "bottom"
          }
        }
      }
      ```
### **Dynamic Data Import**
- **External Data Sources**
  - You can modify the plugin to fetch data from external APIs or files.
  - Ensure CORS policies and data formats are compatible.

## **Development**

### **Directory Structure**
```
framer-data-viz-plugin/
├── package.json
├── .babelrc
├── index.js
├── framer.json
├── /build
├── /src
│   └── ChartComponent.js
├── README.md
```
