import React from 'react';

export const RequestDemoPageTemplate = ({
}) => (
  <div>
    <div data-w-id="bc951fdc-d87d-de3a-2fb5-04ecb418b5c9" 
       className="go-back w-embed">
      {/* style={{-webkit-transform:translateX(0) translateY(-100PX) translateZ(0) scaleX(1) scaleY(1) scaleZ(1) rotateX(0) rotateY(0) rotateZ(0) skewX(0) skewY(0), -moz-transform:translateX(0) translateY(-100PX) translateZ(0) scaleX(1) scaleY(1) scaleZ(1) rotateX(0) rotateY(0) rotateZ(0) skewX(0) skewY(0),-ms-transform:translateX(0) translateY(-100PX) translateZ(0) scaleX(1) scaleY(1) scaleZ(1) rotateX(0) rotateY(0) rotateZ(0) skewX(0) skewY(0),transform:translateX(0) translateY(-100PX) translateZ(0) scaleX(1) scaleY(1) scaleZ(1) rotateX(0) rotateY(0) rotateZ(0) skewX(0) skewY(0)}} className="go-back w-embed"> */}
      <div style={{height: 40, width: 40}} onClick="history.back(-1)"></div>
    </div>
    <main className="request-demo-section">
      <div className="request-demo-form">
        <div className="form-hubspot">
          <div className="hero nofixedwidth">Talk to us</div>
          <div className="sm-spacing"></div>
          <form name="request-demo" method="POST" netlify>
            <div id="first-name">
              <label>First Name*</label>
              <input type="text" />
            </div>
            <div id="last-name">
              <label>Last Name*</label>
              <input type="text" />
            </div>
            <div id="business-email">
              <label>Business Email*</label>
              <input type="text" />
            </div>
            <div id="phone-number">
              <label>Phone Number*</label>
              <input type="text" />
            </div>
            <div id="company-name">
              <label>Company Name*</label>
              <input type="text" />
            </div>
            <div id="country">
              <label>Country*</label>
              <select/>
            </div>
          </form>
        </div>
      </div>
      <div className="request-demo-content">
        <div className="form-hubspot">
          <div className="small-copy">Become a Data Storyteller today with AI technology that automatically analyses, visualises and creates evidence based data stories.</div>
          <div className="md-spacing"></div>
          <div className="container grid valign">
            <div className="demo-icon"></div>
            <div className="demo-1">Combine data across up to 2,500 data sources</div>
          </div>
          <div className="sm-spacing _30"></div>
          <div className="container grid valign">
            <div className="demo-icon ngl"></div>
            <div className="demo-1">Human Language Generation for greater insights &amp; clarity</div>
          </div>
          <div className="sm-spacing _30"></div>
          <div className="container grid valign">
            <div className="demo-icon instant"></div>
            <div className="demo-1">Instant Stories personalised and ready to share</div>
          </div>
          <div className="md-spacing"></div>
          <div className="container grid valign">
            <div className="fb-logo"></div>
            <div className="samsung-logo"></div>
            <div className="ibm-logo"></div>
          </div>
        </div>
      </div>
    </main>
  </div>
)

export default ({data}) => {
  const  {frontmatter} = data.markdownRemark

  return(
    <RequestDemoPageTemplate/>
  )
}

export const requestDemoPageQuery = graphql`
query RequestDemoPage($id: String!) {
  markdownRemark(id: { eq: $id }) {
    frontmatter {
      path
    }
  }
}
`