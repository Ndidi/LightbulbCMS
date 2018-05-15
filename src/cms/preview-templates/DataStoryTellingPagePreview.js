import React from 'react'
import { DataStoryTellingPageTemplate } from '../../templates/data-storytelling-page'

const DataStoryTellingPagePreview = ({entry}) => {

  return(
    <DataStoryTellingPageTemplate
      title={entry.getIn(['data', 'title'])}
      subtitle={entry.getIn(['data', 'subtitle'])}
    />
  )
}

export default DataStoryTellingPagePreview