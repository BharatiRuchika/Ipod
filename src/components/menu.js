import { Component } from "react";

// Defining the menu component
class Menu extends Component{
    // Constructor to initialize the state
    constructor(){
        super()
    }

    //rendering menu component
    render(){
        return (<><div className="menuContainer">
        <h3 style={{ marginLeft: '10px' }}>Ipod.js</h3>
        <div class="d-flex align-items-start">
            <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">

                <button class="nav-link coverflow" id="v-pills-coverflow-tab" data-bs-toggle="pill" data-bs-target="#v-pills-coverflow" type="button" role="tab" aria-controls="v-pills-coverflow" aria-selected="true">Coverflow</button>

                <button class="nav-link music" id="v-pills-music-tab" data-bs-toggle="pill" data-bs-target="#v-pills-music" type="button" role="tab" aria-controls="v-pills-music" aria-selected="false">Music</button>

                <button class="nav-link games" id="v-pills-games-tab" data-bs-toggle="pill" data-bs-target="#v-pills-games" type="button" role="tab" aria-controls="v-pills-games" aria-selected="false">Games</button>

                <button class="nav-link settings" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</button>
            </div>
        </div>
    </div>

    <div className="rightSide">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzCtlL9D31GSXBa7lxfz6BDvcEBr54l0_Wmw&usqp=CAU" />
    </div></>)
    }
}

export default Menu