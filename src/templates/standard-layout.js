import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import '../layouts/normalize.css'
import '../layouts/webflow.css'
import '../layouts/nugit.css'
import '../layouts/header.css'
import '../layouts/chosen.css'

export default function TemplateWrapper ({ 
  children, data
}){
  
  const { markdownRemark } = data;
  const { frontmatter } = markdownRemark;

  return (
    <div>
      <Helmet title="Home | Gatsby + Netlify CMS" />
      <div data-collapse="medium" data-animation="default" data-duration={400} data-easing="ease-in-out" data-easing2="ease-in-out" data-w-id="3c6cfdb0-ea9e-799f-4b62-af73be7456a4" className="navbar w-nav">
        <div className="container-nav w-container"><a href="index" className="logo-nav w-nav-brand" />
          <nav role="navigation" className="nav-menu-container w-nav-menu"><a href="index" className="nav-link w-hidden-main w-nav-link">Home</a>
          
            {frontmatter.navBarItems.map(item => (
              <a href={item.href} key={item.href} className="nav-link w-nav-link">{item.text}</a>
            ))}
            {/* <a href="what-is-data-storytelling" className="nav-link w-nav-link">Data Storytelling Platform</a>
            <div data-delay={300} className="nav-link-dropdown w-dropdown">
              <div className="dropdown-toggle w-dropdown-toggle">
                <div className="arrow-down" />
                <div>Solutions</div>
              </div>
              <nav className="dropdown-list-bg w-dropdown-list">
                <a href="marketing-stories.html" className="dropdown-menu w-dropdown-link">Marketing Stories</a>
                <a href="customer-stories.html" className="dropdown-menu w-dropdown-link">Customer Stories</a>
              </nav>
            </div>
            <a href="product" className="nav-link w-nav-link">Product</a>
            <a href="about" className="nav-link w-nav-link">About</a> */}

            <a href="http://app.nugit.co/" target="_blank" className="nav-link w-hidden-main w-nav-link">Login</a></nav>
          <div className="cta-nav"><a href="http://app.nugit.co/" target="_blank" className="nav-link w-hidden-medium w-hidden-small w-hidden-tiny w-nav-link">Login</a><a href="request-demo" className="btn normal w-hidden-medium w-hidden-small w-hidden-tiny w-button">Request Demo</a>
            <div className="w-embed" />
          </div>
          <div className="mobile-menu-icon w-nav-button">
            <div data-w-id="46b8219d-98d6-91ca-a315-851852012b51" className="line first" />
            <div data-w-id="d7bab228-6401-cd2f-c50f-6ec9d2628756" className="line" />
            <div data-w-id="d9b59824-7cd5-ba6a-c9dd-7a0fc6500aec" className="line last" />
          </div>
        </div>
      </div>
      <div>{children()}</div>
    </div>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export const pageQuery = graphql`
  query StandardLayout($id: String!) {
    markdownRemark( id: { eq: $id } ) {
      frontmatter {
        navBarItems {
          href
          text
        }
      }
    }
  }
`;