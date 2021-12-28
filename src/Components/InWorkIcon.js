
import '../Styles/workIcon.css'; 
import React from 'react';

class InWorkIcon extends React.Component{
    
    constructor(props){
        super(); 
    }

    render(){
        return(
            <div className = "workIconContainer">
                <div className = "hardHatBox">
                    <div className = "hardHatBase"></div>
                    <div className = "hardHatCircle"></div>
                    <div className = "hardHatTop"></div>
                </div>
            </div>
        );
    }
}export default InWorkIcon; 