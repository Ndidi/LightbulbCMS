import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import './normalize.css'
import './webflow.css'
import './nugit.css'

const jquery = document.createElement("script");
jquery.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js";
jquery.async = true;
document.body.appendChild(jquery);

const webflow = document.createElement("script");
webflow.src = "webflow.js";
document.body.appendChild(webflow);

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | Gatsby + Netlify CMS" />
    <Navbar />
    <div>{children()}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper