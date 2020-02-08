import React, {useState} from 'react';
import {axiosWithAuth} from './axiosWithAuth';

const Register = (props) => {
    const [credentials, setCredentials] = useState({username: '', password1: '', password2: ''});
    const changeHandler = e => {
        setCredentials({
          ...credentials, 
          [e.target.name]: e.target.value,
        });
      }

    const signupHandler = e => {
        e.preventDefault();
        //Deployed server
        console.log("props are: ", props)
        axiosWithAuth().post('https://cs25-mud.herokuapp.com/api/registration/', credentials)
        //Test server
        // axiosWithAuth().post('https://lambda-mud-test.herokuapp.com/api/registration/', credentials)
        .then(res => {
          console.log('Logged in result', res);
          props.setUserCreds(res);
          props.history.push('/login')
      })
        .catch(err => {
        console.log(err)
      })
      }

    return (
        <div>
          <h1>REGISTER</h1>
          <form className="register-form" onSubmit={signupHandler}>
              <div>
              <label>Username: 
              <input
              type="text"
              name="username"
              value={credentials.username}
              onChange={changeHandler}
              >
              </input>
              </label>
              </div>

              <div> 
              <label>Password: 
              <input
              type="password"
              name='password1'
              value={credentials.password1}
              onChange={changeHandler}>
              </input>
              </label>
              </div>
              
              <div>
              <label>Confirm Password: 
              <input
              type="password"
              name='password2'
              value={credentials.password2}
              onChange={changeHandler}>
              </input>
              </label>
              </div>

              <button type="submit">Register</button>
          </form>
        </div>
    )
}

export default Register;