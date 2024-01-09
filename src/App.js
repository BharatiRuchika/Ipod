import Wheel from "./components/wheel";
import React from "react";
import Sidebar from "./components/sidebar";
import Music from "./components/music";

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
        menu : ["coverflow", { music: ["allSongs","artists","albums"] },"games","settings"],
        activeIndex:0,
        isMenu:true,
        isInnerMenu:false,
        isSongMenu:false,
        menuItem:'menu',
        activeItem:'coverflow',
        songItemsUrl: [song1, song2, song3,song4,song5,],  
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
        activeSong:{'song-0':'Post Malone - White Iverson'},
        songImgUrl: song1Img,
        songUrl: song1,
        activeMusic:0,
        audio: new Audio(song1), //current audio file
        currentAudio:new Audio(song1)
      }
    }

    updateActiveMenu = (direction) => {
        let {isMenu, isInnerMenu, isSongMenu} = this.state
        let min = 0;
        let max = 0;
        let activeItem = ""
        if (isMenu){
          console.log('im in menu')
          max = 3
          if (direction === 1) {
            console.log('im in direction 1')
            if (this.state.activeIndex > max) {
              console.log('activeIndex',this.state.activeIndex)
              this.setState({ activeIndex: min,activeItem:'coverflow' })
            } else {
              let activeIndex = this.state.activeIndex + 1
              console.log('activeIndex', activeIndex)
              if (activeIndex==1){
                activeItem = 'music'
              }else{
                activeItem = this.state.menu[activeIndex] 
              }
              
              this.setState({ activeIndex:activeIndex,activeItem:activeItem })
            }
          } else {
            console.log('im in direction 0')
            if (this.state.activeIndex < min) {
              console.log('activeIndex',this.state.activeIndex)
              this.setState({ activeIndex: max,activeItem:'settings' })
            } else {
              let activeIndex = this.state.activeIndex - 1
              console.log('activeIndex', activeIndex)
              if (activeIndex==1){
                activeItem = 'music'
              }else{
                activeItem = this.state.menu[activeIndex] 
              }
              this.setState({ activeIndex: activeIndex,activeItem:activeItem })
            }
          }
        }else if(isInnerMenu){
          console.log('im in innerMeny')
          max = 2
          if (direction === 1) {
            if (this.state.activeIndex > max) {
              this.setState({ activeIndex: min,activeItem:'allSongs' })
            } else {
              let activeIndex = this.state.activeIndex + 1
              
              let activeItem = this.state.menu[1].music[activeIndex] 
              this.setState({ activeIndex: activeIndex,activeItem:activeItem })
            }
          } else {
            if (this.state.activeIndex < min) {
              this.setState({ activeIndex: max,activeItem:'artists' })
            } else {
              let activeIndex = this.state.activeIndex - 1
              let activeItem = this.state.menu[1].music[activeIndex] 
              this.setState({ activeIndex: activeIndex,activeItem:activeItem })
            }
          }
        }else if(isSongMenu){
          max = 4
          if (direction === 1) {
            if (this.state.activeIndex > max) {
              let audio = new Audio(this.state.songItemsUrl[0])
              this.setState({ activeIndex: min,activeItem:'song-0',audio:audio,playing:false })
            } else {
              let activeIndex = this.state.activeIndex + 1
              let activeItem = `song-${activeIndex}` 
              let audio = new Audio(this.state.songItemsUrl[activeIndex])
              console.log('activeItem',activeItem)
              this.setState({ activeIndex: activeIndex,activeItem:activeItem,audio:audio,playing:false })
            }
          }else{
            if (this.state.activeIndex < min) {
              let audio = new Audio(this.state.songItemsUrl[4])
              this.setState({ activeIndex: max,activeItem:'song-4',audio:audio,playing:false })
            } else {
              let activeIndex = this.state.activeIndex - 1
              let activeItem = `song-${activeIndex}` 
              console.log('activeItem',activeItem)
              let audio = new Audio(this.state.songItemsUrl[activeIndex])
              this.setState({ activeIndex: activeIndex,activeItem:activeItem,audio:audio,playing:false })
            }
          }
        }
        console.log('activeItem',activeItem)
      }

    updateActive = (activeIndex,activeItem)=>{
      console.log('activeIndex',activeIndex)
      this.setState(
        (prevState) => ({
          ...prevState,
          activeIndex:activeIndex,
          activeItem:activeItem
        }))
    }

    handleClick = ()=>{
      let menuItem = ""
      let {isMenu, isInnerMenu, isSongMenu} = this.state
      if(isMenu){
        if(this.state.activeIndex==1){
          // console.log('menu',this.state.menu)
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
          menuItem = this.state.menu[this.state.activeIndex]
          console.log('menuItem',menuItem)
          this.setState(
            (prevState) => ({
              ...prevState,
              menuItem : menuItem,
            }))
        }
      }else if(isInnerMenu){
        console.log('im in else')
        menuItem = this.state.menu[1].music[this.state.activeIndex]
        console.log('menuItem',menuItem)
        this.setState(
          (prevState) => ({
            ...prevState,
            menuItem : menuItem,
            isInnerMenu: false,
            isMenu: false,
            isSongMenu:true
          }))
      }
    }

    handleMenu = ()=>{
      console.log('im in menu')
      console.log('state',this.state)
      let {isMenu, isInnerMenu, activeIndex} = this.state
      if(isInnerMenu && !isMenu){
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

      if(!isInnerMenu && !isMenu){
        this.setState(
          (prevState) => ({
            ...prevState,
            activeIndex : this.state.activeIndex,
            isMenu : isMenu,
            isInnerMenu : !isInnerMenu,
            menuItem : 'music',
            activeItem:this.state.activeItem
          }))
      }

      if(!isInnerMenu && isMenu){
        this.setState(
          (prevState) => ({
            ...prevState,
            activeIndex : this.state.activeIndex,
            menuItem : 'menu',
            activeItem:this.state.activeItem
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

    render(){
      return(<>
          {this.state.isMenu?(<>
            <Sidebar updateActive={this.updateActive} handleClick={this.handleClick} handleMenu={this.handleMenu} data={this.state}/>
          </>):(<>
            <Music updateActive={this.updateActive} handleClick={this.handleClick} handleMenu={this.handleMenu} data={this.state} songItems={this.songItems} togglePlayPause={this.togglePlayPause}/>
          </>)}
          <Wheel updateActiveMenu={this.updateActiveMenu} updateActive={this.updateActive} handleClick={this.handleClick} handleMenu={this.handleMenu} data={this.state} togglePlayPause={this.togglePlayPause}/>
      </>)
    }


}

export default App