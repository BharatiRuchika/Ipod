import React, {Component} from "react";
class Songs extends Component{
    constructor(){
        super()
        this.state={
            songIndex:0,
            activeSong:'song-0'
        }
    }

    componentDidMount(){
        let {songIndex,activeSong} = this.props.data
        this.setState({
            songIndex,
            activeSong
        })
    }

    componentDidUpdate(prevProps, prevState) {
        let { songIndex,activeSong } = this.props.data
        if (prevState.activeSong != activeSong || prevState.songIndex != songIndex) {
            this.setState(
              (prevState) => ({
                ...prevState,
                songIndex,
                activeSong
              }))
            }   
    }

    render(){
        let {songItems} = this.props.data
        return (
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
            )
    }
}

export default Songs

