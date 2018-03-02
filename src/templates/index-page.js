import React from "react";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter } = markdownRemark;
  return (
    <div></div>
  );
}
      
export const pageQuery = graphql`
  query Index($path: String!) {
    markdownRemark(frontmatter: {path: {eq: $path } }) {
      html
      frontmatter {
        title
        templateKey
        subtitle
        video
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