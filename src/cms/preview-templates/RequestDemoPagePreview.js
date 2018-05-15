import React from 'react'
import { RequestDemoPageTemplate } from '../../templates/request-demo-page'

const RequestDemoPagePreview = ({entry}) => {

  return(
    <RequestDemoPageTemplate
      title={entry.getIn(['data', 'title'])}
      subtitle={entry.getIn(['data', 'subtitle'])}
    />
  )
}

export default RequestDemoPagePreview