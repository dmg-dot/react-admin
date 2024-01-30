import React from 'react'
import './sidebar.css'
import {Link} from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import AssessmentIcon from '@mui/icons-material/Assessment';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';


export default function sidebar() {
    return (
    <div className="sidebar">
        <div className='sidebarWrapper'>
            <div className='sidebarMenu'>
                <h3 className='sidebarTitle'>Dashboard</h3>
                <ul className='sidebarList'>
                    <Link to="/" style={{ textDecoration: "none"}}>
                        <li className='sidebarListItem' >
                                <HomeIcon className='sidebarIcon'/>
                                홈
                        </li>
                    </Link>
                    <Link to="/analysis" style={{ textDecoration: "none"}}>
                        <li className='sidebarListItem'>
                                <AssessmentIcon className='sidebarIcon'/>
                                분석
                        </li>
                    </Link>
                    
                    <Link to="/userinfo" style={{ textDecoration: "none"}}>
                        <li className='sidebarListItem'>
                                <PermContactCalendarIcon className='sidebarIcon'/>
                                사용자 정보
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    </div>
    )
}