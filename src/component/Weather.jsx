import React from 'react';
import PropTypes from 'prop-types';

const Weather = ({ result }) => {
    const { name, main } = result;

    if (!name) return null;

    return (
        <div className="card-panel white s12">
            <div className="black-text">
                <h2>
                    The {name} weather is: 
                </h2>
                <p className="tempeture">
                    {parseFloat(main.temp - 273, 10).toFixed(2)} <span> &#x2103;</span>
                </p>
                <p>
                    Max: 
                    {parseFloat(main.temp_max - 273, 10).toFixed(2)} <span> &#x2103;</span>
                </p>
                <p>
                    Min: 
                    {parseFloat(main.temp_min - 273, 10).toFixed(2)} <span> &#x2103;</span>
                </p>
            </div>

        </div>
    )
}

Weather.propTypes = {
    result: PropTypes.object.isRequired
}

export default Weather;