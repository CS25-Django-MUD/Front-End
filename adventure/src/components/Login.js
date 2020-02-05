import React, { useState } from 'react';
import { axiosWithAuth } from './axiosAuth';

const Login = (props) => {
    const [credentials, setCredentials] = useState({})

    const login = e => {
        e.preventDefault();
        axiosWithAuth.post('https://lambda-mud-test.herokuapp.com/api/login/', credentials)
        .then(res => {
            console.log(res);
            localStorage.setItem('token', res.data.token);
            props.history.push('/gamescreen');
          })
        .catch(err => console.log(err));
      }



    const handleChange = event => {
        console.log(event.target.value);
        setCredentials({
            credentials: {
                ...credentials,
                [event.target.name]: event.target.value,
            }
            })
    };

    return (
        <div>
        <form onSubmit={login}>
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
          <button>Log in</button>
        </form>
      </div>
    )
}

export default Login;