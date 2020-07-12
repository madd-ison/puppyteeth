import React from 'react';
import Player from './Player';
import './App.css';

class PlayerContainer extends React.Component {
    render() {
        return (
            <div className="playerContainer">
                <Player />
            </div>
        )
    }
}

export default PlayerContainer;