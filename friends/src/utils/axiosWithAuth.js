import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');
    return axios.create({
        headers: {
            Authorization: token
        }
    });
};

/*
HENRY's:

export const axiosWithAuth = () => {
    //returns axios.create() object w/ its configuration options already set
    return axios.create({
        headers: {
            Authorization: localStorage.getItem('token')
        }
    });
};
*/