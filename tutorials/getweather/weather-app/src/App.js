import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form  from './components/Form';
import Weather from './components/Weather';

function App() {

 state = {
  city:Stockholm,
  country:Sweden,
  icon:'',
  tem:0,
 }



  
  getData= async (e)=>{
    e.preventDefult();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
     const response= await fetch('city,country,api key') //link

     const data = await response.json()
    this.setState({
      city:city,
      country:country,
      tem:data.main.temp

    })
  }
  return (
    <div className="App">
   <Form  getData={this.getData} />
   <Weather data={this.state} />
    </div>
  );
}

export default App;


// https://opendata-download-
// metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/16.158/lat/58.5812/data.j
// son