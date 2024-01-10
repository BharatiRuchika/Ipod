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
        menu : ["coverflow", { music: ["allSongs","artists","albums"] },"games","settings"], //menu Items
        activeIndex:0,  //Active list item
        isMenu:true,         
        isInnerMenu:false,
        isSongMenu:false,
        menuItem:'menu',
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

    // FUNCTION FOR : UPDATE ACTIVE MENU WHILE ROTATING ON THE TRACK-WHEEL
    updateActiveMenu = (direction) => {
      console.log('im in updateActiveMenu')
        let {isMenu, isInnerMenu, isSongMenu} = this.state
        let min = 0;
        let max = 0;
        let activeItem = ""

        // checking if isMenu is true or not
        if (isMenu){
          max = 3
          if (direction === 1) {
            if (this.state.activeIndex >= max) {
              this.setState({ activeIndex: min,activeItem:'coverflow' })
            } else {
              let activeIndex = this.state.activeIndex + 1
              if (activeIndex==1){
                activeItem = 'music'
              }else{
                activeItem = this.state.menu[activeIndex] 
              }
              
              this.setState({ activeIndex:activeIndex,activeItem:activeItem })
            }
          } else {
            if (this.state.activeIndex <= min) {
              this.setState({ activeIndex: max,activeItem:'settings' })
            } else {
              let activeIndex = this.state.activeIndex - 1
              if (activeIndex==1){
                activeItem = 'music'
              }else{
                activeItem = this.state.menu[activeIndex] 
              }
              this.setState({ activeIndex: activeIndex,activeItem:activeItem })
            }
          }
        }
        // checking if isInnerMenu is true or not
        else if(isInnerMenu){
          max = 2
          if (direction === 1) {
            if (this.state.activeIndex >= max) {
              this.setState({ activeIndex: min,activeItem:'allSongs' })
            } else {
              let activeIndex = this.state.activeIndex + 1
              
              let activeItem = this.state.menu[1].music[activeIndex] 
              this.setState({ activeIndex: activeIndex,activeItem:activeItem })
            }
          } else {
            if (this.state.activeIndex <= min) {
              this.setState({ activeIndex: max,activeItem:'albums' })
            } else {
              let activeIndex = this.state.activeIndex - 1
              let activeItem = this.state.menu[1].music[activeIndex] 
              this.setState({ activeIndex: activeIndex,activeItem:activeItem })
            }
          }
        }
        // checking if isSongMenu is true or not
        else if(isSongMenu){
          max = 4
          if (direction === 1) {
            if (this.state.activeIndex >= max) {
              let audio = new Audio(this.state.songItemsUrl[0])
              this.setState({ activeIndex: min,activeItem:'song-0',audio:audio,playing:false })
            } else {
              let activeIndex = this.state.activeIndex + 1
              let activeItem = `song-${activeIndex}` 
              let audio = new Audio(this.state.songItemsUrl[activeIndex])
              this.setState({ activeIndex: activeIndex,activeItem:activeItem,audio:audio,playing:false })
            }
          }else{
            if (this.state.activeIndex <= min) {
              let audio = new Audio(this.state.songItemsUrl[4])
              this.setState({ activeIndex: max,activeItem:'song-4',audio:audio,playing:false })
            } else {
              let activeIndex = this.state.activeIndex - 1
              let activeItem = `song-${activeIndex}` 
              let audio = new Audio(this.state.songItemsUrl[activeIndex])
              this.setState({ activeIndex: activeIndex,activeItem:activeItem,audio:audio,playing:false })
            }
          }
        }
      }


    // FUNCTION FOR : CHANGE MENU BACKWARDS OR FORWARDS on PRESS OF CENTER BUTTON
    handleClick = ()=>{
      if(this.state.isSongMenu){
        return
      }
      console.log('im in handleClick')
      let menuItem = ""
      let {isMenu, isInnerMenu, isSongMenu} = this.state
      if(isMenu){
        // console.log('im in is menu')
        // console.log('activeIndex',this.state.activeIndex)
        if(this.state.activeIndex==1){
          menuItem = this.state.menu[1].music[0]
          this.setState(
            (prevState) => ({
              ...prevState,
              activeIndex : 0,
              menuItem : 'music',
              activeItem:'allSongs',
              isInnerMenu:true,
              isMenu:false
            }))
        }else{
          // console.log('im in ismenu else')
          menuItem = this.state.menu[this.state.activeIndex]
          // console.log('menuItem',menuItem)
          this.setState(
            (prevState) => ({
              ...prevState,
              menuItem : menuItem,
              activeItem:menuItem,
              activeIndex:this.state.activeIndex
            }))
        }
      }else{
        // console.log('im in isInnerMenu')
        menuItem = this.state.menu[1].music[this.state.activeIndex]
        this.setState(
          (prevState) => ({
            ...prevState,
            menuItem : menuItem,
            activeItem:menuItem,
            isInnerMenu: false,
            isMenu: false,
            isSongMenu:true
          }))
      }
    }
   
    // FUNCTION FOR : CHANGING MENU
    handleMenu = ()=>{
      let {isMenu, isInnerMenu, isSongMenu, activeIndex, activeItem} = this.state
      if(this.state.menuItem=="menu"){
        return
      }
      if (isSongMenu && !isInnerMenu && !isMenu){
        this.setState(
          (prevState) => ({
            ...prevState,
            activeIndex : 0,
            isSongMenu : !isSongMenu,
            isInnerMenu : !isInnerMenu,
            menuItem : 'music',
            activeItem:'allSongs'
          }))
      }
      if(isInnerMenu && !isMenu && !isSongMenu){
        this.setState(
          (prevState) => ({
            ...prevState,
            activeIndex : 1,
            isMenu : !isMenu,
            isInnerMenu : !isInnerMenu,
            menuItem : 'menu',
            activeItem:'music'
          }))
      }

      if(!isInnerMenu && !isMenu && !isSongMenu){
        this.setState(
          (prevState) => ({
            ...prevState,
            activeIndex : activeIndex,
            isMenu : isMenu,
            isInnerMenu : !isInnerMenu,
            menuItem : 'music',
            activeItem: activeItem
          }))
      }

      if(!isInnerMenu && isMenu && !isSongMenu){
        this.setState(
          (prevState) => ({
            ...prevState,
            activeIndex : activeIndex,
            menuItem : 'menu',
            activeItem: activeItem
          }))
      }
    }


  // FUNCTION FOR : TOGGLE SONG PLAY AND PAUSE
  togglePlayPause = () => {
    if (this.state.playing === true) {
      this.setState({ playing: false });
      this.state.audio.pause();
    }
    else {
      this.setState({ playing: true });
      this.state.currentAudio.pause()
      this.state.audio.play();
      let currentAudio = this.state.audio
      this.setState(
        (prevState) => ({
          ...prevState,
          currentAudio:currentAudio
        }))
    }
  }


  // FUNCTION FOR : ON PRESS OF BACKWARD BUTTON TRACKS ARE SEEKED BACKWARD
  handleReverse=(e)=>{
    if(this.state.isMenu || this.state.isInnerMenu){
      return
    }
    let min = 0
    let max = 4
    if (this.state.activeIndex <= min) {
      let audio = new Audio(this.state.songItemsUrl[4])
      this.setState({ activeIndex: max,activeItem:'song-4',audio:audio,playing:false })
    } else {
      let activeIndex = this.state.activeIndex - 1
      let activeItem = `song-${activeIndex}` 
      let audio = new Audio(this.state.songItemsUrl[activeIndex])
      this.setState({ activeIndex: activeIndex,activeItem:activeItem,audio:audio,playing:false })
    }
  }



  // FUNCTION FOR : ON PRESS OF FORWARD BUTTON TRACKS ARE SEEKED FORWARD
  handleForward=(e)=>{
    if(this.state.isMenu || this.state.isInnerMenu){
      return
    }
    let min = 0
    let max = 3
    if (this.state.activeIndex > max) {
      let audio = new Audio(this.state.songItemsUrl[0])
      this.setState({ activeIndex: min,activeItem:'song-0',audio:audio,playing:false })
    } else {
      let activeIndex = this.state.activeIndex + 1
      let activeItem = `song-${activeIndex}` 
      let audio = new Audio(this.state.songItemsUrl[activeIndex])
      this.setState({ activeIndex: activeIndex,activeItem:activeItem,audio:audio,playing:false })
    }
  }
    
  // FUNCTION FOR : RENDERING APP
    render(){
      return(<div className="App">
          {this.state.isMenu?(<>
            <Sidebar updateActive={this.updateActive} handleClick={this.handleClick} handleMenu={this.handleMenu} data={this.state}/>
          </>):(<>
            <Music updateActive={this.updateActive} handleClick={this.handleClick} handleMenu={this.handleMenu} data={this.state} songItems={this.songItems} togglePlayPause={this.togglePlayPause}/>
          </>)}
          <Wheel updateActiveMenu={this.updateActiveMenu} updateActive={this.updateActive} handleClick={this.handleClick} handleMenu={this.handleMenu} data={this.state} togglePlayPause={this.togglePlayPause} handleReverse={this.handleReverse} handleForward={this.handleForward} />
      </div>)
    }
}

export default App