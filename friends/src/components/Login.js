import React from 'react';
import axios from 'axios';

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    // handle submit
    login = e => {
        e.preventDefault();
        axios
            .post('http://localhost:5000/api/login', this.state.credentials)
            .then(res => {
                localStorage.setItem('token', res.data.payload);
            })
            .catch(err => console.log(err.response));
    };

    render() {
        return (
            <div>
                <form onSubmit={this.login}>
                    <input
                        type='text'
                        name='username'
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                    />
                    <input
                        type='password'
                        name='password'
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    />
                    <button>Log in</button>
                </form>
            </div>
        )
    }
}

export default Login;

/*
HENRY'S

import React, {useState} from 'react';
import axios from 'axios';

const Login =({history}) => {
    const [creds, setCreds] = useState({username: '', password: ''});

    const handleChange= event => {
        setCreds({...creds, [event.target.name]: event.target.value});
    };

    const handleSubmit = event => {
        event.preventDefault();
        axios.post('http://localhost:5000/api/login', creds)
            .then(res=> {
                console.log(res);
                // save token into localStorage to persist user's login session between refreshes. can now access value of login token from anywhere
                localStorage.setItem('token', res.data.payload);
                history.push('/friends');
            })
            .catch(err=> console.log(err.response));
    };

    return (
        <form onSubmit = {handleSubmit}>
            <input type ='text'
                    name='username'
                    placeholder='username'
                    onChange={handleChange}
                    value={creds.username}/>
            <input type ='text'
                    name='password'
                    onChange={handleChange}
                    value={creds.password}/>
            <button type='submit'> Log in</button>
        </form>
    )
}

export default Login;

*/