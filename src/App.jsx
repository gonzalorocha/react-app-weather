import React, { Fragment, useEffect, useState } from 'react';
import Header from './component/Header';
import Form from './component/Form';
import Weather from './component/Weather';
import Error from './component/Error';

const appKey = "ec833195befdf8aaa9fa327b8d632b8c";

const App = () => {
    const [ search, saveSearch ] = useState({
        city: "",
        country: 0
    });
    const [ ask, setAsk ] = useState(false);
    const [ result, saveResult ] = useState({});
    const [ error, saveError ] = useState(false);
    const { city, country } = search;

    useEffect(() => {
        askAPI();
    }, [ask]);

    const askAPI = async () => {
        saveError(false);
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appKey}`;
        const res = await fetch(url);
        if (res.status === 200){
            const result = await res.json();
            saveResult(result);
        } else if (res.status === 404 && city !== "") {
            saveError(true)
        }
        setAsk(false);
    }    

    let Component;

    if(error) {
        Component = <Error message="The city not exist"/> 
    } else {
        Component = <Weather 
                        result={result}
                    />
    }

    return (
        <Fragment>
            <Header
                title="Weather"
            />
            <div className="container-form">
                <div className="container">
                    <div className="row">
                        <div className="col m6 s12">
                            <Form
                                search={search}
                                saveSearch={saveSearch}
                                setAsk={setAsk}
                            />
                        </div>
                        <div className="col m6 s12">
                            {Component}
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    );
}

export default App;
