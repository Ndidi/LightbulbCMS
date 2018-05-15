import React from 'react'
import { ProductPageTemplate } from '../../templates/product-page'

const ProductPagePreview = ({entry}) => {

  return(
    <ProductPageTemplate
      title={entry.getIn(['data', 'title'])}
      subtitle={entry.getIn(['data', 'subtitle'])}
    />
  )
}

export default ProductPagePreview