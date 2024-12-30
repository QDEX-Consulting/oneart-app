import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080/api', // Replace with your backend URL
});

export const fetchArtPieces = async () => {
    const response = await api.get('/artpieces');
    return response.data;
};

export default api;