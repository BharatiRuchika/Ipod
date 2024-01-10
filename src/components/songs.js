import React, {Component} from "react";
class Songs extends Component{
    constructor(){
        super()
    }

    render(){
        return (<div className="gamesContainer">
        <h6>Songs</h6>
        <img src="https://w7.pngwing.com/pngs/587/672/png-transparent-ludo-dice-dice-game-dice-online-casino-thumbnail.png" />
    </div>)
    }
}

export default Songs





// {this.state.menuItem=='allSongs'?(<>
//     <div className="music">
//         <h3 className="songHeading">Songs</h3>
//         <div class="d-flex align-items-start">
//             <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
//             {songItems.map((element, index)=>{
//                 return <button class={`nav-link allSongs song-${index}`} id="v-pills-allsongs-tab" data-bs-toggle="pill" data-bs-target="#v-pills-allsongs" type="button" role="tab" aria-controls="v-pills-allsongs" aria-selected="true">{element[`song-${index}`]}</button>
//             })}
//        </div>
//     </div>
// </div>
// </>):