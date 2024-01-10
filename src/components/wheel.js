import { Component } from "react";
import wheel from "../css/wheel.css"
import ZingTouch from 'zingtouch';

class Wheel extends Component {
    constructor() {
        super()
    }
  
    //FUNCTION FOR- HANDLING MENU 
    handleMenuHelper = (e) => {
        const { handleMenu } = this.props;
        const { activeMenu } = this.props.data
        handleMenu(activeMenu)
    }

    // control the wheel rotation action if rotation is more than 15 degrees and also check direction of rotation
    wheelControll = (e) => {
        const { updateActiveMenu } = this.props;
        const { activeMenu } = this.props.data
        if (e.detail.distanceFromOrigin === 0) {
            this.angle = e.detail.angle;
        }
        if (Math.abs(this.angle - e.detail.angle) > 300) {
            this.angle = Math.abs(e.detail.angle);
            if (e.detail.distanceFromLast === 0) {
                return;
            }
            else if (e.detail.distanceFromLast < 0) {
                updateActiveMenu(1,activeMenu);
            } else {
                updateActiveMenu(0,activeMenu);
            }

        } else if (Math.abs(this.angle - e.detail.angle) > 15) {
            this.angle = Math.abs(e.detail.angle);
            if (e.detail.distanceFromLast === 0) {
                return;
            }
            else if (e.detail.distanceFromLast > 0) {
                updateActiveMenu(1,activeMenu);
            } else {
                updateActiveMenu(0,activeMenu);
            }
        }
    }

    // Bind components with zingtouch logic
    componentDidMount(){
        const { handleReverse,handleForward,handleClick,togglePlayPause } = this.props;
        const wheelControll = this.wheelControll;
        const handleMenuHelper = this.handleMenuHelper;
        const wheel = document.getElementById("wheel");
        const activeRegion = ZingTouch.Region(wheel);
        const menuIcon = document.getElementById("menu");
        const playPause = document.getElementById("play-pause");
        const reverse = document.getElementById("reverse");
        const forward = document.getElementById("forward");
        const blank = document.getElementById("blank")
        const longTapGesture = new ZingTouch.Tap({
            maxDelay:10000,
            numInputs: 1,
            tolerance: 1,
        })

        activeRegion.bind(menuIcon, 'tap', function (e) {
            handleMenuHelper(e);
        });

        activeRegion.bind(blank, 'tap', function (e) {
            handleClick();
        });

        activeRegion.bind(wheel, 'rotate', function (e) {
            wheelControll(e);
        });

        activeRegion.bind(playPause, 'tap', function (e) {
            togglePlayPause();
        });

        activeRegion.bind(reverse, longTapGesture, function (e) {
            handleReverse(e);
        });

        activeRegion.bind(forward, longTapGesture, function (e) {
            handleForward(e);
        });
    }

    // Render wheel
    render() {
        return (<>
            <div className="wheel-container" id="wheel-container">
                <div className="wheel" id="wheel" >
                    <div className="controll" id="menu">
                        <div>MENU</div>
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
                    <div  className="blank" id="blank" ></div>
                </div>
            </div>
        </>)
    }
}

export default Wheel