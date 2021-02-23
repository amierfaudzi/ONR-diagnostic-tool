import React from 'react';
import './GaugeCard.css';
import { ProgressDonut } from '../ProgressDonut';

export default function GaugeCard({data, index, isSelected, selected}) {
    return (
        <div className="gauge-card" onClick={()=>isSelected(index)} key={index}>
            <h3>{data.name}</h3>
            <ProgressDonut
                width={6}
                progress={data.score/100}
                radius={52}
                color={(index==selected) ? 'red' : 'steelblue'}
            />
            <h3>Sample: {data.sample}</h3>
        </div>
    )
}
