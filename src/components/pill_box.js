import React, { Component } from 'react'
import Pill from './pill'

const PillBox = (props) => {
  const pills = props.terms.map((term) => {
    return <Pill key={term}
      term={term}
      handleClick={props.handleClick}
      removeTerm={props.removeTerm}
    />
  })
  return(
    <ul className="nav nav-pills">
      {pills}
    </ul>
  )
}


export default PillBox
