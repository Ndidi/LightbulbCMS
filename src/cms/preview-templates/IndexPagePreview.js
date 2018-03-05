import React from 'react'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({entry}) => {
  const entryStories = entry.getIn(['data', 'stories'])
  const stories = entryStories ? entryStories.toJS() : []
  
  const entryFeatures = entry.getIn(['data', 'features'])
  const features = entryStories ? entryStories.toJS() : []

  return(
    <IndexPageTemplate
      title={entry.getIn(['data', 'title'])}
      subtitle={entry.getIn(['data', 'subtitle'])}
      video={{
        source: entry.getIn(['data', 'video', 'source']),
        poster: entry.getIn(['data', 'video', 'poster'])
      }}
      stories={stories}
      centeredText={{
        heading: entry.getIn(['data', 'centeredText', 'heading']),
        body: entry.getIn(['data', 'centeredText', 'body'])
      }}
      clientLogos={{
        image: entry.getIn(['data', 'clientLogos', 'image'])
      }}
      features={features}
      tabbedTopFeatures = {{
        image1: entry.getIn(['data', 'tabbedTopFeatures', 'image1']),
        image2: entry.getIn(['data', 'tabbedTopFeatures', 'image2']),
        image3: entry.getIn(['data', 'tabbedTopFeatures', 'image3']),
        tab1: entry.getIn(['data', 'tabbedTopFeatures', 'tab1']),
        tab2: entry.getIn(['data', 'tabbedTopFeatures', 'tab2']),
        tab3: entry.getIn(['data', 'tabbedTopFeatures', 'tab3'])
      }}
      testimonial={{
        quote: entry.getIn(['data', 'testimonial', 'quote']),
        author: entry.getIn(['data', 'testimonial', 'author']),
        role: entry.getIn(['data', 'testimonial', 'role'])
      }}
      fullPageMessage={entry.getIn(['data', 'fullPageMessage'])}
    />
  )
}

export default IndexPagePreview