import React from 'react'
import $ from 'jquery';
import Game from './Game';

class GamesRow extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      rows: {}
      //gameInfo: []//differ
    }
  }
    viewgame(){
        const gameUrl = "https://api.rawg.io/api/games/" + this.props.game.id
        $.ajax({
          url: gameUrl,
          success: (infoResult) => {
              console.log("Fetched data successfully")
              let result = infoResult
              // var gameInfo = []
              // result.poster_src = result.background_image
              console.log(infoResult)
              // console.log(result.poster_path)
              // const infoRow = <Game key = {result.id} platforms={result.platforms} rating={result.rating}/>
              //<Game key = {this.state.rows.id} released = {this.state.rows.released} top = {this.state.rows.toprating} name = {this.state.rows.name} platforms={this.state.rows.platforms} rating={this.state.rows.rating}/>

              // gameInfo.push(infoRow)
              // console.log(gameInfo)
              this.setState(
                {
                  rows: infoResult
                })
                // return(
                //   <Game key = {this.state.rows.id} released = {this.state.rows.released} top = {this.state.rows.toprating} name = {this.state.rows.name} platforms={this.state.rows.platforms} rating={this.state.rows.rating}/>

                // )
          },
            error: (xhr, status, err) => {
              console.error("Faild to fetch data")
            }
      })
    }
    
  render(){
   console.log(this.state.rows)
      return (

        
          <div className='card' key={this.props.game.id}>
            <img className='img22' alt= "poster" src={this.props.game.poster_src}/>
            <h1 className='gamehead' onClick={this.viewgame.bind(this)}>{this.props.game.name}</h1>
            <p><b>Release Date:</b> {this.props.game.released}</p>
            <p><b>Rating:</b> {this.props.game.rating} / {this.props.game.rating_top}</p>
            <button onClick = {this.viewgame.bind(this)} >Game Info</button>
            <Game key = {this.state.rows.id} platforms = {this.state.rows.platforms} ratings = {this.state.rows.ratings} suggestions={this.state.rows.suggestions_count} released = {this.state.rows.released} top = {this.state.rows.toprating} name = {this.state.rows.name} platforms={this.state.rows.platforms} rating={this.state.rows.rating}/>
            </div>
        


      // <table key={this.props.game.id}>
      // <tbody>
      //   <tr>
      //     <td>
      //       <img alt= "poster" width="185" src={this.props.game.poster_src}/>
      //     </td>
      //     <td>
      //       <h3>{this.props.game.name}</h3>
      //       <p>Release Date: {this.props.game.released}</p>           
      //       <p>Rating: {this.props.game.rating} / {this.props.game.rating_top}</p>
      //         <ul>{this.check()}</ul>

            // <button onClick = {this.viewgame.bind(this)} >View</button>
            //   <div> 
            //   <Game key = {this.state.rows.id} released = {this.state.rows.released} top = {this.state.rows.toprating} name = {this.state.rows.name} platforms={this.state.rows.platforms} rating={this.state.rows.rating}/>
            //   </div>

    //       </td>
    //     </tr> 
    //   </tbody>
    // </table>
    )
  }
}
export default GamesRow;