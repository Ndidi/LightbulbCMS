import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './normalize.css'
import './webflow.css'
import './nugit.css'
import './header.css'
import './chosen.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | Gatsby + Netlify CMS" />
    <div>{children()}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper