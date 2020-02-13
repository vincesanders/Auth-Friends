import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

export default () => {
    const history = useHistory();
    const [creds, setCreds] = useState({
        username: '',
        password: ''
    });

    //TODO: redux state?
    //          --error: for error text
    //          --isLoading: for loader

    const login = e => {
        e.preventDefault();
        axios
            .post('http://localhost:5000/api/login', creds)
            .then(res => {
                localStorage.setItem('token', res.data.payload);
                history.push('/protected');
            })
            .catch(err => console.log(err));
    }

    const handleChange = e => {
        setCreds({
            ...creds,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <form onSubmit={login} >
                <input type='text' name='username' value={creds.username} onChange={handleChange} />
                <input type='password' name='password' value={creds.password} onChange={handleChange} />
                <button>Log in</button>
            </form>
        </div>
    );
}