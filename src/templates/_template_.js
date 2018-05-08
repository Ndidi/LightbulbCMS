import React from "react";

export const TemplatePageTemplate = ({
  title
}) => {
  return(
    <div></div>
  )
}

export default ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return(
    <TemplatePageTemplate
      title={frontmatter.title}
    />
  )
}

export const productPageQuery = graphql`
  query TemplateTemplate($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`;