import React, { useEffect } from 'react';
import './Colorbox.css';
import COLORS from '../../shared/colors';

const Colorbox = ({ onInput }) => {

    const [color, setColor] = React.useState(COLORS.defaultColor);

    const changeColor = e => {
        setColor(e.target.value);
    }
    

    useEffect(() => {
        onInput(color);
    }, [color, onInput]);

    return (
        <div className="tooltip-container">
            <input type="color" value={color} id="colorbox" name="head" onInput={changeColor}/>
        </div>
    );
}

export default Colorbox;