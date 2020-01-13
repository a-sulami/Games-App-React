import React, { Component } from 'react';
import './App.css';
import GamesRow from './GamesRow';
import $ from 'jquery'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {}
    

    this.performSearch("")
  }

  performSearch(searchTerm){
    const urlString = "https://api.rawg.io/api/games?page_size=11&search=" + searchTerm
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
          
        })

        this.setState({rows: gameRows})
      },
      error: (xhr, status, err) => {
        console.error("Faild to fetch data")
      }
    })
  }

  searchChangeHandler(event){
    console.log(event.target.value)
    const boundObject = this
    const searchTerm = event.target.value
    boundObject.performSearch(searchTerm)
  }

  render(){
    return(
      <div>
        <table className = "titleBar">
          <tbody>
            <tr>
              <td>
                <img alt="app icon" width="50" src="green_app_icon.svg"/>
              </td>
              <td width = "10"/>
              <td>
                <h1>gameDB Search</h1>
              </td>
            </tr>
          </tbody>
        </table>

        <input style={{
          fontSize: 24,
          display: 'block',
          width: "99%",
          paddingTop: 8,
          paddingBottom: 8,
          paddingLeft: 16
        }} onChange={this.searchChangeHandler.bind(this)} placeholder="Enter Search term"/>

        {this.state.rows}

      </div>
    )
  }
}

export default App;
