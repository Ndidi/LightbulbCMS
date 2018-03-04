import React from 'react'

const FeatureBoxes = ({ features }) => (
  <div className="container grid">
    {features.map(item => (
      <div key={item.image} className="_3cols-box">
        <div className="illustration integrate"></div>
        <div className="sm-spacing"></div>
        <h4 className="h4">{item.text}</h4>
        <div className="sm-spacing"></div>
        <p className="p">{item.description}</p>
    </div>
    ))}
  </div>
)

export default FeatureBoxes
         