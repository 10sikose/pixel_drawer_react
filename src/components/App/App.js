import React from 'react';
import PixelGrid from '../PixelGrid/PixelGrid';
import Toolbox from '../Toolbox/Toolbox';
import COLORS from '../../shared/colors';
import './App.css';

class App extends React.Component {

    currentColor = COLORS.defaultColor;
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
            <div id="app-container">
                <Toolbox />
                <PixelGrid
                    width={70} height={45}
                    currentColor={this.getCurrentColor}
                    drawingActivated={this.isDrawingActivated}
                    startDrawing={this.activateDrawing}
                    stopDrawing={this.deactivateDrawing}
                />
            </div>
        );
    }
}

export default App;