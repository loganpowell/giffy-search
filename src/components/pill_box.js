import React, { Component } from 'react'
import Pill from './pill'

const PillBox = (props) => {
  const pills = props.terms.map((term) => {
    return (
      <Pill
        key={term}
        term={term}
        handleClick={props.handleClick}
        removeTerm={props.removeTerm} />
    )
  })

  return(
    <div className="pills-area row">
      <div className="col-12">
        {pills}
      </div>
    </div>
  )
}


export default PillBox
