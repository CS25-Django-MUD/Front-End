import React from 'react';
import Room from './Room';

const GameScreen = (props) => {

    let allrooms;
    if (props.rooms.data !== undefined) {
        allrooms = props.rooms.data.map((room, i) => (
            <div className="room-div">
                <Room key={i} name={room.title} id={room.id} playerRoom={props.playerRoom}/>
                <h3>-----</h3>
            </div>
        ))
    }

    return (
        <>
        {allrooms}
        </>
    )
}

export default GameScreen;