import { useState, useEffect } from 'react'
import Filter from "./components/Filter"
import AddPerson from "./components/AddPerson"
import Persons from "./components/Persons"
import phonebook from './services/phonebook'

const App = () => {
  const [persons, setPersons] = useState([]);
  const [nameToSearch, setNameToSearch] = useState('');
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    phonebook
      .getPersons()
      .then(initialPhonebook => {
        setPersons(initialPhonebook)
      })
  }, [])

  const handleSubmit = (newName, phoneNumber) => {
    if (persons.some(({ name }) => name === newName)) {
      console.log('Name already exists');
      // alert(`${newName} is already added to phonebook`);
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const personToUpdate = persons.find(person => person.name === newName);
        const updatedPerson = { ...personToUpdate, number: phoneNumber };
        phonebook
          .updateNumber(updatedPerson)
          .then(changedPerson => {
            setPersons(persons.map(person => person.id !== personToUpdate.id ? person : changedPerson))
          })
      }
    }

    else {
      console.log('tuleeko tähän?');
      const nameObject = {
        name: newName,
        number: phoneNumber
      }

      phonebook
        .createNewPerson(nameObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson));
        })
    }
  }

  const deletePerson = (id) => {
    console.log('Tuleeko deletePerson funktioon?');
    console.log(id);
    phonebook
      .deletePerson(id)
    setPersons(persons.filter(person => person.id !== id));
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
      <Persons persons={persons} showAll={showAll} nameToSearch={nameToSearch} deletePerson={deletePerson} />
    </div>
  )
}

export default App