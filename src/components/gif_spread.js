import React, { Component } from 'react'
import GifBox from './gif_box'

const GifSpread = (props) => {
  const gifTs = props.gifs.map((gif) => {
    return <GifBox key={gif.id} gif={gif} />
  })

  return (
    <div className="cards-area">
      <div className="card-columns">
        {gifTs}
      </div>
    </div>
  )
}

export default GifSpread
