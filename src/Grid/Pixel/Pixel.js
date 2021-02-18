import React from 'react';
import './Pixel.css';

class Pixel extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            fill: '#44475a'
        }
    }

    changeFill = event => {
        this.setState({fill: this.props.currentColor()});
    }



    render() {
        return (
            <svg className = "pixel">
                <rect
                    className = "interior empty"
                    style={{fill: this.state.fill}}
                    onClick={this.changeFill}
                />
            </svg>
        );
    }

}

export default Pixel;