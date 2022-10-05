import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (persons.some(({name}) => name === newName)) {
      console.log('Name already exists');
      alert(`${newName} is already added to phonebook`);
    }
    else {
      console.log('tuleeko tähän?');
      const nameObject = {
        name: newName
      }
      setPersons(persons.concat(nameObject));
      setNewName('');
    }
  }

  const handleInputField = (e) => {
    console.log('input', e.target.value);
    setNewName(e.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleInputField} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>debug: {newName}</div>
    </div>
  )

}

export default App