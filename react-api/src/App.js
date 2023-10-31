import React from 'react';
import './ApiCountries/ApiCountry.css';
import Country from './CountriesApi/Country';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ApiCountry from './ApiCountries/ApiCountry';
import Countriesinfo from './ApiCountries/Countriesinfo';
function App() {
  return (
    <div className="App">
      
      {/* <Country/> */}
      
      <div className='header'>
    <div className="container heading">
    
    <h5 className='mt-3 text-center justify-content-center fw-bold fs-4 text-uppercase'>Where In the world</h5>
    </div>
    </div>

    <div className="container">
      <Router>
<Routes>
  <Route path='/' element={<ApiCountry/>}></Route>
  <Route path='/country/:countryName' element={<Countriesinfo/>}></Route>

</Routes>
</Router>
    </div>
    

     </div>
  );
}

export default App;
