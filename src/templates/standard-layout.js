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
          
            {frontmatter.navBarItems.map(item => {
              if (item.href){
                return <a href={item.href} key={item.text} className="nav-link w-nav-link">{item.text}</a>
              } else {
                return (
                  <div key={item.text} data-delay={300} className="nav-link-dropdown w-dropdown">
                    <div className="dropdown-toggle w-dropdown-toggle">
                      <div className="arrow-down" />
                      <div>{item.text}</div>
                    </div>
                    <nav className="dropdown-list-bg w-dropdown-list">
                      {item.navItem.map(subItems => (
                        <a href={subItems.href} key={subItems.text} className="dropdown-menu w-dropdown-link">{subItems.text}</a>
                      ))}
                    </nav>
                  </div>
                )
              }
            })}
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
      <footer id="footer" class="footer">
        <div class="container">
          <h2 class="h2">Stay up to date with Nugit</h2>
          <div class="sm-spacing"></div>
          <p class="p center-align whiter reduced">Don’t worry, we hate spam too!<br/>We promise we’ll only send you Nugit related content.</p>
          <div class="sm-spacing"></div>
          {/* <div class="w-embed w-script">
            <script>
              hbspt.forms.create({
                portalId: '1859491',
                formId: 'c107e007-d7b7-4988-a8c4-fcd7f94c0e6b',
                css:'form{display: flex; align-items: baseline; -webkit-align-items: baseline; -ms-flex-align: baseline; justify-content: center; -webkit-justify-content: center; flex-wrap: wrap; -ms-flex-wrap: wrap; -webkit-flex-wrap: wrap;}'
              });
            </script>
          </div> */}
          <div class="lg-spacing"></div>
        </div>
        <div class="container grid"><a href="index.html" class="footer-logo w-hidden-tiny w-inline-block"><img src="images/logo-white.svg" width="80"/></a>
          <div class="footer-col">
            <div class="heading-small">Product</div>
            <div class="sm-spacing"></div><a href="https://www.nugit.co/data-integrations" class="link-footer">Integrations</a>
            <div class="sm-spacing"></div><a href="https://www.nugit.co/nugit-bug-reporting-policy" class="link-footer">Bug Bounty</a>
            <div class="sm-spacing"></div><a href="request-demo.html" class="link-footer">Request Demo</a></div>
          <div class="footer-col">
            <div class="heading-small">Company</div>
            <div class="sm-spacing"></div><a href="about.html" class="link-footer">About</a>
            <div class="sm-spacing"></div><a href="https://nugit.co/about.html#hiring" class="link-footer">We&#x27;re Hiring</a>
            <div class="sm-spacing"></div><a href="https://www.nugit.co/blog" class="link-footer">Blog</a></div>
          <div class="footer-col">
            <div class="heading-small">Resources</div>
            <div class="sm-spacing"></div><a href="https://www.nugit.co/casestudies" class="link-footer">Case Studies</a>
            <div class="sm-spacing"></div><a href="https://www.nugit.co/webinars" class="link-footer">Webinars</a>
            <div class="sm-spacing"></div><a href="https://www.nugit.co/whitepapers" class="link-footer">White Papers</a>
            <div class="sm-spacing"></div><a href="https://www.nugit.co/news" class="link-footer">Press</a>
            <div class="sm-spacing"></div><a href="http://intercom.help/nugit" class="link-footer">Knowledge Base</a></div>
          <div class="footer-col">
            <div class="heading-small">Legal</div>
            <div class="sm-spacing"></div><a href="https://app.nugit.co/privacy" class="link-footer">Privacy Policy</a>
            <div class="sm-spacing"></div><a href="https://app.nugit.co/terms-of-service" class="link-footer">Terms of Service</a>
            <div class="sm-spacing"></div><a href="https://app.nugit.co/acceptable-use-policy" class="link-footer">Acceptable Use Policy</a></div>
          <div class="footer-col">
            <div class="heading-small">Contact</div>
            <div class="sm-spacing"></div><a href="mailto:info@nugit.co" class="link-footer">info@nugit.co</a>
            <div class="sm-spacing"></div><a href="tel:+6562217754" class="link-footer">(+65) 6221 7754</a>
            <div class="sm-spacing"></div><a href="https://www.google.com.sg/maps/place/55+Amoy+St,+Singapore+069881/@1.2799941,103.8445767,17z/data=!3m1!4b1!4m5!3m4!1s0x31da190d6385f2ad:0x763446d58e270bc7!8m2!3d1.2799887!4d103.8467654?hl=en" target="_blank" class="link-footer">55b Amoy St, S069881</a></div>
        </div>
        <div class="md-spacing"></div>
        <div class="container grid valign">
          <div class="copyright">
            <div class="copyright-content">
              <div class="footer-txt"><span class="made-in">© 2018 Nugit Ltd Pte.  </span></div>
            </div>
            <div class="made-in-content">
              <div class="footer-txt"><span class="made-in">Made with </span></div>
              <div class="heart-icon"></div>
              <div class="footer-txt"><span class="made-in"> in Singapore</span></div>
            </div>
          </div>
          <div><a href="https://twitter.com/nugit" target="_blank" class="tw-icon w-inline-block"></a><a href="https://www.facebook.com/nugit/" target="_blank" class="fb-icon w-inline-block"></a><a href="https://www.linkedin.com/company/3487776/" target="_blank" class="lk-icon w-inline-block"></a></div>
        </div>
      </footer>
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
          navItem {
            href
            text
          }
        }
      }
    }
  }
`;