import React, { Component } from 'react'

export default class SearchBar extends Component {
  constructor(props){
    super(props)
    this.state = { term: '' }
  }

  onInputChange(event) {
    this.setState({ term: event.target.value })
    this.props.onSearch(this.state.term)
    console.log('onInputChange ' + this.state.term)
  }
  onFormSubmit(event){
    event.preventDefault()
    this.props.searches(this.state.term)
    this.setState({ term: ''})
  }

  render() {
    return(
      <form onSubmit={(e) => this.onFormSubmit(e)} className="input-group">
        <input placeholder="get your gif on"
          className="form-control"
          value={this.state.term}
          onChange={(e) => this.onInputChange(e)} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    )
  }
}
