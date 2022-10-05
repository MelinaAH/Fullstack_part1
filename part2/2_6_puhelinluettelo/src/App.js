import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (persons.some(({name}) => name === newName)) {
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

  return (
    <div>
      <h2>Phonebook</h2>
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
      {persons.map(person => 
        <p key={person.name}>{person.name} {person.number}</p>
      )}
    </div>
  )

}

export default App
