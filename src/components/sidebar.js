import React from "react";
import sidebar from "../css/sidebar.css"
class Sidebar extends React.Component {
    constructor() {
        super()
        this.state = {
            activeIndex:'',
            menuItem:'',
            activeItem:''
        }
    }
    
    // setting props data to the state of sidebar component 
    componentDidMount(){
        this.setState({
            activeIndex:this.props.data.activeIndex,
            menuItem:this.props.data.menuItem,
            activeItem:this.props.data.activeItem
        })
    }
    
    // add active class to the current selected button and remove the active class of previos active button
    componentDidUpdate(prevProps,prevState){
        let {menuItem,activeIndex,activeItem} = this.props.data
        console.log('props',this.props.data)
        if(prevState.menuItem!=menuItem || prevState.activeIndex!=activeIndex){
            this.setState({
                activeIndex:this.props.data.activeIndex,
                menuItem:this.props.data.menuItem,
                activeItem:activeItem
            })
        }
        const activeButton = document.querySelector(`.active`);
        if (activeButton!=null){
            activeButton.classList.remove('active')
        }
        
        const Button = document.getElementsByClassName(`${activeItem}`)[0];
        if(Button!=null){
            Button.classList.add('active','nav-link');
        }
    }

    
    //render sidebar menu based on the menuItems
    render() {
        let {menuItem} = this.props.data
        return (<>
        <div className="sidebar">
        
            {menuItem=="menu"?(<>
                <div className="menuContainer">
                    <h3 style={{ marginLeft: '10px' }}>Ipod.js</h3>
                    <div class="d-flex align-items-start">
                    <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                    
                    <button  class="nav-link coverflow" id="v-pills-coverflow-tab" data-bs-toggle="pill" data-bs-target="#v-pills-coverflow" type="button" role="tab" aria-controls="v-pills-coverflow" aria-selected="true">Coverflow</button>

                    <button  class="nav-link music" id="v-pills-music-tab" data-bs-toggle="pill" data-bs-target="#v-pills-music" type="button" role="tab" aria-controls="v-pills-music" aria-selected="false">Music</button>

                    <button  class="nav-link games" id="v-pills-games-tab" data-bs-toggle="pill" data-bs-target="#v-pills-games" type="button" role="tab" aria-controls="v-pills-games" aria-selected="false">Games</button>

                    <button  class="nav-link settings" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</button>
                </div>
            </div>
        </div>

        <div className="rightSide">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzCtlL9D31GSXBa7lxfz6BDvcEBr54l0_Wmw&usqp=CAU"/>
        </div>
            </>):
            menuItem=="coverflow"?(<>
                <div className="coverflow">
                    <h6>Coverflow</h6>
                </div>
            </>):
            menuItem=="games"?(<>
                <div className="gamesContainer">
                    <h6>Games</h6>
                    <img src="https://w7.pngwing.com/pngs/587/672/png-transparent-ludo-dice-dice-game-dice-online-casino-thumbnail.png"/> 
                </div>
            </>):
            menuItem=="settings"?(<>
                <div className="settings">
                    <h6>Settings</h6>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7MpHjewgPLkkQNaqiAIeOc2VFX22QFXnGPA&usqp=CAU"/>
                </div>
            </>):
            (<></>)}
             </div> 
        </>)
    }
}

export default Sidebar