import React from 'react';
import { arc } from 'd3';

export default function Arc() {

    const data = [
        {
           "name":"Quality Score",
           "score":72,
           "vsly":null,
           "sample":133
        },
        {
           "name":"Basics",
           "score":71,
           "vsly":null,
           "sample":133
        },
        {
           "name":"Interaction",
           "score":68,
           "vsly":null,
           "sample":133
        },
        {
           "name":"Expertise",
           "score":70,
           "vsly":null,
           "sample":133
        },
        {
           "name":"Process",
           "score":75,
           "vsly":null,
           "sample":133
        },
        {
           "name":"Knowledge",
           "score":76,
           "vsly":null,
           "sample":133
        }
     ]
    
    var theArc = arc()
    .innerRadius(0)
    .outerRadius(100)
    .startAngle(0)
    .endAngle(Math.PI / 2);

    console.log(theArc());

    return (
        <div>
            {/* <svg>{data.map( data => {})}</svg> */}
            {theArc()}
        </div>
    )
}
