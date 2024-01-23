import React from 'react'
import './sidebar.css'
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
                    <li className='sidebarListItem'>
                        <HomeIcon className='sidebarIcon'/>
                        홈
                    </li>
                    <li className='sidebarListItem'>
                        <AssessmentIcon className='sidebarIcon'/>
                        분석
                    </li>
                    <li className='sidebarListItem'>
                        <PermContactCalendarIcon className='sidebarIcon'/>
                        사용자 정보
                    </li>
                </ul>
            </div>
        </div>
    </div>
    )
}