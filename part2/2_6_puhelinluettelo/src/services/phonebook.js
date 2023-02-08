import axios from "axios";

//const baseUrl = 'http://dawn-frost-4895.fly.dev/api/persons';
//const baseUrl = 'http://localhost:3001/api/persons';
const baseUrl = '/api/persons';

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

const updateNumber = updatedPerson => {
    const url = `${baseUrl}/${updatedPerson.id}`;
    console.log(updatedPerson.id);
    const request = axios.put(url, updatedPerson);
    return request.then(response => response.data);
}

export default { getPersons, createNewPerson, deletePerson, updateNumber };