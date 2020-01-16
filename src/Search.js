import React, { Component } from 'react';
import './App.css';
import GamesRow from './GamesRow';
import $ from 'jquery'

class Search extends Component{
    constructor(props){
        super(props);
        this.state = {
            performSearch : ""
        }
        
    
        // this.performSearch("")
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
                 <div class ="container mt-5">
                      <div class = "row cardBody py-5 mt-5">
            {this.state.rows}
                       </div>
                  </div>
          </div>
        )
      }
}

export default Search;
