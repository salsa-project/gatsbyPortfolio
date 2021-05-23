//modules
import React from "react";
//icons
import IconBattery from '../../components/images/icon_battery'
import IconWifi from '../../components/images/icon_SignalWifi'
import IconSignalCell from '../../components/images/icon_SignalCell'
import IconCaller from '../../components/images/icon_caller'
import IconPlayStore from '../../components/images/icon_playStore'
import IconBrowser from '../../components/images/icon_browser'
import IconCamera from '../../components/images/icon_camera'
import IconSettings from '../../components/images/icon_settings'
import IconCv from '../../components/images/icon_cv'
import IconAllApps from '../../components/images/icon_allApps'
import IconYoutube from '../../components/images/icon_youtube'



const Home = ()=>{

    return(
        <div id="home">
            <div id="notification_bar">
                <p id="clock_time">07:48</p>
                <div id="notification_bar_icons">
                    <IconWifi />
                    <IconSignalCell />
                    <IconBattery />
                </div>
            </div>

            <p id="clock_time_main">07:48</p>
            <p id="clock_time_date">FRI, MAY 21</p>

            <div id="home_main">
                <IconYoutube />
                <IconCv />
            </div>
            
            <IconAllApps />



            <div id="home_bottom">
                <IconCaller />
                <IconBrowser />
                <IconCamera />
                <IconSettings />
                <IconPlayStore />
            </div>
        </div>
    )
}


export default Home