import React from 'react';
import './Toolicon.css';

//USE REACT HOOKS FOR EDUCATIONAL PURPOSES
const Toolicon = ({ icon }) => {

    return <i className={`icon toolbox-icon ${icon}`} />;

}

export default Toolicon;