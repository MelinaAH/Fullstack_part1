import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [searchCriterion, setSearchCriterion] = useState('');
  const [showAll, setShowAll] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
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

  const handleNameFiled = (e) => {
    console.log('input name:', e.target.value);
    setNewName(e.target.value);
  }

  const handleNumberField = (e) => {
    console.log('input number:', e.target.value);
    setPhoneNumber(e.target.value);
  }

  const handleSearch = (e) => {
    console.log('name to search:', e.target.value);
    setSearchCriterion(e.target.value);
    setShowAll(false);
    if (e.target.value === '') {
      setShowAll(true);
    }
  }

  const namesToShow = showAll
    ? persons
    : persons.filter(person =>
      person.name.toLowerCase() === searchCriterion.toLowerCase());

  console.log('names to show:', namesToShow);

  return (
    <div>
      <h2>Phonebook</h2>
        <div>
          filter shown with <input value={searchCriterion} onChange={handleSearch} />
        </div>
      <h2>add a new</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleNameFiled} />
        </div>
        <div>
          number: <input value={phoneNumber} onChange={handleNumberField} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {
        namesToShow.map(name =>
          <p key={name.name}>{name.name} {name.number}</p>)
      }
    </div>
  )
}

export default App
