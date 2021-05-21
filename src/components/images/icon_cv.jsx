import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"





const Image = ({ props }) => {
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
    console.log('CV app is Running !')
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
    data: PropTypes.object.isRequired,
}


const mapStateToProps = (state, ownProps)=>{
  let {isAppRunning} = state.app
  return{
      isAppRunning: isAppRunning,
  }
}

export default connect(mapStateToProps, null)(Image)

