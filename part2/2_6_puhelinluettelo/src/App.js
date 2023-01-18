import { useState, useEffect } from 'react'
import Filter from "./components/Filter"
import AddPerson from "./components/AddPerson"
import Persons from "./components/Persons"
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([]);
  const [nameToSearch, setNameToSearch] = useState('');
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data);
      })
  }, [])

  const handleSubmit = (newName, phoneNumber) => {
    if (persons.some(({ name }) => name === newName)) {
      console.log('Name already exists');
      alert(`${newName} is already added to phonebook`);
    }

    else {
      console.log('tuleeko tähän?');
      const nameObject = {
        name: newName,
        number: phoneNumber
      }

      axios
      .post('http://localhost:3001/persons', nameObject)
      .then(response => {
        setPersons(persons.concat(response.data));
      })
    }
  }

  const handleSearch = (searchCriterion) => {
    console.log('search crioterion:', searchCriterion);
    setNameToSearch(searchCriterion);
    console.log('name to search:', nameToSearch);
    setShowAll(false);
    if (searchCriterion === '') {
      setShowAll(true);
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleSearch={handleSearch} />
      <h2>Add a new</h2>
      <AddPerson handleSubmit={handleSubmit} />
      <h2>Numbers</h2>
      <Persons persons={persons} showAll={showAll} nameToSearch={nameToSearch} />
    </div>
  )
}

export default App