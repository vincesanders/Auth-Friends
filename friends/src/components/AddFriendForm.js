import React, { useState } from 'react';
import { axiosWithAuth } from '../utils';

export default props => {
    const [friend, setFriend] = useState({
        id: 0,
        name: '',
        age: 0,
        email: ''
    });

    const handleChange = e => {
        setFriend({
            ...friend,
            [e.target.name]: e.target.value
        })
    }

    const addFriend = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('/api/friends', {id: Date.now(), ...friend})
            .then(res => {
                props.setData(res.data);
            }).catch(err => console.log(err));
    }

    return (
        <form onSubmit={addFriend} >
            <input type='text' name='name' placeholder="name" value={friend.name} onChange={handleChange} />
            <input type='number' name='age' value={friend.age} onChange={handleChange} />
            <input type='email' name='email' placeholder='email' value={friend.email} onChange={handleChange} />
            <button>Add Friend</button>
        </form>
    );
}