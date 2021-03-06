import React from 'react';
import './GaugeCard.css';
import { ProgressDonut } from '../ProgressDonut/ProgressDonut';

export default function GaugeCard({data, index, isSelected, selected}) {
    return (
        <div className={(index==selected) ? 'gauge-card gauge-card--active' : 'gauge-card'} onClick={()=>isSelected(index)} key={index}>
            <p className={(index==selected) ? 'gauge-card__title  gauge-card__title--active' : 'gauge-card__title'}>{data.name}</p>
            <ProgressDonut
                width={6}
                progress={data.score/100}
                radius={52}
                color={(index==selected) ?  '#00aeef' : '#0071c5'}
                vsly={data.vsly}
            />
            <p className='gauge-card__subtitle'>Sample: {data.sample}</p>
        </div>
    )
}
