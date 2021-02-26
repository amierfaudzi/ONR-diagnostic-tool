import React from 'react';
import './GaugeCard.css';
import { ProgressDonut } from '../ProgressDonut/ProgressDonut';

export default function GaugeCard({data, index, isSelected, selected}) {
    return (
        <div className="gauge-card" onClick={()=>isSelected(index)} key={index}>
            <p className={(index==selected) ? 'gauge-card__title' : 'gauge-card__title gauge-card__title--active'}>{data.name}</p>
            <ProgressDonut
                width={6}
                progress={data.score/100}
                radius={52}
                color={(index==selected) ? '#00aeef' : '#0071c5'}
            />
            <p className='gauge-card__subtitle'>Sample: {data.sample}</p>
        </div>
    )
}
