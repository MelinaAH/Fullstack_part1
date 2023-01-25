import { useState } from 'react'
import Filter from "./components/Filter"
import AddPerson from "./components/AddPerson"
import Persons from "./components/Persons"

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Ada Lovelace', number: '39-44-5323523' },
        { name: 'Dan Abramov', number: '12-43-234345' },
        { name: 'Mary Poppendieck', number: '39-23-6423122' }
    ])
    const [newName, setNewName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [nameToSearch, setNameToSearch] = useState('');
    const [showAll, setShowAll] = useState(true);

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
            setPersons(persons.concat(nameObject));
            setNewName('');
            setPhoneNumber('');
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
            <AddPerson handleSubmit={handleSubmit} name={newName} phone={phoneNumber} />
            <h2>Numbers</h2>
            <Persons persons={persons} showAll={showAll} nameToSearch={nameToSearch} />
        </div>
    )
}

export default App
