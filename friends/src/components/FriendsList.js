import React, { useState, useEffect } from 'react';
import FriendCard from './FriendCard';
import { axiosWithAuth } from '../utils';

export default () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        setIsLoading(true);
        axiosWithAuth()
            .get('api/friends')
            .then(res => {
                setIsLoading(false);
                console.log(res);
                setData(res.data);
            }).catch(err => console.log(err));
    }

    return (
        <div>
            {!isLoading && data.map(friend => <FriendCard key={friend.id} data={friend} />)}
        </div>
    );
}