const Persons = ({ persons, showAll, nameToSearch }) => {
    const namesToShow = showAll
        ? persons
        : persons.filter(person =>
            person.name.toLowerCase() === nameToSearch.toLowerCase());

    console.log('names to show:', namesToShow);

    return (
        <div>
            {
                namesToShow.map(name =>
                    <p key={name.name}>{name.name} {name.number}</p>)
            }
        </div>
    )
}

export default Persons