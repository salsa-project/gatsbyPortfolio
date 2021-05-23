//modules
import React, {useState, useEffect} from "react";
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import ScrollBooster from 'scrollbooster';
//components
import Home from 'components/phone/Home'
import App_Cv from 'components/phone/apps/cv/App_Cv'



// Vertical(up/down) Drag Slider
const verticalScroll = () => {
    new ScrollBooster({
      viewport: document.querySelector("#screen"),
      content: document.querySelector("#app_cv"),
      direction: "vertical",
      scrollMode: "native"
    });
};


const Screen = (props)=>{
    let {run_app_CV, isScroll} = props

    let [openApp, setOpenApp] = useState()

    useEffect(()=>{
        (run_app_CV) && setOpenApp(<App_Cv />);
    }, [run_app_CV])
    
    useEffect(()=>{
        //active drag scroll
        (isScroll) && verticalScroll();
    }, [isScroll])

    return(
        <div id="screen">
            <Home />
            <div id="app_runner_layer">
                {openApp}
            </div>
        </div>
    )
}

Screen.propTypes = {
    props: PropTypes.object,
}

const mapStateToProps = (state, ownProps)=>{
    let {run_app_CV, isScroll} = state.app
    return{
        run_app_CV: run_app_CV,
        isScroll: isScroll
    }
}

export default connect(mapStateToProps, null)(Screen)