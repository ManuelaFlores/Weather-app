import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature'

const WeatherData = () => {
    return (
        <div>
            <WeatherExtraInfo humidity={12} wind={'2 m/s'}/>
            <WeatherTemperature/>
        </div>
    );
};

export default WeatherData;