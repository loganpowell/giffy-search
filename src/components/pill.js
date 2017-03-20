import React from 'react'

const Pill = ({ term, handleClick, removeTerm }) => {
  // had a huge problem trying to treat the onClick listners here as dealing with
  // event.target-style events, when - IN FACT - they need to refer
  // not to their children, but - RATHER - to their parents
  return(
    <button className="pill btn btn-secondary" >
      <span className="term" onClick={() => handleClick(term)}>
        {term}
      </span>
      <span className="close" onClick={() => removeTerm(term)}>x</span>
    </button>
  )
}

export default Pill
