import React, {Component} from 'react';
import $ from 'jquery';
class Game extends Component{
    constructor(props){
        super(props);
        this.state = {
          //gameInfo: []//differ
        }
      }
    // check=()=>{
    //     if(this.props.platforms != null )
    //     {
    //       return ( 
    //         <div>
    //        { this.props.platforms.map((platform, index) => (
    //           <li key={index}>{platform.platform.name}</li> 
    //        ))}
    //        </div>
    //       )
    //    }
    // }
    render(){
        console.log("i am in game")
        console.log(this.props.platforms)
        return(
            <div>
                 {/* <p>Test for Game component</p> */}
                 <table >
                    <tbody>
                        {/* game component */}
                        <tr>
                            <td>
                            {this.props.name}
                            <p>{this.props.rating}</p>
                            <p> { this.props.released}</p>
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
    }
}
export default Game;
