import { useState, React } from 'react';

const Countries = ({ countries, countryToSearch }) => {
    const [countryName, setCountryName] = useState('');

    const results = countries.filter((country) => {
        if (countryName !== '') {
            console.log(countryName);
            return country.name.common.toLowerCase().includes(countryName)
        }
        else {
            return country.name.common.toLowerCase().includes(countryToSearch)
        }
    });

    console.log('show results', results);

    function handleClick(name) {
        setCountryName(name.toLowerCase());
        console.log(name);
    }

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
                    <div key={country.capital}>
                        {country.name.common} <button type='submit' onClick={() => handleClick(country.name.common)}>show</button>
                    </div>
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
