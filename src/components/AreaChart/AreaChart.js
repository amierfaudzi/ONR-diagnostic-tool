import * as d3 from 'd3';
import './AreaChart.css';

// base code from https://www.mattlayman.com/2015/area.js

const AreaChart = ({selectedData}) => {

    // let data = selectedData;
    // console.log("selected data", data)

    let data = selectedData;

   console.log("selected data", data)

    const totalWidth = 1000;
    const totalHeight = 300;

    const margin = {
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
    };

    const width = totalWidth;
    const height = totalHeight;

    

    // Create the scale for the data
    let x = d3.scaleTime().domain([0, data.length]).range([0, width]);
    // let x = d3.scaleUtc().domain(d3.extent(data, d => d.date)).range([0, width])
    let y = d3.scaleLinear().domain([0, d3.max(data, function(d) {return d.score;})]).range([height, 0]);

    // Make the area chart
    let area = d3.area()
    .x(function(d,i) { return x(i); }) // Using data length instead because the area needs number
    .y0((height))
    .y1(function(d) { return y(d.score); })

    console.log(area(data))
    
    return (
      <>
        <h1>Hi</h1>
         <svg id="area" viewBox="0 0 1000 300">
             <path className="chart-area" d={`${area(data)}`}></path>
         </svg>
      </>
    )
}

export default AreaChart;