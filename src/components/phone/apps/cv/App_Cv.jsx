//modules
import React, {useEffect} from "react";
import {connect} from 'react-redux';
import PropTypes from "prop-types";
//components
import OwnCard from 'components/phone/apps/cv/components/Own_Card';
import CvBody from 'components/phone/apps/cv/components/Cv_Body';





const AppCv = (props)=>{
    let {action_toggle_scroll} = props
    useEffect(()=>{
        action_toggle_scroll(true)
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
};



const mapDispatchToProps = (dispatch)=>{
    return{
        action_toggle_scroll: (bool)=> dispatch({type: 'TOGGLE_SCROLL', isScroll: bool})
    }
}
  
export default connect(null, mapDispatchToProps)(AppCv)