import React, {Component} from 'react';
import $ from 'jquery';
class Game extends Component{
    constructor(props){
        super(props);
        this.state = {
          //gameInfo: []//differ
        }
      }

    render(){
        console.log("i am in game")
        console.log(this.props.platforms)
        if(this.props.released){
        return(
            <div>
            
                 <table >
                    <tbody>
                      
                        <tr>
                            <td>
                             <p> Name :{this.props.name}</p>
                            <p> Rating :{this.props.rating}</p>
                            <p> released: { this.props.released} </p>
                            {/* <img alt= "poster" width="185" src={this.props.result.poster_src}/> */}
                            </td>
                            <td>
                            {/* <h3>{this.props.key}</h3> */}
                            {/* <p>Release Date: {this.props.result.released}</p> */}
                            {/* <p>Rating: {this.props.rating} / 55</p> */}
                            {/* <ul>{this.check()}</ul> */}
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
