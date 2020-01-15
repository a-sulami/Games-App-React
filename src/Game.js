import React, {Component} from 'react';
import $ from 'jquery';
class Game extends Component{
    constructor(props){
        super(props);
        this.state = {
          //gameInfo: []//differ
        }
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

    displayRatings = () => {
        if(this.props.ratings != null ){
          return(
            <div>
              {this.props.ratings.map((title, index) => (
                <li key={index}>{title.title}</li>
              ))}
            </div>
          )
        }
    }

    render(){
        console.log("i am in game")
        console.log(this.props.platforms)
        if(this.props.released){
        return(
            <div>
                 {/* <p>Test for Game component</p> */}
                 <table class='game_table'>
                    <tbody>
                        {/* game component */}
                        <tr>
                            <td>
                                <p> Suggestions Counts: {this.props.suggestions}</p>
                            </td>  
                            <td>
                                <th>Reviews:</th>
                                <ul>{this.displayRatings()}</ul>
                            </td>
                            <td>
                                <th>Platforms:</th>
                                <ul>{this.check()}</ul>
                            </td>
                        </tr> 
                    </tbody>
                </table>
            </div>
        )
    }else{
        return null;
        
    }

    }
}
export default Game;
