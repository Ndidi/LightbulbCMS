import React from 'react'
import { CustomerStoriesPageTemplate } from '../../templates/customer-stories-page'

const CustomerStoriesPagePreview = ({entry}) => {

  return(
    <CustomerStoriesPageTemplate
      title={entry.getIn(['data', 'title'])}
      subtitle={entry.getIn(['data', 'subtitle'])}
    />
  )
}

export default CustomerStoriesPagePreview