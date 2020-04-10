import axios from 'axios'

const baseUrl = '/api/persons/'
const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = (newPerson) => {
    const request = axios.post(baseUrl,newPerson)
    return request.then(response => response.data)
}

const deletePerson = (id) => axios.delete(`${baseUrl}${id}`)

const update = (newPerson) => {
    const request = axios.put(`${baseUrl}${newPerson.id}`, newPerson)
    return request.then(response => response.data)
}

export default {
    getAll,
    create,
    deletePerson,
    update
}