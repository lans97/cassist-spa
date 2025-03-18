import axios from 'axios'
import { auth } from '../utils/firebase'

const api = axios.create({
    baseURL: '/api',
    headers: { 'Content-Type': 'application/json' },
})

api.interceptors.request.use(
    async (config) => {
        const user = auth.currentUser
        if (user) {
            const token = await user.getIdToken();
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        }
        return config;
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default api
