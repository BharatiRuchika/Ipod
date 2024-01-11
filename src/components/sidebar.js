import React from "react";
import sidebar from "../css/sidebar.css"
import Music from "./music";
import Games from "./games";
import Albums from "./albums";
import Artists from "./artists";
import Settings from "./settings";
import Coverflow from "./coverflow";
import Menu from "./menu";
import Songs from "./songs";

// Defining the sidebar component
class Sidebar extends React.Component {
    // Constructor to initialize the state
    constructor() {
        super()
    }

    //render sidebar menu based on the menuItems
    render() {
        let { currentMenu } = this.props.data
        return (<>
            <div className="sidebar">

                {currentMenu == "menu" ? (<Menu/>) :
                
                currentMenu == "coverflow" ? (<Coverflow/>) :
                    
                currentMenu == "games" ? (<Games/>) :
                    
                currentMenu == "settings" ? (<Settings/>) :

                currentMenu == "music" ? (<Music />) :
                    
                currentMenu == "allSongs" ? (<Songs data={this.props.data}/>) :
                    
                currentMenu == "albums" ? (<Albums/>) :
                    
                currentMenu == "artists" ? (<Artists/>) :
                    
                (<></>)}
            </div>
        </>)
    }
}

export default Sidebar