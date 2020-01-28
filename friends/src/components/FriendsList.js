import React, { useState } from 'react';
import FriendCard from './FriendCard';

export default () => {
    const [data, setData] = useState({});
    return (
        <div>
            {!data.isLoading && data.friendsData.map(friend => <FriendCard key={friend.id} data={friend} />)}
        </div>
    );
}