import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'
import GifSpread from './components/gif_spread'
import PillBox from './components/pill_box'
import _ from 'lodash'
import axios from 'axios'

const API_KEY = 'dc6zaTOxFJmzC'
const ROOT_URL = `http://api.giphy.com/v1/gifs/search?q=`

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gifs: [],
      searchedTerms: [],
      currentTerm: null
    }
  }

  gifSearch(term) {
    // console.log(this.state.currentTerm)
    this.setState({ currentTerm: term })
    const url = `${ROOT_URL}${this.state.currentTerm}&api_key=${API_KEY}`
    axios.get(url).then( results => {
      const gifs = results.data.data
      this.setState({ gifs })
    })
    console.log(this.state.currentTerm)
  }

  addTerm(term) {
    console.log(this.state.currentTerm + " top addTerm")
    this.setState({ currentTerm: term })
    if (this.state.searchedTerms.indexOf(term) === -1) {
      const updaTerms = this.state.searchedTerms
      updaTerms.push(term)
      this.setState({ searchedTerms: updaTerms })
    } else {
      return
    }
    console.log(this.state.searchedTerms + " bottom addTerm")
    console.log(this.state.currentTerm + " bottom addTerm")
  }

  removeTerm(term) {
    const updaTerms = this.state.searchedTerms
    let index = updaTerms.indexOf(term)
    if (index > -1) {
      updaTerms.splice(index, 1)
      this.setState({
        searchedTerms: updaTerms,
      })
    }
  }

  render() {
    //slow down search
    // const gifSearch = _.debounce((term) => { this.gifSearch(term) }, 2000)
    return(
      <div>
        <SearchBar onSearch={(term) => this.gifSearch(term)}
          searches={(term) => this.addTerm(term)} />
        <PillBox terms={this.state.searchedTerms}
          handleClick={(term) => this.gifSearch(term)}
          removeTerm={(term) => this.removeTerm(term)}/>
        <GifSpread gifs={this.state.gifs} />
      </div>
    )
  }
}


ReactDOM.render(<App />, document.querySelector('.container'));
