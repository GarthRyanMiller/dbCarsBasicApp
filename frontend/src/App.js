import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect} from 'react';
import ViewAllCars from "./Components/ViewAllCars"
import CreateCar from "./Components/CreateCar"
import UpdateCarComponent from './Components/UpdateCarComponent';
import UpdateMultipleCars from './Components/UpdateMultipleCars';
const CARS_API = 'https://db-cars-basic-app.vercel.app/cars'

function App() {


  const[searchResults, setSearchResults] = useState([])
  const [selectedCar, setSelectedCar] = useState([])

  useEffect(() => {
    fetchCars();
  }, [])

  const fetchCars = async ()=>{
   let response = await fetch(CARS_API);
   let resjson = await response.json()
   setSearchResults(resjson)
    
   console.log(resjson)
  }
  return (
    <div >
    <div className="wrapper">
    </div>
    
        <div className="columns">
          <div className = "column">
          <CreateCar fetchAllCars = {fetchCars}/>
           
          </div>
          <div className="column">
            <ViewAllCars
              searchResults={searchResults}
              fetchAllCars={fetchCars}
              setSelectedCar={setSelectedCar}
            />
          </div>
          <div className="column">
            <UpdateCarComponent fetchAllCars={fetchCars} selectedCar={selectedCar}/>
          </div>
          <div className="column">
            <UpdateMultipleCars fetchAllCars={fetchCars}/>
          </div>
        </div>
      
    </div>
  );
}

export default App;
