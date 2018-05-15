import React from "react";

export const MarketingStoriesPageTemplate = ({

}) => {
  return(
    <div></div>
  )
}

export default ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return(
    <MarketingStoriesPageTemplate
      
    />
  )
}

export const MarketingStoriesQuery = graphql`
  query MarketingStories($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
}
`;