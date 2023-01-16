import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import Countries from './components/Countries';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [countryToSearch, setCountryToSearch] = useState('');

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data);
      })
  }, []);

  console.log('yhteensä', { countries }, 'maata');

  const handleInput = (e) => {
    console.log(e.target.value);
    setCountryToSearch(e.target.value.toLowerCase());
  }

  return (
    <div>
      find countries <input value={countryToSearch} onChange={handleInput} />
      <Countries countries={countries} countryToSearch={countryToSearch} />
    </div>
  );
}

export default App
