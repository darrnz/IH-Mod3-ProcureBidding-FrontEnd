import axios from 'axios'

const clienteAxios = axios.create({
    baseURL: 'http://localhost:3002/'//process.env.REACT_APP_BACKEND_URL
})

export default clienteAxios