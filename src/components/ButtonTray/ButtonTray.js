import React from 'react';
import './ButtonTray.scss';

export default function ButtonTray() {
    return (
        <div>
            <button className="btn btn--disabled">Day</button>
            <button className="btn">Week</button>
            <button className="btn btn--active">Month</button>
            <button className="btn">Quarter</button>
            <button className="btn">Half</button>
            <button className="btn">Year</button>
        </div>
    )
}
