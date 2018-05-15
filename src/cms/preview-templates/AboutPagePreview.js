import React from 'react'
import { AboutPageTemplate } from '../../templates/about-page'

const AboutPagePreview = ({entry}) => {

  return(
    <AboutPageTemplate
      title={entry.getIn(['data', 'title'])}
      subtitle={entry.getIn(['data', 'subtitle'])}
    />
  )
}

export default AboutPagePreview