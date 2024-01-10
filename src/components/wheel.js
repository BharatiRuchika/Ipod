import { Component } from "react";
import wheel from "../css/wheel.css"
import ZingTouch from 'zingtouch';

class Wheel extends Component {
    constructor() {
        super()
    }

    // control the wheel rotation action if rotation is more than 15 degrees and also check direction of rotation
    wheelControll = (e) => {
        const { updateActiveMenu } = this.props;

        if (e.detail.distanceFromOrigin === 0) {
            this.angle = e.detail.angle;
        }
        if (Math.abs(this.angle - e.detail.angle) > 300) {
            this.angle = Math.abs(e.detail.angle);
            if (e.detail.distanceFromLast === 0) {
                return;
            }
            else if (e.detail.distanceFromLast < 0) {
                updateActiveMenu(1,);
            } else {
                updateActiveMenu(0);
            }

        } else if (Math.abs(this.angle - e.detail.angle) > 15) {
            this.angle = Math.abs(e.detail.angle);
            if (e.detail.distanceFromLast === 0) {
                return;
            }
            else if (e.detail.distanceFromLast > 0) {
                updateActiveMenu(1);
            } else {
                updateActiveMenu(0);
            }
        }
    }

    // Bind components with zingtouch logic
    componentDidMount(){
        // const { handleReverse,handleForward,handleClick,togglePlayPause, handleMenu} = this.props;
        // var containerElement = document.getElementsByClassName('container1')[0];
        // var activeRegion = ZingTouch.Region(containerElement);
        // var childElement = document.getElementsByClassName('circle')[0];
        // const wheelControll = this.wheelControll;
        // const menuIcon = document.getElementById("menuContainer");
        // const playPause = document.getElementById("play-pause");
        // const reverse = document.getElementById("reverseButton");
        // const forward = document.getElementById("forwardButton");
        // const innerCircle = document.getElementById("innerCircleContainer");
        
        // const longTapGesture = new ZingTouch.Tap({
        //     maxDelay:10000,
        //     numInputs: 1,
        //     tolerance: 1,
        // })
        // activeRegion.bind(childElement, 'rotate', function (e) {
        //     e.stopPropagation();
        //     wheelControll(e);
        // });

        // activeRegion.bind(menuIcon, 'tap', function (e) {
        //     e.stopPropagation();
        //     handleMenu()
        // });

        // activeRegion.bind(innerCircle, 'tap', function (e) {
        //     e.stopPropagation();
        //     handleClick()
        // });


        // activeRegion.bind(playPause, 'tap', function (e) {
        //     e.stopPropagation();
        //     togglePlayPause();
        // });

        // activeRegion.bind(reverse, longTapGesture, function (e) {
        //     e.stopPropagation();
        //     handleReverse(e);
        // });

        // activeRegion.bind(forward, longTapGesture, function (e) {
        //     e.stopPropagation();
        //     handleForward(e);
        // });
    }

    //FUNCTION FOR-CHANGING THE MENU ON CLICK ON THE MENU BUTTON OF WHEEL
    // handleMenu = (event)=>{
    //     event.stopPropagation();
    //     this.props.handleMenu()
    // }

    //FUNCTION FOR-CHANGING THE MENU ON CLICK ON THE WHEEL INNER CIRCLE
    // handleClick = (e)=>{
    //     e.stopPropagation()
    //     this.props.handleClick()
    // }      
    
    // FUNCTION FOR-BACKWARDING THE SONG
    // handleReverse = ()=>{
    //     this.props.handleReverse()
    // }

    // FUNCTION FOR-FORWARDING THE SONG
    // handleForward = ()=>{
    //     this.props.handleForward()
    // }

    // FUNCTION FOR - PLAYING AND STOPING THE SONG
    // handleTogglePlayPause = ()=>{
    //     this.props.togglePlayPause()
    // }

    // Render wheel
    render() {
        
        return (<>
            {/* <div className="container1">
                <div className="circle">
                    <div className="innerCircle" id="innerCircleContainer">
                        <div className="menu" id="menuContainer">
                            <span>MENU</span>
                        </div> 

                        <div className="backward" id="reverseButton">
                            <i className="fa fa-backward"></i>
                        </div>

                        <div className="forward" id="forwardButton">
                            <i className="fa fa-forward"></i>
                        </div>

                        <div className="pauseResume" id="play-pause">
                            <span><i className="fa fa-pause"></i></span>
                            <span style={{ marginLeft: '10px' }}><i className="fa fa-play"></i></span>
                        </div> 

                    </div>
                </div>
            </div> */}



<div className="wheel-container" id="wheel-container">
                <div style={{backgroundColor:'red'}} className="wheel" id="wheel" >
                    <div className="controll" id="menu">
                        <div >MENU</div>
                    </div>
                    <div className="controll" id="forward">
                        <i  className="fa fa-fast-forward"></i>
                    </div>
                    <div className="controll" id="play-pause">
                        <div>
                            <i  className="fa fa-play"></i>
                            <i  className="fa fa-pause"></i>
                        </div>
                    </div>
                    <div className="controll" id="reverse">
                        <i  className="fa fa-fast-backward"></i>
                    </div>
                </div>

                <div  className="blank" id="blank" ></div>
            </div>
        </>)
    }
}

export default Wheel