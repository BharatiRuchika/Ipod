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
class Sidebar extends React.Component {
    constructor() {
        super()
        this.state = {
            activeIndex: '',
            menuItem: '',
            activeItem: ''
        }
    }

    // setting props data to the state of sidebar component 
    componentDidMount() {
        this.setState({
            activeIndex: this.props.data.activeIndex,
            menuItem: this.props.data.menuItem,
            activeItem: this.props.data.activeItem
        })
    }

    // add active class to the current selected button and remove the active class of previos active button
    componentDidUpdate(prevProps, prevState) {
        let { menuItem, activeIndex, activeItem } = this.props.data
        console.log('props', this.props.data)
        if (prevState.menuItem != menuItem || prevState.activeIndex != activeIndex) {
            this.setState({
                activeIndex: this.props.data.activeIndex,
                menuItem: this.props.data.menuItem,
                activeItem: activeItem
            })
        }
        const activeButton = document.querySelector(`.active`);
        if (activeButton != null) {
            activeButton.classList.remove('active')
        }

        const Button = document.getElementsByClassName(`${activeItem}`)[0];
        if (Button != null) {
            Button.classList.add('active', 'nav-link');
        }
    }


    //render sidebar menu based on the menuItems
    render() {
        let { menuItem } = this.props.data
        return (<>
            <div className="sidebar">

                {menuItem == "menu" ? (<Menu/>) :
                
                menuItem == "coverflow" ? (<Coverflow/>) :
                    
                menuItem == "games" ? (<Games/>) :
                    
                menuItem == "settings" ? (<Settings/>) :

                menuItem == "music" ? (<Music />) :
                    
                menuItem == "allSongs" ? (<Songs/>) :
                    
                menuItem == "albums" ? (<Albums/>) :
                    
                menuItem == "artists" ? (<Artists/>) :
                    
                (<></>)}
            </div>
        </>)
    }
}

export default Sidebar