import React from 'react';

const WeatherExtraInfo = ({humidity,wind}) => {
    return (
        <div>
            <p>Extra info</p>
            <p>{`${humidity} % h`}</p>
            <p>{`${wind} w`}</p>
        </div>
    );
};

export default WeatherExtraInfo;