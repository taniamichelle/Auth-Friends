import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import FriendForm from './FriendForm';
import { Route } from 'react-router-dom';

const Friends = (props) => {
    const [friendsList, setFriendsList] = useState([]);

    const getFriends = () => {
        axiosWithAuth().get('http://localhost:5000/api/friends')
            .then(res => {
                setFriendsList(res.data);
            })
            .catch(err => console.log(err.response));
    };

    useEffect(() => {
        getFriends();
    }, []);

    const addFriend = friend => {
        axiosWithAuth().post('http://localhost:5000/api/friends', friend)
            .then(res => setFriendsList(res.data))
            .catch(err => console.log(err.response))
    };

    const editFriend = friend => {
        axiosWithAuth().put(`http://localhost:5000/api/friends/${friend.id}`, friend)
            .then(res => {
                setFriendsList(res.data);
                props.history.push('/friends');
            })
            .catch(err => console.log(err.response))
    };

    const deleteFriend = id => {
        axiosWithAuth().delete(`http://localhost:5000/api/friends/${id}`)
            .then(res => setFriendsList(res.data))
            .catch(err => console.log(err.response));
    };

    return (
        <div>
            <h2>Friends</h2>
            <Route exact path='/friends' render={props => <FriendForm {...props} submitFriend={addFriend} />} />
            {friendsList.map(friend => {
                return <FriendCard key={friend.id}
                    friend={friend}
                    deleteFriend={deleteFriend} />;
            })}
            <Route path='/friends/edit/:id' render={props => {
                console.log(props);
                const currentFriend = friendsList.find(friend => friend.id === props.match.params.id);
                return <FriendForm {...props} submitFriend={editFriend} initialValues={currentFriend} />;
            }} />
        </div>
    );
};

export default Friends;
