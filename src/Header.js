import React from 'react'
import "./css/header.css"
import SearchIcon from '@material-ui/icons/Search';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';

function header({photoURL}) {
  return (
    <div class="header">
        <div className="header__logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/1/12/Google_Drive_icon_%282020%29.svg"></img>
        <span>Drive</span>

        </div>

        <div className="header__search">
            <SearchIcon/>
            <input type="text" placeholder="Search in Drive"></input>
            <FormatAlignCenterIcon/>
        </div>

        <div className="header__icons">
            <span>
                <HelpOutlineIcon/>
                <SettingsIcon/>
            </span>

            <span>
                <AppsIcon/>
                <Avatar src={photoURL}/>
            </span>


        </div>

    </div>
  )
}

export default header