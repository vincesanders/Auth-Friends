import React from 'react';

export default props => {
    return (
        <div>
            <h3>{props.name}</h3>
            <p>`Age: ${props.age}`</p>
            <p>`email: ${props.email}`</p>
        </div>
    );
}