import React from "react";

export const ProductPageTemplate = ({
  title,
  subtitle,
  imageText,
  textImage,
  centeredContent,
  secondTextImage,
  theming,
  connectingData
}) => {
  return (
    <div>
      <div className="tint-container">
        <div className="flex-container center">
          <div id="closevid" className="close-popup"></div>
          <div className="video-explanation w-embed w-iframe"><iframe id="embedvideo" src="https://player.vimeo.com/video/259289401" frameBorder="0" webkitallowfullscreen="" mozallowfullscreen="" allowFullScreen=""></iframe></div>
          <div className="video-jermaine w-embed w-iframe"><iframe id="embedvideo" src="https://player.vimeo.com/video/258466320" frameBorder="0" webkitallowfullscreen="" mozallowfullscreen="" allowFullScreen=""></iframe></div>
          <div className="video-mito w-embed w-iframe"><iframe id="embedvideo" src="https://player.vimeo.com/video/258466230" frameBorder="0" webkitallowfullscreen="" mozallowfullscreen="" allowFullScreen=""></iframe></div>
          <div className="video-thu w-embed w-iframe"><iframe id="embedvideo" src="https://player.vimeo.com/video/258466172" frameBorder="0" webkitallowfullscreen="" mozallowfullscreen="" allowFullScreen=""></iframe></div>
          <div className="video-varun w-embed w-iframe"><iframe id="embedvideo" src="https://player.vimeo.com/video/258465734" frameBorder="0" webkitallowfullscreen="" mozallowfullscreen="" allowFullScreen=""></iframe></div>
          <div className="video-sacha w-embed w-iframe"><iframe id="embedvideo" src="https://player.vimeo.com/video/258465627" frameBorder="0" webkitallowfullscreen="" mozallowfullscreen="" allowFullScreen=""></iframe></div>
        </div>
      </div>
      <header className="main-header product">
        <div className="container">
          <div className="hero">{title}</div>
          <div className="sm-spacing"></div>
          <div className="p center-align">{subtitle}</div>
        </div>
      </header>
      <section className="white-section feature">
        <div className="container flexright">
          <div>
            <h2 className="h2 fixedwidth">{imageText.title}</h2>
            <div className="sm-spacing"></div>
            <p className="p fixedwidth">{imageText.subtitle}</p>
          </div>
        </div>
        <div className="magazine left"></div>
      </section>
      <section className="white-section gray left-align">
        <div className="container">
          <h2 className="h2 fixedwidth reduced">{textImage.title}</h2>
          <div className="sm-spacing"></div>
          <p className="p fixedwidth">{textImage.subtitle}</p>
        </div>
        <div className="multi-channel right"></div>
      </section>
      <section className="white-section">
        <div className="container center">
          <h2 className="h2">{centeredContent.title}</h2>
          <div className="sm-spacing"></div>
          <p className="p center-align">{centeredContent.subtitle}</p>
          <div className="md-spacing"></div>
          <div className="nlg-magnify"></div>
        </div>
      </section>
      <div className="white-section gray left-align visualisation">
        <div className="container">
          <h2 className="h2 fixedwidth">{secondTextImage.title}</h2>
          <div className="sm-spacing"></div>
          <p className="p fixedwidth">{secondTextImage.subtitle}</p>
        </div>
        <div className="nugit-list right"></div>
      </div>
      <section className="white-section theme">
        <div className="container center">
          <h2 className="h2">{theming.title}</h2>
          <div className="sm-spacing"></div>
          <p className="p center-align whiter">{theming.subtitle}</p>
          <div className="md-spacing"></div>
          <div className="theme-tool"></div>
        </div>
      </section>
      <section id="integration" className="white-section centered">
        <div className="container center">
          <h2 className="h2">{connectingData.title}</h2>
          <div className="sm-spacing"></div>
          <p className="p center-align">{connectingData.subtitle}</p>
          <div className="md-spacing"></div>
        </div>
        <div className="container grid">
          <div data-animation="slide" data-easing="ease-in" data-duration="500" data-infinite="1" className="slider w-slider">
            <div className="w-slider-mask">
              <div className="slide-content w-slide">
                <div className="center-wrapper">
                  <a href="/doubleclick-search" className="shadow-box integration w-inline-block">
                    <div className="integration-color doubleclick"></div>
                    <div className="platform-detail integration">
                      <h6 className="h6">DoubleClick Search</h6>
                      <div className="tiny-copy right">View Details</div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="slide-content w-slide">
                <div className="center-wrapper">
                  <a href="/google-analytics" className="shadow-box integration w-inline-block">
                    <div className="integration-color google-analytics"></div>
                    <div className="platform-detail integration">
                      <h6 className="h6">Google Analytics 360</h6>
                      <div className="tiny-copy right">View Details</div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="slide-content w-slide">
                <div className="center-wrapper">
                  <a href="/facebook-ads" className="shadow-box integration w-inline-block">
                    <div className="integration-color facebook"></div>
                    <div className="platform-detail integration">
                      <h6 className="h6">Facebook Ads</h6>
                      <div className="tiny-copy right">View Details</div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="slide-content w-slide">
                <div className="center-wrapper">
                  <a href="/doubleclick-campaign-manager" className="shadow-box integration w-inline-block">
                    <div className="integration-color doubleclick"></div>
                    <div className="platform-detail integration">
                      <h6 className="h6">DoubleClick Campaign Manager</h6>
                      <div className="tiny-copy right">View Details</div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="slide-content w-slide">
                <div className="center-wrapper">
                  <a href="/sizmek" className="shadow-box integration w-inline-block">
                    <div className="integration-color sizmek"></div>
                    <div className="platform-detail integration">
                      <h6 className="h6">Sizmek</h6>
                      <div className="tiny-copy right">View Details</div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="slide-content w-slide">
                <div className="center-wrapper">
                  <a href="/instagram" className="shadow-box integration w-inline-block">
                    <div className="integration-color instagram"></div>
                    <div className="platform-detail integration">
                      <h6 className="h6">Instagram</h6>
                      <div className="tiny-copy right">View Details</div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="slide-content w-slide">
                <div className="center-wrapper">
                  <a href="/yahoo" className="shadow-box integration w-inline-block">
                    <div className="integration-color yahoo"></div>
                    <div className="platform-detail integration">
                      <h6 className="h6">Yahoo Gemini</h6>
                      <div className="tiny-copy right">View Details</div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="slide-content w-slide">
                <div className="center-wrapper">
                  <a href="/integrations" className="shadow-box integration showmore w-inline-block">
                    <div className="link-text w-clearfix">
                      <div className="learn-more">Learn More</div>
                      <div className="arrow-right"></div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="slider-arrow-l w-hidden-medium w-hidden-small w-hidden-tiny w-slider-arrow-left">
              <div className="w-icon-slider-left"></div>
            </div>
            <div className="slider-arrow-r w-hidden-medium w-hidden-small w-hidden-tiny w-slider-arrow-right">
              <div className="w-icon-slider-right"></div>
            </div>
            <div className="slide-nav w-hidden-main w-slider-nav w-round"></div>
          </div>
        </div>
      </section>
      <section className="white-section gray left-align stay-control">
        <div className="container">
          <h2 className="h2 fixedwidth reduced">Stay in control</h2>
          <div className="sm-spacing"></div>
          <p className="p fixedwidth">Ensure the level of access for each of your team members and audiences so sensitive data remains in your hands.</p>
        </div>
        <div className="product-img user-team"></div>
      </section>
      <section className="white-section reducedbottom">
        <div className="container center">
          <h2 className="h2">Complete data management</h2>
          <div className="sm-spacing"></div>
          <p className="p center-align">Industry leading features including segmentation of data so you can group them into logical use cases.</p>
          <div className="md-spacing"></div>
        </div>
        <div className="product-img data-factory"></div>
      </section>
      <div className="white-section centered">
        <div className="container grid">
          <h2 className="h2">Video Demonstrations</h2>
          <div className="sm-spacing"></div>
          <p className="p center-align">Check out our series of video demonstrations below to learn how easy it is to become a data storyteller with Nugit.</p>
          <div className="md-spacing"></div>
          <a href="#" data-video-playback="video-jermaine" className="shadow-box videos w-inline-block">
            <div className="video-container">
              <div className="overlay-video"></div><img src="images/thumb-jermaine.png" alt="Scheduling a report" width="350" srcSet="images/thumb-jermaine-p-500.png 500w, images/thumb-jermaine.png 700w" sizes="(max-width: 479px) 90vw, (max-width: 767px) 72vw, (max-width: 991px) 43vw, 31vw" className="video-thumb"/></div>
            <div className="platform-detail videos">
              <h6 className="h6">Scheduling a report</h6>
              <div className="sm-spacing"></div>
              <div className="small-copy">Find out how simple Nugit’s scheduling feature is with Jermaine</div>
            </div>
          </a>
          <a href="#" data-video-playback="video-mito" className="shadow-box videos w-inline-block">
            <div className="video-container">
              <div className="overlay-video"></div><img src="images/thumb-mito.jpg" alt="Managing &amp; inviting users" width="350" srcSet="images/thumb-mito-p-500.jpeg 500w, images/thumb-mito.jpg 700w" sizes="(max-width: 479px) 90vw, (max-width: 767px) 72vw, (max-width: 991px) 43vw, 31vw" className="video-thumb"/></div>
            <div className="platform-detail videos">
              <h6 className="h6">Managing &amp; inviting users</h6>
              <div className="sm-spacing"></div>
              <div className="small-copy">Mito shows you how to manage your team and invite users</div>
            </div>
          </a>
          <a href="#" data-video-playback="video-thu" className="shadow-box videos w-inline-block">
            <div className="video-container">
              <div className="overlay-video"></div>
              <img src="images/thumb-thu.jpg" alt="Creating a one-click story" width="350" srcSet="images/thumb-thu-p-500.jpeg 500w, images/thumb-thu.jpg 700w" sizes="(max-width: 479px) 90vw, (max-width: 767px) 72vw, (max-width: 991px) 43vw, 31vw" className="video-thumb"/>
            </div>
            <div className="platform-detail videos">
              <h6 className="h6">Creating a one-click story</h6>
              <div className="sm-spacing"></div>
              <div className="small-copy">Learn how to create a data story in one click with Thu</div>
            </div>
          </a>
          <div className="sm-spacing"></div>
        </div>
        <a href="video-demonstration.html" className="link-text center-align seemore w-inline-block w-clearfix">
          <div className="learn-more">View More</div>
          <div className="arrow-right"></div>
        </a>
      </div>
      <section className="white-section gray">
        <div className="container">
          <h2 className="h2">Common Questions</h2>
          <div className="sm-spacing"></div>
          <p className="p center-align">You can find the answers here</p>
          <div className="md-spacing"></div>
          <div data-w-id="86838fee-0061-fc94-5972-fc4bd0179061" className="divider"></div>
          <div data-delay="300" data-w-id="1ff95106-2144-6fa8-c1c1-6168e75ab9a4" className="faq w-dropdown">
            <div className="faq-toggle w-dropdown-toggle">
              <div className="h5">What data sources can I connect to Nugit?</div>
              <div data-w-id="d8fd3e9e-5c16-0814-b299-f6d079c2d47e" className="arrow-down qa"></div>
            </div>
            <div data-w-id="0c376723-eda3-3aa2-65e6-86dbe365bf4e" className="faq-a-bg w-dropdown-list"><a href="#" className="faq-a w-dropdown-link">Nugit supports a total of 24 marketing and digital media platforms. You can also add data from other sources via CSV.</a></div>
          </div>
          <div className="divider"></div>
          <div data-delay="300" data-w-id="3acb866f-c0c7-1f7f-dd4d-29293c35894a" className="faq w-dropdown">
            <div className="faq-toggle w-dropdown-toggle">
              <div className="h5">Can I add other data from our own company to Nugit?</div>
              <div className="arrow-down qa"></div>
            </div>
            <div className="faq-a-bg w-dropdown-list"><a href="#" className="faq-a w-dropdown-link">Yes, you can do this by simply uploading your data as a CSV file.</a></div>
          </div>
          <div className="divider"></div>
          <div data-delay="300" data-w-id="af6391d5-cd51-d164-2015-04e9cffcf549" className="faq w-dropdown">
            <div className="faq-toggle w-dropdown-toggle">
              <div className="h5">Can I export my Data Stories from Nugit?</div>
              <div className="arrow-down qa"></div>
            </div>
            <div className="faq-a-bg w-dropdown-list"><a href="#" className="faq-a w-dropdown-link">Nugit Data Stories can be exported and shared in the following formats:<br/>Email | Microsoft PowerPoint | Live View Interactive Web Story | CSV download | API (for developers)</a></div>
          </div>
          <div className="divider"></div>
          <div data-delay="300" data-w-id="1828d1c0-d4eb-5592-4f4c-f69828d57760" className="faq w-dropdown">
            <div className="faq-toggle w-dropdown-toggle">
              <div className="h5">Is Nugit a dashboard?</div>
              <div className="arrow-down qa"></div>
            </div>
            <div className="faq-a-bg w-dropdown-list"><a href="#" className="faq-a w-dropdown-link">No, Nugit is a tool to automate Data Stories with business focused narratives illustrated through infographics, human language insights and observations. Our mission is to remove the burden that dashboards place on individuals and organisations.</a></div>
          </div>
          <div className="divider"></div>
          <div data-delay="300" data-w-id="d3527b7c-767d-0cb4-09a2-666dd97aaec8" className="faq w-dropdown">
            <div className="faq-toggle w-dropdown-toggle">
              <div className="h5">How does Nugit charge for its services?</div>
              <div className="arrow-down qa"></div>
            </div>
            <div className="faq-a-bg w-dropdown-list"><a href="#" className="faq-a w-dropdown-link">Nugit is a subscription based service for businesses of all sizes. Your monthly subscription is based on the types of data integrations you require. Submit a Request Demo form and we’ll run through our pricing with you based on your business’ specific requirements.</a></div>
          </div>
          <div className="divider"></div>
          <div data-delay="300" data-w-id="4907bcc4-6146-e676-2430-f1d31eb299f4" className="faq w-dropdown">
            <div className="faq-toggle w-dropdown-toggle">
              <div className="h5">What type of companies and teams can use Nugit’s Data Storytelling Platform?</div>
              <div className="arrow-down qa"></div>
            </div>
            <div className="faq-a-bg w-dropdown-list"><a href="#" className="faq-a w-dropdown-link">Any team from any industry can use Nugit. Our platform is best suited to:<br/>Enterprises | Publishers | Marketing Services, Consultancies &amp; Agencies | Startups</a></div>
          </div>
          <div className="divider"></div>
        </div>
      </section>
    </div>
  );
}

export default ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return(
    <ProductPageTemplate
      title={frontmatter.title}
      subtitle={frontmatter.subtitle}
      imageText={frontmatter.imageText}
      textImage={frontmatter.textImage}
      centeredContent={frontmatter.centeredContent}
      secondTextImage={frontmatter.secondTextImage}
      theming={frontmatter.theming}
      connectingData={frontmatter.connectingData}
    />
  )
}

export const productPageQuery = graphql`
  query Product($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        subtitle
        imageText{
          title
          subtitle
          image
        }
        textImage{
          title
          subtitle
          image
        }
        centeredContent{
          title
          subtitle
          image
        }
        secondTextImage{
          title
          subtitle
          image
        }
        theming{
          title
          subtitle
          image
        }
        connectingData{
          title
          subtitle
        }
      }
    }
  }
`;