import React from 'react';
import './styles.css'

const Room = (props) => {
    // console.log(props)
    return (
        <div className={(props.playerRoom === props.id) ? "starter-room" : "room"}>
            <h2>{props.name}</h2>
        </div>
    )
}

export default Room;