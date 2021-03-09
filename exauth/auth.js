import axios from 'axios'
let baseURL

process.env.NODE_ENV === 'production' ? 

    (baseURL = 'here should be your production endpoint') :
    (baseURL = 'http://localhost:3001/');

const service = axios.create({ withCredentials: true, baseURL });

const AUTH_SERVICE = {
    SIGNUP: async(data) => {
        return await service.post('/signin', data)
    },
    LOGIN: async(data) => {
        return await service.post('/login', data)
    },
    LOGGED: async() => {
        return await service.get('/logged')
    },
    LOGOUT: async() => {
        return await service.get('/logout')
    }
}

export default AUTH_SERVICE