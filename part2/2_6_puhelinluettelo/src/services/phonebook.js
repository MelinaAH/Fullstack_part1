import axios from "axios";

const baseUrl = 'http://localhost:3001/persons';

const getPersons = () => {
    const request = axios.get(baseUrl);
    return request.then(response => response.data);
}

const createNewPerson = newPerson => {
    const request = axios.post(baseUrl, newPerson);
    return request.then(response => response.data);
}

const deletePerson = id => {
    return axios.delete(`${baseUrl}/${id}`);
} 

export default { getPersons, createNewPerson, deletePerson };