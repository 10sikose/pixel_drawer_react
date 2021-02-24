import React from 'react';
import './Colorbox.css';
import COLORS from '../../shared/colors';

const Colorbox = props => {

    const [color, setColor] = React.useState(COLORS.defaultColor);

    const changeColor = e => {
        setColor(e.target.value);
        props.onChange(color);
    }

    return (
        <div className="tooltip-container">
            <input type="color" value={color} id="colorbox" name="head" onChange={changeColor}/>
        </div>
    );
}

export default Colorbox;