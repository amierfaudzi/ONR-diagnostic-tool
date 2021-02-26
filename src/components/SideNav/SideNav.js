import React from 'react';
import './SideNav.css';
import {ReactComponent as Briefcase} from '../../assets/icons/briefcase.svg';
import {ReactComponent as Calendar} from '../../assets/icons/calendar.svg';
import {ReactComponent as Certificate} from '../../assets/icons/certificate.svg';
import {ReactComponent as Folder} from '../../assets/icons/folder.svg';
import {ReactComponent as Website} from '../../assets/icons/website.svg';

export default function SideNav() {
    return (
        <div className="side-nav">
            <Briefcase className="icon"/>
            <Calendar className="icon"/>
            <Certificate className="icon"/>
            <Folder className="icon"/>
            <Website className="icon"/>
        </div>
    )
}
