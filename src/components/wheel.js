import { Component } from "react";
import wheel from "../css/wheel.css"
import ZingTouch from 'zingtouch';
import Sidebar from "./sidebar";
class Wheel extends Component {
    constructor() {
        super()
    }

    wheelControll = (e) => {
        console.log('im in wheel container')
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

    componentDidMount(){
        var containerElement = document.getElementsByClassName('container1')[0];
        var activeRegion = ZingTouch.Region(containerElement);
        var childElement = document.getElementsByClassName('circle')[0];
        const wheelControll = this.wheelControll;
        const longTapGesture = new ZingTouch.Tap({
            maxDelay:10000,
            numInputs: 1,
            tolerance: 1,
        })

        activeRegion.bind(childElement, 'rotate', function (e) {
            wheelControll(e);
        });

    }

    handleMenu = (event)=>{
        console.log('wheel handleMenu clicked',this.props)
        event.stopPropagation();
        this.props.handleMenu()
    }

    handleClick = ()=>{
        console.log('wheel handleClick clicked',this.props)
        this.props.handleClick()
    }      
    
    handleReverse = ()=>{

    }

    handleForward = ()=>{

    }

    handleTogglePlayPause = ()=>{
        this.props.togglePlayPause()
    }

    handleResume = ()=>{

    }

    render() {
        return (<>
        
            <div className="container1">
                <div className="circle">
                    <div className="innerCircle" onClick={this.handleClick}>
                        <div className="menu">
                            <span onClick={this.handleMenu}>MENU</span>
                        </div> 

                        <div className="backward" onClick={this.handleReverse}>
                            <i className="fa fa-backward"></i>
                        </div>

                        <div className="forward" onClick={this.handleForward}>
                            <i className="fa fa-forward"></i>
                        </div>

                        <div className="pauseResume" onClick={this.handleTogglePlayPause}>
                            <span><i className="fa fa-pause"></i></span>
                            <span style={{ marginLeft: '10px' }}><i className="fa fa-play"></i></span>
                        </div> 

                    </div>
                </div>
            </div>
        </>)
    }
}

export default Wheel