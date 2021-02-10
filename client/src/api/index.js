import axios from 'axios'

const host = 3000 || process.env.PORT;

const api = axios.create({
    baseURL: `http://localhost:${host}/api`
})

export const pipeBis = () => api.get(`/`)

const apis = {
    pipeBis
}

export default apis