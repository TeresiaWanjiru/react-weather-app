import React from "react";
import { useState } from "react";
import axios from "axios";

function App() {
  const [data,setData] = useState({})
  const [location,setLocation] = useState("")
  const [limit,setLimit] = useState(1)


  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=64a3ec84c27f9194fef04522996c0de9`

  const searchLocation = (event) =>{
    if(event.key == "Enter"){
      axios.get(url).then((response)=>{
        setData(response.data)
        console.log(response);
      })
      setLocation("");
    }
  }

  return (
    <div className="app">
      <div className="search">
        <input 
        value={location}
        onChange={ event => setLocation(event.target.value)}
        placeholder="Enter location"
        onKeyDown={searchLocation}
        type="text"
         />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
            </div>
          <div className="temp">
            {data.main ? <h1 className="bold">{data.main.temp.toFixed()}°C</h1> : null}
          </div>
          <div className="desc">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>
    {data.name != undefined && 
            <div className="bottom">
            <div className="feels">
              {data.main ? <p className="bold">{data.main.temp.toFixed()}°C</p> : null}
              <p>Feels like</p>
            </div>
            <div className="humidity">
             {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? <p className="bold">{data.wind.speed} MPH</p> : null}
              <p>Wind Speed</p>
            </div>
          </div>
    }

      </div>
    </div>
  );
}

export default App;
