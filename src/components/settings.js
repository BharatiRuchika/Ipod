import React from "react";

// Defining the settings component
class Settings extends React.Component{
    // Constructor to initialize the state
    constructor(){
        super()
    }
    
    //rendering Settings component
    render(){
        return (<div className="settings">
        <h6>Settings</h6>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7MpHjewgPLkkQNaqiAIeOc2VFX22QFXnGPA&usqp=CAU" />
    </div>)
    }
}

export default Settings