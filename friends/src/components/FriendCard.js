import React from 'react';

export default props => {
    return (
        <div>
            <h3>{props.data.name}</h3>
            <p>Age: {props.data.age}</p>
            <p>email: {props.data.email}</p>
        </div>
    );
}