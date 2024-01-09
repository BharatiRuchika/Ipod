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

    componentDidMount(){
        let active=""
        this.setState((prevState)=>({
            activeIndex:this.props.data.activeIndex,
            menuItem:this.props.data.menuItem,
            activeItem:this.props.data.activeItem
        }))
    }

    componentDidUpdate(prevProps,prevState){
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
   
    render(){
        let {songItemsUrl,songImgItemsUrl,songItems,songIndex,audio,songImgUrl,songUrl,activeMusic ,activeIndex} = this.props.data
        console.log('songItems',songItems)
        return(
            <>
            <div className="sidebar">
                {this.state.menuItem=='allSongs'?(<>
                    <div className="music">
                        <h3>Songs</h3>
                        <div class="d-flex align-items-start">
                            <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            {songItems.map((element, index)=>{
                                return <button onClick={() => this.updateActive(0,'allSongs')} class={`nav-link allSongs song-${index}`} id="v-pills-allsongs-tab" data-bs-toggle="pill" data-bs-target="#v-pills-allsongs" type="button" role="tab" aria-controls="v-pills-allsongs" aria-selected="true">{element[`song-${index}`]}</button>
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
                        
                            <button onClick={() => this.updateActive(0,'allSongs')} class="nav-link allSongs" id="v-pills-allsongs-tab" data-bs-toggle="pill" data-bs-target="#v-pills-allsongs" type="button" role="tab" aria-controls="v-pills-allsongs" aria-selected="true">All Songs</button>

                            <button onClick={() => this.updateActive(1,'artists')} class="nav-link artists" id="v-pills-artists-tab" data-bs-toggle="pill" data-bs-target="#v-pills-artists" type="button" role="tab" aria-controls="v-pills-artists" aria-selected="false">Artists</button>

                            <button onClick={() => this.updateActive(2,'albums')} class="nav-link albums" id="v-pills-albums-tab" data-bs-toggle="pill" data-bs-target="#v-pills-albums" type="button" role="tab" aria-controls="v-pills-albums" aria-selected="false">Albums</button>

                        </div>
                    </div>
                </div>
                </>):
                <></>}
            </div>
        </>) 
            
        }
    }
    
export default Music