import React from 'react';
import Room from './Room';
import './styles.css'

//I think I'll make an axios call here, receive the JSON object, store the response data to state (useState), then map through it & render a Room object for each.

// const addRooms = () => {

// }

const GameScreen = () => {
    return (
        <div className="rooms-grid">
            <Room name={'Hallway'}/>
            <h3>--------</h3>
            <Room name={'Foyer'}/>
            <h3>--------</h3>
            <Room name={'Kitchen'}/>
        </div>
    )
}

export default GameScreen;