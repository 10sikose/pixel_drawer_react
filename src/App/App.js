import React from 'react';
import Grid from '../Grid/Grid';

class App extends React.Component {

    currentColor = 'black';

    getCurrentColor = () => {
        return this.currentColor;
    }

    render() {
        return <Grid currentColor={this.getCurrentColor} width={70} height={45}/>
    }
}

export default App;