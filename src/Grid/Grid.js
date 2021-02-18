import React from 'react';
import Pixel from './Pixel/Pixel';
import './Grid.css';

class Grid extends React.Component {

    constructor(props) {
        super(props);

        this.ROWS = [];

        console.log(props.width);
        console.log(props.height);

        for(let h = 1; h <= props.height; h++) {
            const ROW = [];
            
            for(let w = 1; w <= props.width; w++) {
                ROW.push(
                    <Pixel
                        key={w + ", " + h}
                        currentColor={props.currentColor}
                        drawingActivated={props.drawingActivated}
                        startDrawing={props.startDrawing}
                        stopDrawing={props.stopDrawing}
                    />
                );
            }

            this.ROWS.push(<div key={h} className="row">{ROW}</div>);
        }

    }

    render() {
        return (
            <div id="canvas">
                {this.ROWS}
            </div>
        );
    }

}

export default Grid;