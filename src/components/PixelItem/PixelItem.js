import React from 'react';
import './PixelItem.css';
import COLORS from '../../shared/colors';

class PixelItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            fill: COLORS.emptyColor
        }
    }

    //Triggers a rerender of Pixel with the fill color stored
    //returned by this.props.currentColor()
    changeFill() {
        this.setState({fill: this.props.currentColor()});
    }

    //Signals to App that drawing has started and calls changeFill
    onMouseDown = event => {
        this.props.startDrawing();

        this.changeFill();
    }

    //Signals to App that drawing has ended
    onMouseUp = event => {
        this.props.stopDrawing();
    }

    //If drawing mode is activated, calls changeFill
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

export default PixelItem;