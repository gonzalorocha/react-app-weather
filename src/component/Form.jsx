import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { COUNTRIES } from './../data';

// console.log(COUNTRIES.map(data => console.log('data ',data)));

const Form = ({ search, saveSearch, setAsk }) => {
    const [error, setError] = useState(false)

    const handleChange = (e) => {
        saveSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (search.error === "" || search.country === 0 ){
            setError(true);
            return null;
        }
        setError(false);
        setAsk(true);
    }

    return (
        <form
            onSubmit={handleSubmit}
        >
            {
                error && (
                    <p className="red darken-4">Complete all the fields</p>
                )
            }
            <div className="input-field col s12">
                <input
                    type="text"
                    name="city"
                    id="city"
                    value={search.city}
                    onChange={handleChange}
                />
                <label htmlFor="city">
                    City:
                </label>
            </div>
            <div className="input-field col s12">
                <select
                    name="country"
                    id="country"
                    value={search.country}
                    onChange={handleChange}
                >
                    {
                        COUNTRIES.map((c) => <option value={c.id} key={c.id}>{c.name}</option>)
                    }
                </select>
                <label htmlFor="country">
                    Country:
                </label>
            </div>
            <div className="input-field col s12">
                <input 
                    type="submit"
                    value="Search weather..."
                    className="waves-effect waves-light btn-large btn-block blue accent-0"
                />
            </div>
        </form>
    )
}

Form.propTypes = {
    search: PropTypes.object.isRequired, 
    saveSearch: PropTypes.func.isRequired, 
    setAsk: PropTypes.func.isRequired, 
}

export default Form;