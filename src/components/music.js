import React, {Component} from "react";
import sidebar from "../css/sidebar.css"
import music from "../css/music.css"
class Music extends Component{
    constructor(){
        super()
        this.state = {
            activeIndex:'',
            menuItem:'',
            activeItem:'',
        }
    }
   // setting props data to the state of Music component 
    componentDidMount(){
        this.setState((prevState)=>({
            activeIndex:this.props.data.activeIndex,
            menuItem:this.props.data.menuItem,
            activeItem:this.props.data.activeItem
        }))
    }
  
    // add active class to the current selected button and remove the active class of previos active button
    componentDidUpdate(prevProps,prevState){
        let {menuItem,activeIndex,activeItem} = this.props.data
        if(prevState.menuItem!=menuItem || prevState.activeIndex!=activeIndex){
            this.setState({
                activeIndex:this.props.data.activeIndex,
                menuItem:this.props.data.menuItem,
                activeItem:activeItem
            })
        }
  
        //getting the previous active button and remove active class
        const activeButton = document.querySelector(`.active`);
        if (activeButton!=null){
            activeButton.classList.remove('active')
        }
        
        //getting the current active button and adding active class to it
        const Button = document.getElementsByClassName(`${activeItem}`)[0];
        if(Button!=null){
            Button.classList.add('active','nav-link');
        }
    }

   // render music component based on the menuItems
    render(){
        let {songItems} = this.props.data
        return(
            <>
            <div className="sidebar">
                {this.state.menuItem=='allSongs'?(<>
                    <div className="music">
                        <h3 className="songHeading">Songs</h3>
                        <div class="d-flex align-items-start">
                            <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            {songItems.map((element, index)=>{
                                return <button class={`nav-link allSongs song-${index}`} id="v-pills-allsongs-tab" data-bs-toggle="pill" data-bs-target="#v-pills-allsongs" type="button" role="tab" aria-controls="v-pills-allsongs" aria-selected="true">{element[`song-${index}`]}</button>
                            })}
                       </div>
                    </div>
                </div>
                </>):
                this.state.menuItem=='albums'?(<>
                    <div className="albums">
                        <img src="https://repository-images.githubusercontent.com/319397144/c2b15580-38e5-11eb-81bf-97b8049bf168"/>
                    </div>
                </>):
                this.state.menuItem=='artists'?(<>
                    <div className="artists">
                        <img src="https://repository-images.githubusercontent.com/319397144/c2b15580-38e5-11eb-81bf-97b8049bf168"/>
                    </div>
                </>):
                this.state.menuItem=='music'?(<>
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
                </>):
                <></>}
            </div>
        </>) 
            
        }
    }
    
export default Music