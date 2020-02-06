import React, { useState } from 'react';
import { axiosWithAuth } from './axiosWithAuth';

const Login = (props) => {
    const [credentials, setCredentials] = useState({username: '', password: ''})

    const login = e => {
        e.preventDefault();
        // Test server
        // axiosWithAuth().post('https://lambda-mud-test.herokuapp.com/api/login/', credentials)
        //Deployed server
        axiosWithAuth().post('https://cs25-mud.herokuapp.com/api/login/', credentials)
        .then(res => {
            console.log(res);
            props.setUserCreds(res);
            localStorage.setItem('token', res.data.key);
            props.history.push('/dashboard');
          })
        .catch(err => console.log(err));
      }


    const handleChange = event => {
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value
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