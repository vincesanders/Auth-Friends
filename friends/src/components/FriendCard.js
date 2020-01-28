import React, { useState } from 'react';
import { axiosWithAuth } from '../utils';

export default props => {
    const [friend, setFriend] = useState({});
    const [edittingName, setEdittingName] = useState(false);
    const [edittingAge, setEdittingAge] = useState(false);
    const [edittingEmail, setEdittingEmail] = useState(false);

    const deleteFriend = () => {
        axiosWithAuth()
            .delete(`/api/friends/${props.data.id}`)
            .then(res => {
                props.setData(res.data);
            }).catch(err => console.log(err));
    }

    const changeFriend = () => {
        //Make put request
        axiosWithAuth()
            .put(`/api/friends/${props.data.id}`, friend)
            .then(res => {
                props.setData(res.data);
            }).catch(err => console.log(err));
    }

    const handleChange = e => {
        setFriend({
            [e.target.name]: e.target.value
        })
    }

    const displayName = () => {
        if (!edittingName) {
            return (
                <h3>
                    {props.data.name}
                    <button onClick={() => setEdittingName(true)}>edit</button>
                </h3>
            );
        } else {
            return (
                <div>
                    <input type='text' name='name' value={friend.name || ''} onChange={handleChange} />
                    <button onClick={changeName}>Change</button>
                </div>
            );
        }
    }

    const changeName = () => {
        setEdittingName(false);
        //if friend = '' don't do anything
        if (friend.name === '') {

        } else {
            changeFriend();
            //reset friend
            setFriend({});
        }
    }

    return (
        <div>
            {displayName()}
            <p>
                Age: {props.data.age}
                <button>edit</button>
            </p>
            <p>
                email: {props.data.email}
                <button>edit</button>
            </p>
            <button onClick={deleteFriend}>Delete</button>
        </div>
    );
}