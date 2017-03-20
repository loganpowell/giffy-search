import React, { Component } from 'react'

export default class SearchBar extends Component {
  constructor(props){
    super(props)
    this.state = { term: '' }
    // unnessesary due to binding with fat arrows in the instatiation/render()
    // this.onInputChange = this.onInputChange.bind(this)
    // this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onInputChange(event) {
    let term = event.target.value
    // fixing the wtf a step behind problem by plumbing callback AFTER setState
    this.setState({ term }, () => this.props.onSearch(term))
    console.log('onInputChange ' + this.state.term)
  }
  onFormSubmit(event){
    event.preventDefault()
    let term = event.target.value
    this.props.searches(this.state.term)
    this.setState({ term: ''})
  }

  render() {
    return(
      <div className="search-area">
        <form onSubmit={(e) => this.onFormSubmit(e)} className="input-group">
          <input placeholder="get your gif on"
            className="form-control"
            value={this.state.term}
            onChange={(e) => this.onInputChange(e)} />
            <span className="input-group-btn">
              <button type="submit" className="btn btn-secondary">Submit</button>
            </span>
          </form>
      </div>
    )
  }
}
