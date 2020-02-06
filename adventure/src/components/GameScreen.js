import React from 'react';
import Room from './Room';

const GameScreen = (props) => {

    let allrooms;
    if (props.rooms.data !== undefined) {
        allrooms = props.rooms.data.map(item => (
            <div className="room-div">
                <Room name={item.title}/>
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