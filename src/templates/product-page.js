import React from "react";

export const ProductPageTemplate = ({
  title,
}) => {
  return (
    <div>
      
    </div>
  );
}

export default ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return(
    <ProductPageTemplate
      title={frontmatter.title}
    />
  )
}

export const productPageQuery = graphql`
  query Product($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`;