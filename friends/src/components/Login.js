import React, { useState } from 'react';
import axios from 'axios';

export default () => {
    const [creds, setCreds] = useState({
        username: '',
        password: ''
    });

    const login = e => {
        e.preventDefault();
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