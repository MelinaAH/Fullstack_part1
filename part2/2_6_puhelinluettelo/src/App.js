import { useState, useEffect } from 'react'
import Filter from "./components/Filter"
import AddPerson from "./components/AddPerson"
import Persons from "./components/Persons"
import phonebook from './services/phonebook'
import Notification from "./components/Notification"

const App = () => {
  const [persons, setPersons] = useState([]);
  const [nameToSearch, setNameToSearch] = useState('');
  const [showAll, setShowAll] = useState(true);
  const [message, setMessage] = useState(null);
  const [succeeded, setSucceeded] = useState(true);

  useEffect(() => {
    phonebook
      .getPersons()
      .then(initialPhonebook => {
        setPersons(initialPhonebook)
      })
  }, []);

  const handleSubmit = (newName, phoneNumber) => {
    if (persons.some(({ name }) => name === newName)) {
      console.log('Name already exists');
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const personToUpdate = persons.find(person => person.name === newName);
        const updatedPerson = { ...personToUpdate, number: phoneNumber };
        phonebook
          .updateNumber(updatedPerson)
          .then(changedPerson => {
            setPersons(persons.map(person => person.id !== personToUpdate.id ? person : changedPerson))
            setMessage(`Updated ${updatedPerson.name}`);
            setTimeout(() => {
              setMessage(null)
            }, 5000);
          })
          .catch(error => {
            setSucceeded(false);
            console.log(error.response.data);
            setMessage(error.response.data.error);
            setTimeout(() => {
              setMessage(null)
              setSucceeded(true);
            }, 5000);
          })
      }
    }

    else {
      console.log('adds a new person');
      const nameObject = {
        name: newName,
        number: phoneNumber
      }

      phonebook
        .createNewPerson(nameObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson));
          setMessage(`Added ${newName}`);
          setTimeout(() => {
            setMessage(null)
          }, 5000);
        })
        .catch(error => {
          setSucceeded(false);
          console.log(error.response.data);
          setMessage(error.response.data.error);
          setTimeout(() => {
            setMessage(null)
            setSucceeded(true);
          }, 5000);
        })
    }
  }

  const deletePerson = (id, name) => {
    console.log('deletePerson function?');
    console.log(id);
    phonebook
      .deletePerson(id)
    setPersons(persons.filter(person => person.id !== id));
    setMessage(`Deleted ${name}`);
    setTimeout(() => {
      setMessage(null)
    }, 5000);
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
      <Notification message={message} succeeded={succeeded} />
      <Filter handleSearch={handleSearch} />
      <h2>Add a new</h2>
      <AddPerson handleSubmit={handleSubmit} />
      <h2>Numbers</h2>
      <Persons persons={persons} showAll={showAll} nameToSearch={nameToSearch} deletePerson={deletePerson} />
    </div>
  )
}

export default App