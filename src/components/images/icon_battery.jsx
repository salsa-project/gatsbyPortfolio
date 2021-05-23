import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"





const Image = ({ props }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "battery.png" }) {
            childImageSharp {
                fixed(height: 13)  {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }`
)

  return(
       <Img
        fixed={data.file.childImageSharp.fixed}
        alt="alt-img-tag"
      />
  )
}



Image.propTypes = {
}

export default Image
