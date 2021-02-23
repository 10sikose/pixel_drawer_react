import React from 'react';
import PixelItem from '../PixelItem/PixelItem';
import './PixelGrid.css';

class PixelGrid extends React.Component {

    constructor(props) {
        super(props);

        this.ROWS = [];

        for(let h = 1; h <= props.height; h++) {
            const ROW = [];
            
            for(let w = 1; w <= props.width; w++) {
                ROW.push(
                    <PixelItem
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

export default PixelGrid;