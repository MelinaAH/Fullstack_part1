const Countries = ({ countries, countryToSearch }) => {
    const results = countries.filter((country) => {
        return country.name.common.toLowerCase().includes(countryToSearch)
    })

    if (countryToSearch === '') {
        return (
            <div></div>
        )
    }
    else if (results.length > 10) {
        return (
            <div>
                <p>Too many matches, specify another filter</p>
            </div>
        )
    }
    else if (results.length < 10 && results.length > 1) {
        return (
            <div>
                {results.map((country) => (
                    <p key={country.capital}>{country.name.common}</p>
                ))}
            </div>
        )
    }
    else {
        return (
            <div>
                {results.map((country) => (
                    <div key={country.capital}>
                        <h1>{country.name.common}</h1>
                        <p>capital {country.capital}</p>
                        <p>area {country.area}</p>
                        <h3>languages:</h3>
                        <ul>
                            {Object.keys(country.languages).map(key => (
                                <li key={country.languages[key]}>{country.languages[key]}</li>
                            ))}
                        </ul>
                        <p>{country.flag}</p>
                    </div>
                ))}

            </div>
        )
    }
}

export default Countries
