import React, {Component} from "react";
class Songs extends Component{
    constructor(){
        super()
    }

    //rendering Songs component
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

