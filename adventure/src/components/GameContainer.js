import React, {useState, useEffect} from 'react';
import {axiosWithAuth, axiosWithAuthToken} from './axiosWithAuth';
import './styles.css';
import GameScreen from './GameScreen';


const GameContainer = (props) => {
    const [rooms, setRooms] = useState({})
    const [playerRoom, setPlayerRoom] = useState();
    // let user = JSON.parse(props.usercreds.config.data)
    let currentRoom;

    
    const addRooms = () => {
        axiosWithAuth().get('https://cs25-mud.herokuapp.com/api/adv/rooms/')
        .then(res => {
            // let myRooms = res.data.sort((a, b) => (a.id > b.id) ? 1 : -1)
            setRooms(res);
            console.log(res);
            })
        .catch(err => console.log(err));
        }

    const startGame = () => {
        axiosWithAuthToken().get('https://cs25-mud.herokuapp.com/api/adv/init')
        .then(res => {
            console.log(res)
            let roomid = res.data.roomid
            setPlayerRoom(roomid);
        })
        .catch(err => console.log(err));
    }

    const movePlayer = e => {
        currentRoom = rooms.data.filter(i => {
            return i.id === playerRoom;
        })
        let direction = JSON.stringify({'direction': e.target.value})
        console.log(direction);
        axiosWithAuthToken().post('https://cs25-mud.herokuapp.com/api/adv/move', direction)
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log(err));
        // currentRoom = rooms.data.filter(i => {
        //     return i.id === playerRoom;
        // })
    }

    useEffect(() => {
        addRooms()
    }, [])
    if (props.usercreds !== undefined) {
    }

    return (
        <div className="game-container">
            <button onClick={startGame} className="start-button">Start playing!</button>
            <div className="rooms-grid">
                <GameScreen rooms={rooms} playerRoom={playerRoom}/>
            </div>
            <div>
                <button className="direction-button" value="n" onClick={movePlayer}>N</button>
                <button className="direction-button" value="e" onClick={movePlayer}>E</button>
                <button className="direction-button" value="s" onClick={movePlayer}>S</button>
                <button className="direction-button" value="w" onClick={movePlayer}>W</button>
            </div>
        </div>
    )
}

export default GameContainer;