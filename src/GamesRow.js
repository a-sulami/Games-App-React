import React from 'react'

class GamesRow extends React.Component{
    viewgame(){
        const url = "https://api.rawg.io/api/games/" + this.props.game.id
      
       console.log("Hii");
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
                <ul>{this.check()}</ul>
              <input type="button" onClick = {this.viewgame.bind(this)} value="View" />
            </td>
          </tr> 
        </tbody>
      </table>
        )
    }
}

export default GamesRow