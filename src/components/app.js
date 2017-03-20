import React, { Component } from 'react';
import SearchBar from './search_bar'
import axios from 'axios'
// in redux, this goes into an 'actions' folder:
const API_KEY = 'dc6zaTOxFJmzC'
const ROOT_URL = `http://api.giphy.com/v1/gifs/search?q=`
function fetchGifs(searchTerm) {
  const url = `${ROOT_URL}${searchTerm}&api_key=${API_KEY}`
  const request = axios.get(url)
  return {
    type: 'FETCH_GIFS',
    payload: request
  }
}

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}
