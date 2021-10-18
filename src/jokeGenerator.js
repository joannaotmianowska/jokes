import React, { useState } from 'react';
import * as axios from 'axios';
import Joke from './joke';

const JokeGenerator = () => {
    const [joke, setJoke] = useState(null);
    const [loading, setLoading] = useState(false);

    const loadJoke = async () => {
        setLoading(true);

        const {
            data:
                { value:
                    { joke }
                }
        } = await axios.get('https://api.icndb.com/jokes/random');

        setJoke(joke);
        setLoading(false);
    };

    return (
        <React.Fragment>
            {!joke && !loading && <div>No joke</div>}
            <button onClick={loadJoke} data-testid='get-joke-btn'>Get a joke</button>
            {loading && <div>Loading...</div>}
            {joke && <Joke text={joke} />}
        </React.Fragment>
    )
}

export default JokeGenerator;
