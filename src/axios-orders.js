import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-burger-1e085-default-rtdb.firebaseio.com/'
});

export default instance;