import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const insertBusiness = payload => api.post(`/business`, payload)
export const getAllBusinesses = () => api.get(`/businesses`)
export const pipeBis = () => api.get(`/businesses/get`)
export const updateBusinessById = (id, payload) => api.put(`/business/${id}`, payload)
export const deleteBusinessById = id => api.delete(`/business/${id}`)
export const getBusinessById = id => api.get(`/business/${id}`)

const apis = {
    insertBusiness,
    getAllBusinesses,
    pipeBis,
    updateBusinessById,
    deleteBusinessById,
    getBusinessById,
}

export default apis