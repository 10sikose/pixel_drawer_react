import React from 'react';
import Highlightable from '../Highlightable/Highlightable';
import Toolicon from '../Toolicon/Toolicon';
import Colorbox from '../Colorbox/Colorbox';
import './Toolbox.css';

class Toolbox extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currentHighlight: 'pencil',
            pencil: 'highlighted',
            eraser: 'unhighlighted'
        }

        this.iconNames = ["pencil", "colorbox", "eraser"];

        this.actions = {
            pencil: this.props.pencilAction,
            eraser: this.props.eraserAction,
            colorbox: () => {console.log("STH")}
        }
    }

    setHighlight(newHighlight) {
        console.log("Set highlight called");
        let oldHighlight = this.state.currentHighlight;
        this.setState({
            currentHighlight: newHighlight,
            [oldHighlight]: 'unhighlighted',
            [newHighlight]: 'highlighted'
        });
    }

    renderIcons() {
        const ICONS = this.iconNames.map(icon => {
            if(icon === "colorbox") {
                return <Colorbox key={icon} onChange={this.props.colorboxAction}/>;
            }
            return (
                <Highlightable key={icon} highlighted={this.state[icon]} onClick={() => this.setHighlight(icon)}>
                    <Toolicon icon={icon} onClick={this.actions[icon]}/>
                </Highlightable>
            );
        });

        return ICONS;
    }

    render() {
        return (
            <div id="toolbox">
                <div id="toolboxheader">TOOLS</div>
                {this.renderIcons()}
            </div>
        );
    }

}

export default Toolbox