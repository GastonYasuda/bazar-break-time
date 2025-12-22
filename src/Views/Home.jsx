import React, { useContext, useEffect } from 'react';
import logo from '../logo.svg';
import { ApiPlayer } from '../Context/ApiContext';

const Home = () => {

    const { test } = useContext(ApiPlayer)

    useEffect(() => {
        test('chancho!! esto anda!')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    )
}

export default Home
