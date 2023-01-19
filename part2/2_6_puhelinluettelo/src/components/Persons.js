const Persons = ({ persons, showAll, nameToSearch, deletePerson }) => {
    const namesToShow = showAll
        ? persons
        : persons.filter(person =>
            person.name.toLowerCase() === nameToSearch.toLowerCase());

    console.log('names to show:', namesToShow);

    function handleDelete(name) {
        console.log(`Poistettava nimi, ${name}`);
        const nameToDelete = persons.find(person => person.name === name);
        console.log(`Poistettava nimen id, ${nameToDelete.id}`);
        if (window.confirm(`Delete ${name} ?`)) {
            deletePerson(nameToDelete.id, nameToDelete.name);
        }
    }

    return (
        <div>
            {
                namesToShow.map(name =>
                    <p key={name.name}>{name.name} {name.number} <button onClick={() => handleDelete(name.name)}>delete</button></p>)
            }
        </div>
    )
}

export default Persons