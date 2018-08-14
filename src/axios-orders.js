import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-e77cf.firebaseio.com/'
});

export default instance;