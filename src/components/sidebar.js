import React from "react";
import sidebar from "../css/sidebar.css"
import Music from "./music";
class Sidebar extends React.Component {
    constructor() {
        super()
        this.state = {
            activeIndex:'',
            menuItem:'',
            activeItem:''
        }
    }

    componentDidMount(){
        console.log('im in mounting')
        console.log('activeItem',this.props.data.activeIndex)
        console.log('menuItem',this.props.data.menuItem)
        this.setState({
            activeIndex:this.props.data.activeIndex,
            menuItem:this.props.data.menuItem,
            activeItem:this.props.data.activeItem
        })
    }

    componentDidUpdate(prevProps,prevState){
        console.log('props',this.props)
        let {menuItem,activeIndex,activeItem} = this.props.data
        if(prevState.menuItem!=menuItem || prevState.activeIndex!=activeIndex){
            this.setState({
                activeIndex:this.props.data.activeIndex,
                menuItem:this.props.data.menuItem,
                activeItem:activeItem
            })
        }
        const activeButton = document.querySelector(`.active`);
        console.log('activeButton',activeButton)
        if (activeButton!=null){
            activeButton.classList.remove('active')
        }
        
        const Button = document.getElementsByClassName(`${activeItem}`)[0];
        console.log('button',Button)
        if(Button!=null){
            Button.classList.add('active','nav-link');
        }
    }

    updateActive = (activeIndex, activeItem) => {
        this.props.updateActive(activeIndex,activeItem)
    }

    render() {
        let {menuItem,activeIndex,activeItem} = this.props.data
        return (<>
        <div className="sidebar">
            {menuItem=="menu"?(<>
                <div className="menuContainer">
                    <h3 style={{ marginLeft: '10px' }}>Ipod.js</h3>
                    <div class="d-flex align-items-start">
                    <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                    
                    <button onClick={() => this.updateActive(0,'coverflow')} class="nav-link coverflow" id="v-pills-coverflow-tab" data-bs-toggle="pill" data-bs-target="#v-pills-coverflow" type="button" role="tab" aria-controls="v-pills-coverflow" aria-selected="true">Coverflow</button>

                    <button onClick={() => this.updateActive(1,'music')} class="nav-link music" id="v-pills-music-tab" data-bs-toggle="pill" data-bs-target="#v-pills-music" type="button" role="tab" aria-controls="v-pills-music" aria-selected="false">Music</button>


                    <button onClick={() => this.updateActive(2,'games')} class="nav-link games" id="v-pills-games-tab" data-bs-toggle="pill" data-bs-target="#v-pills-games" type="button" role="tab" aria-controls="v-pills-games" aria-selected="false">Games</button>

                    <button onClick={() => this.updateActive(3,'settings')} class="nav-link settings" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</button>
                </div>
            </div>
        </div>
            </>):
            menuItem=="coverflow"?(<>
                <div className="coverflow">
                    <h6>Coverflow</h6>
                </div>
            </>):
            menuItem=="games"?(<>
                <div className="games">
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
       


        //     <div className="sidebar">
        //         {this.state.menuItem=='coverflow' ? (
        //             <div className="coverflow">
        //                 <h6>Coverflow</h6>
        //             </div>
        //         ) : this.state.menuItem=='music' ? (<div className="music">

        //             <Music menuItem={this.state.menuItem} active={this.state.active} updateData={this.props.updateData} handleClick={this.handleClick}/>

        //         </div>) :
        //             this.state.menuItem=='games' ? (<div className="games">
        //                 <h6>Games</h6>
        //                 <img src="https://w7.pngwing.com/pngs/587/672/png-transparent-ludo-dice-dice-game-dice-online-casino-thumbnail.png"/>
                        
        //             </div>) :
        //                 this.state.menuItem=='menu' ? (
        //                     <div className="menuContainer">
        //                         <h3 style={{ marginLeft: '10px' }}>Ipod.js</h3>
        //                         <div class="d-flex align-items-start">
        //                             <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                    
        //                             <button onClick={() => this.handleClick('coverflow')} class="nav-link coverflow" id="v-pills-coverflow-tab" data-bs-toggle="pill" data-bs-target="#v-pills-coverflow" type="button" role="tab" aria-controls="v-pills-coverflow" aria-selected="true">Coverflow</button>

        //                             <button onClick={() => this.handleClick('music')} class="nav-link music" id="v-pills-music-tab" data-bs-toggle="pill" data-bs-target="#v-pills-music" type="button" role="tab" aria-controls="v-pills-music" aria-selected="false">Music</button>


        //                             <button onClick={() => this.handleClick('games')} class="nav-link games" id="v-pills-games-tab" data-bs-toggle="pill" data-bs-target="#v-pills-games" type="button" role="tab" aria-controls="v-pills-games" aria-selected="false">Games</button>

        //                             <button onClick={() => this.handleClick('settings')} class="nav-link settings" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</button>
        //                         </div>
        //                     </div>
        //                 </div>
                            
        //                 ) : 
                        
        //                 this.state.menuItem=='music' ? (<> 
        //                     <Music menuItem={this.state.menuItem} active={this.state.active} updateData={this.props.updateData} handleClick={this.handleClick}/>
        //                 </>):
        //                     (<>
        //                 <div className="settings">
        //                     <h6>Settings</h6>
        //                     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7MpHjewgPLkkQNaqiAIeOc2VFX22QFXnGPA&usqp=CAU"/>
        //                 </div>
        //                 </>)

        //         }</div>
        // )

    }
}

export default Sidebar