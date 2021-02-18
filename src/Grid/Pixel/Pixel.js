import React from 'react';
import './Pixel.css';

class Pixel extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            fill: '#44475a'
        }
    }

    changeFill() {
        this.setState({fill: this.props.currentColor()});
    }

    onMouseDown = event => {
        this.props.startDrawing();

        this.changeFill();
    }

    onMouseUp = event => {
        this.props.stopDrawing();
    }

    onMouseOver = event => {
        if(this.props.drawingActivated()) {
            this.changeFill();
        }
    }



    render() {
        return (
            <svg className = "pixel">
                <rect
                    className = "interior empty"
                    style={{fill: this.state.fill}}
                    onMouseDown={this.onMouseDown}
                    onMouseUp={this.onMouseUp}
                    onMouseOver={this.onMouseOver}
                />
            </svg>
        );
    }

}

export default Pixel;