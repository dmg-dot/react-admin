import React from 'react'
import {Link} from 'react-router-dom'
import './topbar.css'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';

export default function Topbar() {
    return(
        <div className = "topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <Link to="/" style={{ textDecoration: "none"}}>
                        <span className='logo'>Anbu</span>
                    </Link>
                </div>
                <div className="topRight">
                    <div className='topbarIconContainer'>
                        <NotificationsNoneIcon />
                        <span className='topIconBadge'>2</span>
                    </div>
                    <div className='topbarIconContainer'>
                        <SettingsIcon />
                    </div>
                    <img
                        src="../../img/인형.png"
                        alt=""
                        className='topAvatar'
                    />
                </div>
            </div>
        </div>
    )
}