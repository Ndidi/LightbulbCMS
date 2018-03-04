import React from "react";
import Stories from "../components/Stories";
import FeatureBoxes from "../components/FeatureBoxes";
import Img from "gatsby-image";

export const IndexPageTemplate = ({
  title,
  subtitle,
  video,
  stories,
  centeredText,
  clientLogos,
  features,
  tabbedTopFeatures,
  testimonial,
  fullPageMessage
}) => (
  <div>
    <header className="main-header">
    <div className="container">
      <div className="hero">{title}</div>
      <div className="sm-spacing _30"></div>
      <div>{subtitle}</div>
      <div className="sm-spacing _30"></div><a href="request-demo.html" className="btn w-button">Request Demo</a>
      <a href="#" className="btn outline icon w-inline-block w-lightbox">
        <div>What Is Nugit</div>
        <script type="application/json" className="w-json"
          dangerouslySetInnerHTML={{__html:`
            {"items": [
              {
                "type": "video",
                "originalUrl": "https://vimeo.com/246063299",
                "url": "https://vimeo.com/246063299",
                "html": "<iframe class=\'embedly-embed\' src=\'//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fplayer.vimeo.com%2Fvideo%2F246063299&dntp=1&url=https%3A%2F%2Fvimeo.com%2F246063299&image=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F670921878_1280.jpg&key=96f1f04c5f4143bcb0f2e68c87d65feb&type=text%2Fhtml&schema=vimeo\' width=\'940\' height=\'529\' scrolling=\'no\' frameborder=\'0\' allowfullscreen></iframe>",
                "thumbnailUrl": "https://i.vimeocdn.com/video/670921878_1280.jpg",
                "width": 940,
                "height": 529
              }
            ]}
          `
        }}/>
      </a>
      <div className="video-home w-embed"><video src={video.source} poster={video.poster} loop autoPlay playsInline className="ignore-observer"></video></div>
    </div>
    </header>
    <section className="client-logo">
      <div className="container client">
        <div className="fb-logo"></div>
        <div className="ibm-logo"></div>
        <div className="samsung-logo"></div>
        <div className="audi-logo"></div>
        <div className="newscorp-logo"></div>
        <div className="sanofi-logo"></div>
      </div>
    </section>
    <main className="white-section">
      <Stories stories={stories}/>
      <div className="container center">
        <div className="hg-spacing"></div>
        <div className="md-spacing"></div>
        <h2 className="h2">{centeredText.heading}</h2>
        <div className="sm-spacing"></div>
        <p className="p center-align">{centeredText.body}</p>
        <div className="sm-spacing"></div>
        <a href="product.html" className="link-text center-align w-inline-block w-clearfix">
          <div className="learn-more">Learn More</div>
          <div className="arrow-right"></div>
        </a>
        <div className="lg-spacing"></div>
      </div>
      <FeatureBoxes features={features} />
      <div className="container">
        <div className="hg-spacing"></div>
        <h2 className="h2 fixedwidth">{title}</h2>
        <div className="sm-spacing"></div>
        <p className="p fixedwidth">{subtitle}</p>
        <div className="md-spacing"></div>
        <div data-easing="linear" data-duration-in="300" data-duration-out="100" className="w-tabs">
          <div className="tabs-menu w-tab-menu">
            <a data-w-tab="Tab 1" className="tabs-link intergrate-icon w-inline-block w-tab-link w--current">
              <div>{tabbedTopFeatures.tab1}</div>
            </a>
            <a data-w-tab="Tab 2" className="tabs-link nlg-icon w-inline-block w-tab-link">
              <div>{tabbedTopFeatures.tab2}</div>
            </a>
            <a data-w-tab="Tab 3" className="tabs-link instant-icon w-inline-block w-tab-link">
              <div>{tabbedTopFeatures.tab3}</div>
            </a>
          </div>
          <div className="tabs-content w-tab-content">
            <div data-w-tab="Tab 1" className="tabs-pane w-tab-pane w--tab-active">
              {(tabbedTopFeatures.image1AbsolutePath && tabbedTopFeatures.image1AbsolutePath.childImageSharp) ? <Img sizes={tabbedTopFeatures.image1AbsolutePath.childImageSharp.sizes} className="combine-data"/> : <img src={tabbedTopFeatures.image1} className="combine-data"/>}
            </div>
            <div data-w-tab="Tab 2" className="tabs-pane w-tab-pane w--tab-active">
              {(tabbedTopFeatures.image2AbsolutePath && tabbedTopFeatures.image2AbsolutePath.childImageSharp) ? <Img sizes={tabbedTopFeatures.image2AbsolutePath.childImageSharp.sizes} className="combine-data"/> : <img src={tabbedTopFeatures.image2} className="combine-data"/>}
            </div>
            <div data-w-tab="Tab 3" className="tabs-pane w-tab-pane w--tab-active">
              {(tabbedTopFeatures.image3AbsolutePath && tabbedTopFeatures.image3AbsolutePath.childImageSharp) ? <Img sizes={tabbedTopFeatures.image3AbsolutePath.childImageSharp.sizes} className="combine-data"/> : <img src={tabbedTopFeatures.image3} className="combine-data"/>}
            </div>
          </div>
        </div>
        <div className="sm-spacing _30"></div>
        <a href="product.html" className="link-text w-inline-block w-clearfix">
          <div className="learn-more">Learn More</div>
          <div className="arrow-right"></div>
        </a>
      </div>
    </main>
    <section className="white-section gray">
      <div className="container">
        <p className="testimonial">{testimonial.quote}</p>
        <div className="sm-spacing"></div>
        <div className="flex-container center">
          <div className="customer-avatar mahima"></div>
          <div className="name-customer">{testimonial.author}</div>
          <p className="small-copy">{testimonial.role}</p>
        </div>
      </div>
    </section>
    <section id="demo" className="white-section centered full-demo">
      <div className="container demo">
        <h2 className="h2">{fullPageMessage}</h2>
        <div className="sm-spacing _30"></div>
        <a href="request-demo.html" className="btn w-button">Request Demo</a>
      </div>
    </section>
  </div>
)

export default ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <IndexPageTemplate
      title={frontmatter.title}
      subtitle={frontmatter.subtitle}
      video={frontmatter.video}
      stories={frontmatter.stories}
      centeredText={frontmatter.centeredText}
      clientLogos={frontmatter.clientLogos}
      features={frontmatter.features}
      tabbedTopFeatures ={frontmatter.tabbedTopFeatures }
      testimonial={frontmatter.testimonial}
      fullPageMessage={frontmatter.fullPageMessage}
    />
  )
}

export const indexPageQuery = graphql`
  query IndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        subtitle
        video{
          source
          poster
        }
        stories {
          storyBody
          storyHeading
        }
        centeredText {
          body
          heading
        }
        clientLogos {
          image
        }
        features {
          description
          image
          text
        }
        tabbedTopFeatures {
          image1
          image1AbsolutePath{
            childImageSharp {
              sizes(maxWidth: 1000){
                ...GatsbyImageSharpSizes_withWebp
              }
            }
          }
          image2
          image2AbsolutePath{
            childImageSharp {
              sizes(maxWidth: 1000){
                ...GatsbyImageSharpSizes_withWebp
              }
            }
          }
          image3
          image3AbsolutePath{
            childImageSharp {
              sizes(maxWidth: 1000){
                ...GatsbyImageSharpSizes_withWebp
              }
            }
          }
          tab1
          tab2
          tab3
        }
        testimonial{
          quote
          author
          role
        }
        fullPageMessage
      }
    }
  }
`;