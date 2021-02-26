import React from 'react';
import './TopNav.css';

export default function TopNav() {
    return (
        <div className="top-nav">
            <div className="home">
                Diagnostic Tool
            </div>
            <div className="top-nav__sub">
                <p>Logged in as General User</p>
                <span className="divider">|</span>
                <div className="icon-top"></div>
                <div className="icon-top"></div>
                <div className="icon-top"></div>
                <div className="icon-top"></div>
                <div className="icon-top"></div>
            </div>
        </div>
    )
}
