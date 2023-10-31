import React,{useState,useEffect} from 'react';
import './ApiCountry.css';
import { apiURL } from '../utli/api';
import FilterCountry from '../FilterCountry/FilterCountry';
import SearchInput from '../Search/SearchInput';
import { Link } from 'react-router-dom';
const ApiCountry = () => {

    const [countries,setCountries]=useState([]);
    const [IsLoading,setIsLoading]=useState(true);
    const [error,setError]=useState('');

    const getAllCountries=async()=>{
        try{
            const response=await fetch(`${apiURL}/all`);
            if(!response.ok) throw new Error('Something Wants wrong!');
            const data =await response.json()
            console.log(data);
            setCountries(data);

            setIsLoading(false);
        }catch(error){
            setError(error.message);
            setIsLoading(false);
        }
    }

const getCountryByName=async(countryName)=>{
    
try {
    const response = await fetch(`${apiURL}/name/${countryName}`)
    if(!response) throw new Error('Not Found Any Country')

    const data =await response.json()
    setCountries(data);

    setIsLoading(false);
} catch (error) {
    setIsLoading(false);
    setError(error.message);
}
}

const getCountryByRegion=async(regionName)=>{
    
    try {
        const response = await fetch(`${apiURL}/region/${regionName}`);
        if(!response) throw new Error('Failed...........')
    
        const data =await response.json()
        setCountries(data);
    
        setIsLoading(false);
    } catch (error) {
        setIsLoading(false);
        setError(false);
    }
    }

    //UseEffect

    useEffect(()=>{
        getAllCountries();
    },[]);

  return (
    <>



        <div className="all__country__wrapper">
            <div className="country__top">
            <div className="search">
                <SearchInput onSearch={getCountryByName}/>
            </div>

            <div className="filter">
                <FilterCountry onSelect={getCountryByRegion}/>
            </div>
            </div>

            
            <div className="country__bottom">
                {IsLoading && !error && <h5>loading.......</h5>}
                {error && !IsLoading && <h5>{error}</h5>}

                {
                    countries?.map(country=>(
                     
                     <Link to={`/country/${country.name.common}`}>
                     <div className="country__card">
                            <div className="country__img">
                                <img src={country.flags.png} alt="" />
                            </div>

                            <div className="country__data">
                                <h3>{country.name.common}</h3>
                                <h6>Population:{country.population}</h6>
                                <h6>Region:{country.region}</h6>
                                <h6>Capital:{country.capital}</h6>
                                
                            </div>
                        </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    
    
    </>
  )
}

export default ApiCountry