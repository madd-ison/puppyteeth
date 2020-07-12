import React from 'react';
import BandcampPlayer from 'react-bandcamp';
import './App.css'

function Player() {
    return (
        <div className="player">
            <BandcampPlayer album="888409711" size="large" style="border" artwork="big"  width="350px" height="600px" />
            <BandcampPlayer album="3945498899" size="large" style="border" artwork="big"  width="350px" height="600px" />
            <BandcampPlayer album="704727135" size="large" style="border" artwork="big"  width="350px" height="600px" />
        </div>
    )
}

export default Player;

