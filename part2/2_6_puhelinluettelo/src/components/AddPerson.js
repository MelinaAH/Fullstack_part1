import { useState } from "react";

const AddPerson = ({ handleSubmit, name, phone }) => {
    const [newName, setNewName] = useState(name);
    const [phoneNumber, setPhoneNumber] = useState(phone);

    const handleNameField = (e) => {
        setNewName(e.target.value);
    }

    const handleNumberField = (e) => {
        setPhoneNumber(e.target.value);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleSubmit(newName, phoneNumber);
        setNewName('');
        setPhoneNumber('');
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <div>
                name: <input value={newName} onChange={handleNameField} />
            </div>
            <div>
                number: <input value={phoneNumber} onChange={handleNumberField} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default AddPerson