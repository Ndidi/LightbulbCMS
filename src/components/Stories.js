import React from 'react'

const Stories = ({ stories }) => (
  <div className="container grid">
    {stories.map(item => (
      <div key={item.storyHeading} className="_2cols-box">
        <h2 className="h2">{item.storyHeading}</h2>
        <div className="sm-spacing"></div>
        <p className="p">{item.storyBody}</p>
        <div className="sm-spacing"></div>
        <a href="customer-stories.html" className="link-text w-inline-block w-clearfix">
          <div className="learn-more">Learn More</div>
          <div className="arrow-right"></div>
        </a>
    </div>
    ))}
  </div>
)

export default Stories
