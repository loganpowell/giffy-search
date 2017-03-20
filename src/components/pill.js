import React from 'react'

const Pill = ({ term, handleClick, removeTerm }) => {
  return(
    <button className="btn btn-outline-info" >
      <div onClick={() => handleClick(term)}>
        {term}
      </div>
      <div onClick={() => removeTerm(term)}>x</div>
    </button>
  )
}

export default Pill
