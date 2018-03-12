import React from "react";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  
  const goBack = () => {
    console.log(history)
    history.back(-2)
  }

  return (
    <div className="white-section centered full-demo">
      <h2 className="h2">Thanks for reaching out to us!</h2>
      <div className="sm-spacing"></div>
      <p className="p center-align">One of our friendly Account Executives will be in touch with you shortly.</p>
      <div className="sm-spacing"></div>
      <div className="w-embed">
        <div className="btn pointer-cursor" onClick={goBack}>Go Back</div>
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query ThankYou($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
      }
    }
  }
`;