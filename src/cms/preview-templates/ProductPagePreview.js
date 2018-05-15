import React from 'react'
import { ProductPageTemplate } from '../../templates/product-page'

const ProductPagePreview = ({entry}) => {

  return(
    <ProductPageTemplate
      title={entry.getIn(['data', 'title'])}
      subtitle={entry.getIn(['data', 'subtitle'])}
      imageText={entry.getIn(['data', 'imageText'])}
      textImage={entry.getIn(['data', 'textImage'])}
      centeredContent={entry.getIn(['data', 'centeredContent'])}
      secondTextImage={entry.getIn(['data', 'secondTextImage'])}
      theming={entry.getIn(['data', 'theming'])}
      connectingData={entry.getIn(['data', 'connectingData'])}
    />
  )
}

export default ProductPagePreview