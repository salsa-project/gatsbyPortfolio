//modules
import React, {useState, useEffect} from "react";
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import ScrollBooster from 'scrollbooster';
//components
import Home from 'components/phone/Home'



// Vertical(up/down) Drag Slider
const verticalScroll = () => {
    new ScrollBooster({
      viewport: document.querySelector("#screen"),
      content: document.querySelector("#app_cv"),
      direction: "vertical",
      scrollMode: "transform"
    });
};


const Screen = (props)=>{
    let {isAppRunning} = props

    let [isScroll, setIsScroll] = useState(false)

    useEffect(()=>{
        setIsScroll(isAppRunning);
    }, [isAppRunning])

    useEffect(()=>{
        //active drag scroll
        (isScroll) && verticalScroll();
    }, [isScroll])

    return(
        <div id="screen">
            <Home />
        </div>
    )
}

Screen.propTypes = {
    props: PropTypes.object,
    isAppRunning: PropTypes.bool,
    isScroll: PropTypes.bool,
}

const mapStateToProps = (state, ownProps)=>{
    let {isAppRunning} = state.app
    return{
        isAppRunning: isAppRunning,
    }
}

export default connect(mapStateToProps, null)(Screen)