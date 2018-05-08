import React from "react";

export const AboutPageTemplate = ({
  title
}) => {
  return(
    <div>
      <header className="main-header about">
        <div className="container">
          <div className="hero">About Nugit</div>
          <div className="sm-spacing"></div>
          <div className="p center-align">The Data Storytelling Company</div>
          <div className="md-spacing"></div>
        </div>
        <div className="container grid">
          <a href="#" data-w-id="5d251648-50aa-c481-984b-f3a3c83adb58" className="shadow-box about w-inline-block">
            <div className="avatar nugit"></div>
            <div className="avatar-box-content">
              <h5 className="h5">What we believe</h5>
              <p className="small-copy">Our company&#x27;s purpose</p>
            </div>
            <div className="about-learn">
              <div className="link-text w-clearfix">
                <div className="learn-more">Learn More</div>
                <div className="arrow-right"></div>
              </div>
            </div>
          </a>
          <a href="#" data-w-id="68fdefdb-d0b0-47e5-8196-613034e0b4fc" className="shadow-box about w-inline-block">
            <div className="avatar dave"></div>
            <div className="avatar-box-content">
              <h5 className="h5">Dave Sanderson</h5>
              <p className="small-copy">Founder &amp; CEO</p>
            </div>
            <div className="about-learn">
              <div className="link-text w-clearfix">
                <div className="learn-more">Learn More</div>
                <div className="arrow-right"></div>
              </div>
            </div>
          </a>
        </div>
      </header>
      <div className="white-section team">
        <div className="container-fluid">
          <div className="container">
            <h2 className="h2">The Nugit leadership team</h2>
            <div className="md-spacing"></div>
          </div>
          <div className="flex-container team-end">
            <div data-w-id="ce1fe10a-ff26-e87d-62eb-a04fedd12545" className="manager-team w-hidden-main"><img src="images/dave.png" width="248" alt="dave"/>
              <div className="tooltip-team">
                <h6 className="h6">Dave Sanderson</h6>
                <div className="small-copy">CEO</div>
              </div>
              <div className="team-name-tablet w-hidden-main">
                <h6 className="h6">Dave Sanderson</h6>
                <div className="small-copy">Founder &amp; CEO</div>
              </div>
            </div>
            {/* <div data-w-id="4d7b2719-95d4-d023-b1e2-d9916fb3a1b4" className="manager-team"><img src="images/cy.png" width="248" alt="cy"/>
              <div style="-webkit-transform:translateX(0) translateY(100PX) translateZ(0) scaleX(1) scaleY(1) scaleZ(1) rotateX(0) rotateY(0) rotateZ(0) skewX(0) skewY(0);-moz-transform:translateX(0) translateY(100PX) translateZ(0) scaleX(1) scaleY(1) scaleZ(1) rotateX(0) rotateY(0) rotateZ(0) skewX(0) skewY(0);-ms-transform:translateX(0) translateY(100PX) translateZ(0) scaleX(1) scaleY(1) scaleZ(1) rotateX(0) rotateY(0) rotateZ(0) skewX(0) skewY(0);transform:translateX(0) translateY(100PX) translateZ(0) scaleX(1) scaleY(1) scaleZ(1) rotateX(0) rotateY(0) rotateZ(0) skewX(0) skewY(0);opacity:0" className="tooltip-team">
                <h6 className="h6">Chin Yong Tang</h6>
                <div className="small-copy">Technical Director</div>
              </div>
              <div className="team-name-tablet w-hidden-main">
                <h6 className="h6">Chin Yong Tang</h6>
                <div className="small-copy">Technical Director</div>
              </div>
            </div>
            <div data-w-id="bf94cd9f-9938-37b2-ed48-c55797220068" className="manager-team"><img src="images/sam.png" width="248" alt="sam"/>
              <div style="-webkit-transform:translateX(0) translateY(100PX) translateZ(0) scaleX(1) scaleY(1) scaleZ(1) rotateX(0) rotateY(0) rotateZ(0) skewX(0) skewY(0);-moz-transform:translateX(0) translateY(100PX) translateZ(0) scaleX(1) scaleY(1) scaleZ(1) rotateX(0) rotateY(0) rotateZ(0) skewX(0) skewY(0);-ms-transform:translateX(0) translateY(100PX) translateZ(0) scaleX(1) scaleY(1) scaleZ(1) rotateX(0) rotateY(0) rotateZ(0) skewX(0) skewY(0);transform:translateX(0) translateY(100PX) translateZ(0) scaleX(1) scaleY(1) scaleZ(1) rotateX(0) rotateY(0) rotateZ(0) skewX(0) skewY(0);opacity:0" className="tooltip-team">
                <h6 className="h6">Samantha Pearlson</h6>
                <div className="small-copy">VP, Operations</div>
              </div>
              <div className="team-name-tablet w-hidden-main">
                <h6 className="h6">Samantha Pearlson</h6>
                <div className="small-copy">VP Operations</div>
              </div>
            </div>
            <div data-w-id="e1ce90bf-9917-4f81-23f8-1724a854ce5d" className="manager-team w-hidden-medium w-hidden-small w-hidden-tiny"><img src="images/dave.png" width="248" alt="dave"/>
              <div style="-webkit-transform:translateX(0) translateY(100PX) translateZ(0) scaleX(1) scaleY(1) scaleZ(1) rotateX(0) rotateY(0) rotateZ(0) skewX(0) skewY(0);-moz-transform:translateX(0) translateY(100PX) translateZ(0) scaleX(1) scaleY(1) scaleZ(1) rotateX(0) rotateY(0) rotateZ(0) skewX(0) skewY(0);-ms-transform:translateX(0) translateY(100PX) translateZ(0) scaleX(1) scaleY(1) scaleZ(1) rotateX(0) rotateY(0) rotateZ(0) skewX(0) skewY(0);transform:translateX(0) translateY(100PX) translateZ(0) scaleX(1) scaleY(1) scaleZ(1) rotateX(0) rotateY(0) rotateZ(0) skewX(0) skewY(0);opacity:0" className="tooltip-team">
                <h6 className="h6">David Sanderson</h6>
                <div className="small-copy">Founder &amp; CEO</div>
              </div>
            </div>
            <div data-w-id="83a969f0-ac20-7a48-85fd-14ea0c3aff22" className="manager-team"><img src="images/lauren.png" width="248" alt="lauren"/>
              <div style="-webkit-transform:translateX(0) translateY(100PX) translateZ(0) scaleX(1) scaleY(1) scaleZ(1) rotateX(0) rotateY(0) rotateZ(0) skewX(0) skewY(0);-moz-transform:translateX(0) translateY(100PX) translateZ(0) scaleX(1) scaleY(1) scaleZ(1) rotateX(0) rotateY(0) rotateZ(0) skewX(0) skewY(0);-ms-transform:translateX(0) translateY(100PX) translateZ(0) scaleX(1) scaleY(1) scaleZ(1) rotateX(0) rotateY(0) rotateZ(0) skewX(0) skewY(0);transform:translateX(0) translateY(100PX) translateZ(0) scaleX(1) scaleY(1) scaleZ(1) rotateX(0) rotateY(0) rotateZ(0) skewX(0) skewY(0);opacity:0" className="tooltip-team">
                <h6 className="h6">Lauren Stephenson</h6>
                <div className="small-copy">Marketing Director</div>
              </div>
              <div className="team-name-tablet w-hidden-main">
                <h6 className="h6">Lauren Stephenson</h6>
                <div className="small-copy">Marketing Director</div>
              </div>
            </div>
            <div data-w-id="5e79fdc6-bd63-435f-f07b-20c6b75f3dc9" className="manager-team"><img src="images/scott.png" width="248" alt="scott"/>
              <div style="-webkit-transform:translateX(0) translateY(100PX) translateZ(0) scaleX(1) scaleY(1) scaleZ(1) rotateX(0) rotateY(0) rotateZ(0) skewX(0) skewY(0);-moz-transform:translateX(0) translateY(100PX) translateZ(0) scaleX(1) scaleY(1) scaleZ(1) rotateX(0) rotateY(0) rotateZ(0) skewX(0) skewY(0);-ms-transform:translateX(0) translateY(100PX) translateZ(0) scaleX(1) scaleY(1) scaleZ(1) rotateX(0) rotateY(0) rotateZ(0) skewX(0) skewY(0);transform:translateX(0) translateY(100PX) translateZ(0) scaleX(1) scaleY(1) scaleZ(1) rotateX(0) rotateY(0) rotateZ(0) skewX(0) skewY(0);opacity:0" className="tooltip-team">
                <h6 className="h6">Scott Doughty</h6>
                <div className="small-copy">VP, Sales Development</div>
              </div>
              <div className="team-name-tablet w-hidden-main">
                <h6 className="h6">Scott Doughty</h6>
                <div className="small-copy">Sales Director</div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="white-section centered">
        <div className="container">
          <h2 className="h2">The Nugit experience</h2>
          <div className="sm-spacing"></div>
          <p className="p center-align">Nugit brings together some of the brightest talent from all over the world, with specialists in Engineering, Data Science, Data Communication, Design and Business Strategy. Our team spans over 14 nationalities all based in our headquarters in downtown Singapore.</p>
        </div>
        <div className="md-spacing"></div>
        <div className="team-photo">
          <div className="nugit-photo"></div>
          <div className="nugit-photo _2"></div>
          <div className="nugit-photo _3"></div>
          <div className="nugit-photo _4"></div>
          <div className="nugit-photo _5"></div>
          <div className="nugit-photo _6"></div>
        </div>
        <div className="hg-spacing"></div>
        <div className="container grid">
          <h2 className="h2">Featured on</h2>
          <div className="md-spacing"></div>
          <div className="techcrunch"></div>
          <div className="tia"></div>
          <div className="cnbc"></div>
          <div className="campaignasia"></div>
        </div>
        <div className="md-spacing"></div>
        <div className="container grid"><a href="http://www.afr.com/technology/aussies-startup-nugit-raises-68m-from-sequoia-to-automate-marketing-with-ai-20161005-grvoy9" target="_blank" className="shadow-box news w-inline-block"><img src="images/article1.jpg" alt="sequoia" width="170" className="news-thumb"/><div className="news-title"><h5 className="h5">Aussie&#x27;s start-up Nugit raises $6.8m from Sequoia to automate marketing with AI</h5><div className="tiny-copy">afr.com</div></div></a><a href="https://techcrunch.com/2016/10/07/nugit/" target="_blank" className="shadow-box news w-inline-block"><img src="images/techcrunch.jpg" width="170" alt="artificial intelligence" className="news-thumb"/><div className="news-title"><h5 className="h5">Singapore’s Nugit raises $5.2M to make sense of big data using artificial intelligence</h5><div className="tiny-copy">techcrunch.com</div></div></a><a href="https://www.enterpriseinnovation.net/article/top-6-predictions-data-and-analytics-2018-1624976220" target="_blank" className="shadow-box news w-inline-block"><img src="images/bllnr.jpg" alt="6 predictions 2018" width="170" className="news-thumb"/><div className="news-title"><h5 className="h5">Top 6 predictions for data and analytics in 2018</h5><div className="tiny-copy">enterpriseinnovation.net</div></div></a><a href="http://www.thedrum.com/news/2017/11/21/nugit-aims-use-data-storytelling-drive-digital-transformation-sanofi-pasteur" target="_blank" className="shadow-box news w-inline-block"><img src="images/sanofi.jpg" width="170" alt="sanofi pasteur" className="news-thumb"/><div className="news-title"><h5 className="h5">Nugit aims to use data storytelling to drive digital transformation in Sanofi Pasteur</h5><div className="tiny-copy">thedrum.com</div></div></a></div>
        <div className="hg-spacing"></div>
        <div className="container grid">
          <h2 className="h2">We are backed by</h2>
          <div className="md-spacing"></div>
          <div className="flex-container center">
            <div className="sequoia"></div>
            <div className="_500"></div>
          </div>
        </div>
      </div>
      <section id="hiring" className="white-section gray">
        <div className="container">
          <h2 className="h2">Want to join the team?</h2>
          <div className="md-spacing"></div>
          <div className="flex-container space-between">
            <a href="https://nugit.recruitee.com/o/agency-partner-sales-manager" target="_blank" className="shadow-box _3cols w-inline-block">
              <div className="h6 limited-length">Agency &amp; Partner Sales Manager</div>
              <div className="small-copy">Full-time, Singapore</div>
            </a>
            <a href="https://nugit.recruitee.com/o/business-development-representative" target="_blank" className="shadow-box _3cols w-inline-block">
              <div className="h6 limited-length">Business Development Representative</div>
              <div className="small-copy">Full-time, Singapore</div>
            </a>
            <a href="https://nugit.recruitee.com/o/enterprise-sales-manager" target="_blank" className="shadow-box _3cols w-inline-block">
              <div className="h6 limited-length">Enterprise Sales Manager</div>
              <div className="small-copy">Full-time, Singapore</div>
            </a>
            <a href="https://nugit.recruitee.com/o/javascript-engineer-midlevel-reactjs" target="_blank" className="shadow-box _3cols w-inline-block">
              <div className="h6 limited-length">JavaScript Engineer (Mid-level, ReactJS)</div>
              <div className="small-copy">Full-time, Singapore</div>
            </a>
          </div>
        </div>
      </section>
      <section className="white-section fixedheight">
        <div className="flex-container fixedheight">
          <div data-delay="4000" data-animation="slide" data-autoplay="1" data-easing="ease-in-out-expo" data-duration="500" data-infinite="1" className="slider30 right w-slider">
            <div className="w-slider-mask">
              <div className="office1 w-slide"></div>
              <div className="office2 w-slide"></div>
              <div className="office3 w-slide"></div>
            </div>
            <div className="w-hidden-main w-hidden-medium w-hidden-small w-hidden-tiny w-slider-arrow-left">
              <div className="w-icon-slider-left"></div>
            </div>
            <div className="w-hidden-main w-hidden-medium w-hidden-small w-hidden-tiny w-slider-arrow-right">
              <div className="w-icon-slider-right"></div>
            </div>
            <div className="w-slider-nav w-round"></div>
          </div>
          <div className="container">
            <div className="datalab">
              <h2 className="h2">Nugit’s DataLab</h2>
              <div className="sm-spacing"></div>
              <p className="p">Our cafe and events space where we celebrate all things data and technology. With a full cafe and espresso, lounges, games and plenty of space for presentations and events, it&#x27;s the most popular part of the office for collaborations. We host regular events and knowledge sharing nights, use the big TVs and whiteboards to launch our latest product features, and support the local community with space for up to 40.<br/><br/>Come and join us next time you&#x27;re passing by Amoy St.</p>
              <div className="sm-spacing _30"></div>
              <a href="mailto:info@nugit.co" className="link-text w-inline-block w-clearfix">
                <div className="learn-more">Contact us</div>
                <div className="arrow-right"></div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return(
    <AboutPageTemplate
      title={frontmatter.title}
    />
  )
}

export const productPageQuery = graphql`
  query About($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`;