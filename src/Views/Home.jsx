import React from 'react';
import logo from '../logo.svg';
// import { ApiPlayer } from '../Context/ApiContext';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Home = () => {

    // const {  } = useContext(ApiPlayer)



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

                {/* {
                    puntoPlayers.length !== 0 &&

                    <ComponentTest byStoreArray={puntoPlayers} />

                } */}

                <Link to={"/punto"}>
                    <Button variant="primary">Punto</Button>
                </Link >

                <Link to={"/ciudad"}>
                    <Button variant="primary">Ciudad</Button>
                </Link >

                <Link to={"/espacio"}>
                    <Button variant="primary">Espacio</Button>
                </Link >



            </header>
        </div>
    )
}

export default Home
