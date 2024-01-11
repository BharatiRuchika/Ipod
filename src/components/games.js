import React, {Component} from "react";

// Defining games component
class Games extends Component{
    // Constructor to initialize the state
    constructor(){
        super()
    }

    //rendering Games component
    render(){
        return (<div className="gamesContainer">
        <h6>Games</h6>
        <img src="https://w7.pngwing.com/pngs/587/672/png-transparent-ludo-dice-dice-game-dice-online-casino-thumbnail.png" />
    </div>)
    }
}

export default Games