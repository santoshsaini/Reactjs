import React, { useState } from 'react';
import './ToggleSwitch.css';
import { IoIosSwitch } from "react-icons/io";

export const ToggleSwitch = () => {
    const [isOn, setIsOn] = useState(false); 

    const handleToggleSwitch = () => {
        setIsOn(!isOn);
    }
    
    const checkIsOn = isOn ? "on" : "off";
    const toggleBgColor = {backgroundColor:isOn ? "#4caf50" : ""};

    return (   
        <div>
            <h1 className='text-center'>Toggle Switch <IoIosSwitch className='text-danger' /></h1> 
            <div className="toggle-switch" style={toggleBgColor} onClick={handleToggleSwitch}>
                <div className={`switch ${checkIsOn}`}>
                    <span className='switch-state'>{checkIsOn}</span>
                </div>
            </div>
        </div>
    );
}
