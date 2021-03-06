const path = require("path");

exports.createLayouts = ({ boundActionCreators, graphql }) => {
  const { createLayout } = boundActionCreators;
  return graphql(`
    {
      allMarkdownRemark(
        filter: {id: {regex: "/src\/layouts/"}}
      ) {
        edges {
          node {
            id
            fileAbsolutePath
            frontmatter {
              templateKey
            }
          }
        }
      }
    }
  `)
  .then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allMarkdownRemark.edges.forEach(edge => {
      const id = edge.node.id
      createLayout({
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        context: {
          id
        }
      })
    })
  })
}

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  return graphql(`
    {
      allMarkdownRemark(
        limit: 1000
        filter: {id: {regex: "/src\/pages/"}}
      ) {
        edges {
          node {
            id
            frontmatter {
              path
              templateKey
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allMarkdownRemark.edges.forEach(edge => {
      const id = edge.node.id
      createPage({
        path: edge.node.frontmatter.path,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        layout: edge.node.frontmatter.path.match(/^\/request-demo|thank-you/) ? 'noNav' : 'standard-layout',
        // additional data can be passed via context
        context: {
          id
        }, 
      });
    });
  });
};

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
 
  if (node.internal.type === `MarkdownRemark` && node.id.includes("index.md")){
    addPathForImage(node, node.frontmatter.tabbedTopFeatures, "image1")
    addPathForImage(node, node.frontmatter.tabbedTopFeatures, "image2")
    addPathForImage(node, node.frontmatter.tabbedTopFeatures, "image3")
  }
}

addPathForImage = (node, theParent, theChild) =>{
  theParent[theChild+"AbsolutePath"] = path.relative(
    path.dirname(node.fileAbsolutePath),
    path.join(__dirname, '/static/', theParent[theChild])
  )
}