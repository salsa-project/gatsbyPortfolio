import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"





const Image = (props) => {
  let {action_run_app_CV} = props

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "cv.png" }) {
            childImageSharp {
                fixed(height: 30)  {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }`
  )

  function openApp(){
    action_run_app_CV(true)
  }

  return(
    <div onClick={openApp}>
      <Img 
        fixed={data.file.childImageSharp.fixed}
        alt="alt-img-tag"
      />
    </div>
  )
}





Image.propTypes = {
  props: PropTypes.object
}




const mapStateToProps = (state, ownProps)=>{
  const {run_app_CV} = state.app;
  return{
    run_app_CV: run_app_CV
  }
}
const mapDispatchToProps = (dispatch)=>{
  return{
      action_run_app_CV: (bool)=>{ dispatch({type: 'APP_CV_RUN', run_app_CV: bool})}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Image)