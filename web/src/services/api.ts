import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3380'
});

export default api;

