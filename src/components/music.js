import React, {Component} from "react";
import sidebar from "../css/sidebar.css"
import music from "../css/music.css"
class Music extends Component{
    constructor(){
        super()
    }
  
   // render music component based on the menuItems
    render(){
        return(
            <>
           <div className="menuContainer">
                <h3 style={{ marginLeft: '10px' }}>Music</h3>
                <div class="d-flex align-items-start">
                    <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        
                    <button class="nav-link allSongs" id="v-pills-allsongs-tab" data-bs-toggle="pill" data-bs-target="#v-pills-allsongs" type="button" role="tab" aria-controls="v-pills-allsongs" aria-selected="true">All Songs</button>

                    <button class="nav-link artists" id="v-pills-artists-tab" data-bs-toggle="pill" data-bs-target="#v-pills-artists" type="button" role="tab" aria-controls="v-pills-artists" aria-selected="false">Artists</button>

                    <button class="nav-link albums" id="v-pills-albums-tab" data-bs-toggle="pill" data-bs-target="#v-pills-albums" type="button" role="tab" aria-controls="v-pills-albums" aria-selected="false">Albums</button>

                </div>
            </div>
        </div>
        <div className="rightSide">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzCtlL9D31GSXBa7lxfz6BDvcEBr54l0_Wmw&usqp=CAU"/>
        </div>
    </>)
        }
    }
    
export default Music