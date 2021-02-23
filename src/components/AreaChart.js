import {area, svg} from 'd3';

export const AreaChart = () => {

    const data = [
        {
           "date":"Apr",
           "sample":21,
           "score":75,
           "vsly":0
        },
        {
           "date":"May",
           "sample":110,
           "score":71,
           "vsly":0
        },
        {
           "date":"Jun",
           "sample":2,
           "score":62,
           "vsly":0
        },
        {
           "date":"Jul",
           "sample":0,
           "score":0,
           "vsly":0
        }
     ]

     const chartArea =  area(data).x(data=>(data.date)).y1(data=>(data.score));
     console.log(chartArea) 

    return (
        <svg>

        </svg>
    )
}