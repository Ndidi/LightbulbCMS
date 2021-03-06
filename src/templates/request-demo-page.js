import React from 'react';
import Link from "gatsby-link";
import { Redirect } from 'react-router';

function encode(data) {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}
export class RequestDemoPageTemplate extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      phoneNumber: "",
      company: "",
      fireRedirect: false
    };

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "request-demo", ...this.state })
    })
    .then(response => {
      this.setState({ fireRedirect: true })
    })
    e.preventDefault()
  };

  goBack = () => {
    history.back(-1)
  }

  render(){
    const { firstname, lastname, email, phoneNumber, company, fireRedirect} = this.state;
    return( 
      <div>
        {fireRedirect && (
          <Redirect to="/thank-you"/>
        )}
        <div data-w-id="bc951fdc-d87d-de3a-2fb5-04ecb418b5c9" 
          className="go-back w-embed">
          {/* style={{-webkit-transform:translateX(0) translateY(-100PX) translateZ(0) scaleX(1) scaleY(1) scaleZ(1) rotateX(0) rotateY(0) rotateZ(0) skewX(0) skewY(0), -moz-transform:translateX(0) translateY(-100PX) translateZ(0) scaleX(1) scaleY(1) scaleZ(1) rotateX(0) rotateY(0) rotateZ(0) skewX(0) skewY(0),-ms-transform:translateX(0) translateY(-100PX) translateZ(0) scaleX(1) scaleY(1) scaleZ(1) rotateX(0) rotateY(0) rotateZ(0) skewX(0) skewY(0),transform:translateX(0) translateY(-100PX) translateZ(0) scaleX(1) scaleY(1) scaleZ(1) rotateX(0) rotateY(0) rotateZ(0) skewX(0) skewY(0)}} className="go-back w-embed"> */}
          <div style={{height: 40, width: 40}} onClick={this.goBack}></div>
        </div>
        <main className="request-demo-section">
          <div className="request-demo-form">
            <div className="form-hubspot">
              <div className="hero nofixedwidth">Talk to us</div>
              <div className="sm-spacing"></div>
              <form 
                name="request-demo"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}>
                <div id="first-name">
                  <label>First Name*</label>
                  <input type="text" name="firstname" value={firstname} onChange={this.handleChange} />
                </div>
                <div id="last-name">
                  <label>Last Name*</label>
                  <input type="text" name="lastname" value={lastname} onChange={this.handleChange}/>
                </div>
                <div id="business-email">
                  <label>Business Email*</label>
                  <input type="email" name="email" value={email} onChange={this.handleChange}/>
                </div>
                <div className="hidden">
                  <label>Don’t fill this out if you're human: <input name="bot-field"/></label>
                </div>
                <div id="phone-number">
                  <label>Phone Number*</label>
                  <input type="text" name="phoneNumber" value={phoneNumber} onChange={this.handleChange}/>
                </div>
                <div id="company-name">
                  <label>Company Name*</label>
                  <input type="text" name="company" value={company} onChange={this.handleChange}/>
                </div>
                <div id="country">
                  <label>Country*</label>
                  <select/>
                </div>
                <button type="submit">Send</button>
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
  }
}

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