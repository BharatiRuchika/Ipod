import Wheel from "./components/wheel";
import React from "react";
import Sidebar from "./components/sidebar";
import Music from "./components/music";

// Import songs
import song1 from "./static/songs/Post Malone - White Iverson.mp3"
import song2 from "./static/songs/John Denver - Country Roads.mp3"
import song3 from "./static/songs/Sigrid - High Five.mp3"
import song4 from "./static/songs/Khalid - Young Dumb Broke.mp3"
import song5 from "./static/songs/Rick Astley - Never Gonna Give You Up.mp3"

import song1Img from "./static/Post Malone - White Iverson.png";
import song2Img from "./static/John Denver - Country Roads.jpg";
import song3Img from "./static/Sigrid - High Five.png";
import song4Img from "./static/Khalid - Young Dumb Broke.jpg";
import song5Img from "./static/Never Gonna Give You Up.png";

class App extends React.Component {
    constructor() {
      super()
      this.state = {
        menu : ["coverflow", "music","games","settings"], //menu Items
        music:["allSongs","artists","albums"],
        activeIndex:0,  //Active list item
        activeMenu:'menu',         
        isInnerMenu:false,
        isSongMenu:false,
        menuItem:'menu',
        currentMenu:'menu',
        activeItem:'coverflow',
        songItemsUrl: [song1, song2, song3, song4, song5],    //songs list
        songImgItemsUrl: [song1Img, song2Img, song3Img, song4Img, song5Img],
        playing:false,
        songItems:[
            {'song-0':'Post Malone - White Iverson'},
            {'song-1':'John Denver - Country Roads'},
            {'song-2':'Sigrid Raabe - High Five'},
            {'song-3':'Khalid - Young Dumb Broke'},
            {'song-4':'Rick Astley - Never Gonna Give You Up'}
        ],
        songIndex: 0, //current song
        activeSong:'song-0',
        songImgUrl: song1Img,
        songUrl: song1,  //current song url
        activeMusic:0,    //index of active music
        audio: new Audio(song1), //current audio file
        currentAudio:new Audio(song1)
      }
    }

    componentDidMount(){
      let { menuItem, activeIndex, activeItem } = this.state
      const Button = document.getElementsByClassName(`${activeItem}`)[0];
      if (Button != null) {
          Button.classList.add('active', 'nav-link');
      }
    }
    componentDidUpdate(prevProps, prevState) {
      console.log('im in app update')
      let { menuItem, activeIndex, activeItem ,activeSong} = this.state
      if (prevState.menuItem != menuItem || prevState.activeIndex != activeIndex) {
        this.setState(
          (prevState) => ({
            ...prevState,
              activeIndex,
              menuItem,
              activeItem
          }))

      }
      const activeButton = document.querySelector(`.active`);
      console.log('activeButton',activeButton)
      if (activeButton != null) {
          activeButton.classList.remove('active')
      }

      if(this.state.currentMenu=="allSongs"){
        const Button = document.getElementsByClassName(`${activeSong}`)[0];
      console.log('Button',Button)
      if (Button != null) {
          Button.classList.add('active', 'nav-link');
      }
      }else{
        const Button = document.getElementsByClassName(`${activeItem}`)[0];
        console.log('Button',Button)
        if (Button != null) {
          Button.classList.add('active', 'nav-link');
        }
    }
  }

    // FUNCTION FOR : UPDATE ACTIVE MENU WHILE ROTATING ON THE TRACK-WHEEL
    updateActiveMenu = (direction,menu) => {
        let {isMenu, isInnerMenu, isSongMenu} = this.state
        let min = 0;
        let max = 0;
        let activeItem = ""
        
        max = this.state[menu].length-1
        // checking if isMenu is true or not
          if (direction === 1) {
            if (this.state.activeIndex >= max) {
              this.setState({ activeIndex: min,activeItem:this.state[menu][min] })
            } else {
              let activeIndex = this.state.activeIndex + 1
              activeItem = this.state[menu][activeIndex] 
              this.setState({ activeIndex:activeIndex,activeItem:activeItem })
            }
          } else {
            if (this.state.activeIndex <= min) {
              this.setState({ activeIndex: max,activeItem:this.state[menu][max] })
            } else {
              let activeIndex = this.state.activeIndex - 1
              activeItem = this.state[menu][activeIndex] 
              this.setState({ activeIndex: activeIndex,activeItem:activeItem })
            }
          
        }
      }


