import * as d3 from 'd3';
import './AreaChart.css';

const AreaChart = () => {

    // let data = [
    //     {
    //        "date":1,
    //        "sample":21,
    //        "score":75,
    //        "vsly":0
    //     },
    //     {
    //        "date":2,
    //        "sample":110,
    //        "score":71,
    //        "vsly":0
    //     },
    //     {
    //        "date":3,
    //        "sample":2,
    //        "score":62,
    //        "vsly":0
    //     },
    //     {
    //        "date":4,
    //        "sample":0,
    //        "score":0,
    //        "vsly":0
    //     }
    //  ]

    const totalWidth = 500;
    const totalHeight = 500;

    const margin = {
        top: 20,
        right: 20,
        bottom: 110,
        left: 40
      };

    const width = totalWidth - margin.left - margin.right;
    const height = totalHeight - margin.top - margin.bottom;

    var data = [
    { x: 0, y: 10, },
    { x: 1, y: 15, },
    { x: 2, y: 35, },
    { x: 3, y: 20, },
    ];

    // Create the scale for the data
    let x = d3.scaleLinear().domain([0, d3.max(data,function(d) { return d.x;})]).range([0, width]);
    let y = d3.scaleLinear().domain([0, d3.max(data, function(d) { return d.y;})]).range([height, 0]);

    // Make the area chart
    let area = d3.area()
    .x(function(d) { return x(d.x); })
    .y0(height)
    .y1(function(d) { return y(d.y); })

    console.log(area(data))

    return (
       <>
       <h2>This is the AREA CHART</h2>
         <svg className="area">
             <path className="path" fill="steelblue" d={`${area(data)}`}></path>
         </svg>
       </>

    )
}

export default AreaChart;