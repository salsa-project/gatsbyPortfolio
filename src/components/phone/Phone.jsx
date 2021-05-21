//modules
import React from "react";
import {connect} from 'react-redux';
import PropTypes from "prop-types";
//components
import Screen from 'components/phone/Screen'




const Phone = (props)=>(
    <div className="iphone-x">
      <i id= "speacker"></i>
      <b id= "camera"></b>
      <Screen />
    </div>
)

Phone.propTypes = {
  props: PropTypes.object
}

const mapStateToProps = (state, ownProps)=>{
  const {isAppRunning} = state.app;
  return{
    isAppRunning: isAppRunning
  }
}

export default connect(mapStateToProps, null)(Phone)