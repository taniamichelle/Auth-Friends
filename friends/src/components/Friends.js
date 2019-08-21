import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class FriendsList extends React.Component {
    state = {
        friendsList: []
    };

    componentDidMount() {
        this.getData();
    };

    getData = () => {
        axiosWithAuth()
            .get('http://localhost:5000/api/friends')
            .then(res => {
                this.setState({
                    friendsList: res.data
                });
            })
            .catch(err => console.log(err.response))
    };

    render() {
        return (
            <div>
                {this.state.friendsList.length > 0 ? this.state.friendsList.map(friend => {
                    return (
                        <p>{friend.name}</p>
                        <p>{friend.age}</p>
                        <p>{friend.email}</p>
                    ) : 'None'
                })}
            </div>
        );
    };
};




// class AddFriend extends React.Component {
//     state = {
//         newFriend: {
//             name: '',
//             age: '',
//             email: ''
//         }
//     }

//     handleChange = e => {
//         this.setState({
//             newFriend: {
//                 ...this.state.newFriend,
//                 [e.target.name]: e.target.value
//             }
//         })
//     }

//     handleSubmit = e => {
//         e.preventDefault();
//         console.log(this.state.newFriend);
//         axiosWithAuth()
//             .post('http://localhost:5000/api/friends', this.state.newFriend)
//             .then(res => { })
//     }
// }
