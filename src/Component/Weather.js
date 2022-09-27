import React from 'react'
import axios from 'axios'
import { useState } from 'react';
import './weather.scss';

function Weather() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=7600f0892c5307a06ad005f80e679d64`;

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        // console.log(response.data)
      })
      setLocation('')
    }
  }

  return (
    <div>
    <div className='search'>
      <input 
      value={location}
      onChange={event => setLocation(event.target.value)}
      onKeyPress={searchLocation}
      placeholder='Enter Location'
      type="text"
      />
    </div>
    <div className='container weather-section'>
        <div className='top'>
            <div className='location'>
                <div className='text'>{data.name}</div>
            </div>
            <div className='temp'>
              {data.main ? <h1 className='degree'>{data.main.temp}∘F</h1> : null}
            </div>
            <div className='description'>
              {data.weather ? <div className='text'>{data.weather[0].main}</div> : null}
            </div>
        </div>

        {data.name != undefined &&
          <div className='bottom'>
            <div className='feels'>
              { data.main ? <div className='bold'>{data.main.feels_like}∘F</div> : null}
              <div>Feels Like</div>
            </div>
            <div className='humidity'>
              {data.main ? <div className='bold'>{data.main.humidity}%</div> : null}
              <div>Humidity</div>
            </div>
            <div className='winds'>
              {data.wind ? <div className='bold'>{data.wind.speed} MPH</div> : null}
              <div>Wind Speed</div>
            </div>
          </div>
        }
        
    </div>
    </div>
  )
}

export default Weather
