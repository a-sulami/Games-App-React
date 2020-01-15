import React from 'react'
import $ from 'jquery';
import Game from './Game';

class GamesRow extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
      rows: {},
      //noOfClicks: 0
      //gameInfo: []//differ
    }
  }
  
    viewgame(){
      
      //noOfClicks +=1;
      //if(noOfClicks % 2 == 0){
        const gameUrl = "https://api.rawg.io/api/games/" + this.props.game.id
        $.ajax({
          url: gameUrl,
          success: (infoResult) => {
              console.log("Fetched data successfully")
              let result = infoResult
              console.log(infoResult)
              // const infoRow = <Game key = {result.id} platforms={result.platforms} rating={result.rating}/>
              //<Game key = {this.state.rows.id} released = {this.state.rows.released} top = {this.state.rows.toprating} name = {this.state.rows.name} platforms={this.state.rows.platforms} rating={this.state.rows.rating}/>

              // gameInfo.push(infoRow)
              // console.log(gameInfo)
              this.setState(
                {
                  rows: infoResult
                })
          },
            error: (xhr, status, err) => {
              console.error("Faild to fetch data")
            }
        })
      //}
    }
  //  $(document).ready(function(){
  //   $(".view").click(function(){
  //     $(".game_table").toggle();
  //   });
  // });

  render(){
   console.log(this.state.rows)
      return (
      <table key={this.props.game.id}>
      <tbody>
        <tr>
          <td>
            <img alt= "poster" width="185" src={this.props.game.poster_src}/>
          </td>
          <td>
            <h3>{this.props.game.name}</h3>
            <p>Release Date: {this.props.game.released}</p>           
            <p>Rating: {this.props.game.rating} / {this.props.game.rating_top}</p>
              {/* <ul>{this.check()}</ul> */}

            <button class='view' onClick = {this.viewgame.bind(this)} >More Info</button>
              <div> 
              <Game key = {this.state.rows.id} platforms = {this.state.rows.platforms} ratings = {this.state.rows.ratings} suggestions={this.state.rows.suggestions_count} released = {this.state.rows.released} top = {this.state.rows.toprating} name = {this.state.rows.name} platforms={this.state.rows.platforms} rating={this.state.rows.rating}/>
              </div>
          </td>
        </tr> 
      </tbody>
    </table>
      )
  }
}
export default GamesRow;