import React from 'react';
import './styles.css'

const Room = (props) => {
    return (
        <div className="room">
            <h2>{props.name}</h2>
        </div>
    )
}

export default Room;