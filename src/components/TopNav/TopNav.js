import React from 'react';
import './TopNav.css';
import {ReactComponent as Man} from '../../assets/icons/man.svg';
import {ReactComponent as Computer} from '../../assets/icons/computer.svg';
import {ReactComponent as CheckList} from '../../assets/icons/checklist.svg';
import {ReactComponent as Chart} from '../../assets/icons/chart.svg';

export default function TopNav() {
    return (
        <div className="top-nav">
            <div className="home">
                Diagnostic Tool
            </div>
            <div className="top-nav__sub">
                <p>Logged in as General User</p>
                <span className="divider">|</span>
                <Man className="icon-top"/>
                <Computer className="icon-top"/>
                <CheckList className="icon-top"/>
                <Chart className="icon-top"/>
            </div>
        </div>
    )
}
