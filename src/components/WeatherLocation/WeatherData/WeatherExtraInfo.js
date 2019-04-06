import React from 'react';

const WeatherExtraInfo = ({ humidity, wind }) => (
    <div className="weatherExtraInfoCont">
        <span className="extraInfoText">{`Humedad: ${humidity} % `}</span>
        <span className="extraInfoText">{`Viento: ${wind}`}</span>
    </div>
);
export default WeatherExtraInfo;
