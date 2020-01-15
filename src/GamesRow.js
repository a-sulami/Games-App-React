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
    
   check=()=>{
       if(this.props.platforms != null )
       {
         return ( 
           <div>
          { this.props.platforms.map((platform, index) => (
             <li key={index}>{platform.platform.name}</li> 
          ))}
          </div>
         )
      }
   }
  render(){
   console.log(this.state.rows)
      return (

        
          <div className='card' key={this.props.game.id}>
            <h1 onClick={this.viewgame.bind(this)}>{this.props.game.name}</h1>
            <img alt= "poster" src={this.props.game.poster_src}/>
            <p>Release Date: {this.props.game.released}</p>
            <p>Rating: {this.props.game.rating} / {this.props.game.rating_top}</p>
            <Game key = {this.state.rows.id} released = {this.state.rows.released} top = {this.state.rows.toprating} name = {this.state.rows.name} platforms={this.state.rows.platforms} rating={this.state.rows.rating}/>
            <button onClick = {this.viewgame.bind(this)} >Game Info</button>
            <ul>{this.check()}</ul>
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