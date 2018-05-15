import React from 'react'
import { ThankYouPageTemplate } from '../../templates/thank-you-page'

const ThankYouPagePreview = ({entry}) => {

  return(
    <ThankYouPageTemplate
      title={entry.getIn(['data', 'title'])}
      subtitle={entry.getIn(['data', 'subtitle'])}
    />
  )
}

export default ThankYouPagePreview