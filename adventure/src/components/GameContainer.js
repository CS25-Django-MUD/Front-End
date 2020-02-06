import React, {useState, useEffect} from 'react';
import Room from './Room';
import axiosWithAuth from './axiosWithAuth';
import './styles.css'
import GameScreen from './GameScreen';

//I think I'll make an axios call here, receive the JSON object, store the response data to state (useState), then map through it & render a Room object for each.


const GameContainer = () => {
    const [rooms, setRooms] = useState({})

    const addRooms = () => {
        axiosWithAuth().get('https://cs25-mud.herokuapp.com/api/adv/rooms/')
        .then(res => {
            setRooms(res);
            console.log(res);
            })
        .catch(err => console.log(err));
        }

    useEffect(() => {
        addRooms()
    }, [])

    return (
        <div className="rooms-grid">
            <GameScreen rooms={rooms}/>
        </div>
    )
}

export default GameContainer;