import React from 'react';
import './Highlightable.css';

const Highlightable = props => {
    return (
        <div className={props.highlighted} onClick={e => props.onClick()}>
            {props.children}
        </div>
    );
}

export default Highlightable;