import React, {useState, useEffect} from 'react';
import axiosWithAuth from './axiosWithAuth';
import './styles.css';
import GameScreen from './GameScreen';


const GameContainer = (props) => {
    const [rooms, setRooms] = useState({})
    // let user = JSON.parse(props.usercreds.config.data)

    const addRooms = () => {
        axiosWithAuth().get('https://cs25-mud.herokuapp.com/api/adv/rooms/')
        .then(res => {
            setRooms(res);
            console.log(res);
            })
        .catch(err => console.log(err));
        }

    const startGame = () => {
        axiosWithAuth().get('https://cs25-mud.herokuapp.com/api/adv/init')
        .then(res => {
            console.log(res)
        })
        // .then(() => {
        //     axiosWithAuth().get('https://cs25-mud.herokuapp.com/api/adv/move')
        // })
        .catch(err => console.log(err));
    }

    useEffect(() => {
        addRooms()
    }, [])
    if (props.usercreds !== undefined) {
        // console.log("Usercreds are ", user, user.username);
    }
    return (
        <div className="game-container">
            <button onClick={startGame} className="start-button">Start playing!</button>
            <div className="rooms-grid">
                <GameScreen rooms={rooms}/>
            </div>
        </div>
    )
}

export default GameContainer;