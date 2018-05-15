import React from "react";

export const CustomerStoriesPageTemplate = ({

}) => {
  return(
    <div></div>
  )
}

export default ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return(
    <CustomerStoriesPageTemplate
      
    />
  )
}

export const CustomerStoriesQuery = graphql`
  query CustomerStories($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
}
`;