import React, { Component } from 'react';
import './App.css';
import MovieRow from './MovieRow.js';
import Header from './Header.js';
import $ from 'jquery';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {}
  const randomSearch = this.getRandomSearch()
  this.performSearch(randomSearch)
}
  getRandomSearch(){
    const value = Math.floor(Math.random() * (26 - 0)) + 0;
    const alphabet = ("abcdefghijklmnopqrstuvwxyz").split("");
    console.log(alphabet[value])
    return alphabet[value]
  }
  performSearch(searchTerm){
    console.log("Perform search using moviedb")
    const urlString = "https://api.themoviedb.org/3/search/movie?api_key=28f680a23924a612dbd65ae7eb0c46a9&query="+searchTerm
    $.ajax({
      url : urlString,
      success : (searchResults) => {
        console.log("Fetched data successfully")
        //console.log(searchResults)
        const results = searchResults.results
        //console.log(results[0])

        var movieRows = []

        results.forEach((movie) => {
          movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path 
          const movieRow = <MovieRow key={movie.id} movie = {movie}/>
          movieRows.push(movieRow)
        })
        this.setState({rows: movieRows})
      },
      error :  (xhr, status, err) => {
        console.error("Failed to fetch data")
      }
    })
  }
  searchChangeHandler(event){
    console.log(event.target.value)
    const boundObject = this
    const searchTree = event.target.value
    boundObject.performSearch(searchTree)
  }
  render() {
    return (
      <div className="App">
      <table className="titleBar">
        <tbody>
          <tr> 
            <td>
            <Header/> 
            </td>
            <td width = "50%"/>
            <td>
            <input style ={
          {
            fontSize:12, 
            display:'block', 
            width:"20%",
            paddingTop:8, 
            paddingBottom:8, 
            paddingLeft:16,
            
          }
          }class="search" onChange={this.searchChangeHandler.bind(this)} placeholder="Enter Search"/>
            </td>
          </tr>
        </tbody>
      </table>
        <br/><br/><br/><br/><br/>
       
        
         
          {this.state.rows}
        
      </div>
    );
  }
}

export default App;
