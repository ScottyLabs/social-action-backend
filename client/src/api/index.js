import axios from 'axios'

require('dotenv').config()

const host = process.env.PORT || 3000;

require('dotenv').config();

const api = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL + `/api`
})

export const pipeBis = () => api.get(`/`)
export const pipeAllBis = () => api.get('/businesses')

const apis = {
    pipeBis,
    pipeAllBis
}

export default apis