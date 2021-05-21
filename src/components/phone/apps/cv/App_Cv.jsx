//modules
import React, {useEffect} from "react";
import {connect} from 'react-redux';
import PropTypes from "prop-types";
//components
import OwnCard from 'components/phone/apps/cv/components/Own_Card';
import CvBody from 'components/phone/apps/cv/components/Cv_Body';
//action
import {toggleRunApp} from '../../../../state/actions/actions';




const AppCv = (props)=>{
    let {isAppRunning, action_run_app} = props
    useEffect(()=>{
        action_run_app({isAppRunning: true})
    }, [])
    
    return(
        <div id="app_cv">
            <p className="cv">CV</p>
            <OwnCard />
            <CvBody />
        </div>
    )
}

AppCv.propTypes = {
    props: PropTypes.object,
    isAppRunning: PropTypes.bool,
    action_run_app: PropTypes.func,
};


const mapStateToProps = (state, ownProps)=>{
    const {isAppRunning} = state.app;
    return{
        isAppRunning: isAppRunning
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        action_run_app: (data)=>{ dispatch(toggleRunApp(data))}
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(AppCv)