import React, { Component } from 'react';
import './App.css';
import GamesRow from './GamesRow';
import $ from 'jquery'

class Games extends Component{
  constructor(props){
    super(props);
    this.state = {
        rows: []
    }
    

    this.performSearch("Grand")
  }

  performSearch(searchTerm){
    const urlString = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-30"
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log("Fetched data successfully")
        let result = searchResults.results
        var gameRows = []

        result.forEach((game) => {
          game.poster_src = game.background_image
          // console.log(game.poster_path)
          const gameRow = <GamesRow key = {game.id} game = {game} platforms={game.platforms}/>
          gameRows.push(gameRow)
          console.log(gameRows)
          
        })

        this.setState({rows: gameRows})
      },
      error: (xhr, status, err) => {
        console.error("Faild to fetch data")
      }
    })
  }

//   searchChangeHandler(event){
//     console.log(event.target.value)
//     const boundObject = this
//     const searchTerm = event.target.value
//     boundObject.performSearch(searchTerm)
//   }

  render(){
    return(
      <div class = "container mt-5">
        {/* <table className = "titleBar">
          <tbody>
          </tbody>
        </table> */}


        <div class = "row cardBody py-5 mt-5">
        {this.state.rows}
        </div>
      </div>
    )
  }
}

export default Games;
