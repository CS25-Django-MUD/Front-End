import React, {useState, useEffect} from 'react';
import Room from './Room';
import axiosWithAuth from './axiosWithAuth';
import './styles.css'

//I think I'll make an axios call here, receive the JSON object, store the response data to state (useState), then map through it & render a Room object for each.


const GameScreen = () => {
    const [rooms, setRooms] = useState({})

    const addRooms = () => {
        axiosWithAuth().get('https://cs25-mud.herokuapp.com/api/adv/rooms/')
        .then(res => {
            console.log(res);
            setRooms(res);
            })
        .catch(err => console.log(err));
        }
    
    useEffect(() => {
        addRooms()
    }, [])

    let allrooms;
    if (Object.keys(rooms).length !== 0) {
        allrooms = rooms.map(item => (
            <div>
                <Room name={item.title}/>
                <h3>--------</h3>
            </div>
        ))
    } else {
        return null;
    }

    return (
        <div className="rooms-grid">
            {allrooms}

            {/* <Room name={'Foyer'}/>
            <h3>--------</h3>
            <Room name={'Kitchen'}/> */}
        </div>
    )
}

export default GameScreen;