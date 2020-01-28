import React from 'react';
import { axiosWithAuth } from '../utils';

export default props => {

    const deleteFriend = () => {
        axiosWithAuth()
            .delete(`/api/friends/${props.data.id}`)
            .then(res => {
                props.setData(res.data);
            }).catch(err => console.log(err));
    }

    return (
        <div>
            <h3>{props.data.name}</h3>
            <p>Age: {props.data.age}</p>
            <p>email: {props.data.email}</p>
            <button onClick={deleteFriend}>Delete</button>
        </div>
    );
}