    // FUNCTION FOR : CHANGE MENU BACKWARDS OR FORWARDS on PRESS OF CENTER BUTTON
    handleClick = ()=>{
      if(this.state.isSongMenu){
        return
      }
      let currentMenu = this.state.activeItem
      let activeItem = this.state.activeItem
      let activeMenu = this.state.activeMenu
      let activeIndex = this.state.activeIndex
      if(activeMenu=="menu"){
        if (activeItem=="music"){
          activeItem = "allSongs"
          activeMenu = "music"
          activeIndex = 0
        }else{
          activeMenu = "innerMenu"

        }
      }else if(activeMenu=="innerMenu"){
        return 
      }else if(activeMenu=="music"){
        activeMenu = "innerMusic"
      }else if(activeMenu=="innerMusic"){
        return
      }
        this.setState(
          (prevState) => ({
            ...prevState,
            currentMenu:currentMenu,
            activeItem:activeItem,
            activeMenu:activeMenu,
            activeIndex:activeIndex
          }))
        }
      
    
   
    // FUNCTION FOR : CHANGING MENU
    handleMenu = (menu)=>{
      if (menu=="menu"){
        return
      }
      if(menu=="innerMenu"){
        this.setState(
          (prevState) => ({
            ...prevState,
            activeMenu:'menu',
            activeItem:this.state.activeItem,
            currentMenu:'menu'
          }))
      }else if(menu=="innerMusic"){
        this.setState(
          (prevState) => ({
            ...prevState,
            activeMenu:'music',
            activeItem:this.state.activeItem,
            currentMenu:"music"
          }))
      }else if (menu=="music"){
        this.setState(
          (prevState) => ({
            ...prevState,
            activeMenu:'menu',
            activeItem:'music',
            currentMenu:"menu"
          }))
      }
      

    }


  // FUNCTION FOR : TOGGLE SONG PLAY AND PAUSE
  togglePlayPause = () => {
    console.log('im in togglePlayPause')
    if (this.state.playing === true) {
      this.setState({ playing: false });
        this.state.audio.pause();
    } else {

      this.state.currentAudio.pause()
      let currentAudio = this.state.audio
      this.setState({ playing: true,currentAudio:currentAudio });
        this.state.audio.play();
    }
  }


  // FUNCTION FOR : ON PRESS OF BACKWARD BUTTON TRACKS ARE SEEKED BACKWARD
  handleReverse=(e)=>{
    let min = 0
    let max = 4
    if (this.state.songIndex <= min) {
      let audio = new Audio(this.state.songItemsUrl[4])
      this.setState({ songIndex: max,activeSong:'song-4',audio:audio,playing:false })
    } else {
      let songIndex = this.state.songIndex - 1
      let activeSong = `song-${songIndex}` 
      let audio = new Audio(this.state.songItemsUrl[songIndex])
      this.setState({ songIndex: songIndex,activeSong:activeSong,audio:audio,playing:false })
    }
  }



  // FUNCTION FOR : ON PRESS OF FORWARD BUTTON TRACKS ARE SEEKED FORWARD
  handleForward=(e)=>{
    let min = 0
    let max = 4
    if (this.state.songIndex >= max) {
      let audio = new Audio(this.state.songItemsUrl[0])
      this.setState({ songIndex: min,activeSong:'song-0',audio:audio,playing:false })
    } else {
      let songIndex = this.state.songIndex + 1
      let activeSong = `song-${songIndex}` 
      let audio = new Audio(this.state.songItemsUrl[songIndex])
      this.setState({ songIndex: songIndex,activeSong:activeSong,audio:audio,playing:false })
    }
  }
    
  // FUNCTION FOR : RENDERING APP
    render(){
      return(<div className="App">
        <Sidebar updateActive={this.updateActive} handleClick={this.handleClick} handleMenu={this.handleMenu} data={this.state}/>
          
        <Wheel updateActiveMenu={this.updateActiveMenu} handleClick={this.handleClick} handleMenu={this.handleMenu} data={this.state} togglePlayPause={this.togglePlayPause} handleReverse={this.handleReverse} handleForward={this.handleForward} />
      </div>)
    }
}

export default App