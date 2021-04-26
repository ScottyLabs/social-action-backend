import axios from 'axios'

const host = process.env.PORT || 3000 ;

const api = axios.create({
    baseURL: `http://localhost:${host}/api`
})

export const pipeBis = () => api.get(`/`)
export const pipeAllBis = () => api.get('/businesses')

const apis = {
    pipeBis,
    pipeAllBis
}

export default apis