import React from 'react';
import countriesData from './CountryData.jsx';
import './Country.css';

const CountryList = () => {
  return (
    <>
      <h1>Asian Countries</h1>
      <ul>
        <div className='grid'>
        {countriesData.map((country, index) => (
          <li key={index}>
            <div className='card'>
            <h2>{country.name}</h2>
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population}</p>
            <p>Area: {country.area}</p>
            <p>Currency: {country.currency}</p>
            <p>Languages: {country.languages.join(', ')}</p>
            <p>Region: {country.region}</p>
            </div>
          </li>
        ))}
        </div>
      </ul>
    </>
  );
};

export default CountryList;
