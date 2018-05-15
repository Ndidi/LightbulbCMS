import React from 'react'
import { MarketingStoriesPageTemplate } from '../../templates/marketing-stories-page'

const MarketingStoriesPagePreview = ({entry}) => {

  return(
    <MarketingStoriesPageTemplate
      title={entry.getIn(['data', 'title'])}
      subtitle={entry.getIn(['data', 'subtitle'])}
    />
  )
}

export default MarketingStoriesPagePreview