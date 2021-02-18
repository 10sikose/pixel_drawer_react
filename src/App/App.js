import React from 'react';
import Grid from '../Grid/Grid';

class App extends React.Component {

    currentColor = 'black';
    drawingActivated = false;

    getCurrentColor = () => {
        return this.currentColor;
    }

    activateDrawing = () => {
        this.drawingActivated = true;
    }

    deactivateDrawing = () => {
        this.drawingActivated = false;
    }

    isDrawingActivated = () => {
        return this.drawingActivated;
    }

    render() {
        return (
            <Grid
                width={70} height={45}
                currentColor={this.getCurrentColor}
                drawingActivated={this.isDrawingActivated}
                startDrawing={this.activateDrawing}
                stopDrawing={this.deactivateDrawing}
            />
        );
    }
}

export default App;