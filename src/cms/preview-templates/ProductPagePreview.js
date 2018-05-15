import React from 'react'
import { ProductPageTemplate } from '../../templates/product-page'

const ProductPagePreview = ({entry}) => {

  return(
    <ProductPageTemplate
      title={entry.getIn(['data', 'title'])}
      subtitle={entry.getIn(['data', 'subtitle'])}
      imageText={{
        title: entry.getIn(['data', 'imageText', 'title']),
        subtitle: entry.getIn(['data', 'imageText', 'subtitle']),
        image: entry.getIn(['data', 'imageText', 'image']),
      }}
      textImage={{
        title: entry.getIn(['data', 'textImage', 'title']),
        subtitle: entry.getIn(['data', 'textImage', 'subtitle']),
        image: entry.getIn(['data', 'textImage', 'image']),
      }}
      centeredContent={{
        title: entry.getIn(['data', 'centeredContent', 'title']),
        subtitle: entry.getIn(['data', 'centeredContent', 'subtitle']),
        image: entry.getIn(['data', 'centeredContent', 'image']),
      }}
      secondTextImage={{
        title: entry.getIn(['data', 'secondTextImage', 'title']),
        subtitle: entry.getIn(['data', 'secondTextImage', 'subtitle']),
        image: entry.getIn(['data', 'secondTextImage', 'image']),
      }}
      theming={{
        title: entry.getIn(['data', 'theming', 'title']),
        subtitle: entry.getIn(['data', 'theming', 'subtitle']),
        image: entry.getIn(['data', 'theming', 'image']),
      }}
      connectingData={{
        title: entry.getIn(['data', 'connectingData', 'title']),
        subtitle: entry.getIn(['data', 'connectingData', 'subtitle']),
      }}
    />
  )
}

export default ProductPagePreview