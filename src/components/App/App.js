import React from 'react';
import PixelGrid from '../PixelGrid/PixelGrid';
import Toolbox from '../Toolbox/Toolbox';
import COLORS from '../../shared/colors';
import './App.css';

class App extends React.Component {

    pencilColor = COLORS.defaultColor;
    eraserColor = COLORS.emptyColor;
    drawingActivated = false;
    pencilMode = true;
    eraserMode = false;

    getColor = () => {
        if(this.pencilMode && !this.eraserMode) {
            //console.log(this.pencilColor);
            return this.pencilColor;
        }
        else if (!this.pencilMode && this.eraserMode){
            return this.eraserColor;
        }
    }

    setPencilColor = newColor => {
        //console.log(newColor);
        this.pencilColor = newColor;
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

    deactivatePencilMode = () => {
        this.pencilMode = false;
    }

    activatePencilMode = () => {
        this.pencilMode = true;
    }

    deactivateEraserMode = () => {
        this.eraserMode = false;
    }

    activateEraserMode = () => {
        this.eraserMode = true;
    }
    

    render() {
        return (
            <React.Fragment>
                <Toolbox 
                    pencilAction={() => {
                        this.deactivateEraserMode();
                        this.activatePencilMode();
                    }}
                    eraserAction={() => {
                        this.deactivatePencilMode();
                        this.activateEraserMode();
                    }}
                    colorboxAction={this.setPencilColor}
                />
                <PixelGrid
                    width={70} height={45}
                    currentColor={this.getColor}
                    drawingActivated={this.isDrawingActivated}
                    startDrawing={this.activateDrawing}
                    stopDrawing={this.deactivateDrawing}
                />
            </React.Fragment>
        );
    }
}

export default App;