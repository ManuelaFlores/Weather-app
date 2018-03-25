import React from 'react';
import Location from './location/Location';
import WeatherData from './weatherData/WeatherData';

const WeatherLocation = () => {
    return (
        <div>
            <Location city='Lima'/>
            <WeatherData/>    
        </div>
    );
};

export default WeatherLocation;