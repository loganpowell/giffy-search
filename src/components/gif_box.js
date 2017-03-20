import React, { Component } from 'react'

class GifBox extends Component {
  constructor(props){
    super(props)
    this.state = {
      imgUrl: this.props.gif.images.downsized_still.url,
    }
  }
  toggleImg() {
    if (this.state.imgUrl === this.props.gif.images.downsized_still.url) {
      this.setState({ imgUrl: this.props.gif.images.downsized_medium.url })
    } else {
      this.setState({ imgUrl: this.props.gif.images.downsized_still.url })
    }
  }
  render() {
    return (
      <div className="card" onClick={() => this.toggleImg()}>
        <img className="card-img-top img-fluid" src={this.state.imgUrl} />
        <div className="card-block">
          <h4 className="card-text">
            {this.props.gif.slug}
          </h4>
        </div>
      </div>
    )
  }
}

export default GifBox
