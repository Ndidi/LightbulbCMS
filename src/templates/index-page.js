import React from "react";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter } = markdownRemark;
  return (
    <div>
      <header className="main-header">
      <div className="container">
        <div className="hero">{frontmatter.title}</div>
        <div className="sm-spacing _30"></div>
        <div>{frontmatter.subtitle}</div>
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
        <div className="video-home w-embed"><video src={frontmatter.video.source} poster={frontmatter.video.poster} loop autoPlay playsInline className="ignore-observer"></video></div>
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
        <div className="container grid">
          <div className="_2cols-box">
            <h2 className="h2">Customer Stories</h2>
            <div className="sm-spacing"></div>
            <p className="p">Sales and customer success teams use Nugit to improve the value they deliver to customers. Carefully crafted data presentations that previously took days, now takes just minutes and scales from one customer story to thousands.</p>
            <div className="sm-spacing"></div>
            <a href="customer-stories.html" className="link-text w-inline-block w-clearfix">
              <div className="learn-more">Learn More</div>
              <div className="arrow-right"></div>
            </a>
          </div>
          <div className="_2cols-box">
            <h2 className="h2">Marketing Stories</h2>
            <div className="sm-spacing"></div>
            <p className="p">Marketing and agency teams can move from dashboard overload to powerful, engaging and presentation ready stories across all of their activities, giving back ownership and control of outcomes.</p>
            <div className="sm-spacing"></div>
            <a href="marketing-stories.html" className="link-text w-inline-block w-clearfix">
              <div className="learn-more">Learn More</div>
              <div className="arrow-right"></div>
            </a>
          </div>
        </div>
        <div className="container center">
          <div className="hg-spacing"></div>
          <div className="md-spacing"></div>
          <h2 className="h2">{frontmatter.centeredText.heading}</h2>
          <div className="sm-spacing"></div>
          <p className="p center-align">{frontmatter.centeredText.body}</p>
          <div className="sm-spacing"></div>
          <a href="product.html" className="link-text center-align w-inline-block w-clearfix">
            <div className="learn-more">Learn More</div>
            <div className="arrow-right"></div>
          </a>
          <div className="lg-spacing"></div>
        </div>
      </main>
    </div>
  );
}
      
export const pageQuery = graphql`
  query Index($path: String!) {
    markdownRemark(frontmatter: {path: {eq: $path } }) {
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
        }
      }
    }
`;