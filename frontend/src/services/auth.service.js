import axios from 'axios';

const API_URL = 'http://localhost:4450/auth';

class AuthService {
    register(userData) {
        return axios.post(`${API_URL}/register`, {
            name: userData.name,
            email: userData.email,
            password: userData.password
        });
    }

    login(userData) {
        return axios.post(`${API_URL}/login`, {
            email: userData.email,
            password: userData.password
        });
    }

    getCurrentUser() {
        const token = localStorage.getItem('token');
        if (token) {
            return axios.get(`${API_URL}/me`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
        }
        return Promise.reject('No token found');
    }
}

export default new AuthService();